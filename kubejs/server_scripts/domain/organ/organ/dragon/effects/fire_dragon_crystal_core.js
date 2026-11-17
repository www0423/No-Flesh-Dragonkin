// priority: 500
// ============================================================
// 火晶核 · 特殊效果
// 1. 每 1 龙血 → 2.0 吐息伤害（在火焰龙息法术中实现）
// 2. 发动火焰龙息（CD 15s）：给玩家注册 kubejs:fire_dragon_breath 技能
// ============================================================

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonCrystalCoreChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    AddSpellSelection(customData, event.chestCavity, 'kubejs:fire_dragon_breath', 1)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FireDragonCrystalCoreTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    if (!entity.isPlayer()) return
    RemoveSpellSelectionBySpellId(customData, chestCavity, 'kubejs:fire_dragon_breath')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:fire_dragon_crystal_core')
        .addStrategy('chest_cavity_update', FireDragonCrystalCoreChestCavityUpdate)
        .addOnlyStrategy('organ_take_off', FireDragonCrystalCoreTakeOff)
)
