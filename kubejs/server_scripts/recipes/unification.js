// kubejs/server_scripts/recipes/unification.js
// Cross-mod item unification - ensures equivalent items from different mods work together

// Unified item mappings - all variants map to primary
const UNIFIED_ITEMS = {
    // Plates
    'iron_plate': [
        'create:iron_sheet',
        'immersiveengineering:plate_iron',
        'mekanism:plate_iron',
    ],
    'copper_plate': [
        'create:copper_sheet',
        'immersiveengineering:plate_copper',
        'mekanism:plate_copper',
    ],
    'gold_plate': [
        'create:golden_sheet',
        'immersiveengineering:plate_gold',
        'mekanism:plate_gold',
    ],
    'steel_plate': [
        'tfmg:steel_sheet',
        'immersiveengineering:plate_steel',
        'mekanism:plate_steel',
    ],
    'aluminum_plate': [
        'immersiveengineering:plate_aluminum',
    ],

    // Electrum
    'electrum_ingot': [
        'createaddition:electrum_ingot',
        'immersiveengineering:ingot_electrum',
    ],
    'electrum_plate': [
        'createaddition:electrum_sheet',
        'immersiveengineering:plate_electrum',
    ],
    'electrum_nugget': [
        'createaddition:electrum_nugget',
    ],
    'electrum_rod': [
        'createaddition:electrum_rod',
    ],
    'electrum_wire': [
        'createaddition:electrum_wire',
        'immersiveengineering:wire_electrum',
    ],

    // Silver
    'silver_ingot': [
        'chemlib:silver_ingot',
        'immersiveengineering:ingot_silver',
    ],
    'silver_plate': [
        'chemlib:silver_plate',
        'immersiveengineering:plate_silver',
    ],
    'silver_dust': [
        'chemlib:silver_dust',
        'immersiveengineering:dust_silver',
    ],
    'silver_nugget': [
        'chemlib:silver_nugget',
    ],
    'silver_wire': [
        'immersiveengineering:wire_silver',
    ],

    // Dusts
    'iron_dust': [
        'mekanism:dust_iron',
        'immersiveengineering:dust_iron',
    ],
    'copper_dust': [
        'mekanism:dust_copper',
        'immersiveengineering:dust_copper',
    ],
    'gold_dust': [
        'mekanism:dust_gold',
        'immersiveengineering:dust_gold',
    ],

    // Ingots
    'steel_ingot': [
        'tfmg:steel_ingot',
        'immersiveengineering:ingot_steel',
        'mekanism:ingot_steel',
    ],
    'aluminum_ingot': [
        'immersiveengineering:ingot_aluminum',
    ],
};

// Primary item for each category (from _constants.js)
const PRIMARY_OUTPUTS = {
    'iron_plate': 'create:iron_sheet',
    'copper_plate': 'create:copper_sheet',
    'gold_plate': 'create:golden_sheet',
    'steel_plate': 'tfmg:steel_sheet',
    'steel_ingot': 'tfmg:steel_ingot',
    'iron_dust': 'mekanism:dust_iron',
    'copper_dust': 'mekanism:dust_copper',
    'gold_dust': 'mekanism:dust_gold',
    'aluminum_ingot': 'immersiveengineering:ingot_aluminum',
    'aluminum_plate': 'immersiveengineering:plate_aluminum',
    'electrum_ingot': 'immersiveengineering:ingot_electrum',
    'electrum_plate': 'immersiveengineering:plate_electrum',
    'electrum_nugget': 'createaddition:electrum_nugget',
    'electrum_rod': 'createaddition:electrum_rod',
    'electrum_wire': 'immersiveengineering:wire_electrum',
    'silver_ingot': 'immersiveengineering:ingot_silver',
    'silver_plate': 'immersiveengineering:plate_silver',
    'silver_dust': 'immersiveengineering:dust_silver',
    'silver_nugget': 'chemlib:silver_nugget',
    'silver_wire': 'immersiveengineering:wire_silver',
};

ServerEvents.recipes(event => {
    console.log('Applying recipe unification...');

    // Replace all outputs with primary
    Object.entries(UNIFIED_ITEMS).forEach(([key, variants]) => {
        const primary = PRIMARY_OUTPUTS[key];
        if (!primary) {
            console.warn(`No primary output defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                event.replaceOutput({}, variant, primary);
                console.log(`Unified ${variant} -> ${primary}`);
            }
        });
    });

    // Add explicit conversion recipes for items that players may already have
    // Electrum conversions
    event.shapeless('immersiveengineering:ingot_electrum', ['createaddition:electrum_ingot']);
    event.shapeless('createaddition:electrum_ingot', ['immersiveengineering:ingot_electrum']);
    
    event.shapeless('immersiveengineering:plate_electrum', ['createaddition:electrum_sheet']);
    event.shapeless('createaddition:electrum_sheet', ['immersiveengineering:plate_electrum']);
    
    event.shapeless('immersiveengineering:wire_electrum', ['createaddition:electrum_wire']);
    event.shapeless('createaddition:electrum_wire', ['immersiveengineering:wire_electrum']);

    // Silver conversions
    event.shapeless('immersiveengineering:ingot_silver', ['chemlib:silver_ingot']);
    event.shapeless('chemlib:silver_ingot', ['immersiveengineering:ingot_silver']);
    
    event.shapeless('immersiveengineering:plate_silver', ['chemlib:silver_plate']);
    event.shapeless('chemlib:silver_plate', ['immersiveengineering:plate_silver']);
    
    event.shapeless('immersiveengineering:dust_silver', ['chemlib:silver_dust']);
    event.shapeless('chemlib:silver_dust', ['immersiveengineering:dust_silver']);

    console.log('Recipe unification complete!');
});

ServerEvents.tags('item', event => {
    console.log('Applying item tag unification...');

    // Create unified tags for cross-mod compatibility
    Object.entries(UNIFIED_ITEMS).forEach(([key, variants]) => {
        const tagName = `forge:${key.replace('_', '/')}s`; // e.g., forge:plates/iron
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });

    console.log('Item tag unification complete!');
});
