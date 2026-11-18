# No Flesh Dragonkin

《脆骨症 2 / No Flesh Within Chest 2》的龙裔（Dragonkin）拓展：冰火传说三系龙器官、进阶三系（炼狱 / 风暴 / 凛冬）、异兽器官。

> **当前阶段：只保留 ID 与设定，代码后续补充。**
> 仓库里暂时没有可运行的 KubeJS 脚本，`kubejs/` 目录已清空待重建。旧的实现全部可从 git 历史取回（最后一个有代码的提交：`2850ab1`）。

## 目录

| 路径 | 内容 |
|---|---|
| `docs/器官ID清单.md` | 99 件器官的中文名与物品 ID（按 火龙/电龙/冰龙/炼狱/风暴/凛冬/异兽 分组） |
| `docs/器官设定.md` | 99 件器官的完整文案：风味、常驻、龙枢、激活，含术语表与落地说明 |
| `libs/iceandfire-2.1.13-1.20.1-beta-5.jar` | 基底模组 Ice and Fire（对照实体/物品/贴图/数值用，只读） |

## 规模

| 族 | 件数 | ID 前缀 |
|---|---|---|
| 火龙 / 电龙 / 冰龙 | 13 × 3 | `fire_dragon_*` / `lightning_dragon_*` / `ice_dragon_*` |
| 炼狱 / 风暴 / 凛冬 | 13 × 3 | `inferno_*` / `tempest_*` / `frost_*` |
| 异兽 | 21 | `hydra_regen_heart` 等散名 |
| 合计 | **99** | 全部 `kubejs:` 命名空间 |

## 环境

- Minecraft 1.20.1 / Forge
- KubeJS 2001.6.5（Rhino）
- Chest Cavity 2.16.7（胸腔）
- Iron's Spells 'n Spellbooks（龙息）
- Ice and Fire 2.1.13-1.20.1-beta-5（基底）

## 待补（代码层）

1. `kubejs/startup_scripts/item/organ/` —— 99 件物品注册
2. `kubejs/server_scripts/domain/organ/organ/dragon/` —— 每族一个器官数据文件（`RegistryOrgan(id).addScore(...)`）
3. `kubejs/server_scripts/domain/organ/organ/dragon/effects/` —— 器官特殊效果与槽位激活效果
4. `kubejs/client_scripts/` —— tooltip 与中文 lang
5. `kubejs/data/kubejs/` —— 胸腔类型（`cc_types` / `cc_inventory_types` / `cc_entity_assignments`）
6. `kubejs/assets/kubejs/textures/item/organs/` —— 99 件贴图

## 约定

- 物品 ID 一律 `kubejs:` 命名空间、全小写下划线，逐字一致（注册 / 器官数据 / tooltip / lang 四处）。
- 文件首行写 `// priority: N`：util 3000 / model 2000 / event-type 999 / 内容 500。
- 器官效果只通过 `OrganStrategyModel` 注册，不直接散写 `EntityEvents.*`。
- 玩家属性走 `customData.<attackDamage|maxHealth|armor>` + `AttributeManagerModel`，禁止 `addPermanentModifier`。
- 中文文案走 `assets/kubejs/lang/zh_cn.json`，代码里不硬编码句子。
