// kubejs/server_scripts/recipes/_constants.js
// Shared constants for recipe modifications

// Primary output items for unification (what all recipes will output)
const PRIMARY_OUTPUTS = {
    'iron_plate': 'create:iron_sheet',
    'copper_plate': 'create:copper_sheet',
    'gold_plate': 'create:golden_sheet',
    'steel_plate': 'tfmg:steel_sheet',
    'steel_ingot': 'tfmg:steel_ingot',
    'steel_block': 'tfmg:steel_block',
    'steel_nugget': 'tfmg:steel_nugget',
    'iron_dust': 'mekanism:dust_iron',
    'copper_dust': 'mekanism:dust_copper',
    'gold_dust': 'mekanism:dust_gold',
    // Gears - Use Industrial Foregoing for common materials, Forestry for unique alloys
    'iron_gear': 'industrialforegoing:iron_gear',
    'gold_gear': 'industrialforegoing:gold_gear',
    'diamond_gear': 'industrialforegoing:diamond_gear',
    'copper_gear': 'forestry:gear_copper',
    'bronze_gear': 'forestry:gear_bronze',
    'tin_gear': 'forestry:gear_tin',
    'aluminum_ingot': 'tfmg:aluminum_ingot',
    'aluminum_plate': 'tfmg:aluminum_sheet',
    'constantan_ingot': 'tfmg:constantan_ingot',
    'nickel_ingot': 'tfmg:nickel_ingot',
    'lead_ingot': 'tfmg:lead_ingot',
    'lead_plate': 'tfmg:lead_sheet',
    'lead_dust': 'mekanism:dust_lead',
    'lead_block': 'tfmg:lead_block',
    'raw_lead_block': 'tfmg:raw_lead_block',
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
    'diesel': 'immersivepetroleum:diesel',
    'gasoline': 'immersivepetroleum:gasoline',
    'kerosene': 'immersivepetroleum:kerosene',
    'lubricant': 'immersivepetroleum:lubricant',
    'naphtha': 'immersivepetroleum:naphtha',
    'crude_oil': 'immersivepetroleum:crudeoil',
    'honey': 'create:honey',
};
