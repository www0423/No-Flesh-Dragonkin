// priority: 500
// ============================================================
// 雷龙血 · 特殊效果
// 每 1 点龙血 → +1 力量（攻击力加成）
// 注：读取的是全身龙血总值，非本器官自带龙血
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function LightningDragonBloodChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    const dragonBlood = chestCavity.getOrganScore('kubejs:dragon_blood')
    customData.attackDamage.addAttributeModifier(dragonBlood * 1, 'addition', 'base')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:lightning_dragon_blood')
        .addStrategy('chest_cavity_update', LightningDragonBloodChestCavityUpdate)
)
