# Plastic Production Multiblock - Tier 3 (IE-Only)

## Overview
This document describes the **IE Plastic Refinery** system, using **Immersive Engineering mechanics exclusively** to allow IE path players to produce plastic sheets without Create or TFMG distillation towers.

## Key Principle
**NO Create components required** - This is a pure IE solution for IE players.

## Tier Requirements
- **Tier**: 3 (Oil & Plastic)
- **Prerequisites**: 
  - Steel production (Tier 2)
  - IE electricity generation (LV/MV power)
  - Immersive Petroleum oil extraction

## Production Process (3-Step IE Chain)

### Step 1: IE Refinery - Oil Processing
**Machine**: Immersive Engineering Refinery (3x5x3 multiblock)

**Recipe**:
- Input: 250mb Crude Oil (Immersive Petroleum)
- Input: (no second fluid)
- Output: 100mb Naphtha (TFMG fluid, intermediate for plastic)
- Power: 512 RF
- Time: ~10 seconds

### Step 2: Plastic Solidifier Multiblock - Solidification
**Machine**: Custom Multiblocked2 Multiblock (3x3x3 built with IE blocks)

**Recipe**:
- Input: 100mb Naphtha (TFMG fluid)
- Input: 1x Coal Coke (catalyst/binder)
- Output: 1x Unprocessed Plastic (solid item)
- Power: 256 RF/t (1280 RF total)
- Time: 5 seconds (100 ticks)

**Multiblock Structure**:
- 18x Heavy Engineering Block (IE)
- 6x Redstone Engineering Block (IE)
- 2x Steel Fluid Pipe (IE)
- 1x LV Capacitor (IE)
- 1x Multiblock Controller (Multiblocked2)

### Step 3: IE Metal Press - Sheet Stamping
**Machine**: Immersive Engineering Metal Press

**Recipe**:
- Input: 1x Unprocessed Plastic
- Mold: Plate Mold (reusable)
- Output: 2x Plastic Sheets (tfmg:plastic_sheet)
- Power: 2400 RF
- Time: ~4 seconds

## Total Cost Summary

**Per 2 Plastic Sheets**:
- 250mb Crude Oil (from IP pumpjack)
- 1 Coal Coke (from IE Coke Oven)
- ~4200 RF total energy (512 + 1280 + 2400)
- ~19 seconds total processing time

## Multiblock Structure (Multiblocked2)

### Design: Plastic Solidifier (3x3x3)

A compact IE-themed multiblock that processes naphtha into solid unprocessed plastic.

#### Materials Required (IE Blocks Only)
- **18x Heavy Engineering Block** - Primary IE multiblock casing (immersiveengineering:heavy_engineering)
- **6x Redstone Engineering Block** - Control/power distribution (immersiveengineering:rs_engineering)
- **2x Steel Fluid Pipe** - IE fluid input handling (immersiveengineering:fluid_pipe)
- **1x LV Capacitor** - IE power storage/buffer (immersiveengineering:capacitor_lv)
- **1x Multiblock Controller** - Multiblocked2 controller block

### Layer-by-Layer Construction

```
Layer 3 (Top - Power):
[H] [H] [H]
[H] [C] [H]  C = LV Capacitor (power storage)
[H] [H] [H]  H = Heavy Engineering Block

Layer 2 (Core - Processing):
[H] [R] [H]
[P] [X] [P]  X = Controller (Multiblocked2)
[H] [R] [H]  R = Redstone Engineering Block
                P = Steel Fluid Pipe (IE)
                H = Heavy Engineering Block

Layer 1 (Base - Foundation):
[H] [H] [H]
[H] [R] [H]  R = Redstone Engineering Block
[H] [H] [H]  H = Heavy Engineering Block
```

### In-Game Setup Instructions

1. **Build the Structure**: Place blocks according to the layer pattern above
2. **Use Multiblocked2 Builder Tool**: Right-click the controller with the builder tool
3. **Define Pattern**: Select all blocks and save the pattern as 'plastic_solidifier'
4. **Configure Recipe**:
   - Input: 100mb Naphtha (TFMG fluid)
   - Input: 1x Coal Coke (item)
   - Output: 1x Unprocessed Plastic (item)
   - Energy: 256 RF/t
   - Duration: 100 ticks (5 seconds)
5. **Assign Ports**:
   - Fluid Input: Connect to Steel Fluid Pipes
   - Item Input: Connect to one port
   - Item Output: Connect to another port
   - Energy Input: Connect to LV Capacitor

## IE Machines Setup

### Required Machines

1. **IE Refinery** (3x5x3 multiblock)
   - Process oil into naphtha
   - Requires LV power input
   - Use IE pipes for fluid routing

2. **Plastic Solidifier Multiblock** (3x3x3 - Multiblocked2)
   - Built with IE Heavy Engineering Blocks
   - Processes naphtha + coal coke → unprocessed plastic
   - Requires LV power (256 RF/t)
   - Must be constructed and configured in-game

3. **IE Metal Press** (1x2x1)
   - Stamp unprocessed plastic into sheets
   - Requires plate mold (crafted once)
   - Outputs to chest or belt

## Alternative Recipe (Emergency/Early Game)

### Direct Heavy Oil Recipe
Uses more resources but simpler setup (single Refinery):

**Refinery Recipe**:
- Input: 500mb Crude Oil (2x cost)
- Input: 100mb Lava (heat source)
- Output: 125mb Heavy Oil (TFMG fluid)
- Power: 1024 RF (2x cost)

**Bottling Recipe**:
- Input: 1x Bucket
- Input: 125mb Heavy Oil (TFMG fluid)
- Output: 1x Plastic Sheet
- Returns: Empty Bucket

**Use Case**: Early Tier 3 before full IE automation is set up.

## Resource Balance

### Comparison with TFMG Path

**TFMG Distillation**:
- Cost: ~100mb oil per sheet (optimal)
- Power: Variable (Create SU)
- Setup: Complex multi-machine
- Speed: Fast

**IE Plastic Refinery** (This System):
- Cost: 125mb oil per sheet + coal coke
- Power: ~1500 RF per sheet (IE standard)
- Setup: 3 IE machines or 1 multiblock
- Speed: Medium (~7-8 seconds per sheet)

**Balance Rationale**:
- 25% more oil than TFMG
- Requires coal coke production (IE Coke Oven)
- Uses IE power generation (compatible with IE grid)
- Simpler than TFMG for IE-focused players
- No cross-mod dependencies (pure IE)

## Building Instructions

### Option A: Custom Multiblock (Recommended)

1. **Craft Components**:
   - Heavy Engineering Blocks (IE crafting)
   - Redstone Engineering Blocks (IE crafting)
   - Steel Fluid Pipes (IE crafting)
   - Capacitors (IE crafting)
   - Multiblocked2 Controller

2. **Build Structure**:
   - Follow layer-by-layer guide above
   - Place controller in center of layer 2
   - Connect power to capacitor
   - Connect oil input pipe

3. **Configure Multiblock** (In-Game):
   - Use Multiblocked2 builder tool
   - Define 3x3x3 pattern
   - Set recipe: Oil + Coal Coke → Plastic Sheets
   - Assign input/output ports

### Option B: Standard IE Setup

1. **Build IE Refinery**:
   - 3x5x3 multiblock structure
   - Connect to oil tank/pipe
   - Provide LV power
   - Output to naphtha tank

2. **Build Plastic Solidifier Multiblock**:
   - Construct 3x3x3 with IE blocks (see structure above)
   - Configure with Multiblocked2 builder tool
   - Connect fluid input from refinery
   - Feed coal coke via hopper/belt
   - Output unprocessed plastic to belt

3. **Place Metal Press**:
   - Install plate mold
   - Feed unprocessed plastic via belt
   - Provide LV power
   - Output plastic sheets to storage

## Energy Requirements

- **Refinery**: 512 RF per operation (~10s) = 51.2 RF/t average
- **Plastic Solidifier**: 256 RF/t for 5s = 1280 RF total
- **Metal Press**: 2400 RF per operation (~4s) = 600 RF/t average
- **Total**: ~4200 RF per 2 plastic sheets

### Recommended IE Power Sources (Tier 3)
- **Thermoelectric Generator** - Passive, early game
- **Diesel Generator** - Reliable, scalable
- **External Heater** - If using IE boilers
- **HV Wire Grid** - For multi-machine setups

## Automation Setup

### Input Automation
1. **Oil**: Pipe from IP pumpjack to Refinery
2. **Coal Coke**: Hopper or conveyor from Coke Oven output
3. **Power**: IE wire connectors to LV grid

### Output Automation
1. **Naphtha**: IE pipes between machines
2. **Unprocessed Plastic**: Conveyor belts
3. **Plastic Sheets**: Export to IE crates or Sophisticated Storage

### Advanced: Full IE Automation
- Use IE Logic circuits for smart control
- Redstone comparators for tank monitoring
- Conveyor belts with sorting for parallel processing

## Troubleshooting

### Refinery Not Working
- Check oil tank has 250mb+ available
- Verify LV power connection (512 RF/t)
- Ensure output tank has space for naphtha
- Check IE pipes are not blocked

### Metal Press Stuck
- Verify plate mold is installed
- Check unprocessed plastic in input
- Ensure power supply (600 RF/t during stamping)
- Clear output if full

### Low Throughput
- Add multiple refineries in parallel
- Use faster conveyors for item transport
- Upgrade to MV power for faster processing
- Consider multiple presses for bottleneck

## Integration Notes

### Works With
- ✅ Immersive Petroleum oil (primary)
- ✅ Immersive Engineering power grid
- ✅ IE automation (conveyors, hoppers)
- ✅ TFMG plastic sheets (compatible output)
- ✅ Sophisticated Storage (for plastic-gated items)

### Does NOT Require
- ❌ Create mod (no mixers, no blaze burners)
- ❌ TFMG distillation tower
- ❌ Cross-mod power conversion

### Quest Integration
Update FTB Quests to include IE plastic production path:
- Quest: "IE Plastic Production"
- Tasks: Build Refinery, Metal Press, produce plastic sheets
- Rewards: Coal coke, IE components

## Technical Details

### Recipe IDs
- `immersiveengineering:refinery/naphtha` - Oil to naphtha
- `immersiveengineering:bottling/unprocessed_plastic` - Naphtha to solid
- `immersiveengineering:metal_press/plastic_sheet` - Solid to sheets
- `immersiveengineering:refinery/heavy_oil_alt` - Emergency recipe

### Item/Fluid Tags
- Input Oil: `immersivepetroleum:oil` (primary)
- Intermediate: `tfmg:naphtha` (TFMG fluid for plastic production)
- Alternative: `tfmg:heavy_oil` (TFMG fluid for emergency recipe)
- Intermediate: `kubejs:unprocessed_plastic` (custom item)
- Output: `tfmg:plastic_sheet` (compatible with all recipes)

### Multiblock Tags
- Casing: `immersiveengineering:heavy_engineering` (IE standard)
- Power: `immersiveengineering:redstone_engineering`
- Pipes: `immersiveengineering:steel_fluid_pipe`

## Credits
- Design: Pure IE solution for IE path players
- Balanced for: Tier 3 (Oil & Plastic) progression
- Compatible with: Immersive Engineering, Immersive Petroleum, TFMG
- **Uses TFMG fluids** - No custom fluid registration required

---

**Next Steps**: See `tier3_plastic_multiblock.js` for KubeJS recipe implementations.
