# Unified Ores Datapack

This datapack prevents duplicate ore generation by disabling lower-priority mod ores when multiple mods add the same ore type.

## Priority Order (highest to lowest)
1. Create
2. Immersive Engineering
3. Mekanism
4. Create: The Factory Must Grow (TFMG)
5. All other mods (Electrodynamics, Forestry, CGS, Growthcraft, etc.)

## Ore Consolidation Summary

| Ore Type | Kept (Active) | Disabled |
|----------|---------------|----------|
| **Lead** | immersiveengineering:lead | cgs:lead_ore_placed, electrodynamics:ore_lead, mekanism:ore_lead_normal (+ retrogen), tfmg:lead_ore |
| **Silver** | immersiveengineering:silver | electrodynamics:ore_silver |
| **Tin** | mekanism:ore_tin_large, ore_tin_small | electrodynamics:ore_tin, forestry:ore_tin |
| **Uranium** | immersiveengineering:uranium | electrodynamics:ore_uranium, mekanism:ore_uranium_buried (+ retrogen), mekanism:ore_uranium_small (+ retrogen) |
| **Nickel** | immersiveengineering:nickel, immersiveengineering:deep_nickel | tfmg:nickel_ore |
| **Aluminum/Bauxite** | immersiveengineering:bauxite | electrodynamics:ore_aluminum |
| **Sulfur** | electrodynamics:ore_sulfur | cgs:sulfur_ore_placed |
| **Salt** | mekanism:salt | electrodynamics:ore_salt, growthcraft:salt_ore_placed, growthcraft:deepslate_salt_ore_placed, growthcraft:nether_salt_ore_placed, growthcraft:end_salt_ore_placed |
| **Fluorite** | mekanism:ore_fluorite_buried, ore_fluorite_normal | electrodynamics:ore_fluorite |
| **Lithium** | tfmg:lithium_ore | electrodynamics:ore_lithium |

## Ores NOT Modified (Unique to their mod)
- create:zinc_ore (Create's zinc - unique)
- electrodynamics:ore_chromium, ore_monazite, ore_niter, ore_sylvite, ore_thorium, ore_titanium, ore_vanadium, ore_molybdenum
- forestry:ore_apatite
- mekanism:ore_osmium_*, ore_tin_*, ore_fluorite_*, salt (all kept - unique or primary source)
- tconstruct:cobalt_ore_* (unique to Tinkers' - Nether only)

## Disabled Ore Files

The following placed_feature files are overridden with `minecraft:no_op` to disable ore generation:

### CGS (Create: Gunsmithing)
- `lead_ore_placed.json` - Disabled in favor of Immersive Engineering lead
- `sulfur_ore_placed.json` - Disabled in favor of Electrodynamics sulfur

### Electrodynamics
- `ore_aluminum.json` - Disabled in favor of Immersive Engineering bauxite
- `ore_fluorite.json` - Disabled in favor of Mekanism fluorite
- `ore_lead.json` - Disabled in favor of Immersive Engineering lead
- `ore_lithium.json` - Disabled in favor of TFMG lithium
- `ore_salt.json` - Disabled in favor of Mekanism salt
- `ore_silver.json` - Disabled in favor of Immersive Engineering silver
- `ore_tin.json` - Disabled in favor of Mekanism tin
- `ore_uranium.json` - Disabled in favor of Immersive Engineering uranium

### Forestry
- `ore_tin.json` - Disabled in favor of Mekanism tin

### Growthcraft
- `salt_ore_placed.json` - Disabled in favor of Mekanism salt
- `deepslate_salt_ore_placed.json` - Disabled in favor of Mekanism salt
- `nether_salt_ore_placed.json` - Disabled in favor of Mekanism salt
- `end_salt_ore_placed.json` - Disabled in favor of Mekanism salt

### Mekanism
- `ore_lead_normal.json` - Disabled in favor of Immersive Engineering lead
- `ore_lead_normal_retrogen.json` - Disabled (retrogen variant)
- `ore_uranium_buried.json` - Disabled in favor of Immersive Engineering uranium
- `ore_uranium_buried_retrogen.json` - Disabled (retrogen variant)
- `ore_uranium_small.json` - Disabled in favor of Immersive Engineering uranium
- `ore_uranium_small_retrogen.json` - Disabled (retrogen variant)

### TFMG (Create: The Factory Must Grow)
- `lead_ore.json` - Disabled in favor of Immersive Engineering lead
- `nickel_ore.json` - Disabled in favor of Immersive Engineering nickel

## Installation
Place the `unified_ores` folder in your world's `datapacks` folder, or in the server's `datapacks` folder.

## Notes
- This only affects NEW chunk generation
- Already generated chunks will still have the old ore distribution
- Retrogen variants are also disabled to prevent ore regeneration in already-explored chunks
- You may want to use a mod like Chunky to pre-generate terrain
