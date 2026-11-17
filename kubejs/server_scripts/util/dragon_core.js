// priority: 3000
// 龙裔器官公共底层：术语状态层 / 真实伤害 / 连锁闪电 / 护盾 / 暴击读取
// 所有器官脚本共用这层，禁止各器官自己散写 persistentData 键名。

// ─────────────────────────────────────────────
// 一、术语状态层
// 存储在目标的 persistentData 里，键统一前缀 dragon_mark_
// 每条状态 = { 层数, 到期游戏时间 }
// ─────────────────────────────────────────────

const DragonMarkKeyPrefix = 'dragon_mark_'
const DragonMarkStacksSuffix = '_stacks'
const DragonMarkExpireSuffix = '_expire'

/**
 * 打上一层状态；已有则叠层并刷新到期时间。
 * @param {Internal.Entity} target 被施加状态的目标
 * @param {string} mark 状态名，如 'ignite' / 'frostmark' / 'paralyze'
 * @param {number} stacks 本次叠加层数
 * @param {number} durationTicks 持续 tick
 * @param {number} maxStacks 层数上限，传 0 表示不设上限
 */
function DragonAddMark(target, mark, stacks, durationTicks, maxStacks) {
    if (!target || target.level.isClientSide()) return
    const key = DragonMarkKeyPrefix + mark
    const tag = target.persistentData
    let now = tag.getInt(key + DragonMarkStacksSuffix)
    now = now + stacks
    if (maxStacks && maxStacks > 0 && now > maxStacks) now = maxStacks
    tag.putInt(key + DragonMarkStacksSuffix, now)
    tag.putInt(key + DragonMarkExpireSuffix, target.level.gameTime + durationTicks)
}

/**
 * 读当前层数；已过期返回 0 并顺手清掉。
 * @param {Internal.Entity} target
 * @param {string} mark
 * @returns {number}
 */
function DragonGetMark(target, mark) {
    if (!target) return 0
    const key = DragonMarkKeyPrefix + mark
    const tag = target.persistentData
    const expire = tag.getInt(key + DragonMarkExpireSuffix)
    if (expire <= 0 || expire < target.level.gameTime) {
        if (tag.getInt(key + DragonMarkStacksSuffix) != 0) {
            tag.putInt(key + DragonMarkStacksSuffix, 0)
            tag.putInt(key + DragonMarkExpireSuffix, 0)
        }
        return 0
    }
    return tag.getInt(key + DragonMarkStacksSuffix)
}

/**
 * 扣层（消耗类效果用），不足则不动并返回 false。
 * @param {Internal.Entity} target
 * @param {string} mark
 * @param {number} stacks
 * @returns {boolean}
 */
function DragonConsumeMark(target, mark, stacks) {
    if (DragonGetMark(target, mark) < stacks) return false
    DragonAddMark(target, mark, -stacks, 1, 0)
    return true
}

/**
 * 清掉某个状态。
 * @param {Internal.Entity} target
 * @param {string} mark
 */
function DragonClearMark(target, mark) {
    if (!target) return
    const key = DragonMarkKeyPrefix + mark
    target.persistentData.putInt(key + DragonMarkStacksSuffix, 0)
    target.persistentData.putInt(key + DragonMarkExpireSuffix, 0)
}

// 所有会被外层 tick 统一清理的状态名，新增术语时往这里加
const DragonMarkList = ['ignite', 'scorch', 'frostmark', 'shred', 'erode', 'paralyze', 'mark', 'windfury']

/**
 * 统一 tick：过期状态清 0。装备类器官用 entity_tick 每 20 tick 调一次。
 * @param {Internal.LivingEntity} entity
 */
function DragonTickMarks(entity) {
    if (!entity || entity.level.isClientSide()) return
    DragonMarkList.forEach(mark => {
        DragonGetMark(entity, mark)
    })
}

// ─────────────────────────────────────────────
// 二、真实伤害
// bypasses_armor 且不属于物理/法术，正是本体的「真实伤害」口径
// ─────────────────────────────────────────────

/**
 * 造成真实伤害（绕过护甲、绕过无敌帧）。
 * @param {Internal.LivingEntity} target
 * @param {number} amount
 * @param {Internal.Entity} source 伤害来源，可空
 */
function DragonTrueDamage(target, amount, source) {
    if (!target || amount <= 0) return
    if (target.isDeadOrDying()) return
    const level = target.level
    const src = level.damageSources().magic()
    target.invulnerableTime = 0
    target.hurt(src, amount)
    if (source && source.isPlayer()) {
        // 供吸血脉类器官读取
        target.persistentData.putInt('dragon_last_true_damage', Math.floor(amount))
        target.persistentData.putString('dragon_last_true_source', source.uuid.toString())
    }
}

/**
 * 在原有伤害上追加真实伤害（entity_do_damage 里用）。
 * @param {Internal.LivingEntity} target
 * @param {number} amount
 */
function DragonAddTrueDamage(target, amount) {
    DragonTrueDamage(target, amount, null)
}

// ─────────────────────────────────────────────
// 三、连锁 / 弹射
// ─────────────────────────────────────────────

/**
 * 从起点找最近的可攻击敌人（排除自己与已命中目标）。
 * @param {Internal.Level} level
 * @param {Internal.Entity} from
 * @param {Internal.Entity} caster
 * @param {Internal.List} exclude
 * @param {number} range
 * @returns {Internal.LivingEntity|null}
 */
function DragonFindChainTarget(level, from, caster, exclude, range) {
    const aabb = AABB.ofSize(from.position(), range * 2, range * 2, range * 2)
    const list = level.getEntitiesWithin(aabb)
    let best = null
    let bestDist = 9999
    list.forEach(e => {
        if (!e.isLiving()) return
        if (e.uuid == caster.uuid) return
        if (exclude.contains(e.uuid)) return
        const d = e.distanceToSqr(from)
        if (d < bestDist) {
            bestDist = d
            best = e
        }
    })
    return best
}

/**
 * 连锁伤害：向周围敌人弹跳，每次衰减。
 * @param {Internal.LivingEntity} first 第一个目标（本次命中的目标）
 * @param {Internal.Entity} caster 施法者
 * @param {number} amount 首次伤害
 * @param {number} hops 弹跳次数
 * @param {number} decay 每次衰减比例，0.5 = 每次减半
 */
function DragonChainDamage(first, caster, amount, hops, decay) {
    if (!first || !caster) return
    const level = first.level
    const hit = [first.uuid]
    let current = first
    let dmg = amount
    for (let i = 0; i < hops; i++) {
        const next = DragonFindChainTarget(level, current, caster, hit, 6)
        if (!next) break
        dmg = dmg * decay
        if (dmg < 1) break
        next.level.spawnParticles('minecraft:electric_spark', true, next.x, next.getY(0.5), next.z, 8, 0.3, 0.3, 0.3, 0.05)
        DragonTrueDamage(next, dmg, caster)
        hit.add(next.uuid)
        current = next
    }
}

// ─────────────────────────────────────────────
// 四、护盾（吸收，不改最大生命）
// ─────────────────────────────────────────────

/**
 * 给玩家套吸收护盾。原版吸收是固定 4 点/级，这里按等级换算并封顶。
 * @param {Internal.LivingEntity} entity
 * @param {number} amount 需要的护盾点数
 * @param {number} seconds 持续秒数
 */
function DragonShield(entity, amount, seconds) {
    if (!entity || amount <= 0) return
    // 吸收效果 1 级 = 4 点；等级上限 25 级 = 100 点
    let level = Math.floor(amount / 4)
    if (level < 0) level = 0
    if (level > 24) level = 24
    entity.potionEffects.add('minecraft:absorption', 20 * seconds, level)
}

// ─────────────────────────────────────────────
// 五、暴击（复用本体分数，别自己算）
// ─────────────────────────────────────────────

/**
 * 读本体暴击率 / 暴击伤害加成（都是分数，0 起算）。
 * @param {Internal.ChestCavityInstance} chestCavity
 * @returns {{chance:number, damage:number}}
 */
function DragonCritPanel(chestCavity) {
    if (!chestCavity) return { chance: 0, damage: 0 }
    return {
        chance: chestCavity.getOrganScore('kubejs:crit_chance') || 0,
        damage: chestCavity.getOrganScore('kubejs:crit_damage') || 0
    }
}

/**
 * 取本器官所属胸腔（器官策略函数里直接有 customData，这里只做兜底）。
 * @param {Internal.Entity} entity
 * @returns {Internal.ChestCavityInstance|null}
 */
function DragonChestOf(entity) {
    if (!entity) return null
    return entity.chestCavityInstance || null
}
