// priority: 500
// ============================================================
// 冰龙心 · 特殊效果
// 1. 每 1 点龙血 → +0.5 生命（最大生命）
// 2. 受击时使攻击者减速（缓慢 II，5 秒）
// 3. 免疫冰系伤害（细雪冻伤、铁咒术冰魔法、冰火传说龙冰息）
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function IceDragonHeartChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    const dragonBlood = chestCavity.getOrganScore('kubejs:dragon_blood')
    customData.maxHealth.addAttributeModifier(dragonBlood * 0.5, 'addition', 'base')
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDamageEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function IceDragonHeartBeHurt(customData, event, organItem, organIndex, slotType) {
    // 免疫冰冻伤害：细雪冻伤 + 铁咒术冰魔法 + 冰火传说龙冰息
    if (event.source.is($DamageTypes.FREEZE)
        || event.source.is('irons_spellbooks:ice_magic')
        || event.source.is('iceandfire:dragon_ice')) {
        event.cancel()
        return
    }
    /**@type {Internal.LivingEntity} */
    const source = event.source.actual
    if (!source || !(source instanceof $LivingEntity)) return
    source.addEffect(new $MobEffectInstance($MobEffects.MOVEMENT_SLOWDOWN, 100, 1))
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ice_dragon_heart')
        .addStrategy('chest_cavity_update', IceDragonHeartChestCavityUpdate)
        .addOnlyStrategy('entity_be_hurt', IceDragonHeartBeHurt)
)
