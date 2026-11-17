// priority: 500
// ============================================================
// 龙裔附属包 · 雷龙基础器官物品注册（14种）
// 分类标签：kubejs:dragon（龙系） / kubejs:lightning（雷系）
// 器官类型标签：stomach / spine / bone / lung / liver / kidney
//              / spleen / muscle / intestine / heart
// ============================================================
StartupEvents.registry('item', event => {
    // ---------- 普通器官（9种） ----------
    event.create('kubejs:lightning_dragon_stomach').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_stomach').tag('kubejs:nature').tag('kubejs:stomach').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_spine').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_spine').tag('kubejs:nature').tag('kubejs:spine').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_rib').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_rib').tag('kubejs:nature').tag('kubejs:bone').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_lung').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_lung').tag('kubejs:nature').tag('kubejs:lung').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_liver').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_liver').tag('kubejs:nature').tag('kubejs:liver').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_kidney').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_kidney').tag('kubejs:nature').tag('kubejs:kidney').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_spleen').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_spleen').tag('kubejs:nature').tag('kubejs:spleen').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_muscle').tag('kubejs:nature').tag('kubejs:muscle').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_intestine').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_intestine').tag('kubejs:nature').tag('kubejs:intestine').tag('kubejs:dragon').tag('kubejs:lightning')

    // ---------- 重要器官（5种） ----------
    event.create('kubejs:lightning_dragon_heart').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_heart').tag('kubejs:nature').tag('kubejs:heart').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_core').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_core').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_essence').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_essence').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:lightning')
    event.create('kubejs:lightning_dragon_scale').maxStackSize(1).texture('kubejs:item/organs/dragon/lightning_dragon_scale').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:lightning')

    // ---------- 火龙器官（14种，防火免疫：不能被火和岩浆烧毁） ----------
    event.create('kubejs:fire_dragon_stomach').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_stomach').tag('kubejs:nature').tag('kubejs:stomach').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_spine').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_spine').tag('kubejs:nature').tag('kubejs:spine').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_rib').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_rib').tag('kubejs:nature').tag('kubejs:bone').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_lung').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_lung').tag('kubejs:nature').tag('kubejs:lung').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_liver').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_liver').tag('kubejs:nature').tag('kubejs:liver').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_kidney').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_kidney').tag('kubejs:nature').tag('kubejs:kidney').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_spleen').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_spleen').tag('kubejs:nature').tag('kubejs:spleen').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_muscle').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_muscle').tag('kubejs:nature').tag('kubejs:muscle').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_intestine').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_intestine').tag('kubejs:nature').tag('kubejs:intestine').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_heart').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_heart').tag('kubejs:nature').tag('kubejs:heart').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_core').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_core').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_essence').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_essence').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:fire')
    event.create('kubejs:fire_dragon_scale').maxStackSize(1).fireResistant().texture('kubejs:item/organs/dragon/fire_dragon_scale').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:fire')

    // ---------- 冰龙器官（14种，数值待设计） ----------
    event.create('kubejs:ice_dragon_stomach').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_stomach').tag('kubejs:nature').tag('kubejs:stomach').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_spine').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_spine').tag('kubejs:nature').tag('kubejs:spine').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_rib').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_rib').tag('kubejs:nature').tag('kubejs:bone').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_lung').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_lung').tag('kubejs:nature').tag('kubejs:lung').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_liver').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_liver').tag('kubejs:nature').tag('kubejs:liver').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_kidney').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_kidney').tag('kubejs:nature').tag('kubejs:kidney').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_spleen').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_spleen').tag('kubejs:nature').tag('kubejs:spleen').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_muscle').tag('kubejs:nature').tag('kubejs:muscle').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_intestine').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_intestine').tag('kubejs:nature').tag('kubejs:intestine').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_heart').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_heart').tag('kubejs:nature').tag('kubejs:heart').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_core').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_core').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_essence').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_essence').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:ice')
    event.create('kubejs:ice_dragon_scale').maxStackSize(1).texture('kubejs:item/organs/dragon/ice_dragon_scale').tag('kubejs:nature').tag('kubejs:dragon').tag('kubejs:ice')
})
