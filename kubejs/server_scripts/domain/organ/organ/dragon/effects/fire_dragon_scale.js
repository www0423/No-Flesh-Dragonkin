// priority: 500
// ============================================================
// 火龙逆鳞 · 特殊效果
// 生命低于 25% 时触发"逆鳞"：力量翻倍（攻击 ×2）
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonScaleChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    const maxHealth = entity.getMaxHealth()
    if (maxHealth <= 0) return
    const healthRatio = entity.getHealth() / maxHealth
    if (healthRatio < 0.25) {
        customData.attackDamage.addAttributeModifier(1, 'multiple', 'all')
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:fire_dragon_scale')
        .addStrategy('chest_cavity_update', FireDragonScaleChestCavityUpdate)
)
