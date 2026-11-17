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
| `contentpacks/ice and fire/` | 冰火内容包（KubeJS Content Pack） |

## 内容包（contentpacks/ice and fire）— 只读参考

`contentpack.json` id 为 `iceanfire-pack`，是本拓展的**依托与写法参考**。

> **该目录只读，不得修改。** 包内的 `inferno_heart` / `inferno_blood` / `inferno_core`、`burning_with_inferno`、`import.js`、`import_func.js` 一律保持原样；新增器官写在 `kubejs/` 主树里。

从包里可复用的写法（照抄风格，不照抄文件）：

- **API 前缀**：内容包用下划线版 `_RegistryOrgan` / `_OrganStrategyModel` / `_RegistryOrganStrategy` / `_MultiStateTooltip` / `_RegistryOrganTooltip` / `_ApplyMultiStateTooltip`，由 `server_scripts/import_func.js` 通过 `ContentPacks.getShared(...)` 绑定；主 `kubejs/` 树用不带下划线的版本，两者不要混。
- **龙血换算生命**：`customData.maxHealth.addAttributeModifier(bloodValue, 'addition', 'base')`。
- **自定义效果当状态机**：`burning_with_inferno` 注册为 MobEffect，`getAmplifier()` 当等级，`entity_do_damage` 按等级放大、`entity_tick` 每秒扣 1% 生命。
- **主动技**：`player.potionEffects.add(id, duration, level, false, false)` + `player.addItemCooldown(organItem, 20 * 秒)`，冷却参数传 ItemStack。
- **炼狱分数**：包内用的是 `kubejs:hell_fire`。

## 环境

- Minecraft 1.20.1 / Forge
- KubeJS 2001.6.5（Rhino）
- Chest Cavity 2.16.7（胸腔）
- Iron's Spells 'n Spellbooks（龙息）
- Ice and Fire（冰火传说）

## 约定

- 物品 ID 一律 `kubejs:` 命名空间、全小写下划线。
- 文件首行写 `// priority: N`：util 3000 / model 2000 / event-type 999 / 内容 500。
- 器官效果只通过 `OrganStrategyModel` 注册，不直接散写 `EntityEvents.*`。
- 玩家属性走 `customData.<attackDamage|maxHealth|armor>` + `AttributeManagerModel`，禁止 `addPermanentModifier`。
- 中文文案走 `assets/kubejs/lang/zh_cn.json`，代码里不硬编码句子。
