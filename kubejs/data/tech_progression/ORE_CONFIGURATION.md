# Overworld Ore Configuration

This datapack configures ore generation in the Overworld to encourage dimension travel and progression through the tech tiers.

## Ore Availability in Overworld

### Normal Availability (Unchanged)
These ores spawn at vanilla or mod default rates:
- **Coal**: Vanilla generation (always available)
- **Iron**: Vanilla generation (always available)
- **Copper**: IE/Vanilla generation (always available)
- **Tin**: Mekanism generation (bronze production)
- **Redstone**: Vanilla generation (needed early)
- **Lapis**: Vanilla generation (enchanting)

### Reduced Availability
These ores have significantly reduced spawn rates to encourage dimension travel:
- **Gold**: ~33% of vanilla (better in Nether)
  - Count: 2 per chunk (vanilla: 4-6)
  - Height: -64 to 32 (unchanged)
  
- **Diamond**: ~40% of vanilla (encourage progression)
  - Count: 3 per chunk (vanilla: 7)
  - Height: -64 to -16 (deep only)
  - Higher air exposure discard chance
  
- **Lead**: ~40% of IE default (Mining dimension better)
  - Count: 2 per chunk
  - Height: -48 to 48

### Rare Availability
These ores spawn very rarely, primarily found in other dimensions:
- **Nickel**: Extremely rare (Tier 3 material)
  - Count: 1 per chunk
  - Height: -64 to -32 (deep only)
  - 50% air exposure discard
  - Vein size: 3 (small)
  
- **Silver**: Extremely rare (Tier 3 material)
  - Count: 1 per chunk
  - Height: -64 to -32 (deep only)
  - 50% air exposure discard
  - Vein size: 3 (small)

### Dimension-Exclusive Ores
These ores do NOT spawn in the Overworld at all:
- **Uranium**: Removed from Overworld (Tier 5 material)
  - Available in Mining Dimension and other dimensions
  
- **Platinum**: Does not spawn naturally (Deeper Dark/Otherside only)
  - Will be configured when Deeper Dark integration is added

## Technical Implementation

### Biome Modifiers
Located in `kubejs/data/forge/biome_modifier/`:
- `remove_overworld_*.json`: Remove default ore generation
- `add_overworld_*_reduced.json`: Add back reduced spawn rates
- `add_overworld_*_rare.json`: Add back very rare spawn rates

### Configured Features
Located in `kubejs/data/tech_progression/worldgen/configured_feature/`:
- Define ore vein size, discard chances, and block targets
- Custom configurations for reduced/rare variants

### Placed Features
Located in `kubejs/data/tech_progression/worldgen/placed_feature/`:
- Define spawn counts, height ranges, and placement rules
- Use `minecraft:count` for spawn frequency per chunk
- Use `minecraft:height_range` for vertical distribution

## Future Configuration

### Mining Dimension
- Nickel and Silver should have normal/increased spawn rates
- Lead should have significantly increased spawn rates
- Uranium should have normal spawn rates

### Nether
- Gold should have increased spawn rates (better than Overworld)

### Deeper Dark / Otherside
- Platinum exclusive spawns
- Tier 5 custom ores

## Notes for Maintainers

1. **Ore Removal**: To completely remove an ore, only create the `remove_overworld_*.json` file without the corresponding `add_` file.

2. **Adjusting Spawn Rates**: Edit the `count` value in placed features:
   - Vanilla gold uses 4-6 veins per chunk
   - Our reduced gold uses 2 veins per chunk
   - Our rare ores use 1 vein per chunk

3. **Vein Size**: Edit `size` in configured features:
   - Vanilla gold veins: 9 blocks
   - Our reduced gold veins: 6 blocks
   - Our rare ore veins: 3 blocks

4. **Height Distribution**: Use `height_range` in placed features:
   - `trapezoid` creates a triangular distribution
   - `min_inclusive` and `max_inclusive` set the Y-level range

5. **Compatibility**: This system works with:
   - Immersive Engineering ores
   - Mekanism ores (when enabled)
   - Vanilla ores
   - Any mod that uses standard Minecraft worldgen
