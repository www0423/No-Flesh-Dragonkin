// priority: 2000
// 龙裔拓展 · 器官 ID 总表（来源：冰火器官ID表.xlsx，暂定 ID）
// 共 99 件：火/电/冰 各 13、炼狱/风暴/凛冬 各 13、异兽 21。
// 用法：DragonOrganId.infernal.heart 取 ID；DragonOrganIdList 遍历全部。

const DragonOrganId = {
    fire: {   // 火龙
        heart: 'kubejs:fire_dragon_heart',   // 火龙心
        core: 'kubejs:fire_dragon_core',   // 火龙晶核
        essence: 'kubejs:fire_dragon_essence',   // 火龙精血
        reverse_scale: 'kubejs:fire_dragon_reverse_scale',   // 火龙逆鳞
        spine: 'kubejs:fire_dragon_spine',   // 火龙脊椎
        muscle: 'kubejs:fire_dragon_muscle',   // 火龙肌肉
        rib: 'kubejs:fire_dragon_rib',   // 火龙肋骨
        lung: 'kubejs:fire_dragon_lung',   // 火龙肺
        liver: 'kubejs:fire_dragon_liver',   // 火龙肝
        kidney: 'kubejs:fire_dragon_kidney',   // 火龙肾
        spleen: 'kubejs:fire_dragon_spleen',   // 火龙脾
        stomach: 'kubejs:fire_dragon_stomach',   // 火龙胃
        intestine: 'kubejs:fire_dragon_intestine',   // 火龙肠
    },
    lightning: {   // 电龙
        heart: 'kubejs:lightning_dragon_heart',   // 电龙心
        core: 'kubejs:lightning_dragon_core',   // 电龙晶核
        essence: 'kubejs:lightning_dragon_essence',   // 电龙精血
        reverse_scale: 'kubejs:lightning_dragon_reverse_scale',   // 电龙逆鳞
        spine: 'kubejs:lightning_dragon_spine',   // 电龙脊椎
        muscle: 'kubejs:lightning_dragon_muscle',   // 电龙肌肉
        rib: 'kubejs:lightning_dragon_rib',   // 电龙肋骨
        lung: 'kubejs:lightning_dragon_lung',   // 电龙肺
        liver: 'kubejs:lightning_dragon_liver',   // 电龙肝
        kidney: 'kubejs:lightning_dragon_kidney',   // 电龙肾
        spleen: 'kubejs:lightning_dragon_spleen',   // 电龙脾
        stomach: 'kubejs:lightning_dragon_stomach',   // 电龙胃
        intestine: 'kubejs:lightning_dragon_intestine',   // 电龙肠
    },
    ice: {   // 冰龙
        heart: 'kubejs:ice_dragon_heart',   // 冰龙心
        core: 'kubejs:ice_dragon_core',   // 冰龙晶核
        essence: 'kubejs:ice_dragon_essence',   // 冰龙精血
        reverse_scale: 'kubejs:ice_dragon_reverse_scale',   // 冰龙逆鳞
        spine: 'kubejs:ice_dragon_spine',   // 冰龙脊椎
        muscle: 'kubejs:ice_dragon_muscle',   // 冰龙肌肉
        rib: 'kubejs:ice_dragon_rib',   // 冰龙肋骨
        lung: 'kubejs:ice_dragon_lung',   // 冰龙肺
        liver: 'kubejs:ice_dragon_liver',   // 冰龙肝
        kidney: 'kubejs:ice_dragon_kidney',   // 冰龙肾
        spleen: 'kubejs:ice_dragon_spleen',   // 冰龙脾
        stomach: 'kubejs:ice_dragon_stomach',   // 冰龙胃
        intestine: 'kubejs:ice_dragon_intestine',   // 冰龙肠
    },
    infernal: {   // 炼狱
        inferno_heart: 'kubejs:inferno_heart',   // 炼狱龙心
        inferno_core: 'kubejs:inferno_core',   // 炼狱晶核
        inferno_essence: 'kubejs:inferno_essence',   // 炼狱精血
        inferno_reverse_scale: 'kubejs:inferno_reverse_scale',   // 炼狱逆鳞
        inferno_spine: 'kubejs:inferno_spine',   // 炼狱脊椎
        inferno_muscle: 'kubejs:inferno_muscle',   // 炼狱肌肉
        inferno_rib: 'kubejs:inferno_rib',   // 炼狱肋骨
        inferno_lung: 'kubejs:inferno_lung',   // 炼狱肺
        inferno_liver: 'kubejs:inferno_liver',   // 炼狱肝
        inferno_kidney: 'kubejs:inferno_kidney',   // 炼狱肾
        inferno_spleen: 'kubejs:inferno_spleen',   // 炼狱脾
        inferno_stomach: 'kubejs:inferno_stomach',   // 炼狱胃
        inferno_intestine: 'kubejs:inferno_intestine',   // 炼狱肠
    },
    storm: {   // 风暴
        tempest_heart: 'kubejs:tempest_heart',   // 风暴龙心
        tempest_core: 'kubejs:tempest_core',   // 风暴晶核
        tempest_essence: 'kubejs:tempest_essence',   // 风暴精血
        tempest_reverse_scale: 'kubejs:tempest_reverse_scale',   // 风暴逆鳞
        tempest_spine: 'kubejs:tempest_spine',   // 风暴脊椎
        tempest_muscle: 'kubejs:tempest_muscle',   // 风暴肌肉
        tempest_rib: 'kubejs:tempest_rib',   // 风暴肋骨
        tempest_lung: 'kubejs:tempest_lung',   // 风暴肺
        tempest_liver: 'kubejs:tempest_liver',   // 风暴肝
        tempest_kidney: 'kubejs:tempest_kidney',   // 风暴肾
        tempest_spleen: 'kubejs:tempest_spleen',   // 风暴脾
        tempest_stomach: 'kubejs:tempest_stomach',   // 风暴胃
        tempest_intestine: 'kubejs:tempest_intestine',   // 风暴肠
    },
    winter: {   // 凛冬
        frost_heart: 'kubejs:frost_heart',   // 凛冬龙心
        frost_core: 'kubejs:frost_core',   // 凛冬晶核
        frost_essence: 'kubejs:frost_essence',   // 凛冬精血
        frost_reverse_scale: 'kubejs:frost_reverse_scale',   // 凛冬逆鳞
        frost_spine: 'kubejs:frost_spine',   // 凛冬脊椎
        frost_muscle: 'kubejs:frost_muscle',   // 凛冬肌肉
        frost_rib: 'kubejs:frost_rib',   // 凛冬肋骨
        frost_lung: 'kubejs:frost_lung',   // 凛冬肺
        frost_liver: 'kubejs:frost_liver',   // 凛冬肝
        frost_kidney: 'kubejs:frost_kidney',   // 凛冬肾
        frost_spleen: 'kubejs:frost_spleen',   // 凛冬脾
        frost_stomach: 'kubejs:frost_stomach',   // 凛冬胃
        frost_intestine: 'kubejs:frost_intestine',   // 凛冬肠
    },
    beast: {   // 异兽
        hydra_regen_heart: 'kubejs:hydra_regen_heart',   // 九头再生心
        petrified_hide: 'kubejs:petrified_hide',   // 岩化真皮
        troll_muscle: 'kubejs:troll_muscle',   // 食人妖肌肉
        cyclops_lens: 'kubejs:cyclops_lens',   // 独眼晶状体
        withered_lacrimal_gland: 'kubejs:withered_lacrimal_gland',   // 枯萎泪腺
        petrifying_iris: 'kubejs:petrifying_iris',   // 石化虹膜
        tidal_gill: 'kubejs:tidal_gill',   // 潮汐鳃
        swoop_muscle_bundle: 'kubejs:swoop_muscle_bundle',   // 俯猎肌束
        windrider_air_sac: 'kubejs:windrider_air_sac',   // 乘风气囊
        bronze_plume_sac: 'kubejs:bronze_plume_sac',   // 青铜羽囊
        tremor_ganglion: 'kubejs:tremor_ganglion',   // 震感神经节
        wavebreaker_core: 'kubejs:wavebreaker_core',   // 破浪心核
        luring_throat_sac: 'kubejs:luring_throat_sac',   // 诱声喉囊
        mistform_ectoplasm: 'kubejs:mistform_ectoplasm',   // 雾化灵质
        frostsoul_marrow: 'kubejs:frostsoul_marrow',   // 寒魂骨髓
        stockpile_crop: 'kubejs:stockpile_crop',   // 储营嗉囊
        blade_limb_tendon: 'kubejs:blade_limb_tendon',   // 刃肢肌腱
        soultheft_gland: 'kubejs:soultheft_gland',   // 灵窃腺
        famine_stomach_sac: 'kubejs:famine_stomach_sac',   // 饥寒胃囊
        frostrein_spinal_cord: 'kubejs:frostrein_spinal_cord',   // 霜缰脊髓
        dominion_pheromone_gland: 'kubejs:dominion_pheromone_gland',   // 统御信息腺
    },
}

const DragonOrganIdList = [
    'kubejs:fire_dragon_heart',   // 火龙心
    'kubejs:fire_dragon_core',   // 火龙晶核
    'kubejs:fire_dragon_essence',   // 火龙精血
    'kubejs:fire_dragon_reverse_scale',   // 火龙逆鳞
    'kubejs:fire_dragon_spine',   // 火龙脊椎
    'kubejs:fire_dragon_muscle',   // 火龙肌肉
    'kubejs:fire_dragon_rib',   // 火龙肋骨
    'kubejs:fire_dragon_lung',   // 火龙肺
    'kubejs:fire_dragon_liver',   // 火龙肝
    'kubejs:fire_dragon_kidney',   // 火龙肾
    'kubejs:fire_dragon_spleen',   // 火龙脾
    'kubejs:fire_dragon_stomach',   // 火龙胃
    'kubejs:fire_dragon_intestine',   // 火龙肠
    'kubejs:lightning_dragon_heart',   // 电龙心
    'kubejs:lightning_dragon_core',   // 电龙晶核
    'kubejs:lightning_dragon_essence',   // 电龙精血
    'kubejs:lightning_dragon_reverse_scale',   // 电龙逆鳞
    'kubejs:lightning_dragon_spine',   // 电龙脊椎
    'kubejs:lightning_dragon_muscle',   // 电龙肌肉
    'kubejs:lightning_dragon_rib',   // 电龙肋骨
    'kubejs:lightning_dragon_lung',   // 电龙肺
    'kubejs:lightning_dragon_liver',   // 电龙肝
    'kubejs:lightning_dragon_kidney',   // 电龙肾
    'kubejs:lightning_dragon_spleen',   // 电龙脾
    'kubejs:lightning_dragon_stomach',   // 电龙胃
    'kubejs:lightning_dragon_intestine',   // 电龙肠
    'kubejs:ice_dragon_heart',   // 冰龙心
    'kubejs:ice_dragon_core',   // 冰龙晶核
    'kubejs:ice_dragon_essence',   // 冰龙精血
    'kubejs:ice_dragon_reverse_scale',   // 冰龙逆鳞
    'kubejs:ice_dragon_spine',   // 冰龙脊椎
    'kubejs:ice_dragon_muscle',   // 冰龙肌肉
    'kubejs:ice_dragon_rib',   // 冰龙肋骨
    'kubejs:ice_dragon_lung',   // 冰龙肺
    'kubejs:ice_dragon_liver',   // 冰龙肝
    'kubejs:ice_dragon_kidney',   // 冰龙肾
    'kubejs:ice_dragon_spleen',   // 冰龙脾
    'kubejs:ice_dragon_stomach',   // 冰龙胃
    'kubejs:ice_dragon_intestine',   // 冰龙肠
    'kubejs:inferno_heart',   // 炼狱龙心
    'kubejs:inferno_core',   // 炼狱晶核
    'kubejs:inferno_essence',   // 炼狱精血
    'kubejs:inferno_reverse_scale',   // 炼狱逆鳞
    'kubejs:inferno_spine',   // 炼狱脊椎
    'kubejs:inferno_muscle',   // 炼狱肌肉
    'kubejs:inferno_rib',   // 炼狱肋骨
    'kubejs:inferno_lung',   // 炼狱肺
    'kubejs:inferno_liver',   // 炼狱肝
    'kubejs:inferno_kidney',   // 炼狱肾
    'kubejs:inferno_spleen',   // 炼狱脾
    'kubejs:inferno_stomach',   // 炼狱胃
    'kubejs:inferno_intestine',   // 炼狱肠
    'kubejs:tempest_heart',   // 风暴龙心
    'kubejs:tempest_core',   // 风暴晶核
    'kubejs:tempest_essence',   // 风暴精血
    'kubejs:tempest_reverse_scale',   // 风暴逆鳞
    'kubejs:tempest_spine',   // 风暴脊椎
    'kubejs:tempest_muscle',   // 风暴肌肉
    'kubejs:tempest_rib',   // 风暴肋骨
    'kubejs:tempest_lung',   // 风暴肺
    'kubejs:tempest_liver',   // 风暴肝
    'kubejs:tempest_kidney',   // 风暴肾
    'kubejs:tempest_spleen',   // 风暴脾
    'kubejs:tempest_stomach',   // 风暴胃
    'kubejs:tempest_intestine',   // 风暴肠
    'kubejs:frost_heart',   // 凛冬龙心
    'kubejs:frost_core',   // 凛冬晶核
    'kubejs:frost_essence',   // 凛冬精血
    'kubejs:frost_reverse_scale',   // 凛冬逆鳞
    'kubejs:frost_spine',   // 凛冬脊椎
    'kubejs:frost_muscle',   // 凛冬肌肉
    'kubejs:frost_rib',   // 凛冬肋骨
    'kubejs:frost_lung',   // 凛冬肺
    'kubejs:frost_liver',   // 凛冬肝
    'kubejs:frost_kidney',   // 凛冬肾
    'kubejs:frost_spleen',   // 凛冬脾
    'kubejs:frost_stomach',   // 凛冬胃
    'kubejs:frost_intestine',   // 凛冬肠
    'kubejs:hydra_regen_heart',   // 九头再生心
    'kubejs:petrified_hide',   // 岩化真皮
    'kubejs:troll_muscle',   // 食人妖肌肉
    'kubejs:cyclops_lens',   // 独眼晶状体
    'kubejs:withered_lacrimal_gland',   // 枯萎泪腺
    'kubejs:petrifying_iris',   // 石化虹膜
    'kubejs:tidal_gill',   // 潮汐鳃
    'kubejs:swoop_muscle_bundle',   // 俯猎肌束
    'kubejs:windrider_air_sac',   // 乘风气囊
    'kubejs:bronze_plume_sac',   // 青铜羽囊
    'kubejs:tremor_ganglion',   // 震感神经节
    'kubejs:wavebreaker_core',   // 破浪心核
    'kubejs:luring_throat_sac',   // 诱声喉囊
    'kubejs:mistform_ectoplasm',   // 雾化灵质
    'kubejs:frostsoul_marrow',   // 寒魂骨髓
    'kubejs:stockpile_crop',   // 储营嗉囊
    'kubejs:blade_limb_tendon',   // 刃肢肌腱
    'kubejs:soultheft_gland',   // 灵窃腺
    'kubejs:famine_stomach_sac',   // 饥寒胃囊
    'kubejs:frostrein_spinal_cord',   // 霜缰脊髓
    'kubejs:dominion_pheromone_gland',   // 统御信息腺
]
