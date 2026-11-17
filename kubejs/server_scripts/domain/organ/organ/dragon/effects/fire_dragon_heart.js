// priority: 500
// ============================================================
// 火龙心 · 特殊效果
// 1. 每 1 点龙血 → +0.5 生命（最大生命）
// 2. 攻击命中使目标着火 3 秒（灼烧）
// 3. 防火：免疫火焰/岩浆、铁咒术火魔法、冰火传说龙火息
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonHeartChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    const dragonBlood = chestCavity.getOrganScore('kubejs:dragon_blood')
    customData.maxHealth.addAttributeModifier(dragonBlood * 0.5, 'addition', 'base')
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonHeartDoDamage(customData, event, organItem, organIndex, slotType) {
    /**@type {Internal.LivingEntity} */
    const target = event.entity
    if (!target || !(target instanceof $LivingEntity)) return
    // 不判断 isFireImmune（KubeJS 未暴露该方法），直接点火；免疫火的生物不受影响
    target.setRemainingFireTicks(60)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDamageEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonHeartBeHurt(customData, event, organItem, organIndex, slotType) {
    // 防火：免疫火焰/岩浆类 + 铁咒术火焰魔法 + 冰火传说龙火息
    if (event.source.is($DamageTypes.IN_FIRE)
        || event.source.is($DamageTypes.ON_FIRE)
        || event.source.is($DamageTypes.LAVA)
        || event.source.is($DamageTypes.HOT_FLOOR)
        || event.source.is($DamageTypes.CAMPFIRE)
        || event.source.is($DamageTypes.FIREBALL)
        || event.source.is($DamageTypes.UNATTRIBUTED_FIREBALL)
        || event.source.is('irons_spellbooks:fire_magic')
        || event.source.is('irons_spellbooks:fire_field')
        || event.source.is('iceandfire:dragon_fire')) {
        event.cancel()
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:fire_dragon_heart')
        .addStrategy('chest_cavity_update', FireDragonHeartChestCavityUpdate)
        .addOnlyStrategy('entity_do_damage', FireDragonHeartDoDamage)
        .addOnlyStrategy('entity_be_hurt', FireDragonHeartBeHurt)
)
