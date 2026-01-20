// Tech Progression - Fluid Definitions
// Unified fluid names and their mod-specific variants

/**
 * FLUID UNIFICATION:
 * When multiple mods have the same or functionally equivalent fluids,
 * we unify them using tags and recipe conversions.
 *
 * Priority order for canonical fluids (per Phase 1.2 requirements):
 * 1. Create (for Create-specific fluids like chocolate, honey)
 * 2. Immersive Engineering (for industrial chemicals and fuels)
 * 3. Create: The Factory Must Grow (for TFMG-specific industrial fluids)
 * 4. Immersive Petroleum (for petroleum products)
 * 5. Mekanism (for chemicals and liquid metals)
 * 6. Tinkers Construct (for molten metals - canonical source)
 * 7. PneumaticCraft (for plastic and some industrial fluids)
 * 8. Other mods (as needed)
 * 
 * This unification ensures:
 * - Consistent behavior across all mods
 * - Recipe compatibility
 * - No duplicate fluids in JEI/NEI
 * - Easier cross-mod integration
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
        'pneumaticcraft:diesel',
        'tfmg:diesel'
    ],
    biodiesel: [
        'immersiveengineering:biodiesel'
    ],
    gasoline: [
        'immersivepetroleum:gasoline',
        'tfmg:gasoline'
    ],
    ethanol: [
        'immersiveengineering:ethanol',
        'createaddition:bioethanol'
    ],
    kerosene: [
        'immersivepetroleum:kerosene',
        'tfmg:kerosene'
    ],

    // Oils
    crude_oil: [
        'immersivepetroleum:crude_oil',
        'pneumaticcraft:oil',
        'tfmg:crude_oil'
    ],
    heavy_oil: [
        'tfmg:heavy_oil'
    ],
    light_oil: [
        'tfmg:light_oil'
    ],
    naphtha: [
        'immersivepetroleum:naphtha',
        'tfmg:naphtha'
    ],
    lubricant: [
        'immersivepetroleum:lubricant',
        'pneumaticcraft:lubricant',
        'tfmg:lubrication_oil'
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

    // Acids
    sulfuric_acid: [
        'mekanism:sulfuric_acid',
        'tfmg:sulfuric_acid'
    ],
    nitric_acid: [
        'tfmg:nitric_acid'
    ],
    hydrochloric_acid: [
        'mekanism:hydrogen_chloride',
        'tfmg:hydrochloric_acid'
    ],

    // Plastic-related
    plastic: [
        'pneumaticcraft:plastic',
        'tfmg:liquid_plastic',
        'industrialforegoing:pink_slime'
    ],
    
    // Steam and vapors
    steam: [
        'mekanism:steam',
        'createaddition:seed_oil'
    ],

    // Other industrial
    liquid_soap: [
        'tfmg:liquid_soap'
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
// TFMG FLUIDS (Create: The Factory Must Grow)
// ============================================
global.TFMG_FLUIDS = {
    // Fuels
    diesel: 'tfmg:diesel',
    gasoline: 'tfmg:gasoline',
    kerosene: 'tfmg:kerosene',
    
    // Oils
    crude_oil: 'tfmg:crude_oil',
    heavy_oil: 'tfmg:heavy_oil',
    light_oil: 'tfmg:light_oil',
    naphtha: 'tfmg:naphtha',
    lubrication_oil: 'tfmg:lubrication_oil',
    
    // Chemicals
    sulfuric_acid: 'tfmg:sulfuric_acid',
    nitric_acid: 'tfmg:nitric_acid',
    hydrochloric_acid: 'tfmg:hydrochloric_acid',
    
    // Industrial
    liquid_plastic: 'tfmg:liquid_plastic',
    liquid_soap: 'tfmg:liquid_soap'
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
    // Molten metals
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
    'forge:molten_brass': ['tconstruct:molten_brass', 'create:molten_brass'],
    
    // Fuels
    'forge:diesel': ['immersivepetroleum:diesel', 'pneumaticcraft:diesel', 'tfmg:diesel'],
    'forge:gasoline': ['immersivepetroleum:gasoline', 'tfmg:gasoline'],
    'forge:kerosene': ['immersivepetroleum:kerosene', 'tfmg:kerosene'],
    'forge:ethanol': ['immersiveengineering:ethanol', 'createaddition:bioethanol'],
    'forge:biodiesel': ['immersiveengineering:biodiesel'],
    
    // Oils
    'forge:crude_oil': ['immersivepetroleum:crude_oil', 'pneumaticcraft:oil', 'tfmg:crude_oil'],
    'forge:naphtha': ['immersivepetroleum:naphtha', 'tfmg:naphtha'],
    'forge:lubricant': ['immersivepetroleum:lubricant', 'pneumaticcraft:lubricant', 'tfmg:lubrication_oil'],
    'forge:plant_oil': ['immersiveengineering:plantoil'],
    
    // Industrial chemicals
    'forge:concrete': ['immersiveengineering:concrete', 'create:flowing_concrete'],
    'forge:plastic': ['pneumaticcraft:plastic', 'tfmg:liquid_plastic'],
    'forge:sulfuric_acid': ['mekanism:sulfuric_acid', 'tfmg:sulfuric_acid'],
    'forge:hydrochloric_acid': ['mekanism:hydrogen_chloride', 'tfmg:hydrochloric_acid'],
    
    // Utility
    'forge:experience': ['mob_grinding_utils:fluid_xp', 'sophisticatedbackpacks:xp_still'],
    'forge:creosote': ['immersiveengineering:creosote']
};

console.log('[Tech Progression] Fluid definitions loaded');
