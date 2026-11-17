// priority: 500
// ============================================================
// 雷龙逆鳞 · 特殊效果
// 生命低于 25% 时触发"逆鳞"：力量翻倍（攻击 ×2）
// 实现：在胸腔评估时判断生命比例，低血则附加总乘算 +100%
// ============================================================

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function LightningDragonScaleChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    const maxHealth = entity.getMaxHealth()
    if (maxHealth <= 0) return
    const healthRatio = entity.getHealth() / maxHealth
    if (healthRatio < 0.25) {
        // 逆鳞：力量翻倍（总乘算 +100%）
        customData.attackDamage.addAttributeModifier(1, 'multiple', 'all')
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:lightning_dragon_scale')
        .addStrategy('chest_cavity_update', LightningDragonScaleChestCavityUpdate)
)
