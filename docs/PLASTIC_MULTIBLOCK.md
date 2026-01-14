# Plastic Production Multiblock - Tier 3

## Overview
This document describes the **Plastic Refinery Multiblock**, a custom Multiblocked2 structure that allows Immersive Engineering path players to produce plastic sheets without requiring TFMG's distillation tower.

## Tier Requirements
- **Tier**: 3 (Oil & Plastic)
- **Prerequisites**: 
  - Steel production (Tier 2)
  - Electricity generation
  - Immersive Petroleum oil extraction

## Multiblock Structure

### Design: Plastic Refinery Tower (3x3x4)

The Plastic Refinery is a vertical tower structure that processes crude oil into plastic sheets using heat and catalysts.

#### Materials Required
- **18x Steel Plates** - Structural casing (use `#forge:plates/steel`)
- **4x Brass Casing** - Processing chambers (from Create)
- **2x Mechanical Mixer** - Mixing components (from Create)
- **2x Fluid Tank** - Oil input storage (any compatible tank)
- **1x Item Vault** - Coal catalyst input (from Create)
- **1x Item Vault** - Plastic output (from Create)
- **1x Create Motor** - Power supply (or equivalent rotational power)
- **Pipes & Connections** - For fluid and item transfer

### Layer-by-Layer Construction

```
Layer 4 (Top - Output):
[S] [S] [S]
[S] [O] [S]  O = Output Vault (Plastic Sheets)
[S] [S] [S]  S = Steel Plate

Layer 3 (Processing):
[S] [B] [S]
[B] [M] [B]  M = Mechanical Mixer
[S] [B] [S]  B = Brass Casing
                S = Steel Plate

Layer 2 (Processing):
[S] [B] [S]
[B] [M] [B]  M = Mechanical Mixer
[S] [B] [S]  B = Brass Casing
                S = Steel Plate

Layer 1 (Base - Input):
[T] [S] [T]  T = Fluid Tank (Oil)
[S] [P] [S]  P = Power (Create Motor)
[V] [S] [C]  V = Item Vault (Output overflow)
                C = Item Vault (Coal input)
                S = Steel Plate
```

## Recipe Configuration

### Primary Recipe: Oil to Plastic
- **Input**: 
  - 250mb Crude Oil (from Immersive Petroleum)
  - 1x Coal (catalyst)
- **Output**: 
  - 2x Plastic Sheets (`tfmg:plastic_sheet`)
- **Processing Time**: 60 seconds (1200 ticks)
- **Energy**: 256 RF/tick (5120 RF/tick total per operation)

### Alternative Recipes (via KubeJS)

Multiple crafting paths are available:

1. **Create Heated Mixing**: 250mb Oil + Coal → 2 Plastic (heated)
2. **Create Superheated Mixing** (Bulk): 1000mb Oil + 4 Coal + Sulfur Dust → 8 Plastic
3. **Create Pressing**: 125mb Oil → 1 Plastic Sheet (direct processing)
4. **IE Refinery**: 100mb Oil → 1 Plastic (if configured)

## Building Instructions

### Step 1: Prepare Materials
1. Gather all required steel plates (TFMG or Immersive Engineering steel works)
2. Craft brass casings from Create mod
3. Set up mechanical mixers with appropriate rotational power
4. Prepare fluid tanks for oil storage

### Step 2: Build Base Layer
1. Place the Create motor in the center
2. Add fluid tanks on the left and right (front facing)
3. Place item vaults at the back corners
4. Fill gaps with steel plates

### Step 3: Build Processing Layers
1. Construct the 3x3 frame with steel plates
2. Place brass casings in the cardinal directions (N, S, E, W)
3. Install mechanical mixers in the center of each processing layer
4. Connect rotational power from the motor to the mixers

### Step 4: Build Top Layer
1. Create a full 3x3 steel plate cap
2. Leave center open for the output vault
3. Install output vault for plastic sheets

### Step 5: Configure Multiblock (In-Game)
1. Use Multiblocked2's builder tool (right-click the controller)
2. Define the structure pattern matching the layers above
3. Set recipe: 250mb Oil + 1 Coal → 2 Plastic Sheets, 60s, 256 RF/t
4. Assign input/output ports
5. Test the structure by validating formation

## Resource Balance

### Comparison with TFMG Path

**TFMG Distillation Tower**:
- Cost: ~20 steel + distillation tower components
- Recipe: 100mb Oil → varies (multiple products)
- Speed: Fast (multiple recipes)
- Complexity: High (requires full distillation setup)

**IE Path Plastic Refinery** (This Multiblock):
- Cost: ~20 steel + brass + Create components
- Recipe: 250mb Oil + Coal → 2 Plastic Sheets
- Speed: Medium (60s per batch)
- Complexity: Medium (simpler than TFMG tower)

**Balance Rationale**:
- Uses 2.5x more oil per plastic sheet than TFMG optimal path
- Requires coal as an additional catalyst
- Slower processing time
- Simpler structure, more accessible for IE-focused players
- Provides alternative progression path without invalidating TFMG

## Energy Requirements

- **Power Input**: 256 RF/tick (compatible with IE generators)
- **Total Energy per Operation**: 15,360 RF (256 RF/t × 60s)
- **Equivalent Create SU**: ~128 SU @ 32 RPM

### Recommended Power Sources (Tier 3)
- Immersive Engineering Thermoelectric Generator
- Create Steam Engine (with boiler)
- Immersive Engineering Diesel Generator
- Early game: Manual Crank + Battery Buffer

## Upgrades and Optimization

### Tier 4+ Improvements
Once reaching Tier 4 (Chemistry), players can:
- Add speed upgrades (reduce processing time)
- Add efficiency upgrades (reduce oil consumption)
- Parallel processing (build multiple refineries)
- Automated catalysts (replace coal with better alternatives)

### Automation Setup
1. **Input**: Pipe oil from Immersive Petroleum pumpjack
2. **Catalyst**: Hopper or belt system for coal delivery
3. **Output**: Extract plastic sheets via hopper or mechanical arm
4. **Power**: Connect to IE power grid or Create power network

## Troubleshooting

### Multiblock Won't Form
- Verify all blocks match the pattern exactly
- Check that steel plates are properly tagged (`#forge:plates/steel`)
- Ensure brass casings are from the Create mod
- Confirm all mechanical mixers are powered

### No Output
- Check oil tank has sufficient crude oil (250mb minimum)
- Verify coal is in the input vault
- Ensure continuous power supply (256 RF/t)
- Check output vault has space

### Low Efficiency
- Consider building multiple refineries for parallel processing
- Upgrade to superheated mixing for 4x efficiency in Create basin
- Use Create's fluid handling for better throughput

## Integration Notes

### Works With
- ✅ Immersive Petroleum oil
- ✅ Immersive Engineering crude oil
- ✅ Create rotational power
- ✅ TFMG plastic sheets (compatible output)
- ✅ Sophisticated Storage/Backpacks (requires plastic)

### Quest Integration
This multiblock can be added to the FTB Quests progression:
- Quest: "Alternative Plastic Production"
- Requirement: Build and activate the Plastic Refinery
- Reward: Stack of coal, speed upgrades, or advanced oil processing items

## Technical Details

### Recipe IDs
- `kubejs:oil_to_plastic_heated` - Create Heated Mixing
- `kubejs:oil_to_plastic_bulk` - Create Superheated Mixing
- `kubejs:oil_to_plastic_pressing` - Create Pressing
- `kubejs:crude_oil_to_plastic` - Alternative oil source

### Item/Fluid Tags
- Input Oil: `immersivepetroleum:oil` or `immersiveengineering:crude_oil`
- Output: `tfmg:plastic_sheet` (compatible with all TFMG recipes)
- Casing: `#forge:plates/steel` (cross-mod compatible)

## Credits
- Design: Tech Progression Modpack Team
- Balanced for: Tier 3 (Oil & Plastic) progression
- Compatible with: Multiblocked2, Create, TFMG, Immersive Engineering

---

**Next Steps**: See `tier3_plastic_multiblock.js` for the KubeJS recipe implementations.
