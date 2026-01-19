// kubejs/server_scripts/recipes/_constants.js
// Shared constants for recipe modifications

// Primary output items for unification (what all recipes will output)
const PRIMARY_OUTPUTS = {
    // Ingots
    'steel_ingot': 'tfmg:steel_ingot',
    'aluminum_ingot': 'immersiveengineering:ingot_aluminum',
    'constantan_ingot': 'tfmg:constantan_ingot',
    'nickel_ingot': 'tfmg:nickel_ingot',
    'lead_ingot': 'tfmg:lead_ingot',
    'electrum_ingot': 'immersiveengineering:ingot_electrum',
    'silver_ingot': 'immersiveengineering:ingot_silver',

    // Plates
    'iron_plate': 'create:iron_sheet',
    'copper_plate': 'create:copper_sheet',
    'gold_plate': 'create:golden_sheet',
    'steel_plate': 'tfmg:steel_sheet',
    'aluminum_plate': 'immersiveengineering:plate_aluminum',
    'lead_plate': 'tfmg:lead_sheet',
    'electrum_plate': 'immersiveengineering:plate_electrum',
    'silver_plate': 'immersiveengineering:plate_silver',

    // Dusts
    'iron_dust': 'mekanism:dust_iron',
    'copper_dust': 'mekanism:dust_copper',
    'gold_dust': 'mekanism:dust_gold',
    'lead_dust': 'mekanism:dust_lead',
    'silver_dust': 'immersiveengineering:dust_silver',

    // Nuggets
    'steel_nugget': 'tfmg:steel_nugget',
    'silver_nugget': 'chemlib:silver_nugget',

    // Storage Blocks
    'steel_block': 'tfmg:steel_block',
    'lead_block': 'tfmg:lead_block',
    'raw_lead_block': 'tfmg:raw_lead_block',

    // Gears - Use Industrial Foregoing for common materials, Forestry for unique alloys
    'iron_gear': 'industrialforegoing:iron_gear',
    'gold_gear': 'industrialforegoing:gold_gear',
    'diamond_gear': 'industrialforegoing:diamond_gear',
    'copper_gear': 'forestry:gear_copper',
    'bronze_gear': 'forestry:gear_bronze',
    'tin_gear': 'forestry:gear_tin',

    // Wires
    'copper_wire': 'immersiveengineering:wire_copper',
    'electrum_wire': 'immersiveengineering:wire_electrum',
    'silver_wire': 'immersiveengineering:wire_silver',
    'aluminum_wire': 'immersiveengineering:wire_aluminum',
    'lead_wire': 'immersiveengineering:wire_lead',
    'steel_wire': 'immersiveengineering:wire_steel',
    'constantan_wire': 'tfmg:constantan_wire',

    // Rods
    'hdpe_rod': 'mekanism:hdpe_rod',

    // Miscellaneous
    'plastic': 'tfmg:plastic_sheet',
};

// Unified tag mappings for cross-mod compatibility
const UNIFIED_TAGS = {
    'iron_plate': 'forge:plates/iron',
    'copper_plate': 'forge:plates/copper',
    'gold_plate': 'forge:plates/gold',
    'steel_plate': 'forge:plates/steel',
    'aluminum_plate': 'forge:plates/aluminum',
    'iron_gear': 'forge:gears/iron',
    'gold_gear': 'forge:gears/gold',
    'diamond_gear': 'forge:gears/diamond',
    'copper_gear': 'forge:gears/copper',
    'bronze_gear': 'forge:gears/bronze',
    'tin_gear': 'forge:gears/tin',
    'steel_gear': 'forge:gears/steel',
};

// Tier gating items - items that represent tier progression
const TIER_GATES = {
    2: [ // Steel & Electricity
        'tfmg:steel_ingot',
        'immersiveengineering:ingot_steel',
    ],
    3: [ // Oil & Plastic
        'tfmg:plastic_sheet',
    ],
    4: [ // Chemistry
        'pneumaticcraft:plastic',
        'mekanism:alloy_infused',
    ],
    5: [ // Electronics
        'pneumaticcraft:printed_circuit_board',
        'mineman:advanced_circuit',
    ],
    6: [ // Future Tech
        'ae2:controller',
    ],
};

// Primary fluid outputs for unification
const PRIMARY_FLUIDS = {
    // Oil Products (Immersive Petroleum)
    'crude_oil': 'immersivepetroleum:crudeoil',
    'diesel': 'immersivepetroleum:diesel',
    'gasoline': 'immersivepetroleum:gasoline',
    'kerosene': 'immersivepetroleum:kerosene',
    'lubricant': 'immersivepetroleum:lubricant',
    'naphtha': 'immersivepetroleum:naphtha',

    // Hydrocarbon Gases (TFMG)
    'lpg': 'tfmg:lpg',
    'propane': 'tfmg:propane',
    'butane': 'tfmg:butane',

    // Biofuels
    'ethanol': 'immersiveengineering:ethanol',
    'biodiesel': 'immersiveengineering:biodiesel',
    'seed_oil': 'forestry:seed_oil',

    // Miscellaneous
    'molten_steel': 'tconstruct:molten_steel',
    'honey': 'create:honey',
};

// Primary bucket items for chemical gases
const PRIMARY_BUCKET_ITEMS = {
    'hydrogen_bucket': 'mekanism:hydrogen_bucket',
    'oxygen_bucket': 'mekanism:oxygen_bucket',
    'chlorine_bucket': 'mekanism:chlorine_bucket',
    'sulfuric_acid_bucket': 'mekanism:sulfuric_acid_bucket',
    'creosote_bucket': 'immersiveengineering:creosote_bucket',
};
