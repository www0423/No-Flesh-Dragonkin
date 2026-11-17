// priority: 500
RegistryOrgan('kubejs:inferno_blood')
    .addScore('kubejs:dragon_blood', 2)
    .addScore('kubejs:fire_element', 1)

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function InfernoBloodChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    const blood = chestCavity.getOrganScore('kubejs:dragon_blood')
    if (blood <= 0) return
    chestCavity.setOrganScore('chestcavity:strength', chestCavity.getOrganScore('chestcavity:strength') + blood)
    chestCavity.setOrganScore('kubejs:crit_damage', chestCavity.getOrganScore('kubejs:crit_damage') + blood)
}

/**
* @param {OrganEventCustomData} customData
* @param {Internal.LivingHurtEvent} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function InfernoBloodEntityDoDamage(customData, event, organItem, organIndex, slotType) {
    if (slotType != 'dragon_pivot') return
    if (event.source.is($DamageTypes.ON_FIRE)) return
    const player = event.source.actual
    if (!player || !player.isPlayer()) return
    if (!InfernoBloodIsCritical(player)) return
    if (player.getHealth() <= player.getMaxHealth() * 0.30) return
    const target = event.entity
    if (!target || !target.isAlive() || String(target.uuid) == String(player.uuid)) return
    const blood = player.chestCavityInstance.getOrganScore('kubejs:dragon_blood')
    if (blood <= 0) return
    player.setHealth(Math.max(1, player.getHealth() - player.getMaxHealth() * 0.10))
    target.invulnerableTime = 0
    target.attack(player.damageSources().onFire(), blood)
}

/**
* @param {Internal.Player} player
* @returns {boolean}
*/
function InfernoBloodIsCritical(player) {
    if (player.getAttackStrengthScale(0.5) <= 0.9) return false
    if (!(player.fallDistance > 0)) return false
    if (player.onGround()) return false
    if (player.onClimbable()) return false
    if (player.isInWater()) return false
    if (player.hasEffect('minecraft:blindness')) return false
    if (player.isPassenger()) return false
    if (player.isSprinting()) return false
    return true
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:inferno_blood')
        .addStrategy('chest_cavity_update', InfernoBloodChestCavityUpdate)
        .addOnlyStrategy('entity_do_damage', InfernoBloodEntityDoDamage)
)
