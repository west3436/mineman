# Tech Progression Modpack - Implementation Plan

## Overview
This plan implements the full tech progression system for the Minecraft 1.20.1 Forge modpack, featuring dual tech paths (Create OR Immersive Engineering) through 6 technology tiers.

---

## Phase 1: Foundation Setup

### 1.1 KubeJS Infrastructure
- [ ] Create `kubejs/server_scripts/constants/` directory structure
- [ ] Create `tiers.js` - tier definitions and material mappings
- [ ] Create `materials.js` - unified material names across mods
- [ ] Create `machines.js` - machine registry by tier
- [ ] Create `fluids.js` - fluid unification mappings
- [ ] Create `tags.js` - common tag definitions

### 1.2 Fluid Unification
- [ ] Audit all fluid types across mods (molten metals, chemicals, etc.)
- [ ] Create fluid tag unification in `kubejs/server_scripts/unification/fluids.js`
- [ ] Unify functionally equivalent fluids (e.g., Liquid Plastic ↔ Molten Plastic)
- [ ] Create recipe conversions where direct unification isn't possible

### 1.3 Item/Ore Unification
- [ ] Create ore tag unification for all tiers
- [ ] Unify ingots, plates, gears, rods, wires across mods
- [ ] Set up priority system (which mod's item is "canonical")
- [ ] Create hiding script for duplicate items in JEI

---

## Phase 2: Tier 0 - Primitive/Stone Age

### 2.1 Starting Constraints
- [ ] Disable crafting table recipe for iron+ tools
- [ ] Require TinkersConstruct for first metal tools
- [ ] Gate Tinkers smeltery behind obtaining enough clay/grout
- [ ] Limit early ore processing to manual methods only

### 2.2 Progression Gates
- [ ] First copper tools → access to Tier 1
- [ ] Bronze unlocks → transition trigger to Tier 1
- [ ] Create Tinkers material progression (wood → stone → flint → copper → bronze)

---

## Phase 3: Tier 1 - Bronze Age

### 3.1 Material Requirements
- [ ] All Tier 1 machines require bronze components
- [ ] Bronze gears, plates, rods as base crafting materials
- [ ] Create bronze-specific machine frames

### 3.2 Create Path - Tier 1
- [ ] Bronze Andesite Alloy variant recipe
- [ ] Bronze-cased kinetic components
- [ ] Water wheel and hand crank as only power sources
- [ ] Basic Create deployer, mixer, press recipes modified

### 3.3 Immersive Engineering Path - Tier 1
- [ ] Bronze-cased IE components
- [ ] Water wheel only power source
- [ ] Basic crusher, metal press with bronze casings
- [ ] Engineer's workbench requires bronze

### 3.4 Processing Unlocks
- [ ] Tinkers smeltery for alloy creation
- [ ] Basic ore doubling via Create crushing wheels OR IE crusher
- [ ] Manual item transport only (no belts yet)

---

## Phase 4: Tier 2 - Iron/Steel Age

### 4.1 Steel Production
- [ ] Multiple steel production paths:
  - Create: Blast furnace mixing (iron + coal coke + blaze powder)
  - IE: Blast furnace (traditional)
  - Tinkers: Smeltery alloying
- [ ] Steel required for all Tier 2 machines

### 4.2 Create Path - Tier 2
- [ ] Steel-cased mechanical components
- [ ] Windmill and steam engine unlock
- [ ] Mechanical belts, funnels, chutes enabled
- [ ] Crushing wheels, millstone upgrades
- [ ] Create Enchantment Industry: basic disenchanting

### 4.3 Immersive Engineering Path - Tier 2
- [ ] Steel structural components
- [ ] Diesel generator unlock (requires crude oil processing)
- [ ] Conveyor belts enabled
- [ ] Metal press variants, arc furnace basics
- [ ] IE crusher upgrades

### 4.4 Cross-Mod Integration
- [ ] Sophisticated Storage: Iron+ chests require steel frames
- [ ] Iron Jetpacks: Steel tier jetpack
- [ ] Apotheosis: Basic enchanting unlocks with steel altar

### 4.5 Power Infrastructure
- [ ] Create: Rotational power sharing
- [ ] IE: LV wire connections
- [ ] Power conversion ratios: Define FE to SU conversion (if using integration mod)

---

## Phase 5: Tier 3 - Industrial Revolution

### 5.1 Material Requirements
- [ ] Invar, Electrum, Constantan as tier materials
- [ ] Advanced alloy crafting in smeltery or alloy kiln

### 5.2 Create Path - Tier 3
- [ ] Create: Steam 'n Rails - Advanced train systems
- [ ] Create: Crafts & Additions - Generator integration
- [ ] Sequenced assembly unlocks
- [ ] Precision mechanisms craftable
- [ ] Spout and item application systems

### 5.3 Immersive Engineering Path - Tier 3
- [ ] MV power infrastructure
- [ ] Excavator multiblock enabled
- [ ] Assembler for automation
- [ ] Chemical thrower and railgun

### 5.4 Shared Unlocks
- [ ] Applied Energistics 2: Certus processing, inscriber, basic ME storage
- [ ] Requires steel + quartz composite machine frames
- [ ] 1k and 4k storage cells only
- [ ] No autocrafting yet (Tier 4)

### 5.5 Flight Introduction
- [ ] Iron Jetpacks: Electrum/Invar tier jetpacks
- [ ] Limited fuel capacity, moderate speed

---

## Phase 6: Tier 4 - Advanced Technology

### 6.1 Material Requirements
- [ ] Signalum, Lumium, Enderium introduction
- [ ] Advanced alloy processing requirements
- [ ] Thermal Foundation integration

### 6.2 Create Path - Tier 4
- [ ] Create: Connected - Linked storage
- [ ] Advanced Create trains with fluid/item logistics
- [ ] Potato cannon and other gadgets

### 6.3 Immersive Engineering Path - Tier 4
- [ ] HV power systems
- [ ] Lightning rod power generation
- [ ] Advanced excavator patterns

### 6.4 AE2 Expansion
- [ ] Autocrafting enabled (requires Signalum processors)
- [ ] 16k and 64k storage cells
- [ ] P2P tunnels unlocked
- [ ] ME Interface and Export/Import buses

### 6.5 Dimensional Access
- [ ] Deeper Dark: Otherside dimension accessible
- [ ] Special materials from Otherside required for Tier 5

### 6.6 Additional Systems
- [ ] Iron Jetpacks: Signalum/Enderium tiers
- [ ] Apotheosis: Advanced enchanting with special materials
- [ ] Mob Grinding Utils: Tier 4 grinder upgrades

---

## Phase 7: Tier 5 - Quantum Age

### 7.1 Material Requirements
- [ ] Uraninite/Uranium processing (Mekanism)
- [ ] Quantum materials (custom recipes)
- [ ] End-game alloys requiring dimensional materials

### 7.2 Mekanism Integration
- [ ] Fission and Fusion reactors
- [ ] Full ore 5x processing chain
- [ ] Quantum Entangloporter (limited initially)
- [ ] Digital Miner enabled
- [ ] Mekanism tools and MekaSuit components

### 7.3 RFTools Integration
- [ ] RFTools Base: Advanced screens, storage
- [ ] RFTools Builder: Quarry and building functions
- [ ] RFTools Dimensions: Partial access (basic dims only)
- [ ] NO teleportation yet (Tier 6)

### 7.4 Gating Mechanism
- [ ] Required multiblock structure to "research" Tier 5
- [ ] Uses MBD2 for custom research multiblock OR
- [ ] Quest completion gate via FTB Quests

### 7.5 Nuclear Safety
- [ ] Mekanism radiation system enabled
- [ ] Hazmat gear required for nuclear handling
- [ ] Fission requires extensive safety setup

---

## Phase 8: Tier 6 - Creative/End-Game

### 8.1 Creative Items
- [ ] Mekanism: QIO system fully unlocked
- [ ] Flux Networks: Enabled at Tier 6
- [ ] Draconic Evolution: Full integration (if applicable)

### 8.2 Teleportation
- [ ] RFTools Teleportation: Enabled at Tier 6
- [ ] Cross-dimensional travel
- [ ] Player teleportation pads

### 8.3 Ultimate Tools
- [ ] Mekanism MekaSuit: Final upgrades
- [ ] Creative-adjacent items with extreme costs
- [ ] Apotheosis: Max enchanting levels

### 8.4 RFTools Dimensions Advanced
- [ ] Complex dimension creation
- [ ] Dimension Builder and Dimension Editor craftable
- [ ] High maintenance costs for custom dimensions

### 8.5 Special Machines
- [ ] Flux core (Flux Networks)
- [ ] Simulation Chamber (Hostile Neural Networks)
- [ ] Projector (RFTools)
- [ ] Shrinking Device (Shrink)
- [ ] Quantum Entangloporter (full unlock)

---

## Phase 9: Cross-Cutting Systems

### 9.1 Storage Tiering
- [ ] Sophisticated Backpacks: Tier with tech progression
  - Leather: Tier 0
  - Iron: Tier 1
  - Gold: Tier 2
  - Diamond: Tier 3
  - Netherite: Tier 4
- [ ] Sophisticated Storage: Same tiering
- [ ] Expanded Storage: Tie to metal availability

### 9.2 Enchanting Progression
- [ ] Apotheosis rarities tied to tiers:
  - Common: Tier 0-1
  - Uncommon: Tier 2
  - Rare: Tier 3
  - Epic: Tier 4
  - Mythic: Tier 5
  - Ancient: Tier 6
- [ ] Create Enchantment Industry: Mid-tier enchant automation

### 9.3 Mob Farming
- [ ] Mob Grinding Utils progression:
  - Basic fan: Tier 1
  - Absorption hopper: Tier 2
  - XP drain: Tier 3
  - Entity conveyor: Tier 3
  - Tank upgrades: Tier 4
- [ ] Hostile Neural Networks: Tier 4-5 for simulation

### 9.4 Utility Items
- [ ] Carry On: Available from Tier 0 (QoL)
- [ ] Trashcans: Tier 2
- [ ] Entangled blocks: Tier 5

---

## Phase 10: Economy & Questing

### 10.1 FTB Quests Structure
- [ ] Create main questline chapters for each tier
- [ ] Dual path chapters (Create vs IE) with shared rewards
- [ ] Optional "challenge" quests
- [ ] Lore/story quests using NPC interaction

### 10.2 Create Numismatics
- [ ] Configure base currency values
- [ ] Shop villagers for:
  - Basic materials (emergency purchases)
  - Cosmetics/decorative items
  - Convenience items (teleport scrolls, etc.)
- [ ] NOT for progression-critical items
- [ ] Quest rewards include currency

### 10.3 Loot Tables
- [ ] Configure structure loot to respect tier progression
- [ ] Dungeon loot scaling with dimension
- [ ] Boss drops tied to progression

---

## Phase 11: World & Dimension Configuration

### 11.1 Mining Dimension
- [ ] Configure Mining Dimension for resource gathering
- [ ] Tier 2 access (basic portal frame)
- [ ] Rich ore generation for farming

### 11.2 Deeper Dark (Otherside)
- [ ] Tier 4 access requirement
- [ ] Unique materials for Tier 5 recipes
- [ ] Challenge content

### 11.3 Lost Cities (Optional Challenge)
- [ ] Configure if desired for dungeon content
- [ ] High-tier loot tables

### 11.4 Overworld Configuration
- [ ] Disable/limit certain ore spawns to encourage dimension travel
- [ ] Rare ores for higher tiers in specific dimensions only

---

## Phase 12: Mod-Specific Configuration

### 12.1 Config File Changes (configs/)
- [ ] Mekanism: Disable digital miner until Tier 5, tune processing values
- [ ] RFTools: Disable teleportation until Tier 6
- [ ] Flux Networks: Disable until Tier 6
- [ ] AE2: Channel limits, power consumption tuning
- [ ] Iron Jetpacks: Tier-appropriate fuel consumption

### 12.2 Datapack Gating (where configs insufficient)
- [ ] Recipe removals for machines not yet unlocked
- [ ] Advancement-based recipe unlocks
- [ ] Custom advancements for tier progression

### 12.3 JEI/REI Configuration
- [ ] Hide unavailable recipes by default
- [ ] Show unlock requirements in tooltips (if possible)
- [ ] Custom info pages for progression guidance

---

## Phase 13: Testing & Balancing

### 13.1 Create Test World
- [ ] Creative test world for recipe verification
- [ ] Each tier playable start-to-finish

### 13.2 Balance Passes
- [ ] Early game (Tier 0-1): 2-4 hours playtime
- [ ] Mid game (Tier 2-3): 8-12 hours playtime
- [ ] Late game (Tier 4-5): 15-25 hours playtime
- [ ] End game (Tier 6): Ongoing content

### 13.3 Bug Testing
- [ ] Recipe conflicts check
- [ ] Progression bypasses audit
- [ ] Performance testing with automation

---

## Implementation Order

1. **Foundation** (Phase 1): Infrastructure must come first
2. **Tier 0-1** (Phases 2-3): Early game critical for first impressions
3. **Fluid/Item Unification** (Phase 1.2-1.3): Needed before heavy recipe work
4. **Tier 2-3** (Phases 4-5): Core gameplay loop
5. **Cross-cutting systems** (Phase 9): Storage, enchanting, farming
6. **Tier 4-5** (Phases 6-7): Advanced content
7. **Tier 6** (Phase 8): End-game
8. **Economy & Quests** (Phase 10): Polish layer
9. **World Config** (Phase 11): Environmental integration
10. **Testing** (Phase 13): Throughout, but focused pass at end

---

## File Structure

```
kubejs/
├── server_scripts/
│   ├── constants/
│   │   ├── tiers.js
│   │   ├── materials.js
│   │   ├── machines.js
│   │   └── fluids.js
│   ├── unification/
│   │   ├── fluids.js
│   │   ├── ores.js
│   │   └── items.js
│   ├── recipes/
│   │   ├── tier0/
│   │   ├── tier1/
│   │   ├── tier2/
│   │   ├── tier3/
│   │   ├── tier4/
│   │   ├── tier5/
│   │   └── tier6/
│   ├── removals/
│   │   └── disabled_recipes.js
│   └── tags/
│       ├── items.js
│       └── fluids.js
├── client_scripts/
│   └── jei_hiding.js
└── startup_scripts/
    └── item_modifications.js

config/
├── mekanism/ (tune as needed)
├── rftoolsbase-common.toml
├── fluxnetworks-common.toml
└── ... (other mod configs)

datapacks/
└── tech_progression/
    ├── pack.mcmeta
    └── data/
        └── ... (advancement gating if needed)
```

---

## Notes

- **Parallel paths**: Create and IE should NEVER be required together; always provide both options
- **Escape hatches**: Consider "exchange" recipes for players who want to switch paths mid-game
- **Mod compatibility**: Test each phase with full mod list loaded
- **Documentation**: Update wiki/guide as features are implemented
