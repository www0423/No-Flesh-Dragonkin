// priority: 500
// ============================================================
// 龙裔附属包 · 火龙/冰龙基础器官词条（B档·平衡定稿）
// 结构同雷龙：普通器官 部位2.0 + 龙血0.5 + 元素1.0
// 元素词条分别为 fire_element / ice_element
// 特殊效果（心/囊/晶核/血/鳞）见各 effects 文件：
//   火：攻击点燃、火焰龙息（灼烧）
//   冰：受击减速、冰霜龙息（减速）
// ============================================================

// ==================== 火龙 ====================
// ---------- 普通器官（9种）：部位2.0 + 龙血0.5 + 火1.0 ----------

RegistryOrgan('kubejs:fire_dragon_stomach')
    .addScore('chestcavity:digestion', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_spine')
    .addScore('chestcavity:nerves', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_rib')
    .addScore('chestcavity:defense', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_lung')
    .addScore('chestcavity:breath_recovery', 1)
    .addScore('chestcavity:endurance', 2)
    .addScore('chestcavity:breath_capacity', 1)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_liver')
    .addScore('chestcavity:detoxification', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_kidney')
    .addScore('chestcavity:filtration', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_spleen')
    .addScore('chestcavity:metabolism', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_muscle')
    .addScore('chestcavity:strength', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_intestine')
    .addScore('chestcavity:nutrition', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:fire_element', 1)

// ---------- 重要器官（5种）：占位同雷龙 ----------

RegistryOrgan('kubejs:fire_dragon_heart')
    .addScore('chestcavity:health', 2)
    .addScore('kubejs:dragon_blood', 1)
    .addScore('kubejs:fire_element', 0.5)

RegistryOrgan('kubejs:fire_dragon_core')
    .addScore('kubejs:fire_element', 3)
    .addScore('kubejs:dragon_blood', 1)

RegistryOrgan('kubejs:fire_dragon_essence')
    .addScore('kubejs:dragon_blood', 3)
    .addScore('kubejs:fire_element', 1)

RegistryOrgan('kubejs:fire_dragon_scale')
    .addScore('chestcavity:defense', 3)
    .addScore('kubejs:dragon_blood', 1)
    .addScore('kubejs:fire_element', 1)

// ==================== 冰龙 ====================
// ---------- 普通器官（9种）：部位2.0 + 龙血0.5 + 冰1.0 ----------

RegistryOrgan('kubejs:ice_dragon_stomach')
    .addScore('chestcavity:digestion', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_spine')
    .addScore('chestcavity:nerves', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_rib')
    .addScore('chestcavity:defense', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_lung')
    .addScore('chestcavity:breath_recovery', 1)
    .addScore('chestcavity:endurance', 2)
    .addScore('chestcavity:breath_capacity', 1)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_liver')
    .addScore('chestcavity:detoxification', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_kidney')
    .addScore('chestcavity:filtration', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_spleen')
    .addScore('chestcavity:metabolism', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_muscle')
    .addScore('chestcavity:strength', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_intestine')
    .addScore('chestcavity:nutrition', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:ice_element', 1)

// ---------- 重要器官（5种）：占位同雷龙 ----------

RegistryOrgan('kubejs:ice_dragon_heart')
    .addScore('chestcavity:health', 2)
    .addScore('kubejs:dragon_blood', 1)
    .addScore('kubejs:ice_element', 0.5)

RegistryOrgan('kubejs:ice_dragon_core')
    .addScore('kubejs:ice_element', 3)
    .addScore('kubejs:dragon_blood', 1)

RegistryOrgan('kubejs:ice_dragon_essence')
    .addScore('kubejs:dragon_blood', 3)
    .addScore('kubejs:ice_element', 1)

RegistryOrgan('kubejs:ice_dragon_scale')
    .addScore('chestcavity:defense', 3)
    .addScore('kubejs:dragon_blood', 1)
    .addScore('kubejs:ice_element', 1)
