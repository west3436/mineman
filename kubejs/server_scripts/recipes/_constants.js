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
    'aluminum_ingot': 'immersiveengineering:ingot_aluminum',
    'aluminum_plate': 'immersiveengineering:plate_aluminum',
};

// Unified tag mappings for cross-mod compatibility
const UNIFIED_TAGS = {
    'iron_plate': 'forge:plates/iron',
    'copper_plate': 'forge:plates/copper',
    'gold_plate': 'forge:plates/gold',
    'steel_plate': 'forge:plates/steel',
    'aluminum_plate': 'forge:plates/aluminum',
    'iron_gear': 'forge:gears/iron',
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
