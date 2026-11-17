// priority: 500
// ============================================================
// 龙裔附属包 · 雷龙基础器官词条（B档·平衡定稿）
// 平衡策略：普通器官龙血降为 0.5，雷元素升为 1.0
//   → 全套龙血约 18 点（白嫖 18 穿透 + 18% 攻伤）
//   → 雷元素成为主要堆叠资源（无本体全局效果，完全可控）
// 重要器官（心囊珠血鳞）数值保持 A 档
// 特殊效果见各器官的 effects 策略文件
// ============================================================

// ---------- 普通器官（9种）：部位2.0 + 龙血0.5 + 雷1.0 ----------

RegistryOrgan('kubejs:lightning_dragon_stomach')
    .addScore('chestcavity:digestion', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_spine')
    .addScore('chestcavity:nerves', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_rib')
    .addScore('chestcavity:defense', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_lung')
    .addScore('chestcavity:breath_recovery', 1)
    .addScore('chestcavity:endurance', 2)
    .addScore('chestcavity:breath_capacity', 1)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_liver')
    .addScore('chestcavity:detoxification', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_kidney')
    .addScore('chestcavity:filtration', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_spleen')
    .addScore('chestcavity:metabolism', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_muscle')
    .addScore('chestcavity:strength', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

RegistryOrgan('kubejs:lightning_dragon_intestine')
    .addScore('chestcavity:nutrition', 2)
    .addScore('kubejs:dragon_blood', 0.5)
    .addScore('kubejs:lightning_element', 1)

// ---------- 重要器官（5种）：保持 A 档 ----------

RegistryOrgan('kubejs:lightning_dragon_heart')
    .addScore('chestcavity:health', 2)
    .addScore('kubejs:dragon_blood', 1)
    .addScore('kubejs:lightning_element', 0.5)
// 特殊效果：每1龙血 → +0.25 生命（effects/lightning_dragon_heart.js）

// 特殊效果：基础3s + 每1雷元素 → +0.18s 龙息喷射时长（在雷电龙息法术中实现）

RegistryOrgan('kubejs:lightning_dragon_core')
    .addScore('kubejs:lightning_element', 3)
    .addScore('kubejs:dragon_blood', 1)
// 特殊效果：每1龙血 → 1.5 吐息伤害；雷电龙息（穿透）CD15s（effects/lightning_dragon_core.js）

RegistryOrgan('kubejs:lightning_dragon_essence')
    .addScore('kubejs:dragon_blood', 3)
    .addScore('kubejs:lightning_element', 1)
// 特殊效果：每1龙血 → +0.5 力量（effects/lightning_dragon_essence.js）

RegistryOrgan('kubejs:lightning_dragon_scale')
    .addScore('chestcavity:defense', 3)
    .addScore('kubejs:dragon_blood', 1)
    .addScore('kubejs:lightning_element', 1)
// 特殊效果：生命<25%触发逆鳞，力量翻倍（effects/lightning_dragon_scale.js）
