// priority: 500
// ============================================================
// 火龙血 · 特殊效果
// 每 1 点龙血 → +1 力量（攻击力加成）
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonBloodChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    const dragonBlood = chestCavity.getOrganScore('kubejs:dragon_blood')
    customData.attackDamage.addAttributeModifier(dragonBlood * 1, 'addition', 'base')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:fire_dragon_essence')
        .addStrategy('chest_cavity_update', FireDragonBloodChestCavityUpdate)
)
