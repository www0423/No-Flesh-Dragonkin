// priority: 500
// ============================================================
// 雷龙心 · 特殊效果
// 1. 每 1 点龙血 → +0.5 生命（最大生命）
// 2. 免疫雷系伤害（雷击、铁咒术雷魔法、冰火传说龙雷息）
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function LightningDragonHeartChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
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
function LightningDragonHeartBeHurt(customData, event, organItem, organIndex, slotType) {
    // 免疫雷击伤害：雷击 + 铁咒术雷魔法 + 冰火传说龙雷息
    if (event.source.is($DamageTypes.LIGHTNING_BOLT)
        || event.source.is('irons_spellbooks:lightning_magic')
        || event.source.is('iceandfire:dragon_lightning')) {
        event.cancel()
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:lightning_dragon_heart')
        .addStrategy('chest_cavity_update', LightningDragonHeartChestCavityUpdate)
        .addOnlyStrategy('entity_be_hurt', LightningDragonHeartBeHurt)
)
