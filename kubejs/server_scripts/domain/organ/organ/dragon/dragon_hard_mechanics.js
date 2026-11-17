// priority: 3000
// 龙裔器官的「引擎受限机制」实现层：石化 / 麻痹 / 空中冲刺 / 魅惑牵引 / 窃取器官
// 依赖 util/dragon_core.js 的状态层与真实伤害

// ─────────────────────────────────────────────
// 石化：原版无对应效果，用「定身 + 抗性 + 粒子」模拟
// ─────────────────────────────────────────────

const DragonPetrifyKey = 'dragon_petrify_until'

/**
 * 石化一个目标。对首领与玩家无效（玩家定身体验太差，职业怪会卡死 AI）。
 * @param {Internal.LivingEntity} target
 * @param {number} seconds
 * @returns {boolean} 是否成功施加
 */
function DragonPetrify(target, seconds) {
    if (!target || target.level.isClientSide()) return false
    if (target.isPlayer()) return false
    if (target.type.toString().includes('boss') || target.maxHealth >= 200) return false

    const until = target.level.gameTime + 20 * seconds
    target.persistentData.putInt(DragonPetrifyKey, until)
    target.setNoAi(true)
    target.setDeltaMovement(0, 0, 0)
    target.level.spawnParticles('minecraft:block stone', true, target.x, target.getY(0.5), target.z, 12, 0.4, 0.6, 0.4, 0.02)
    return true
}

/**
 * 每 10 tick 调一次，维持石化状态并在到期时恢复 AI。
 * @param {Internal.LivingEntity} target
 */
function DragonTickPetrify(target) {
    if (!target || !target.persistentData.contains(DragonPetrifyKey)) return
    const until = target.persistentData.getInt(DragonPetrifyKey)
    if (until > target.level.gameTime) {
        target.setNoAi(true)
        target.setDeltaMovement(0, 0, 0)
    } else {
        target.persistentData.remove(DragonPetrifyKey)
        target.setNoAi(false)
    }
}

// ─────────────────────────────────────────────
// 麻痹：本体没有「禁止攻击」的 API，用三层减益逼近
// 缓慢 V + 虚弱 IV + 挖掘疲劳 III，并冻结跳跃/冲刺
// ─────────────────────────────────────────────

/**
 * @param {Internal.LivingEntity} target
 * @param {number} seconds
 */
function DragonParalyze(target, seconds) {
    if (!target) return
    const t = 20 * seconds
    target.potionEffects.add('minecraft:slowness', t, 4)      // 缓慢 V
    target.potionEffects.add('minecraft:weakness', t, 3)      // 虚弱 IV
    target.potionEffects.add('minecraft:mining_fatigue', t, 2)
    target.setDeltaMovement(0, target.deltaMovement.y, 0)
    DragonAddMark(target, 'paralyze', 1, t, 0)
    target.level.spawnParticles('minecraft:electric_spark', true, target.x, target.getY(0.6), target.z, 10, 0.3, 0.5, 0.3, 0.05)
}

// ─────────────────────────────────────────────
// 空中冲刺：KubeJS 拿不到「双击方向键」，改为 key_active 触发
// ─────────────────────────────────────────────

/**
 * 朝视线方向冲刺一段距离，仅在空中可用。
 * @param {Internal.Player} player
 * @param {number} power 水平推力
 * @param {number} lift 垂直抬升
 * @returns {boolean} 是否触发
 */
function DragonAirDash(player, power, lift) {
    if (!player || player.onGround()) return false
    const look = player.lookAngle
    player.setDeltaMovement(look.x() * power, lift, look.z() * power)
    player.hurtMarked = true
    player.level.spawnParticles('minecraft:cloud', true, player.x, player.y, player.z, 10, 0.3, 0.2, 0.3, 0.02)
    return true
}

// ─────────────────────────────────────────────
// 魅惑牵引：每 5 tick 把目标朝玩家推一格，穿墙问题用「不可站立则跳过」
// ─────────────────────────────────────────────

/**
 * 牵引目标向玩家靠拢。
 * @param {Internal.LivingEntity} target
 * @param {Internal.Player} player
 * @param {number} speed 每 tick 位移，建议 0.08~0.15
 */
function DragonCharmPull(target, player, speed) {
    if (!target || !player) return
    if (target.level != player.level) return
    const dx = player.x - target.x
    const dz = player.z - target.z
    const len = Math.sqrt(dx * dx + dz * dz)
    if (len < 1.5) return
    // 目标前方若是实心块就不推，避免卡进方块
    const nx = target.x + (dx / len) * speed
    const nz = target.z + (dz / len) * speed
    const block = target.level.getBlockState(new BlockPos(nx, target.y + 1, nz))
    if (block.isSolid()) return
    target.setDeltaMovement((dx / len) * speed, target.deltaMovement.y, (dz / len) * speed)
    target.hurtMarked = true
}

// ─────────────────────────────────────────────
// 窃取器官：必须先判胸腔，否则直接抛错
// ─────────────────────────────────────────────

/**
 * 从目标胸腔随机取走一件器官，丢给窃取者。
 * @param {Internal.LivingEntity} target
 * @param {Internal.Player} thief
 * @returns {Internal.ItemStack|null}
 */
function DragonStealOrgan(target, thief) {
    if (!target || !thief) return null
    const cc = target.chestCavityInstance
    if (!cc) return null                          // 关键：没有胸腔的实体直接返回
    const inv = cc.inventory
    if (!inv) return null
    const items = []
    for (let i = 0; i < inv.slots; i++) {
        const st = inv.getStackInSlot(i)
        if (!st.isEmpty()) items.push(i)
    }
    if (items.length == 0) return null
    const idx = items[Math.floor(Math.random() * items.length)]
    const stack = inv.getStackInSlot(idx).copy()
    inv.setStackInSlot(idx, $ItemStack.EMPTY)
    if (!thief.addItem(stack)) thief.drop(stack, false)
    target.level.spawnParticles('minecraft:smoke', true, target.x, target.getY(0.5), target.z, 8, 0.3, 0.4, 0.3, 0.02)
    return stack
}
