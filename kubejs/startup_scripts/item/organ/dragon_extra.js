// priority: 1000
// 龙裔拓展 · 新增器官物品注册
// 来源：冰火器官ID表.xlsx；已存在于 dragon.js 的物品不重复注册。
// 本文件注册 63 件（表 99 - 已有 36）。

StartupEvents.registry('item', event => {
    // 火龙逆鳞
    // 电龙逆鳞
    // 冰龙逆鳞
    // 炼狱龙心
    event.create('kubejs:inferno_heart').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_heart').tag('kubejs:dragon')
    // 炼狱晶核
    event.create('kubejs:inferno_core').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_core').tag('kubejs:dragon')
    // 炼狱精血
    event.create('kubejs:inferno_essence').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_essence').tag('kubejs:dragon')
    // 炼狱逆鳞
    event.create('kubejs:inferno_reverse_scale').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_reverse_scale').tag('kubejs:dragon')
    // 炼狱脊椎
    event.create('kubejs:inferno_spine').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_spine').tag('kubejs:dragon')
    // 炼狱肌肉
    event.create('kubejs:inferno_muscle').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_muscle').tag('kubejs:dragon')
    // 炼狱肋骨
    event.create('kubejs:inferno_rib').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_rib').tag('kubejs:dragon')
    // 炼狱肺
    event.create('kubejs:inferno_lung').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_lung').tag('kubejs:dragon')
    // 炼狱肝
    event.create('kubejs:inferno_liver').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_liver').tag('kubejs:dragon')
    // 炼狱肾
    event.create('kubejs:inferno_kidney').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_kidney').tag('kubejs:dragon')
    // 炼狱脾
    event.create('kubejs:inferno_spleen').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_spleen').tag('kubejs:dragon')
    // 炼狱胃
    event.create('kubejs:inferno_stomach').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_stomach').tag('kubejs:dragon')
    // 炼狱肠
    event.create('kubejs:inferno_intestine').maxStackSize(1).texture('kubejs:item/organs/icefire/inferno_intestine').tag('kubejs:dragon')
    // 风暴龙心
    event.create('kubejs:tempest_heart').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_heart').tag('kubejs:dragon')
    // 风暴晶核
    event.create('kubejs:tempest_core').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_core').tag('kubejs:dragon')
    // 风暴精血
    event.create('kubejs:tempest_essence').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_essence').tag('kubejs:dragon')
    // 风暴逆鳞
    event.create('kubejs:tempest_reverse_scale').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_reverse_scale').tag('kubejs:dragon')
    // 风暴脊椎
    event.create('kubejs:tempest_spine').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_spine').tag('kubejs:dragon')
    // 风暴肌肉
    event.create('kubejs:tempest_muscle').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_muscle').tag('kubejs:dragon')
    // 风暴肋骨
    event.create('kubejs:tempest_rib').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_rib').tag('kubejs:dragon')
    // 风暴肺
    event.create('kubejs:tempest_lung').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_lung').tag('kubejs:dragon')
    // 风暴肝
    event.create('kubejs:tempest_liver').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_liver').tag('kubejs:dragon')
    // 风暴肾
    event.create('kubejs:tempest_kidney').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_kidney').tag('kubejs:dragon')
    // 风暴脾
    event.create('kubejs:tempest_spleen').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_spleen').tag('kubejs:dragon')
    // 风暴胃
    event.create('kubejs:tempest_stomach').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_stomach').tag('kubejs:dragon')
    // 风暴肠
    event.create('kubejs:tempest_intestine').maxStackSize(1).texture('kubejs:item/organs/icefire/tempest_intestine').tag('kubejs:dragon')
    // 凛冬龙心
    event.create('kubejs:frost_heart').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_heart').tag('kubejs:dragon')
    // 凛冬晶核
    event.create('kubejs:frost_core').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_core').tag('kubejs:dragon')
    // 凛冬精血
    event.create('kubejs:frost_essence').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_essence').tag('kubejs:dragon')
    // 凛冬逆鳞
    event.create('kubejs:frost_reverse_scale').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_reverse_scale').tag('kubejs:dragon')
    // 凛冬脊椎
    event.create('kubejs:frost_spine').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_spine').tag('kubejs:dragon')
    // 凛冬肌肉
    event.create('kubejs:frost_muscle').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_muscle').tag('kubejs:dragon')
    // 凛冬肋骨
    event.create('kubejs:frost_rib').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_rib').tag('kubejs:dragon')
    // 凛冬肺
    event.create('kubejs:frost_lung').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_lung').tag('kubejs:dragon')
    // 凛冬肝
    event.create('kubejs:frost_liver').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_liver').tag('kubejs:dragon')
    // 凛冬肾
    event.create('kubejs:frost_kidney').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_kidney').tag('kubejs:dragon')
    // 凛冬脾
    event.create('kubejs:frost_spleen').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_spleen').tag('kubejs:dragon')
    // 凛冬胃
    event.create('kubejs:frost_stomach').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_stomach').tag('kubejs:dragon')
    // 凛冬肠
    event.create('kubejs:frost_intestine').maxStackSize(1).texture('kubejs:item/organs/icefire/frost_intestine').tag('kubejs:dragon')
    // 九头再生心
    event.create('kubejs:hydra_regen_heart').maxStackSize(1).texture('kubejs:item/organs/icefire/hydra_regen_heart').tag('kubejs:dragon')
    // 岩化真皮
    event.create('kubejs:petrified_hide').maxStackSize(1).texture('kubejs:item/organs/icefire/petrified_hide').tag('kubejs:dragon')
    // 食人妖肌肉
    event.create('kubejs:troll_muscle').maxStackSize(1).texture('kubejs:item/organs/icefire/troll_muscle').tag('kubejs:dragon')
    // 独眼晶状体
    event.create('kubejs:cyclops_lens').maxStackSize(1).texture('kubejs:item/organs/icefire/cyclops_lens').tag('kubejs:dragon')
    // 枯萎泪腺
    event.create('kubejs:withered_lacrimal_gland').maxStackSize(1).texture('kubejs:item/organs/icefire/withered_lacrimal_gland').tag('kubejs:dragon')
    // 石化虹膜
    event.create('kubejs:petrifying_iris').maxStackSize(1).texture('kubejs:item/organs/icefire/petrifying_iris').tag('kubejs:dragon')
    // 潮汐鳃
    event.create('kubejs:tidal_gill').maxStackSize(1).texture('kubejs:item/organs/icefire/tidal_gill').tag('kubejs:dragon')
    // 俯猎肌束
    event.create('kubejs:swoop_muscle_bundle').maxStackSize(1).texture('kubejs:item/organs/icefire/swoop_muscle_bundle').tag('kubejs:dragon')
    // 乘风气囊
    event.create('kubejs:windrider_air_sac').maxStackSize(1).texture('kubejs:item/organs/icefire/windrider_air_sac').tag('kubejs:dragon')
    // 青铜羽囊
    event.create('kubejs:bronze_plume_sac').maxStackSize(1).texture('kubejs:item/organs/icefire/bronze_plume_sac').tag('kubejs:dragon')
    // 震感神经节
    event.create('kubejs:tremor_ganglion').maxStackSize(1).texture('kubejs:item/organs/icefire/tremor_ganglion').tag('kubejs:dragon')
    // 破浪心核
    event.create('kubejs:wavebreaker_core').maxStackSize(1).texture('kubejs:item/organs/icefire/wavebreaker_core').tag('kubejs:dragon')
    // 诱声喉囊
    event.create('kubejs:luring_throat_sac').maxStackSize(1).texture('kubejs:item/organs/icefire/luring_throat_sac').tag('kubejs:dragon')
    // 雾化灵质
    event.create('kubejs:mistform_ectoplasm').maxStackSize(1).texture('kubejs:item/organs/icefire/mistform_ectoplasm').tag('kubejs:dragon')
    // 寒魂骨髓
    event.create('kubejs:frostsoul_marrow').maxStackSize(1).texture('kubejs:item/organs/icefire/frostsoul_marrow').tag('kubejs:dragon')
    // 储营嗉囊
    event.create('kubejs:stockpile_crop').maxStackSize(1).texture('kubejs:item/organs/icefire/stockpile_crop').tag('kubejs:dragon')
    // 刃肢肌腱
    event.create('kubejs:blade_limb_tendon').maxStackSize(1).texture('kubejs:item/organs/icefire/blade_limb_tendon').tag('kubejs:dragon')
    // 灵窃腺
    event.create('kubejs:soultheft_gland').maxStackSize(1).texture('kubejs:item/organs/icefire/soultheft_gland').tag('kubejs:dragon')
    // 饥寒胃囊
    event.create('kubejs:famine_stomach_sac').maxStackSize(1).texture('kubejs:item/organs/icefire/famine_stomach_sac').tag('kubejs:dragon')
    // 霜缰脊髓
    event.create('kubejs:frostrein_spinal_cord').maxStackSize(1).texture('kubejs:item/organs/icefire/frostrein_spinal_cord').tag('kubejs:dragon')
    // 统御信息腺
    event.create('kubejs:dominion_pheromone_gland').maxStackSize(1).texture('kubejs:item/organs/icefire/dominion_pheromone_gland').tag('kubejs:dragon')
})
