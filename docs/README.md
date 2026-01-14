# IE Plastic Production - Tier 3

## Overview
Pure Immersive Engineering solution for plastic production. **No Create required.**

## System Design

IE players produce plastic using a 3-step process with IE machines:

### Step 1: IE Refinery
- **Input**: 250mb Immersive Petroleum Oil
- **Output**: 100mb Plastic Mixture (intermediate fluid)
- **Power**: 512 RF

### Step 2: Plastic Solidifier Multiblock (Multiblocked2)
- **Input**: 100mb Plastic Mixture + 1 Coal Coke
- **Output**: 1 Unprocessed Plastic (solid item)
- **Power**: 256 RF/t (1280 RF total)
- **Structure**: 3x3x3 built with IE blocks (Heavy Engineering, Redstone Engineering)

### Step 3: IE Metal Press
- **Input**: 1 Unprocessed Plastic
- **Mold**: Plate Mold (reusable)
- **Output**: 2 Plastic Sheets (tfmg:plastic_sheet)
- **Power**: 2400 RF

## Multiblock Structure

The Plastic Solidifier is a custom Multiblocked2 multiblock built entirely with IE blocks:
- 18x Heavy Engineering Block
- 6x Redstone Engineering Block
- 2x Steel Fluid Pipe
- 1x LV Capacitor
- 1x Multiblock Controller

## Total Cost
- 250mb Oil per 2 plastic sheets (125mb per sheet)
- 1 Coal Coke per 2 sheets
- ~4200 RF total
- Compatible with TFMG plastic sheets

## Files
- `kubejs/server_scripts/recipes/tier3_plastic_multiblock.js` - Recipe definitions
- `docs/PLASTIC_MULTIBLOCK.md` - Complete documentation

## Key Features
✅ Pure IE solution - no Create dependency  
✅ Uses IP oil + IE electricity  
✅ Custom Multiblocked2 multiblock with IE blocks  
✅ Metal Press for final stamping  
✅ Outputs TFMG-compatible plastic sheets  
✅ Balanced with 25% more oil cost vs TFMG

## Implementation
Recipes use standard IE and Multiblocked2 types:
- `immersiveengineering.refinery` - Oil processing
- `multiblocked.multiblock` - Custom multiblock processing
- `immersiveengineering.metal_press` - Sheet stamping

See PLASTIC_MULTIBLOCK.md for complete setup instructions.
