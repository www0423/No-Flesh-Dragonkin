// priority: 500
// ============================================================
// 冰晶核 · 特殊效果
// 1. 每 1 龙血 → 2.0 吐息伤害（在冰霜龙息法术中实现）
// 2. 发动冰霜龙息（CD 15s）：给玩家注册 kubejs:ice_dragon_breath 技能
// ============================================================

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function IceDragonCrystalCoreChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (!entity.isPlayer()) return
    AddSpellSelection(customData, event.chestCavity, 'kubejs:ice_dragon_breath', 1)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function IceDragonCrystalCoreTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    if (!entity.isPlayer()) return
    RemoveSpellSelectionBySpellId(customData, chestCavity, 'kubejs:ice_dragon_breath')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ice_dragon_core')
        .addStrategy('chest_cavity_update', IceDragonCrystalCoreChestCavityUpdate)
        .addOnlyStrategy('organ_take_off', IceDragonCrystalCoreTakeOff)
)
