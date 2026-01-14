# IE Plastic Production - Tier 3

## Overview
Pure Immersive Engineering solution for plastic production. **No Create required.**

## System Design

IE players produce plastic using a 3-step process with standard IE machines:

### Step 1: IE Refinery
- **Input**: 250mb Immersive Petroleum Oil
- **Output**: 100mb Plastic Mixture (intermediate fluid)
- **Power**: 512 RF

### Step 2: IE Bottling Machine
- **Input**: 1 Coal Coke + 100mb Plastic Mixture
- **Output**: 1 Unprocessed Plastic (solid item)

### Step 3: IE Metal Press
- **Input**: 1 Unprocessed Plastic
- **Mold**: Plate Mold (reusable)
- **Output**: 2 Plastic Sheets (tfmg:plastic_sheet)
- **Power**: 2400 RF

## Total Cost
- 250mb Oil per 2 plastic sheets (125mb per sheet)
- 1 Coal Coke per 2 sheets
- ~3000 RF total
- Compatible with TFMG plastic sheets

## Files
- `kubejs/server_scripts/recipes/tier3_plastic_multiblock.js` - Recipe definitions
- `docs/PLASTIC_MULTIBLOCK.md` - Complete documentation

## Key Features
✅ Pure IE solution - no Create dependency  
✅ Uses IP oil + IE electricity  
✅ Metal Press for final stamping  
✅ Outputs TFMG-compatible plastic sheets  
✅ Balanced with 25% more oil cost vs TFMG

## Implementation
All recipes use standard Immersive Engineering recipe types:
- `immersiveengineering.refinery` - Oil processing
- `immersiveengineering.bottling` - Solidification
- `immersiveengineering.metal_press` - Sheet stamping

See PLASTIC_MULTIBLOCK.md for complete setup instructions.
