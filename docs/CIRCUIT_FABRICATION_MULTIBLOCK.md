# Circuit Fabrication Multiblock

## Overview
The Circuit Fabrication Multiblock is a custom Tier 5 machine built using Multiblocked2. It produces Advanced Circuits, which are required for gating Tier 6 content including Applied Energistics 2, XNet, and other advanced technology mods.

## Structure
The Circuit Fabrication Multiblock is a **3x3x3** structure with the following layout:

### Layer 0 (Bottom)
```
I C I
C S C
I C I
```

### Layer 1 (Middle)
```
C S C
S @ S
C S C
```
Where @ is the Controller block (center position), and S = Plastic blocks surrounding it

### Layer 2 (Top)
```
I C I
C G C
I C I
```

### Block Legend
- **I** = Iron Block (`minecraft:iron_block`)
- **C** = Steel Casing (`mekanism:steel_casing`)
- **S** = Plastic Block (`pneumaticcraft:plastic`)
- **G** = Glass (`minecraft:glass`)
- **@** = Circuit Fabrication Controller (Multiblocked2 controller block)

## Building Instructions
1. Place the controller block at the center position (Layer 1, middle)
2. Build the structure around it according to the pattern above
3. Right-click the controller to verify the structure is complete
4. The multiblock will indicate when it's properly formed

## Requirements
To build this multiblock, you need:
- 4x Iron Blocks (Tier 2+)
- 8x Mekanism Steel Casing (Tier 4 - Chemistry)
- 8x PneumaticCraft Plastic Blocks (Tier 4 - Chemistry)
- 1x Glass Block
- 1x Circuit Fabrication Controller (from Multiblocked2)

## Recipes

### Recipe 1: Balanced Production
**Inputs:**
- 4x Printed Circuit Board (PneumaticCraft)
- 8x Infused Alloy (Mekanism)
- 4x Reinforced Alloy (Mekanism)
- 2x Redstone Block

**Output:** 2x Advanced Circuit

**Energy:** 50,000 FE

**Duration:** 400 ticks (20 seconds)

### Recipe 2: PCB-Heavy Alternative
**Inputs:**
- 6x Printed Circuit Board (PneumaticCraft)
- 4x Infused Alloy (Mekanism)
- 2x Reinforced Alloy (Mekanism)
- 4x Redstone

**Output:** 2x Advanced Circuit

**Energy:** 40,000 FE

**Duration:** 300 ticks (15 seconds)

### Recipe 3: Early-Game Lower Yield
**Inputs:**
- 2x Printed Circuit Board (PneumaticCraft)
- 4x Infused Alloy (Mekanism)
- 8x Steel Sheet (TFMG)
- 1x Diamond

**Output:** 1x Advanced Circuit

**Energy:** 30,000 FE

**Duration:** 200 ticks (10 seconds)

## Usage in Progression

### Tier 5 (Electronics)
The Circuit Fabrication Multiblock is built in Tier 5 after unlocking:
- PneumaticCraft PCB production
- Mekanism alloy production
- Steel manufacturing from Tier 2

### Tier 6 (Future Tech)
Advanced Circuits produced by this multiblock are required for:
- **Applied Energistics 2**: All processors, ME Controller, ME Drive, ME Chest
- **XNet**: Controller and Router
- **Applied Mekanistics**: Chemical storage cells
- **Advanced AE**: Advanced Pattern Provider

## Technical Details
- **Recipe Map:** `circuit_fabrication`
- **Location ID:** `mineman:circuit_fabricator`
- **Power Storage:** 100,000 FE
- **Input Slots:** 4
- **Output Slots:** 1

## Balancing Notes
- Production rates are designed to make this a meaningful investment but not a bottleneck
- Multiple recipe options allow for different resource availability scenarios
- Energy costs scale with production speed and output
- Requires Tier 4 chemistry components, positioning it correctly in the tech tree
