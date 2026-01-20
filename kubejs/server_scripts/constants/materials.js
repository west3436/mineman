// Tech Progression - Material Definitions
// Unified material names and their mod-specific item IDs

/**
 * MATERIAL UNIFICATION PRIORITY:
 * 1. Create
 * 2. Immersive Engineering
 * 3. Mekanism
 * 4. Create: The Factory Must Grow
 * 5. Other mods
 */

// Canonical ingot items - the "primary" version we use
global.INGOTS = {
    // Tier 0-1 Materials
    copper: 'minecraft:copper_ingot',
    tin: 'mekanism:ingot_tin',
    bronze: 'mekanism:ingot_bronze',

    // Tier 2 Materials
    iron: 'minecraft:iron_ingot',
    gold: 'minecraft:gold_ingot',
    steel: 'mekanism:ingot_steel',

    // Tier 3 Materials
    nickel: 'immersiveengineering:ingot_nickel',
    silver: 'immersiveengineering:ingot_silver',
    lead: 'mekanism:ingot_lead',
    invar: 'mekanism:alloy_infused', // Placeholder - may need thermal
    electrum: 'immersiveengineering:ingot_electrum',
    constantan: 'immersiveengineering:ingot_constantan',
    aluminum: 'immersiveengineering:ingot_aluminum',

    // Tier 4 Materials
    signalum: 'thermal:signalum_ingot', // If thermal installed
    lumium: 'thermal:lumium_ingot',
    enderium: 'thermal:enderium_ingot',
    refined_obsidian: 'mekanism:ingot_refined_obsidian',
    refined_glowstone: 'mekanism:ingot_refined_glowstone',

    // Tier 5 Materials
    osmium: 'mekanism:ingot_osmium',
    uranium: 'mekanism:ingot_uranium',

    // Electrodynamics materials
    vanadium: 'electrodynamics:ingotvanadiumsteel',
    chromium: 'electrodynamics:ingotstainlesssteel',
    titanium: 'electrodynamics:ingottitanium',

    // Create materials
    brass: 'create:brass_ingot',
    zinc: 'create:zinc_ingot'
};

// Plate variants by material
global.PLATES = {
    copper: ['create:copper_sheet', 'immersiveengineering:plate_copper', 'mekanism:plate_copper'],
    tin: ['mekanism:plate_tin'],
    bronze: ['mekanism:plate_bronze', 'create:bronze_sheet'],
    iron: ['create:iron_sheet', 'immersiveengineering:plate_iron'],
    gold: ['create:golden_sheet', 'immersiveengineering:plate_gold'],
    steel: ['mekanism:plate_steel', 'immersiveengineering:plate_steel', 'create:steel_sheet'],
    nickel: ['immersiveengineering:plate_nickel'],
    silver: ['immersiveengineering:plate_silver'],
    lead: ['mekanism:plate_lead', 'immersiveengineering:plate_lead'],
    electrum: ['immersiveengineering:plate_electrum'],
    constantan: ['immersiveengineering:plate_constantan'],
    aluminum: ['immersiveengineering:plate_aluminum'],
    brass: ['create:brass_sheet'],
    osmium: ['mekanism:plate_osmium'],
    uranium: ['mekanism:plate_uranium']
};

// Canonical plate (primary version to use)
global.PLATE = {
    copper: 'create:copper_sheet',
    tin: 'mekanism:plate_tin',
    bronze: 'create:bronze_sheet', // Create before Mekanism
    iron: 'create:iron_sheet',
    gold: 'create:golden_sheet',
    steel: 'create:steel_sheet', // Prefer Create if available, else Mekanism
    nickel: 'immersiveengineering:plate_nickel',
    silver: 'immersiveengineering:plate_silver',
    lead: 'immersiveengineering:plate_lead', // IE before Mekanism
    electrum: 'immersiveengineering:plate_electrum',
    constantan: 'immersiveengineering:plate_constantan',
    aluminum: 'immersiveengineering:plate_aluminum',
    brass: 'create:brass_sheet',
    osmium: 'mekanism:plate_osmium',
    uranium: 'mekanism:plate_uranium'
};

// Gear variants
global.GEARS = {
    copper: ['mekanism:gear_copper'],
    tin: ['mekanism:gear_tin'],
    bronze: ['mekanism:gear_bronze'],
    iron: ['mekanism:gear_iron'],
    gold: ['mekanism:gear_gold'],
    steel: ['mekanism:gear_steel'],
    osmium: ['mekanism:gear_osmium']
};

// Canonical gears
global.GEAR = {
    copper: '#forge:gears/copper',
    tin: '#forge:gears/tin',
    bronze: '#forge:gears/bronze',
    iron: '#forge:gears/iron',
    gold: '#forge:gears/gold',
    steel: '#forge:gears/steel',
    osmium: '#forge:gears/osmium'
};

// Rod/stick variants
global.RODS = {
    copper: ['immersiveengineering:stick_copper'],
    iron: ['create:iron_rod', 'immersiveengineering:stick_iron'], // Create before IE
    steel: ['immersiveengineering:stick_steel'],
    aluminum: ['immersiveengineering:stick_aluminum']
};

// Canonical rods (primary version to use)
global.ROD = {
    copper: 'immersiveengineering:stick_copper',
    iron: 'create:iron_rod', // Create first
    steel: 'immersiveengineering:stick_steel',
    aluminum: 'immersiveengineering:stick_aluminum'
};

// Wire variants
global.WIRES = {
    copper: ['immersiveengineering:wire_copper', 'mekanism:wire_copper'], // IE before Mekanism
    electrum: ['immersiveengineering:wire_electrum'],
    aluminum: ['immersiveengineering:wire_aluminum'],
    steel: ['immersiveengineering:wire_steel']
};

// Canonical wires (primary version to use)
global.WIRE = {
    copper: 'immersiveengineering:wire_copper',
    electrum: 'immersiveengineering:wire_electrum',
    aluminum: 'immersiveengineering:wire_aluminum',
    steel: 'immersiveengineering:wire_steel'
};

// Dust variants (for processing)
global.DUSTS = {
    copper: ['immersiveengineering:dust_copper', 'mekanism:dust_copper'], // IE before Mekanism
    tin: ['mekanism:dust_tin'],
    bronze: ['mekanism:dust_bronze'],
    iron: ['immersiveengineering:dust_iron', 'mekanism:dust_iron'], // IE before Mekanism
    gold: ['immersiveengineering:dust_gold', 'mekanism:dust_gold'], // IE before Mekanism
    steel: ['mekanism:dust_steel'],
    nickel: ['immersiveengineering:dust_nickel'],
    silver: ['immersiveengineering:dust_silver', 'mekanism:dust_silver'], // IE before Mekanism
    lead: ['immersiveengineering:dust_lead', 'mekanism:dust_lead'], // IE before Mekanism
    electrum: ['immersiveengineering:dust_electrum'],
    constantan: ['immersiveengineering:dust_constantan'],
    aluminum: ['immersiveengineering:dust_aluminum'],
    osmium: ['mekanism:dust_osmium'],
    uranium: ['mekanism:dust_uranium']
};

// Canonical dusts (primary version to use)
global.DUST = {
    copper: 'immersiveengineering:dust_copper',
    tin: 'mekanism:dust_tin',
    bronze: 'mekanism:dust_bronze',
    iron: 'immersiveengineering:dust_iron',
    gold: 'immersiveengineering:dust_gold',
    steel: 'mekanism:dust_steel',
    nickel: 'immersiveengineering:dust_nickel',
    silver: 'immersiveengineering:dust_silver',
    lead: 'immersiveengineering:dust_lead',
    electrum: 'immersiveengineering:dust_electrum',
    constantan: 'immersiveengineering:dust_constantan',
    aluminum: 'immersiveengineering:dust_aluminum',
    osmium: 'mekanism:dust_osmium',
    uranium: 'mekanism:dust_uranium'
};

// Nugget variants
global.NUGGETS = {
    copper: ['create:copper_nugget', 'immersiveengineering:nugget_copper', 'mekanism:nugget_copper'], // Create > IE > Mekanism
    tin: ['mekanism:nugget_tin'],
    bronze: ['mekanism:nugget_bronze'],
    iron: ['minecraft:iron_nugget'],
    gold: ['minecraft:gold_nugget'],
    steel: ['immersiveengineering:nugget_steel', 'mekanism:nugget_steel'], // IE before Mekanism
    nickel: ['immersiveengineering:nugget_nickel'],
    silver: ['immersiveengineering:nugget_silver'],
    lead: ['immersiveengineering:nugget_lead', 'mekanism:nugget_lead'], // IE before Mekanism
    electrum: ['immersiveengineering:nugget_electrum'],
    constantan: ['immersiveengineering:nugget_constantan'],
    aluminum: ['immersiveengineering:nugget_aluminum'],
    osmium: ['mekanism:nugget_osmium'],
    uranium: ['mekanism:nugget_uranium'],
    brass: ['create:brass_nugget'],
    zinc: ['create:zinc_nugget']
};

// Canonical nuggets (primary version to use)
global.NUGGET = {
    copper: 'create:copper_nugget', // Create first
    tin: 'mekanism:nugget_tin',
    bronze: 'mekanism:nugget_bronze',
    iron: 'minecraft:iron_nugget',
    gold: 'minecraft:gold_nugget',
    steel: 'immersiveengineering:nugget_steel', // IE before Mekanism
    nickel: 'immersiveengineering:nugget_nickel',
    silver: 'immersiveengineering:nugget_silver',
    lead: 'immersiveengineering:nugget_lead', // IE before Mekanism
    electrum: 'immersiveengineering:nugget_electrum',
    constantan: 'immersiveengineering:nugget_constantan',
    aluminum: 'immersiveengineering:nugget_aluminum',
    osmium: 'mekanism:nugget_osmium',
    uranium: 'mekanism:nugget_uranium',
    brass: 'create:brass_nugget',
    zinc: 'create:zinc_nugget'
};

// Block variants (storage blocks)
global.STORAGE_BLOCKS = {
    copper: 'minecraft:copper_block',
    tin: 'mekanism:block_tin',
    bronze: 'mekanism:block_bronze',
    iron: 'minecraft:iron_block',
    gold: 'minecraft:gold_block',
    steel: 'immersiveengineering:storage_steel', // IE before Mekanism
    nickel: 'immersiveengineering:storage_nickel',
    silver: 'immersiveengineering:storage_silver',
    lead: 'immersiveengineering:storage_lead', // IE before Mekanism
    electrum: 'immersiveengineering:storage_electrum',
    constantan: 'immersiveengineering:storage_constantan',
    aluminum: 'immersiveengineering:storage_aluminum',
    osmium: 'mekanism:block_osmium',
    uranium: 'mekanism:block_uranium',
    brass: 'create:brass_block',
    zinc: 'create:zinc_block'
};

// Raw ore variants
global.RAW_ORES = {
    copper: 'minecraft:raw_copper',
    tin: 'mekanism:raw_tin',
    iron: 'minecraft:raw_iron',
    gold: 'minecraft:raw_gold',
    nickel: 'immersiveengineering:raw_nickel',
    silver: 'immersiveengineering:raw_silver',
    lead: 'immersiveengineering:raw_lead', // IE before Mekanism
    aluminum: 'immersiveengineering:raw_aluminum',
    osmium: 'mekanism:raw_osmium',
    uranium: 'mekanism:raw_uranium',
    zinc: 'create:raw_zinc'
};

// Material to tier mapping
global.MATERIAL_TIERS = {
    // Tier 0
    wood: 0, stone: 0, flint: 0,
    // Tier 1
    copper: 1, tin: 1, bronze: 1, zinc: 1,
    // Tier 2
    iron: 2, gold: 2, steel: 2, brass: 2,
    // Tier 3
    nickel: 3, silver: 3, lead: 3, invar: 3, electrum: 3, constantan: 3, aluminum: 3,
    // Tier 4
    signalum: 4, lumium: 4, enderium: 4, refined_obsidian: 4, refined_glowstone: 4,
    // Tier 5
    osmium: 5, uranium: 5, plutonium: 5,
    // Tier 6
    ultimate: 6
};

console.log('[Tech Progression] Material definitions loaded');
