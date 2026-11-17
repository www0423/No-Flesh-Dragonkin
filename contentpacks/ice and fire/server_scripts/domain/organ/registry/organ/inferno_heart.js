// priority: 500
_RegistryOrgan('kubejs:inferno_heart')
    .addScore('chestcavity:health', 2)
    .addScore('kubejs:dragon_blood', 2)
    .addScore('kubejs:hell_fire', 1)

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function InfernoHeartChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    let bloodValue = chestCavity.getOrganScore('kubejs:dragon_blood')
    customData.maxHealth.addAttributeModifier(bloodValue, 'addition', 'base')
}

/**
* @param {OrganEventCustomData} customData
* @param {Internal.LivingHurtEvent} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function InfernoHeartEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    const attacker = event.source.actual
    const chestCavity = attacker.chestCavityInstance
    let fireValue = chestCavity.getOrganScore('kubejs:hell_fire')
    event.amount += fireValue * 5
    if (attacker.hasEffect('kubejs:burning_with_inferno')) {
        let fire = attacker.getEffect('kubejs:burning_with_inferno')
        let fireAmplifier = fire.getAmplifier()
            event.amount *= (fireAmplifier + 1) * 0.1
            return
        }
}

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.NetworkEventJS} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function InfernoHeartKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    let bloodScore = player.chestCavityInstance.getOrganScore('kubejs:dragon_blood')
    let duration = 20 * (bloodScore + 30)
    let level = bloodScore * 0.1
    player.potionEffects.add('kubejs:burning_with_inferno', duration, level, false, false)
    player.addItemCooldown(organItem, 20 * 10)
}

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.OpenedEntityTickJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function InfernoHeartEntityTick(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    const maxHealth = entity.getMaxHealth()
    if (!entity.hasEffect('kubejs:burning_with_inferno')) return
    entity.setHealth(Math.max(1, entity.getHealth() - maxHealth * 0.01))
}

_RegistryOrganStrategy(
    new _OrganStrategyModel('kubejs:inferno_heart')
        .addOnlyStrategy('chest_cavity_update', InfernoHeartChestCavityUpdate)
        .addOnlyStrategy('entity_do_damage', InfernoHeartEntityDoDamage)
        .addOnlyStrategy('key_active', InfernoHeartKeyActive)
        .addOnlyStrategy('entity_tick', InfernoHeartEntityTick)
)
