# Modpack Development Guide
## Tech Progression Modpack - Minecraft 1.20.1 Forge

---

## Overview

A progression-based modpack with parallel tech paths (Create and Immersive Engineering) that converge through unified components. Players choose their preferred aesthetic/playstyle while progressing through six technology tiers.

### Core Design Principles

1. **Dual-Path Viability**: Create and IE paths must be equally viable throughout
2. **Component Interchangeability**: Equivalent items between mods are unified (IE iron plate = Create iron plate)
3. **Clear Gating**: Each tier requires components/machines from previous tiers
4. **Side Content**: Non-gated content (trains, farming, cooking) available as parallel questlines

---

## Tech Tier Definitions

### Tier 1: Basic Processing
**Theme**: Manual/early mechanical processing, basic material refinement

**Progression Mods**:
- Create (base)
- Immersive Engineering (base)

**Unlocks**: Basic crushing, pressing, mixing, manual power generation

**Gate Requirements**: None (starting tier)

**Key Components Produced**:
- Processed ores (crushed/dusts)
- Basic plates (iron, copper)
- Andesite alloy / Treated wood

---

### Tier 2: Electricity & Steel
**Theme**: Industrial revolution, powered machinery, steel production

**Progression Mods**:
- Create: The Factory Must Grow (TFMG)
- Immersive Engineering (steel production)

**Gated Mods**:
- Forestry (requires IE/Create components)

**Gate Requirements**:
- Tier 1 processing capabilities
- Basic automation established

**Key Components Produced**:
- Steel ingots/plates
- Basic generators/engines
- Industrial Casing
- Basic circuits (if applicable)

---

### Tier 3: Oil & Plastic
**Theme**: Petrochemical processing, synthetic materials

**Progression Mods**:
- TFMG (oil/plastic chain)
- Immersive Petroleum (+ custom plastic multiblock/recipes)

**Gated Mods**:
- Building Gadgets
- Industrial Renewal

**Gate Requirements**:
- Steel production
- Electricity generation

**Key Components Produced**:
- Refined fuels
- Plastic sheets/components
- Advanced casings
- Rubber/synthetic materials

---

### Tier 4: Chemistry
**Theme**: Complex chemical processing, pressurized systems, advanced materials

**Progression Mods**:
- PneumaticCraft: Repressurized
- Mekanism

**Gate Requirements**:
- Plastic production
- Oil processing infrastructure

**Key Components Produced**:
- Chemical compounds
- Pressurized components
- Advanced alloys (Mekanism)
- PCBs (PneumaticCraft)
- Gases and fluid processing

**Notes**: Both PNC and Mekanism unlock at tier start; their content IS the tier progression

---

### Tier 5: Electronics
**Theme**: Advanced circuit fabrication, programmable machines

**Progression Mods**:
- Modular Machinery / Multiblocked2

**Gated Mods**:
- Industrial Foregoing

**Gate Requirements**:
- Chemistry tier completion
- PCBs or equivalent circuits
- Advanced alloys

**Key Components Produced**:
- Advanced circuits
- Programmable components
- Machine frames (advanced)

---

### Tier 6: Future Tech
**Theme**: Nuclear power, digital storage, automation mastery

**Gated Mods**:
- XNet
- Applied Energistics 2

**Gate Requirements**:
- Advanced circuits (from Multiblocked2 recipes)
- Electronics tier completion

**Key Components Produced**:
- Nuclear fuel/reactors
- Digital storage components
- Advanced automation networks

---

## Side Quest Tracks (Non-Gated)

These run parallel to main progression and are available from game start:

| Track | Mods | Description |
|-------|------|-------------|
| Railways | Create: Steam 'n Rails, Immersive Railroading | Train building and networks |
| Agriculture | Farmer's Delight, Supplementaries | Farming and cooking |
| Exploration | TBD | World exploration rewards |
| Building | Chisels & Bits, Macaw's series | Decorative building |

---

## Mods Unavailable for 1.20.1

**Note:** The following mods from the original request are not available for Minecraft 1.20.1 Forge:

- **Tech Reborn** - Removed from Tier 6 (not ported to 1.20.1)
- **HBM's Nuclear Tech Mod** - Already noted as unavailable
- **Fast Workbench** - Not available (FastSuite provides similar functionality)
- **Inventory Tweaks** - Not available (Inventory Essentials added instead)

**Successfully Added (Initially Listed as Unavailable):**
- ✅ Forestry: Community Edition (Tier 2)
- ✅ KubeJS Mekanism (required accepting 1.19.2 versions)
- ✅ Entity Culling, ImmediatelyFast, Noisium (Forge compatible)
- ✅ Fast Leaf Decay, Nutritional Balance
- ✅ Moog's Voyager Structures, Immersive Cooking, More Peripherals

---

## Modlist

### Core Required Mods
<!-- DO NOT REMOVE - These are essential -->
- Forge (1.20.1-47.x.x)
- Create
- Immersive Engineering
- Create: The Factory Must Grow
- Immersive Petroleum
- PneumaticCraft: Repressurized
- Mekanism
- Mekanism Generators
- Mekanism Tools (optional)
- Industrial Foregoing
- Applied Energistics 2
- XNet
- FTB Quests
- KubeJS
- KubeJS Create
- KubeJS Mekanism
- Multiblocked2
- ProbeJS (dev tool)

### Gated Content Mods
<!-- Mods that unlock at specific tiers -->

**Tier 2: Steel & Electricity**
- Forestry
- Tinker's Construct
- Storage Drawers

**Tier 3: Oil & Plastic**
- Building Gadgets
- Industrial Renewal
- Create Ore Excavation
- Sophisticated Storage
- Sophisticated Backpacks

**Tier 4: Chemistry**
- RFTools Base
- RFTools Builder
- RFTools Control
- RFTools Power
- RFTools Storage
- RFTools Utility

**Tier 5: Electronics**
- ComputerCraft: Tweaked
- More Peripherals
- Hostile Neural Networks

**Tier 6: Future Tech**
- Advanced AE
- Applied Mekanistics

### Side Content Mods
<!-- Non-gated parallel content -->

**Railways**
- Create: Steam 'n Rails
- Create Railways Navigator

**Agriculture & Cooking**
- Farmer's Delight
- Agricraft
- Farming for Blockheads
- Immersive Cooking
- Growthcraft Community Edition

**Building & Decoration**
- Supplementaries
- Create Bells and Whistles
- Macaw's Mods (Bridges, Doors, Fences, Furniture, etc.)
- Immersive Paintings
- Rechiseled
- Chisels & Bits

**Exploration & Adventure**
- Immersive Aircraft
- Untamed Wilds
- Explorer's Compass
- Nature's Compass
- Moog's Voyager Structures

**Economy & Misc**
- Numismatics
- Old Guns Mod

### Library/Dependency Mods
<!-- Required by other mods -->
- Architectury
- Cloth Config
- FTB Library
- FTB Teams
- Item Filters
- Titanium
- Rhino
- ProbeJS (dev only)

### World Generation Mods
- Lithosphere
- WWOO (William Wythers' Overhauled Overworld)

### Performance & Optimization Mods
- Embeddium (Sodium port)
- Oculus (Iris port for shaders)
- Entity Culling
- ImmediatelyFast
- Noisium
- AI Improvements
- Connector (Fabric→Forge compatibility layer)
- Connectored C2ME (C2ME via Connector)
- Distant Horizons

### QoL/Utility Mods
- JEI (Just Enough Items)
- Jade
- Xaero's Minimap
- Mouse Tweaks
- Inventory Sorter
- AppleSkin
- Carry On
- Clumps
- Comforts
- Controlling
- Curios API
- Dynmap
- Extreme Sound Muffler
- Fast Leaf Decay
- Fast Workbench
- FTB Suite (FTB Chunks, Backups, Ranks, etc.)
- Fusion Connected Textures
- Gravestone
- Inventory Essentials
- Neat (entity health bars)
- Nether Portal Fix
- No Chat Reports
- Not Enough Animations
- Nutritional Balance
- World Preview
- Ambient Environment

---

## Packwiz Setup

### Directory Structure
```
modpack/
├── pack.toml
├── index.toml
├── mods/
│   └── .gitkeep
├── config/
│   ├── create/
│   ├── immersiveengineering/
│   ├── mekanism/
│   ├── pneumaticcraft/
│   ├── ftbquests/
│   └── kubejs/
├── kubejs/
│   ├── startup_scripts/
│   ├── server_scripts/
│   ├── client_scripts/
│   └── assets/
├── defaultconfigs/
└── resourcepacks/
```

### Initial Setup Commands
```bash
# Initialize pack
packwiz init --name "TechProgression" --author "YourName" --version "1.0.0" --mc-version "1.20.1" --modloader forge

# Add mods from CurseForge
packwiz curseforge install create
packwiz curseforge install immersive-engineering
packwiz curseforge install mekanism
# ... etc

# Add mods from Modrinth
packwiz modrinth install <mod-slug>

# Refresh index after manual changes
packwiz refresh

# Export for CurseForge
packwiz curseforge export
```

### Pack.toml Template
```toml
name = "Tech Progression"
author = "YourName"
version = "1.0.0"
pack-format = "packwiz:1.1.0"

[versions]
minecraft = "1.20.1"
forge = "47.2.0"

[options]
acceptable-game-versions = ["1.20.1"]
```

---

## KubeJS Configuration

### File Structure
```
kubejs/
├── startup_scripts/
│   └── item_unification.js      # Tag and item equivalence
├── server_scripts/
│   ├── recipes/
│   │   ├── _constants.js        # Shared recipe constants
│   │   ├── tier1_basic.js       # Tier 1 recipe changes
│   │   ├── tier2_steel.js       # Tier 2 recipe changes
│   │   ├── tier3_plastic.js     # Tier 3 recipe changes
│   │   ├── tier4_chemistry.js   # Tier 4 recipe changes
│   │   ├── tier5_electronics.js # Tier 5 recipe changes
│   │   ├── tier6_future.js      # Tier 6 recipe changes
│   │   └── unification.js       # Cross-mod recipe unification
│   └── events/
│       └── item_tooltips.js     # Tier indicators on items
├── client_scripts/
│   └── jei_hiding.js            # Hide duplicate/unused items
└── assets/
    └── kubejs/
        └── textures/            # Custom textures if needed
```

### Recipe Unification Template (unification.js)
```javascript
// kubejs/server_scripts/recipes/unification.js

// Unified item mappings - all variants map to primary
const UNIFIED_ITEMS = {
    // Plates
    'iron_plate': [
        'create:iron_sheet',
        'immersiveengineering:plate_iron',
        // Add other mod variants
    ],
    'copper_plate': [
        'create:copper_sheet',
        'immersiveengineering:plate_copper',
    ],
    'steel_plate': [
        'tfmg:steel_sheet',
        'immersiveengineering:plate_steel',
        'mekanism:steel_plate',
    ],
    // Dusts
    'iron_dust': [
        'mekanism:dust_iron',
        'immersiveengineering:dust_iron',
        // Add variants
    ],
    // Ingots
    'steel_ingot': [
        'tfmg:steel_ingot',
        'immersiveengineering:ingot_steel',
        'mekanism:ingot_steel',
    ],
    // Add more unified items
};

// Primary item for each category (what recipes will output)
const PRIMARY_OUTPUTS = {
    'iron_plate': 'create:iron_sheet',
    'copper_plate': 'create:copper_sheet',
    'steel_plate': 'tfmg:steel_sheet',
    'steel_ingot': 'tfmg:steel_ingot',
    'iron_dust': 'mekanism:dust_iron',
    // Define primaries
};

ServerEvents.recipes(event => {
    // Replace all outputs with primary
    Object.entries(UNIFIED_ITEMS).forEach(([key, variants]) => {
        const primary = PRIMARY_OUTPUTS[key];
        variants.forEach(variant => {
            if (variant !== primary) {
                event.replaceOutput({}, variant, primary);
            }
        });
    });
});

ServerEvents.tags('item', event => {
    // Create unified tags for cross-mod compatibility
    Object.entries(UNIFIED_ITEMS).forEach(([key, variants]) => {
        const tagName = `forge:${key.replace('_', '/')}s`; // e.g., forge:plates/iron
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });
});
```

### Tier Gating Template (tier2_steel.js)
```javascript
// kubejs/server_scripts/recipes/tier2_steel.js

ServerEvents.recipes(event => {
    // === FORESTRY GATING ===
    // Require steel/industrial components for Forestry machines

    // Example: Modify Forestry machine frame to require steel
    event.remove({ output: 'forestry:hardened_machine' });
    event.shaped('forestry:hardened_machine', [
        'PSP',
        'SCS',
        'PSP'
    ], {
        P: '#forge:plates/steel',
        S: '#forge:screws/steel',
        C: 'forestry:sturdy_machine'
    });

    // === CROSS-PATH RECIPES ===
    // Ensure both Create and IE can craft equivalent items

    // Steel ingot from either path
    // (Keep both recipes valid, unification handles output)
});
```

### JEI Hiding (jei_hiding.js)
```javascript
// kubejs/client_scripts/jei_hiding.js

JEIEvents.hideItems(event => {
    // Hide duplicate items that have been unified
    // Keep only the primary variant visible

    const HIDDEN_DUPLICATES = [
        // Hide IE plates if Create is primary
        // 'immersiveengineering:plate_iron',
        // 'immersiveengineering:plate_copper',

        // Uncomment and configure based on PRIMARY_OUTPUTS choice
    ];

    HIDDEN_DUPLICATES.forEach(item => event.hide(item));
});
```

### Item Tooltips for Tier Indication
```javascript
// kubejs/client_scripts/item_tooltips.js

ItemEvents.tooltip(event => {
    // Add tier indicators to progression items

    const TIER_ITEMS = {
        2: [
            'tfmg:steel_ingot',
            'immersiveengineering:ingot_steel',
            'forestry:hardened_machine',
        ],
        3: [
            'tfmg:plastic_sheet',
            'buildinggadgets:gadget_building',
        ],
        4: [
            'pneumaticcraft:plastic',
            'mekanism:alloy_infused',
        ],
        5: [
            'industrialforegoing:machine_frame_pity',
        ],
        6: [
            'ae2:controller',
            'techreborn:industrial_machine_frame',
        ],
    };

    Object.entries(TIER_ITEMS).forEach(([tier, items]) => {
        items.forEach(item => {
            event.add(item, Text.gray(`Tech Tier ${tier}`));
        });
    });
});
```

---

## FTB Quests Structure

### Chapter Layout
```
quests/
├── chapters/
│   ├── 0_welcome.snbt           # Introduction/tutorial
│   ├── 1_basic_processing.snbt  # Tier 1
│   ├── 2_steel_electricity.snbt # Tier 2
│   ├── 3_oil_plastic.snbt       # Tier 3
│   ├── 4_chemistry.snbt         # Tier 4
│   ├── 5_electronics.snbt       # Tier 5
│   ├── 6_future_tech.snbt       # Tier 6
│   ├── side_railways.snbt       # Side: Trains
│   ├── side_agriculture.snbt    # Side: Farming
│   ├── side_exploration.snbt    # Side: Exploration
│   └── side_building.snbt       # Side: Building
├── chapter_groups.snbt
└── data.snbt
```

### Quest Design Guidelines

1. **Gate Quests**: Each tier has 1-3 "gate" quests that must be completed to unlock next tier
2. **Path Flexibility**: Offer Create OR IE quest variants where applicable
3. **Rewards**:
   - Progression quests: Unlock next tier content
   - Side quests: Resources, cosmetics, QoL items
4. **Detection**: Use item detection for crafting goals, dimension/structure detection for exploration

### Chapter Template (SNBT Format)
```snbt
{
    id: "UNIQUE_ID_HERE"
    group: ""
    order_index: 1
    filename: "1_basic_processing"
    title: "Tier 1: Basic Processing"
    icon: "create:andesite_casing"
    subtitle: ["The journey begins"]
    default_quest_shape: ""
    default_hide_dependency_lines: false
    quests: [
        {
            x: 0.0d
            y: 0.0d
            subtitle: "Choose your path"
            description: ["Begin with either Create or Immersive Engineering"]
            id: "QUEST_ID"
            tasks: [
                {
                    id: "TASK_ID"
                    type: "item"
                    title: "Craft a Mechanical Press OR Engineer's Workbench"
                    item: {
                        id: "itemfilters:or"
                        Count: 1b
                        tag: {
                            items: [
                                { id: "create:mechanical_press" }
                                { id: "immersiveengineering:workbench" }
                            ]
                        }
                    }
                }
            ]
            rewards: [
                {
                    id: "REWARD_ID"
                    type: "item"
                    item: "minecraft:iron_ingot"
                    count: 16
                }
            ]
        }
        // Additional quests...
    ]
}
```

### Quest Dependency Flow
```
TIER 1 (Starting)
├── Create Path
│   ├── Build Mechanical Press
│   ├── Process first ores
│   └── Automate basic crafting ──┐
│                                  ├──► TIER 2 GATE
├── IE Path                        │
│   ├── Build Engineer's Workbench │
│   ├── Create Crusher             │
│   └── Basic wire production ─────┘

TIER 2 (Steel & Electricity)
├── Create Path (TFMG)
│   ├── Build Steel furnace
│   ├── Produce steel
│   └── Industrial automation ────┐
│                                  ├──► TIER 3 GATE
├── IE Path                        │
│   ├── Build Blast Furnace        │
│   ├── Produce steel              │
│   └── Generate MV power ─────────┘

[Continue pattern for all tiers...]
```

---

## Config Requirements

### Create Config Priorities
```
config/create.toml
- Stress values (balance with IE power)
- Recipe toggles (disable duplicates if needed)
```

### Immersive Engineering Config
```
config/immersiveengineering-server.toml
- Machine energy costs
- Multiblock requirements
- Recipe outputs (align with Create equivalents)
```

### Mekanism Config
```
config/mekanism-server.toml
- Energy conversion rates (align with IE)
- Machine speeds (balance with other mods)
- Recipe costs
```

### PneumaticCraft Config
```
config/pneumaticcraft-common.toml
- Pressure settings
- Recipe requirements
```

### FTB Quests Config
```
config/ftbquests-client.toml
- UI settings
- Reward claim behavior
```

---

## Development Workflow

### Phase 1: Foundation
1. [ ] Initialize Packwiz project
2. [ ] Add all core mods
3. [ ] Verify mods load without conflict
4. [ ] Set up KubeJS folder structure

### Phase 2: Unification
1. [ ] Document all duplicate items across mods
2. [ ] Choose primary outputs for each category
3. [ ] Implement unification.js
4. [ ] Test cross-mod crafting

### Phase 3: Tier Gating
1. [ ] Tier 1 recipes (no changes needed typically)
2. [ ] Tier 2 recipe modifications
3. [ ] Tier 3 recipe modifications
4. [ ] Tier 4 recipe modifications
5. [ ] Tier 5 recipe modifications
6. [ ] Tier 6 recipe modifications

### Phase 4: Custom Content
1. [ ] Design Multiblocked2 machines for Tier 5-6
2. [ ] Create custom plastic multiblock for IE path
3. [ ] Balance energy/resource costs

### Phase 5: Quests
1. [ ] Create chapter structure
2. [ ] Write Tier 1 quests
3. [ ] Write Tier 2 quests
4. [ ] Write Tier 3 quests
5. [ ] Write Tier 4 quests
6. [ ] Write Tier 5 quests
7. [ ] Write Tier 6 quests
8. [ ] Write side quest chapters

### Phase 6: Testing & Polish
1. [ ] Full playthrough (Create path)
2. [ ] Full playthrough (IE path)
3. [ ] Balance adjustments
4. [ ] JEI cleanup
5. [ ] Quest reward balancing

---

## Notes & Decisions Log

<!-- Record important decisions made during development -->

| Date | Decision | Rationale |
|------|----------|-----------|
| | Primary plate output: Create | |
| | Primary steel output: TFMG | |
| | | |

---

## Resources

- [Packwiz Documentation](https://packwiz.infra.link/)
- [KubeJS Wiki](https://kubejs.com/)
- [FTB Quests Wiki](https://github.com/FTBTeam/FTB-Quests)
- [Create Wiki](https://create.fandom.com/)
- [IE Manual](https://ftb.fandom.com/wiki/Immersive_Engineering)
