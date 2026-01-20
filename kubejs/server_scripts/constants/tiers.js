// Tech Progression - Tier Definitions
// This file defines the 6 technology tiers and their requirements

/**
 * TIER OVERVIEW:
 * Tier 0 - Primitive/Stone Age: Manual processing, Tinkers for first metals
 * Tier 1 - Bronze Age: Bronze components, water wheels only
 * Tier 2 - Iron/Steel Age: Steel production, basic automation
 * Tier 3 - Industrial Revolution: Advanced alloys, AE2 basics
 * Tier 4 - Advanced Technology: Signalum/Enderium, AE2 autocrafting
 * Tier 5 - Quantum Age: Mekanism, nuclear, RFTools
 * Tier 6 - Creative/End-Game: Teleportation, Flux Networks, ultimate tools
 */

global.TIERS = {
    PRIMITIVE: 0,
    BRONZE: 1,
    STEEL: 2,
    INDUSTRIAL: 3,
    ADVANCED: 4,
    QUANTUM: 5,
    CREATIVE: 6
};

// Primary materials required for each tier
global.TIER_MATERIALS = {
    0: ['wood', 'stone', 'flint', 'copper'],
    1: ['bronze', 'copper', 'tin'],
    2: ['iron', 'steel', 'gold'],
    3: ['invar', 'electrum', 'constantan', 'nickel'],
    4: ['signalum', 'lumium', 'enderium', 'refined_obsidian'],
    5: ['uranium', 'plutonium', 'quantum', 'refined_glowstone'],
    6: ['creative', 'infinite', 'ultimate']
};

// Machine frames/casings for each tier (mod-agnostic names)
global.TIER_CASINGS = {
    0: null, // No machine casing at tier 0
    1: 'bronze_machine_casing',
    2: 'steel_machine_casing',
    3: 'industrial_machine_casing',
    4: 'advanced_machine_casing',
    5: 'quantum_machine_casing',
    6: 'ultimate_machine_casing'
};

// Power generation allowed at each tier
global.TIER_POWER = {
    0: ['manual'], // Hand crank only
    1: ['water_wheel'], // Water wheels only
    2: ['water_wheel', 'windmill', 'steam', 'lv_dynamo'],
    3: ['steam', 'diesel', 'mv_dynamo', 'create_generators'],
    4: ['hv_dynamo', 'advanced_generators', 'lightning_rod'],
    5: ['nuclear_fission', 'fusion', 'mekanism_generators'],
    6: ['creative_power', 'flux_networks']
};

// Tech paths available - Create or Immersive Engineering
global.TECH_PATHS = {
    CREATE: 'create',
    IMMERSIVE: 'immersive_engineering'
};

// Items that unlock the next tier (either path works)
global.TIER_UNLOCK_ITEMS = {
    0: ['tconstruct:seared_brick'], // Smeltery unlocks Tier 1
    1: ['create:andesite_casing', 'immersiveengineering:cokebite'],
    2: ['create:brass_casing', 'immersiveengineering:steel_ingot'],
    3: ['ae2:certus_quartz_crystal', 'thermal:invar_ingot'],
    4: ['mekanism:basic_control_circuit', 'thermal:signalum_ingot'],
    5: ['mekanism:advanced_control_circuit', 'mekanism:pellet_plutonium'],
    6: [] // No unlock for tier 6, quest-gated
};

console.log('[Tech Progression] Tier definitions loaded');
