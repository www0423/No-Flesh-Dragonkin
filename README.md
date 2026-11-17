# No Flesh Dragonkin

《脆骨症 2 / No Flesh Within Chest 2》的龙裔（Dragonkin）拓展：冰火传说三系龙器官、进阶三系（炼狱 / 风暴 / 凛冬）、胸腔布局与龙息法术。

目录结构对齐上游本体仓库 `Yorunina/No-Flesh-Within-Chest-2`。

## 内容

| 目录 | 内容 |
|---|---|
| `kubejs/startup_scripts/item/organ/dragon.js` | 火龙 / 冰龙 / 电龙 器官物品注册 |
| `kubejs/startup_scripts/iss/*_dragon_breath.js` | 四种龙息（ISS 法术注册 + cone projectile） |
| `kubejs/server_scripts/domain/organ/organ/dragon/` | 器官数据（`addScore`）与效果策略 |
| `kubejs/server_scripts/domain/organ/organ/dragon/effects/` | 龙心 / 龙血 / 晶核 / 逆鳞 的具体效果 |
| `kubejs/server_scripts/domain/organ/organ/dragon/dragon_hard_mechanics.js` | 引擎受限机制：石化 / 麻痹 / 空中冲刺 / 魅惑牵引 / 窃取器官 |
| `kubejs/server_scripts/util/dragon_core.js` | 龙裔公共底层：术语状态层 / 真实伤害 / 连锁 / 护盾 / 暴击读取 |
| `kubejs/server_scripts/domain/organ/organ_score/dragon_blood.js` | `kubejs:dragon_blood` 分数换算（盔甲撕裂 + 攻击伤害） |
| `kubejs/data/kubejs/cc_types/dragon/` | 三系龙胸腔定义（`dragon_25` 布局） |
| `kubejs/data/kubejs/cc_inventory_types/dragon_25.json` | 25 格胸腔布局 |
| `kubejs/client_scripts/` | 器官 tooltip 与中文 lang |
| `kubejs/assets/kubejs/textures/item/organs/dragon/` | 器官贴图 |
| `kubejs/server_scripts/const/dragon_organ_ids.js` | 99 件器官 ID 总表（按族分组） |

> 已移除 KubeJS Content Pack（原 `contentpacks/ice and fire/`）。全部器官一律以普通 KubeJS 脚本写在 `kubejs/` 主树，使用不带下划线的 `RegistryOrgan` / `OrganStrategyModel` / `RegistryOrganStrategy`，不再依赖 `ContentPacks.getShared(...)` 的下划线别名。

## 环境

- Minecraft 1.20.1 / Forge
- KubeJS 2001.6.5（Rhino）
- Chest Cavity 2.16.7（胸腔）
- Iron's Spells 'n Spellbooks（龙息）
- Ice and Fire 2.1.13-1.20.1-beta-5（冰火传说）

## 基底模组（libs/）

`libs/iceandfire-2.1.13-1.20.1-beta-5.jar` 是本拓展的**依赖基底**，随仓库一起保存，方便对照实体 ID、物品 ID、贴图与数值来源。

- modId `iceandfire`（displayName `Ice and Fire`），依赖 `citadel` / `forge`；jar 内 5499 个条目。
- 关键资源：`assets/iceandfire/lang/` 710 个语言文件、`assets/iceandfire/textures/item/` 385 张贴图、`data/iceandfire/recipes/` 409 个配方。
- 我们只用它的**内容与数值**作为设计依据，不向 jar 内写入任何东西；所有新增逻辑仍在 `kubejs/` 主树。
- 对照实体：`iceandfire:{fire,ice,lightning}_dragon`、`cyclops`、`gorgon`、`hydra`、`hippogryph`、`amphithere`、`sea_serpent`、`deathworm`、`troll`、`cockatrice`、`stymphalian_bird`、`siren`、`pixie`、`hippocampus`、`myrmex_*`、`dread_*`。

## 约定

- 物品 ID 一律 `kubejs:` 命名空间、全小写下划线。
- 文件首行写 `// priority: N`：util 3000 / model 2000 / event-type 999 / 内容 500。
- 器官效果只通过 `OrganStrategyModel` 注册，不直接散写 `EntityEvents.*`。
- 玩家属性走 `customData.<attackDamage|maxHealth|armor>` + `AttributeManagerModel`，禁止 `addPermanentModifier`。
- 中文文案走 `assets/kubejs/lang/zh_cn.json`，代码里不硬编码句子。
