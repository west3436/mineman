// Tech Progression - Fluid Definitions
// Unified fluid names and their mod-specific variants

/**
 * FLUID UNIFICATION:
 * When multiple mods have the same or functionally equivalent fluids,
 * we unify them using tags and recipe conversions.
 *
 * Priority order for canonical fluids:
 * 1. Tinkers Construct (molten metals)
 * 2. Mekanism
 * 3. Immersive Engineering
 * 4. Create
 * 5. Electrodynamics
 */

// ============================================
// MOLTEN METALS - Tinkers as canonical
// ============================================
global.MOLTEN_METALS = {
    // Metal name -> [mod:fluid_name, ...]
    iron: [
        'tconstruct:molten_iron',
        'mekanism:liquid_iron'
    ],
    gold: [
        'tconstruct:molten_gold',
        'mekanism:liquid_gold'
    ],
    copper: [
        'tconstruct:molten_copper',
        'mekanism:liquid_copper'
    ],
    tin: [
        'tconstruct:molten_tin',
        'mekanism:liquid_tin'
    ],
    lead: [
        'tconstruct:molten_lead',
        'mekanism:liquid_lead'
    ],
    silver: [
        'tconstruct:molten_silver',
        'mekanism:liquid_silver'
    ],
    nickel: [
        'tconstruct:molten_nickel'
    ],
    zinc: [
        'tconstruct:molten_zinc'
    ],
    osmium: [
        'tconstruct:molten_osmium',
        'mekanism:liquid_osmium'
    ],
    uranium: [
        'tconstruct:molten_uranium',
        'mekanism:liquid_uranium'
    ],
    aluminum: [
        'tconstruct:molten_aluminum'
    ],
    steel: [
        'tconstruct:molten_steel',
        'mekanism:liquid_steel'
    ],
    bronze: [
        'tconstruct:molten_bronze',
        'mekanism:liquid_bronze'
    ],
    brass: [
        'tconstruct:molten_brass',
        'create:molten_brass'
    ],
    electrum: [
        'tconstruct:molten_electrum'
    ],
    invar: [
        'tconstruct:molten_invar'
    ],
    constantan: [
        'tconstruct:molten_constantan'
    ],
    // Mekanism special alloys
    refined_obsidian: [
        'mekanism:liquid_refined_obsidian'
    ],
    refined_glowstone: [
        'mekanism:liquid_refined_glowstone'
    ]
};

// Canonical molten metal (use this in recipes)
global.MOLTEN = {
    iron: 'tconstruct:molten_iron',
    gold: 'tconstruct:molten_gold',
    copper: 'tconstruct:molten_copper',
    tin: 'tconstruct:molten_tin',
    lead: 'tconstruct:molten_lead',
    silver: 'tconstruct:molten_silver',
    nickel: 'tconstruct:molten_nickel',
    zinc: 'tconstruct:molten_zinc',
    osmium: 'tconstruct:molten_osmium',
    uranium: 'tconstruct:molten_uranium',
    aluminum: 'tconstruct:molten_aluminum',
    steel: 'tconstruct:molten_steel',
    bronze: 'tconstruct:molten_bronze',
    brass: 'tconstruct:molten_brass',
    electrum: 'tconstruct:molten_electrum',
    invar: 'tconstruct:molten_invar',
    constantan: 'tconstruct:molten_constantan'
};

// ============================================
// CHEMICAL/INDUSTRIAL FLUIDS
// ============================================
global.CHEMICAL_FLUIDS = {
    // Fuels
    diesel: [
        'immersivepetroleum:diesel',
        'pneumaticcraft:diesel'
    ],
    biodiesel: [
        'immersiveengineering:biodiesel'
    ],
    gasoline: [
        'immersivepetroleum:gasoline'
    ],
    ethanol: [
        'immersiveengineering:ethanol',
        'createaddition:bioethanol'
    ],

    // Oils
    crude_oil: [
        'immersivepetroleum:crude_oil',
        'pneumaticcraft:oil'
    ],
    lubricant: [
        'immersivepetroleum:lubricant',
        'pneumaticcraft:lubricant'
    ],
    plant_oil: [
        'immersiveengineering:plantoil'
    ],

    // Industrial chemicals
    creosote: [
        'immersiveengineering:creosote'
    ],
    concrete: [
        'immersiveengineering:concrete',
        'create:flowing_concrete'
    ],

    // Plastic-related
    plastic: [
        'pneumaticcraft:plastic',
        'industrialforegoing:pink_slime'
    ]
};

// ============================================
// MEKANISM GASES (treated as fluids in some contexts)
// ============================================
global.MEKANISM_GASES = {
    hydrogen: 'mekanism:hydrogen',
    oxygen: 'mekanism:oxygen',
    chlorine: 'mekanism:chlorine',
    sulfur_dioxide: 'mekanism:sulfur_dioxide',
    sulfur_trioxide: 'mekanism:sulfur_trioxide',
    sulfuric_acid: 'mekanism:sulfuric_acid',
    hydrogen_chloride: 'mekanism:hydrogen_chloride',
    ethene: 'mekanism:ethene',
    sodium: 'mekanism:sodium',
    lithium: 'mekanism:lithium',
    brine: 'mekanism:brine',

    // Nuclear
    nuclear_waste: 'mekanism:nuclear_waste',
    spent_nuclear_waste: 'mekanism:spent_nuclear_waste',
    plutonium: 'mekanism:plutonium',
    polonium: 'mekanism:polonium',

    // Infusion types
    carbon: 'mekanism:carbon',
    redstone: 'mekanism:redstone',
    diamond: 'mekanism:diamond',
    refined_obsidian: 'mekanism:refined_obsidian',
    gold: 'mekanism:gold',
    tin: 'mekanism:tin',
    fungi: 'mekanism:fungi',
    bio: 'mekanism:bio'
};

// ============================================
// CREATE FLUIDS
// ============================================
global.CREATE_FLUIDS = {
    chocolate: 'create:chocolate',
    honey: 'create:honey',
    potion: 'create:potion',
    tea: 'create:tea',
    builders_tea: 'create:builders_tea'
};

// ============================================
// UTILITY FLUIDS
// ============================================
global.UTILITY_FLUIDS = {
    water: 'minecraft:water',
    lava: 'minecraft:lava',
    milk: 'minecraft:milk',
    xp: [
        'mob_grinding_utils:fluid_xp',
        'sophisticatedbackpacks:xp_still'
    ],
    liquid_xp: 'mob_grinding_utils:fluid_xp' // Canonical XP fluid
};

// ============================================
// FLUID AMOUNTS (standard units)
// ============================================
global.FLUID_AMOUNTS = {
    NUGGET: 10,        // 1 nugget = 10mb
    INGOT: 90,         // 1 ingot = 90mb (Tinkers standard)
    BLOCK: 810,        // 1 block = 810mb (9 ingots)
    BUCKET: 1000,      // 1 bucket = 1000mb
    GEM: 100,          // 1 gem = 100mb
    PLATE: 90,         // 1 plate = 90mb (same as ingot)
    GEAR: 360,         // 1 gear = 360mb (4 ingots)
    ROD: 45            // 1 rod = 45mb (half ingot)
};

// ============================================
// FLUID TAG MAPPINGS
// ============================================
global.FLUID_TAGS = {
    'forge:molten_iron': ['tconstruct:molten_iron', 'mekanism:liquid_iron'],
    'forge:molten_gold': ['tconstruct:molten_gold', 'mekanism:liquid_gold'],
    'forge:molten_copper': ['tconstruct:molten_copper', 'mekanism:liquid_copper'],
    'forge:molten_tin': ['tconstruct:molten_tin', 'mekanism:liquid_tin'],
    'forge:molten_lead': ['tconstruct:molten_lead', 'mekanism:liquid_lead'],
    'forge:molten_silver': ['tconstruct:molten_silver', 'mekanism:liquid_silver'],
    'forge:molten_osmium': ['tconstruct:molten_osmium', 'mekanism:liquid_osmium'],
    'forge:molten_uranium': ['tconstruct:molten_uranium', 'mekanism:liquid_uranium'],
    'forge:molten_steel': ['tconstruct:molten_steel', 'mekanism:liquid_steel'],
    'forge:molten_bronze': ['tconstruct:molten_bronze', 'mekanism:liquid_bronze'],
    'forge:diesel': ['immersivepetroleum:diesel', 'pneumaticcraft:diesel'],
    'forge:crude_oil': ['immersivepetroleum:crude_oil', 'pneumaticcraft:oil'],
    'forge:ethanol': ['immersiveengineering:ethanol', 'createaddition:bioethanol'],
    'forge:experience': ['mob_grinding_utils:fluid_xp', 'sophisticatedbackpacks:xp_still']
};

console.log('[Tech Progression] Fluid definitions loaded');
