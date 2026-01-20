# Unified Ores Datapack

This datapack prevents duplicate ore generation by disabling lower-priority mod ores when multiple mods add the same ore type.

## Priority Order (highest to lowest)
1. Create
2. Immersive Engineering
3. Mekanism
4. Create: The Factory Must Grow (TFMG)
5. All other mods

## Ore Consolidation Summary

| Ore Type | Kept (Active) | Disabled |
|----------|---------------|----------|
| **Lead** | immersiveengineering:lead | cgs:lead_ore_placed, electrodynamics:ore_lead, mekanism:ore_lead_normal, tfmg:lead_ore |
| **Silver** | immersiveengineering:silver | electrodynamics:ore_silver |
| **Tin** | mekanism:ore_tin_large, ore_tin_small | electrodynamics:ore_tin, forestry:ore_tin |
| **Uranium** | immersiveengineering:uranium | electrodynamics:ore_uranium, mekanism:ore_uranium_buried, mekanism:ore_uranium_small |
| **Nickel** | immersiveengineering:nickel, immersiveengineering:deep_nickel | tfmg:nickel_ore |
| **Aluminum/Bauxite** | immersiveengineering:bauxite | electrodynamics:ore_aluminum |
| **Sulfur** | electrodynamics:ore_sulfur | cgs:sulfur_ore_placed |
| **Salt** | mekanism:salt | electrodynamics:ore_salt, growthcraft:*_salt_ore_placed |
| **Fluorite** | mekanism:ore_fluorite_buried, ore_fluorite_normal | electrodynamics:ore_fluorite |
| **Lithium** | tfmg:lithium_ore | electrodynamics:ore_lithium |

## Ores NOT Modified (Unique to their mod)
- create:zinc_ore (Create's zinc - unique)
- electrodynamics:ore_chromium, ore_monazite, ore_niter, ore_sylvite, ore_thorium, ore_titanium, ore_vanadium, ore_molybdenum
- forestry:ore_apatite
- mekanism:ore_osmium_* (unique to Mekanism)
- tconstruct:cobalt_ore_* (unique to Tinkers')

## Installation
Place the `unified_ores` folder in your world's `datapacks` folder, or in the server's `datapacks` folder.

## Notes
- This only affects NEW chunk generation
- Already generated chunks will still have the old ore distribution
- You may want to use a mod like Chunky to pre-generate terrain, or use retrogen features if available
