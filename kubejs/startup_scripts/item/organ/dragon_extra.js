// priority: 1000
// 龙裔拓展 · 新增器官物品注册（60 件：炼狱 / 风暴 / 凛冬 各 13 + 异兽 21）
// 贴图放在 kubejs:item/organs/dragon/<物品名>；缺图只显示紫黑格，不影响功能。

StartupEvents.registry('item', event => {
    // 炼狱龙心
    event.create('kubejs:infernal_heart').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_heart').tag('kubejs:dragon').tag('kubejs:heart').tag('kubejs:fire')
    // 炼狱晶核
    event.create('kubejs:infernal_crystal_core').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_crystal_core').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱精血
    event.create('kubejs:infernal_essence').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_essence').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱逆鳞
    event.create('kubejs:infernal_scale').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_scale').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱脊椎
    event.create('kubejs:infernal_spine').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_spine').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱肌肉
    event.create('kubejs:infernal_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_muscle').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱肋骨
    event.create('kubejs:infernal_rib').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_rib').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱肺
    event.create('kubejs:infernal_lung').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_lung').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱肝
    event.create('kubejs:infernal_liver').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_liver').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱肾
    event.create('kubejs:infernal_kidney').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_kidney').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱脾
    event.create('kubejs:infernal_spleen').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_spleen').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱胃
    event.create('kubejs:infernal_stomach').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_stomach').tag('kubejs:dragon').tag('kubejs:fire')
    // 炼狱肠
    event.create('kubejs:infernal_intestine').maxStackSize(1).texture('kubejs:item/organs/dragon/infernal_intestine').tag('kubejs:dragon').tag('kubejs:fire')
    // 风暴龙心
    event.create('kubejs:storm_heart').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_heart').tag('kubejs:dragon').tag('kubejs:heart').tag('kubejs:lightning')
    // 风暴晶核
    event.create('kubejs:storm_crystal_core').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_crystal_core').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴精血
    event.create('kubejs:storm_essence').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_essence').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴逆鳞
    event.create('kubejs:storm_scale').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_scale').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴脊椎
    event.create('kubejs:storm_spine').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_spine').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴肌肉
    event.create('kubejs:storm_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_muscle').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴肋骨
    event.create('kubejs:storm_rib').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_rib').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴肺
    event.create('kubejs:storm_lung').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_lung').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴肝
    event.create('kubejs:storm_liver').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_liver').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴肾
    event.create('kubejs:storm_kidney').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_kidney').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴脾
    event.create('kubejs:storm_spleen').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_spleen').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴胃
    event.create('kubejs:storm_stomach').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_stomach').tag('kubejs:dragon').tag('kubejs:lightning')
    // 风暴肠
    event.create('kubejs:storm_intestine').maxStackSize(1).texture('kubejs:item/organs/dragon/storm_intestine').tag('kubejs:dragon').tag('kubejs:lightning')
    // 凛冬龙心
    event.create('kubejs:winter_heart').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_heart').tag('kubejs:dragon').tag('kubejs:heart').tag('kubejs:ice')
    // 凛冬晶核
    event.create('kubejs:winter_crystal_core').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_crystal_core').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬精血
    event.create('kubejs:winter_essence').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_essence').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬逆鳞
    event.create('kubejs:winter_scale').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_scale').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬脊椎
    event.create('kubejs:winter_spine').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_spine').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬肌肉
    event.create('kubejs:winter_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_muscle').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬肋骨
    event.create('kubejs:winter_rib').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_rib').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬肺
    event.create('kubejs:winter_lung').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_lung').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬肝
    event.create('kubejs:winter_liver').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_liver').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬肾
    event.create('kubejs:winter_kidney').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_kidney').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬脾
    event.create('kubejs:winter_spleen').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_spleen').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬胃
    event.create('kubejs:winter_stomach').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_stomach').tag('kubejs:dragon').tag('kubejs:ice')
    // 凛冬肠
    event.create('kubejs:winter_intestine').maxStackSize(1).texture('kubejs:item/organs/dragon/winter_intestine').tag('kubejs:dragon').tag('kubejs:ice')
    // 九头再生心
    event.create('kubejs:beast_hydra_heart').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_hydra_heart').tag('kubejs:dragon').tag('kubejs:heart')
    // 岩化真皮
    event.create('kubejs:beast_cockatrice_hide').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_cockatrice_hide').tag('kubejs:dragon')
    // 食人妖肌肉
    event.create('kubejs:beast_troll_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_troll_muscle').tag('kubejs:dragon')
    // 独眼晶状体
    event.create('kubejs:beast_cyclops_lens').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_cyclops_lens').tag('kubejs:dragon')
    // 枯萎泪腺
    event.create('kubejs:beast_blight_tear_gland').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_blight_tear_gland').tag('kubejs:dragon')
    // 石化虹膜
    event.create('kubejs:beast_petrify_iris').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_petrify_iris').tag('kubejs:dragon')
    // 潮汐鳃
    event.create('kubejs:beast_tide_gill').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_tide_gill').tag('kubejs:dragon')
    // 俯猎肌束
    event.create('kubejs:beast_dive_muscle').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_dive_muscle').tag('kubejs:dragon')
    // 乘风气囊
    event.create('kubejs:beast_ride_wind_sac').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_ride_wind_sac').tag('kubejs:dragon')
    // 青铜羽囊
    event.create('kubejs:beast_bronze_feather_sac').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_bronze_feather_sac').tag('kubejs:dragon')
    // 震感神经节
    event.create('kubejs:beast_seismic_ganglion').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_seismic_ganglion').tag('kubejs:dragon')
    // 破浪心核
    event.create('kubejs:beast_wavebreaker_core').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_wavebreaker_core').tag('kubejs:dragon')
    // 诱声喉囊
    event.create('kubejs:beast_luring_throat').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_luring_throat').tag('kubejs:dragon')
    // 雾化灵质
    event.create('kubejs:beast_mist_essence').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_mist_essence').tag('kubejs:dragon')
    // 寒魂骨髓
    event.create('kubejs:beast_frost_marrow').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_frost_marrow').tag('kubejs:dragon')
    // 储营嗉囊
    event.create('kubejs:beast_storage_crop').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_storage_crop').tag('kubejs:dragon')
    // 刃肢肌腱
    event.create('kubejs:beast_blade_tendon').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_blade_tendon').tag('kubejs:dragon')
    // 灵窃腺
    event.create('kubejs:beast_pilfer_gland').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_pilfer_gland').tag('kubejs:dragon')
    // 饥寒胃囊
    event.create('kubejs:beast_famished_stomach').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_famished_stomach').tag('kubejs:dragon')
    // 霜缰脊髓
    event.create('kubejs:beast_frostrein_spine').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_frostrein_spine').tag('kubejs:dragon')
    // 统御信息腺
    event.create('kubejs:beast_command_pheromone').maxStackSize(1).texture('kubejs:item/organs/dragon/beast_command_pheromone').tag('kubejs:dragon')
})
