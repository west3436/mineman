// Tech Progression - Tag Definitions
// Common tag definitions for cross-mod unification

/**
 * TAG USAGE:
 * Tags are used to unify items and fluids across different mods,
 * allowing recipes to accept any mod's version of the same material.
 *
 * Priority system:
 * 1. Use forge: namespace tags when available
 * 2. Create custom tags when needed for progression
 * 3. Reference these in recipes for maximum compatibility
 */

// ============================================
// ITEM TAGS - INGOTS
// ============================================
global.INGOT_TAGS = {
    copper: 'forge:ingots/copper',
    tin: 'forge:ingots/tin',
    bronze: 'forge:ingots/bronze',
    iron: 'forge:ingots/iron',
    gold: 'forge:ingots/gold',
    steel: 'forge:ingots/steel',
    nickel: 'forge:ingots/nickel',
    silver: 'forge:ingots/silver',
    lead: 'forge:ingots/lead',
    invar: 'forge:ingots/invar',
    electrum: 'forge:ingots/electrum',
    constantan: 'forge:ingots/constantan',
    aluminum: 'forge:ingots/aluminum',
    signalum: 'forge:ingots/signalum',
    lumium: 'forge:ingots/lumium',
    enderium: 'forge:ingots/enderium',
    osmium: 'forge:ingots/osmium',
    uranium: 'forge:ingots/uranium',
    brass: 'forge:ingots/brass',
    zinc: 'forge:ingots/zinc'
};

// ============================================
// ITEM TAGS - PLATES
// ============================================
global.PLATE_TAGS = {
    copper: 'forge:plates/copper',
    tin: 'forge:plates/tin',
    bronze: 'forge:plates/bronze',
    iron: 'forge:plates/iron',
    gold: 'forge:plates/gold',
    steel: 'forge:plates/steel',
    nickel: 'forge:plates/nickel',
    silver: 'forge:plates/silver',
    lead: 'forge:plates/lead',
    electrum: 'forge:plates/electrum',
    constantan: 'forge:plates/constantan',
    aluminum: 'forge:plates/aluminum',
    brass: 'forge:plates/brass',
    osmium: 'forge:plates/osmium',
    uranium: 'forge:plates/uranium'
};

// ============================================
// ITEM TAGS - GEARS
// ============================================
global.GEAR_TAGS = {
    copper: 'forge:gears/copper',
    tin: 'forge:gears/tin',
    bronze: 'forge:gears/bronze',
    iron: 'forge:gears/iron',
    gold: 'forge:gears/gold',
    steel: 'forge:gears/steel',
    osmium: 'forge:gears/osmium'
};

// ============================================
// ITEM TAGS - DUSTS
// ============================================
global.DUST_TAGS = {
    copper: 'forge:dusts/copper',
    tin: 'forge:dusts/tin',
    bronze: 'forge:dusts/bronze',
    iron: 'forge:dusts/iron',
    gold: 'forge:dusts/gold',
    steel: 'forge:dusts/steel',
    nickel: 'forge:dusts/nickel',
    silver: 'forge:dusts/silver',
    lead: 'forge:dusts/lead',
    electrum: 'forge:dusts/electrum',
    constantan: 'forge:dusts/constantan',
    aluminum: 'forge:dusts/aluminum',
    osmium: 'forge:dusts/osmium',
    uranium: 'forge:dusts/uranium',
    coal: 'forge:dusts/coal',
    diamond: 'forge:dusts/diamond',
    emerald: 'forge:dusts/emerald'
};

// ============================================
// ITEM TAGS - NUGGETS
// ============================================
global.NUGGET_TAGS = {
    copper: 'forge:nuggets/copper',
    tin: 'forge:nuggets/tin',
    bronze: 'forge:nuggets/bronze',
    iron: 'forge:nuggets/iron',
    gold: 'forge:nuggets/gold',
    steel: 'forge:nuggets/steel',
    nickel: 'forge:nuggets/nickel',
    silver: 'forge:nuggets/silver',
    lead: 'forge:nuggets/lead',
    electrum: 'forge:nuggets/electrum',
    constantan: 'forge:nuggets/constantan',
    aluminum: 'forge:nuggets/aluminum',
    osmium: 'forge:nuggets/osmium',
    uranium: 'forge:nuggets/uranium',
    brass: 'forge:nuggets/brass',
    zinc: 'forge:nuggets/zinc'
};

// ============================================
// ITEM TAGS - STORAGE BLOCKS
// ============================================
global.STORAGE_BLOCK_TAGS = {
    copper: 'forge:storage_blocks/copper',
    tin: 'forge:storage_blocks/tin',
    bronze: 'forge:storage_blocks/bronze',
    iron: 'forge:storage_blocks/iron',
    gold: 'forge:storage_blocks/gold',
    steel: 'forge:storage_blocks/steel',
    nickel: 'forge:storage_blocks/nickel',
    silver: 'forge:storage_blocks/silver',
    lead: 'forge:storage_blocks/lead',
    electrum: 'forge:storage_blocks/electrum',
    constantan: 'forge:storage_blocks/constantan',
    aluminum: 'forge:storage_blocks/aluminum',
    osmium: 'forge:storage_blocks/osmium',
    uranium: 'forge:storage_blocks/uranium',
    brass: 'forge:storage_blocks/brass',
    zinc: 'forge:storage_blocks/zinc'
};

// ============================================
// ITEM TAGS - ORES
// ============================================
global.ORE_TAGS = {
    copper: 'forge:ores/copper',
    tin: 'forge:ores/tin',
    iron: 'forge:ores/iron',
    gold: 'forge:ores/gold',
    nickel: 'forge:ores/nickel',
    silver: 'forge:ores/silver',
    lead: 'forge:ores/lead',
    aluminum: 'forge:ores/aluminum',
    osmium: 'forge:ores/osmium',
    uranium: 'forge:ores/uranium',
    zinc: 'forge:ores/zinc',
    coal: 'forge:ores/coal',
    diamond: 'forge:ores/diamond',
    emerald: 'forge:ores/emerald',
    redstone: 'forge:ores/redstone',
    lapis: 'forge:ores/lapis',
    quartz: 'forge:ores/quartz'
};

// ============================================
// ITEM TAGS - RAW MATERIALS
// ============================================
global.RAW_MATERIAL_TAGS = {
    copper: 'forge:raw_materials/copper',
    tin: 'forge:raw_materials/tin',
    iron: 'forge:raw_materials/iron',
    gold: 'forge:raw_materials/gold',
    nickel: 'forge:raw_materials/nickel',
    silver: 'forge:raw_materials/silver',
    lead: 'forge:raw_materials/lead',
    aluminum: 'forge:raw_materials/aluminum',
    osmium: 'forge:raw_materials/osmium',
    uranium: 'forge:raw_materials/uranium',
    zinc: 'forge:raw_materials/zinc'
};

// ============================================
// ITEM TAGS - RODS/STICKS
// ============================================
global.ROD_TAGS = {
    copper: 'forge:rods/copper',
    iron: 'forge:rods/iron',
    steel: 'forge:rods/steel',
    aluminum: 'forge:rods/aluminum',
    wood: 'forge:rods/wooden'
};

// ============================================
// ITEM TAGS - WIRES
// ============================================
global.WIRE_TAGS = {
    copper: 'forge:wires/copper',
    electrum: 'forge:wires/electrum',
    aluminum: 'forge:wires/aluminum',
    steel: 'forge:wires/steel',
    gold: 'forge:wires/gold'
};

// ============================================
// ITEM TAGS - GEMS
// ============================================
global.GEM_TAGS = {
    diamond: 'forge:gems/diamond',
    emerald: 'forge:gems/emerald',
    quartz: 'forge:gems/quartz',
    lapis: 'forge:gems/lapis',
    certus_quartz: 'forge:gems/certus_quartz',
    charged_certus_quartz: 'ae2:charged_certus_quartz_crystal',
    fluix: 'ae2:fluix_crystal'
};

// ============================================
// ITEM TAGS - CIRCUITS/COMPONENTS
// ============================================
global.CIRCUIT_TAGS = {
    basic: 'forge:circuits/basic',
    advanced: 'forge:circuits/advanced',
    elite: 'forge:circuits/elite',
    ultimate: 'forge:circuits/ultimate'
};

// ============================================
// CUSTOM PROGRESSION TAGS
// ============================================
global.PROGRESSION_TAGS = {
    // Machine casings by tier
    machine_casing_bronze: 'techprogression:machine_casings/bronze',
    machine_casing_steel: 'techprogression:machine_casings/steel',
    machine_casing_industrial: 'techprogression:machine_casings/industrial',
    machine_casing_advanced: 'techprogression:machine_casings/advanced',
    machine_casing_quantum: 'techprogression:machine_casings/quantum',
    machine_casing_ultimate: 'techprogression:machine_casings/ultimate',

    // Tier unlock items
    tier_0_unlock: 'techprogression:tier_unlock/primitive',
    tier_1_unlock: 'techprogression:tier_unlock/bronze',
    tier_2_unlock: 'techprogression:tier_unlock/steel',
    tier_3_unlock: 'techprogression:tier_unlock/industrial',
    tier_4_unlock: 'techprogression:tier_unlock/advanced',
    tier_5_unlock: 'techprogression:tier_unlock/quantum',
    tier_6_unlock: 'techprogression:tier_unlock/creative',

    // Path-specific components
    create_components: 'techprogression:create_components',
    immersive_components: 'techprogression:immersive_components',

    // Processing tiers
    ore_processing_basic: 'techprogression:ore_processing/basic',
    ore_processing_advanced: 'techprogression:ore_processing/advanced',
    ore_processing_quantum: 'techprogression:ore_processing/quantum'
};

// ============================================
// FLUID TAGS
// ============================================
global.FLUID_TAGS = {
    // Molten metals
    molten_iron: 'forge:molten_iron',
    molten_gold: 'forge:molten_gold',
    molten_copper: 'forge:molten_copper',
    molten_tin: 'forge:molten_tin',
    molten_lead: 'forge:molten_lead',
    molten_silver: 'forge:molten_silver',
    molten_nickel: 'forge:molten_nickel',
    molten_zinc: 'forge:molten_zinc',
    molten_osmium: 'forge:molten_osmium',
    molten_uranium: 'forge:molten_uranium',
    molten_aluminum: 'forge:molten_aluminum',
    molten_steel: 'forge:molten_steel',
    molten_bronze: 'forge:molten_bronze',
    molten_brass: 'forge:molten_brass',
    molten_electrum: 'forge:molten_electrum',
    molten_invar: 'forge:molten_invar',
    molten_constantan: 'forge:molten_constantan',

    // Industrial fluids
    diesel: 'forge:diesel',
    biodiesel: 'forge:biodiesel',
    gasoline: 'forge:gasoline',
    ethanol: 'forge:ethanol',
    crude_oil: 'forge:crude_oil',
    lubricant: 'forge:lubricant',
    creosote: 'forge:creosote',
    concrete: 'forge:concrete',

    // Common fluids
    water: 'minecraft:water',
    lava: 'minecraft:lava',
    milk: 'forge:milk',
    experience: 'forge:experience',

    // Mekanism gases (fluid-like)
    hydrogen: 'mekanism:hydrogen',
    oxygen: 'mekanism:oxygen',
    chlorine: 'mekanism:chlorine'
};

// ============================================
// TOOL TAGS
// ============================================
global.TOOL_TAGS = {
    pickaxe: 'forge:tools/pickaxe',
    axe: 'forge:tools/axe',
    shovel: 'forge:tools/shovel',
    hoe: 'forge:tools/hoe',
    sword: 'forge:tools/sword',
    wrench: 'forge:tools/wrench',
    hammer: 'forge:tools/hammer',
    wire_cutter: 'forge:tools/wire_cutter',
    screwdriver: 'forge:tools/screwdriver'
};

// ============================================
// MINECRAFT BASE TAGS
// ============================================
global.MINECRAFT_TAGS = {
    logs: 'minecraft:logs',
    planks: 'minecraft:planks',
    stone: 'forge:stone',
    cobblestone: 'forge:cobblestone',
    glass: 'forge:glass',
    sand: 'forge:sand',
    gravel: 'forge:gravel',
    dirt: 'forge:dirt',
    wool: 'minecraft:wool',
    dyes: 'forge:dyes'
};

// Helper function to get all tags for a material
global.getMaterialTags = (material) => {
    return {
        ingot: global.INGOT_TAGS[material] || null,
        plate: global.PLATE_TAGS[material] || null,
        gear: global.GEAR_TAGS[material] || null,
        dust: global.DUST_TAGS[material] || null,
        nugget: global.NUGGET_TAGS[material] || null,
        storage_block: global.STORAGE_BLOCK_TAGS[material] || null,
        ore: global.ORE_TAGS[material] || null,
        raw: global.RAW_MATERIAL_TAGS[material] || null,
        molten: global.FLUID_TAGS['molten_' + material] || null
    };
};

// Helper function to check if a tag exists
global.hasTag = (tagName) => {
    // Check all tag categories
    const allTags = {
        ...global.INGOT_TAGS,
        ...global.PLATE_TAGS,
        ...global.GEAR_TAGS,
        ...global.DUST_TAGS,
        ...global.NUGGET_TAGS,
        ...global.STORAGE_BLOCK_TAGS,
        ...global.ORE_TAGS,
        ...global.RAW_MATERIAL_TAGS,
        ...global.ROD_TAGS,
        ...global.WIRE_TAGS,
        ...global.GEM_TAGS,
        ...global.CIRCUIT_TAGS,
        ...global.PROGRESSION_TAGS,
        ...global.FLUID_TAGS,
        ...global.TOOL_TAGS,
        ...global.MINECRAFT_TAGS
    };
    return Object.values(allTags).includes(tagName);
};

console.log('[Tech Progression] Tag definitions loaded');
