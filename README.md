# Tech Progression Modpack

A progression-based Minecraft 1.20.1 Forge modpack featuring dual tech paths (Create + Immersive Engineering) with 6 tiers of technological advancement.

---

## Quick Info

- **Minecraft Version:** 1.20.1
- **Modloader:** Forge 47.4.13
- **Total Mods:** 178
- **Modpack Manager:** Packwiz

---

## Tech Tiers

1. **Basic Processing** - Manual/early mechanical processing
2. **Steel & Electricity** - Industrial revolution, powered machinery
3. **Oil & Plastic** - Petrochemical processing, synthetic materials
4. **Chemistry** - Complex chemical processing, pressurized systems
5. **Electronics** - Circuit fabrication, programmable machines
6. **Future Tech** - Nuclear power, digital storage, automation mastery

---

## Core Progression Paths

### Create Path
Create → The Factory Must Grow → Advanced automation

### Immersive Engineering Path
IE → Immersive Petroleum → Industrial infrastructure

**Both paths are equally viable and components are interchangeable!**

---

## Side Content (Non-Gated)

- 🚂 **Railways** - Create: Steam 'n Rails, Create Railways Navigator
- 🌾 **Agriculture** - Farmer's Delight, Agricraft, Growthcraft, Immersive Cooking
- 🗺️ **Exploration** - YUNG's structures, Moog's Voyager, Dungeons & Taverns
- 🏗️ **Building** - Macaw's mods, Supplementaries, FramedBlocks, Handcrafted

---

## Key Features

### Performance Optimizations
- FerriteCore, ModernFix, Saturn (30-50% RAM reduction)
- Canary, Radium, Better FPS (15-30% FPS boost)
- LazyDFU, Smooth Boot (20-40% faster startup)
- 11+ performance mods total

### Quality of Life
- Inventory Profiles Next - Advanced inventory management
- JEI + Just Enough Resources + Just Enough Professions
- Polymorph - Recipe conflict resolution
- FTB Ultimine - Vein mining
- Legendary Tooltips - Beautiful item info

### Cross-Mod Compatibility
- KubeJS unification (plates, dusts, ingots work across all mods)
- Integrated tier progression system
- Balanced progression gates

---

## Getting Started

### Installation

1. **Install Forge 1.20.1**
   - Download from [files.minecraftforge.net](https://files.minecraftforge.net)
   - Version: 47.4.13 or higher

2. **Install mods via Packwiz**
   ```bash
   # From pack directory
   ./packwiz install
   ```

3. **Launch Minecraft**
   - Use the Forge 1.20.1 profile
   - Allocate 6-8GB RAM recommended

### First Steps

1. Choose your path: Create or Immersive Engineering
2. Complete Tier 1 quests (when implemented)
3. Progress to steel production (Tier 2)
4. Unlock oil processing (Tier 3)
5. Master chemistry (Tier 4)
6. Build electronics (Tier 5)
7. Achieve endgame tech (Tier 6)

---

## Documentation

- **MODPACK_DEV_GUIDE.md** - Complete development guide with tier details, mod lists, KubeJS setup
- **SETUP_SUMMARY.md** - Installation status, next steps, todo lists
- **SUGGESTED_MODS_ADDED.md** - Log of all mod additions and suggestions
- **ADDITIONAL_MODS_ADDED.md** - Recovery of initially missing mods

---

## Development

### Packwiz Commands

```bash
# List all mods
./packwiz list

# Add a mod
./packwiz curseforge install <mod-slug> -y
./packwiz modrinth install <mod-slug> -y

# Remove a mod
./packwiz remove <mod-slug> -y

# Refresh index
./packwiz refresh

# Export for distribution
./packwiz curseforge export
./packwiz modrinth export
```

### KubeJS Scripts

Located in `kubejs/server_scripts/recipes/`:
- `_constants.js` - Shared constants
- `unification.js` - Cross-mod item unification
- `tier2_steel.js` through `tier6_future.js` - Tier-specific gating

### Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# View history
git log --oneline
```

---

## Recommended Specs

### Minimum
- CPU: Quad-core 3.0+ GHz
- RAM: 8GB (6GB allocated to Minecraft)
- GPU: GTX 1050 / RX 560 or better

### Recommended
- CPU: 6-core 3.5+ GHz
- RAM: 16GB (8GB allocated to Minecraft)
- GPU: RTX 2060 / RX 5700 or better

---

## Major Mods List

### Core Tech
- Create + The Factory Must Grow
- Immersive Engineering + Immersive Petroleum
- Mekanism (+ Generators, Tools)
- PneumaticCraft: Repressurized
- Industrial Foregoing
- Applied Energistics 2
- RFTools Suite
- XNet
- Flux Networks
- Alchemistry

### Automation & Logistics
- Create addons (Crafts & Additions, Ore Excavation, etc.)
- Modular Routers
- Integrated Dynamics + Tunnels
- Compact Machines

### Storage
- Storage Drawers
- Sophisticated Storage + Backpacks
- Applied Energistics 2

### Power
- Create: Nuclear
- Mekanism Generators
- Flux Networks

### Side Content
- Tinker's Construct
- Forestry: Community Edition
- ComputerCraft: Tweaked + Advanced Peripherals
- Botany Pots, Cooking for Blockheads

---

## Credits

**Modpack Author:** tsear

**Major Mod Authors:**
- simibubi (Create)
- BluSunrize (Immersive Engineering)
- desht (PneumaticCraft)
- aidancbrady (Mekanism)
- And 100+ other amazing mod developers!

---

## License

This modpack follows the individual licenses of included mods. Please respect mod authors' wishes regarding redistribution.

---

## Support & Links

- **Issues:** Report at your distribution platform
- **Packwiz:** https://packwiz.infra.link/
- **KubeJS:** https://kubejs.com/

---

**Version:** 1.0.0
**Last Updated:** 2026-01-13
