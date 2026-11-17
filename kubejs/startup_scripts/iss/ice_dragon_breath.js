// priority: 500
// ============================================================
// 冰霜龙息 · 法术定义（冰晶核专属）
// 伤害 = 全身龙血 × 2 × 法术强度
// 喷射时长 = 基础 3 秒 + 全身冰元素 × 0.18 秒，到点自动停
// CD 15 秒；雪花粒子；锥形穿透；持续喷射；命中减速敌人（缓慢 II，5秒）
// 模板来源：雷电龙息（lightning_dragon_breath.js）
// ============================================================

const $MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects')

StartupEvents.registry('irons_spellbooks:spells', event => {
    event.create('ice_dragon_breath')
        .setCastTime(100)
        .setCooldownSeconds(15)
        .setBaseManaCost(5)
        .setManaCostPerLevel(1)
        .setBaseSpellPower(1)
        .setSpellPowerPerLevel(1)
        .setCastType('continuous')
        .setSchool('irons_spellbooks:ice')
        .setMinRarity('legendary')
        .setMaxLevel(1)
        .onCast(ctx => {
            if (ctx.level.isClientSide()) return
            const level = ctx.level
            const entity = ctx.entity
            const magicData = ctx.playerMagicData
            const castData = magicData.getAdditionalCastData()
            const spell = ctx.spell
            if (magicData.isCasting()
                && magicData.getCastingSpell().getSpell().equals(ctx.spell)
                && castData instanceof $EntityCastData
                && castData.getCastingEntity() instanceof $AbstractConeProjectile) {
                const cone = castData.getCastingEntity()
                // 喷射时长控制：基础 3 秒 + 每 1 冰元素 0.18 秒，到点自动停止
                const maxTicks = Math.round(60 + entity.chestCavityInstance.getOrganScore('kubejs:ice_element') * 3.6)
                const elapsed = cone.persistentData.getInt('ice_breath_elapsed') + 1
                if (elapsed >= maxTicks) {
                    cone.discard()
                    magicData.resetCastingState()
                    return
                }
                cone.persistentData.putInt('ice_breath_elapsed', elapsed)
                cone.setDealDamageActive()
            } else {
                /**@type {Internal.AbstractConeProjectile} */
                let dragonBreathProjectile = level.createEntity('kubejs:ice_dragon_breath')
                dragonBreathProjectile.setOwner(entity)
                dragonBreathProjectile.setPos(entity.position().add(0, entity.getEyeHeight() * 0.7, 0))
                // 伤害 = 龙血 × 2 × 法术强度
                dragonBreathProjectile.setDamage(Math.max(entity.chestCavityInstance.getOrganScore('kubejs:dragon_blood'), 1) * 2 * spell.getSpellPower(ctx.spellLevel, entity))
                level.addFreshEntity(dragonBreathProjectile)
                magicData.setAdditionalCastData(new $EntityCastData(dragonBreathProjectile))
            }
        })
})

StartupEvents.registry('entity_type', event => {
    event.create('ice_dragon_breath', 'irons_spells_js:cone_projectile')
        .spawnParticles(/**@param {Internal.AbstractConeProjectile} projectile*/(projectile) => {
            const owner = projectile.getOwner()
            const level = projectile.level
            if (!level.isClientSide() || owner == null) return
            let rotation = Vec3dNormalize(owner.getLookAngle())
            let pos = owner.position().add(rotation.scale(1.6))
            let x = pos.x()
            let y = pos.y() + owner.getEyeHeight() * 0.9
            let z = pos.z()

            let offset = 0.15
            let speed = Math.random() * 0.35 + 0.25
            for (let i = 0; i < 12; i++) {
                let ox = Math.random() * 2 * offset - offset
                let oy = Math.random() * 2 * offset - offset
                let oz = Math.random() * 2 * offset - offset
                let angularness = 0.3
                let randomVec = Vec3dNormalize(new Vec3d(Math.random() * 2 * angularness - angularness, Math.random() * 2 * angularness - angularness, Math.random() * 2 * angularness - angularness))
                let result = Vec3dNormalize(rotation.scale(3).add(randomVec)).scale(speed)
                level.addParticle($ParticleTypes.SNOWFLAKE, x + ox, y + oy, z + oz, result.x(), result.y(), result.z())
            }
        })
        .onConeHitEntity((ctx) => {
            /**@type {Internal.ConeProjectileJS} */
            const projectile = ctx.entity
            const entityHitResult = ctx.entityHitResult
            const entity = entityHitResult.getEntity()
            const level = projectile.level
            const owner = projectile.getOwner()
            if (ISSDamageSources.applyDamage(entity, projectile.damage,
                SpellRegistry["getSpell(net.minecraft.resources.ResourceLocation)"](new ResourceLocation('kubejs:ice_dragon_breath')).getDamageSource(projectile, owner)
            )) {
                if (owner instanceof $LivingEntity) {
                    owner.heal(projectile.damage)
                }
                // 冰霜龙息：命中减速（缓慢 II，5 秒）
                entity.addEffect(new $MobEffectInstance($MobEffects.MOVEMENT_SLOWDOWN, 100, 1))
            }
        })
        .sized(1, 1)
        .clientTrackingRange(64)
})
