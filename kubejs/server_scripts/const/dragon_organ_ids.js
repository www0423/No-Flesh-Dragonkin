// priority: 2000
// 龙裔拓展 · 新器官 ID 总表（由设计稿 v3 生成，60 件）
// 主树已存在的 42 件（fire/ice/lightning 各 14）不在此表内。
// 注意：内容包 contentpacks/ice and fire 已占用 kubejs:inferno_heart / inferno_core / inferno_blood，
// 本表刻意改用 infernal_ 前缀避开冲突；包内那三件后续建议退役。

const DragonOrganId = {
    infernal: {
        heart: 'kubejs:infernal_heart',   // 炼狱龙心
        crystal_core: 'kubejs:infernal_crystal_core',   // 炼狱晶核
        essence: 'kubejs:infernal_essence',   // 炼狱精血
        scale: 'kubejs:infernal_scale',   // 炼狱逆鳞
        spine: 'kubejs:infernal_spine',   // 炼狱脊椎
        muscle: 'kubejs:infernal_muscle',   // 炼狱肌肉
        rib: 'kubejs:infernal_rib',   // 炼狱肋骨
        lung: 'kubejs:infernal_lung',   // 炼狱肺
        liver: 'kubejs:infernal_liver',   // 炼狱肝
        kidney: 'kubejs:infernal_kidney',   // 炼狱肾
        spleen: 'kubejs:infernal_spleen',   // 炼狱脾
        stomach: 'kubejs:infernal_stomach',   // 炼狱胃
        intestine: 'kubejs:infernal_intestine',   // 炼狱肠
    },
    storm: {
        heart: 'kubejs:storm_heart',   // 风暴龙心
        crystal_core: 'kubejs:storm_crystal_core',   // 风暴晶核
        essence: 'kubejs:storm_essence',   // 风暴精血
        scale: 'kubejs:storm_scale',   // 风暴逆鳞
        spine: 'kubejs:storm_spine',   // 风暴脊椎
        muscle: 'kubejs:storm_muscle',   // 风暴肌肉
        rib: 'kubejs:storm_rib',   // 风暴肋骨
        lung: 'kubejs:storm_lung',   // 风暴肺
        liver: 'kubejs:storm_liver',   // 风暴肝
        kidney: 'kubejs:storm_kidney',   // 风暴肾
        spleen: 'kubejs:storm_spleen',   // 风暴脾
        stomach: 'kubejs:storm_stomach',   // 风暴胃
        intestine: 'kubejs:storm_intestine',   // 风暴肠
    },
    winter: {
        heart: 'kubejs:winter_heart',   // 凛冬龙心
        crystal_core: 'kubejs:winter_crystal_core',   // 凛冬晶核
        essence: 'kubejs:winter_essence',   // 凛冬精血
        scale: 'kubejs:winter_scale',   // 凛冬逆鳞
        spine: 'kubejs:winter_spine',   // 凛冬脊椎
        muscle: 'kubejs:winter_muscle',   // 凛冬肌肉
        rib: 'kubejs:winter_rib',   // 凛冬肋骨
        lung: 'kubejs:winter_lung',   // 凛冬肺
        liver: 'kubejs:winter_liver',   // 凛冬肝
        kidney: 'kubejs:winter_kidney',   // 凛冬肾
        spleen: 'kubejs:winter_spleen',   // 凛冬脾
        stomach: 'kubejs:winter_stomach',   // 凛冬胃
        intestine: 'kubejs:winter_intestine',   // 凛冬肠
    },
    beast: {
        hydra_heart: 'kubejs:beast_hydra_heart',   // 九头再生心
        cockatrice_hide: 'kubejs:beast_cockatrice_hide',   // 岩化真皮
        troll_muscle: 'kubejs:beast_troll_muscle',   // 食人妖肌肉
        cyclops_lens: 'kubejs:beast_cyclops_lens',   // 独眼晶状体
        blight_tear_gland: 'kubejs:beast_blight_tear_gland',   // 枯萎泪腺
        petrify_iris: 'kubejs:beast_petrify_iris',   // 石化虹膜
        tide_gill: 'kubejs:beast_tide_gill',   // 潮汐鳃
        dive_muscle: 'kubejs:beast_dive_muscle',   // 俯猎肌束
        ride_wind_sac: 'kubejs:beast_ride_wind_sac',   // 乘风气囊
        bronze_feather_sac: 'kubejs:beast_bronze_feather_sac',   // 青铜羽囊
        seismic_ganglion: 'kubejs:beast_seismic_ganglion',   // 震感神经节
        wavebreaker_core: 'kubejs:beast_wavebreaker_core',   // 破浪心核
        luring_throat: 'kubejs:beast_luring_throat',   // 诱声喉囊
        mist_essence: 'kubejs:beast_mist_essence',   // 雾化灵质
        frost_marrow: 'kubejs:beast_frost_marrow',   // 寒魂骨髓
        storage_crop: 'kubejs:beast_storage_crop',   // 储营嗉囊
        blade_tendon: 'kubejs:beast_blade_tendon',   // 刃肢肌腱
        pilfer_gland: 'kubejs:beast_pilfer_gland',   // 灵窃腺
        famished_stomach: 'kubejs:beast_famished_stomach',   // 饥寒胃囊
        frostrein_spine: 'kubejs:beast_frostrein_spine',   // 霜缰脊髓
        command_pheromone: 'kubejs:beast_command_pheromone',   // 统御信息腺
    },
}

// 全部新器官 ID 的扁平数组，供注册与校验用
const DragonOrganIdList = [
    'kubejs:infernal_heart',
    'kubejs:infernal_crystal_core',
    'kubejs:infernal_essence',
    'kubejs:infernal_scale',
    'kubejs:infernal_spine',
    'kubejs:infernal_muscle',
    'kubejs:infernal_rib',
    'kubejs:infernal_lung',
    'kubejs:infernal_liver',
    'kubejs:infernal_kidney',
    'kubejs:infernal_spleen',
    'kubejs:infernal_stomach',
    'kubejs:infernal_intestine',
    'kubejs:storm_heart',
    'kubejs:storm_crystal_core',
    'kubejs:storm_essence',
    'kubejs:storm_scale',
    'kubejs:storm_spine',
    'kubejs:storm_muscle',
    'kubejs:storm_rib',
    'kubejs:storm_lung',
    'kubejs:storm_liver',
    'kubejs:storm_kidney',
    'kubejs:storm_spleen',
    'kubejs:storm_stomach',
    'kubejs:storm_intestine',
    'kubejs:winter_heart',
    'kubejs:winter_crystal_core',
    'kubejs:winter_essence',
    'kubejs:winter_scale',
    'kubejs:winter_spine',
    'kubejs:winter_muscle',
    'kubejs:winter_rib',
    'kubejs:winter_lung',
    'kubejs:winter_liver',
    'kubejs:winter_kidney',
    'kubejs:winter_spleen',
    'kubejs:winter_stomach',
    'kubejs:winter_intestine',
    'kubejs:beast_hydra_heart',
    'kubejs:beast_cockatrice_hide',
    'kubejs:beast_troll_muscle',
    'kubejs:beast_cyclops_lens',
    'kubejs:beast_blight_tear_gland',
    'kubejs:beast_petrify_iris',
    'kubejs:beast_tide_gill',
    'kubejs:beast_dive_muscle',
    'kubejs:beast_ride_wind_sac',
    'kubejs:beast_bronze_feather_sac',
    'kubejs:beast_seismic_ganglion',
    'kubejs:beast_wavebreaker_core',
    'kubejs:beast_luring_throat',
    'kubejs:beast_mist_essence',
    'kubejs:beast_frost_marrow',
    'kubejs:beast_storage_crop',
    'kubejs:beast_blade_tendon',
    'kubejs:beast_pilfer_gland',
    'kubejs:beast_famished_stomach',
    'kubejs:beast_frostrein_spine',
    'kubejs:beast_command_pheromone',
]
