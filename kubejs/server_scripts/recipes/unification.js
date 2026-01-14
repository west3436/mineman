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

    // Wires
    'copper_wire': [
        'createaddition:copper_wire',
        'immersiveengineering:wire_copper',
        'tfmg:copper_wire',
    ],
    'gold_wire': [
        'createaddition:gold_wire',
    ],
    'iron_wire': [
        'createaddition:iron_wire',
    ],
    'electrum_wire': [
        'createaddition:electrum_wire',
        'immersiveengineering:wire_electrum',
    ],
    'aluminum_wire': [
        'immersiveengineering:wire_aluminum',
    ],
    'lead_wire': [
        'immersiveengineering:wire_lead',
    ],
    'steel_wire': [
        'immersiveengineering:wire_steel',
    ],
    'constantan_wire': [
        'tfmg:constantan_wire',
    ],

    // Rods
    'brass_rod': [
        'createaddition:brass_rod',
    ],
    'copper_rod': [
        'createaddition:copper_rod',
    ],
    'gold_rod': [
        'createaddition:gold_rod',
    ],
    'iron_rod': [
        'createaddition:iron_rod',
    ],
    'electrum_rod': [
        'createaddition:electrum_rod',
    ],
    'graphite_rod': [
        'createnuclear:graphite_rod',
    ],
    'uranium_rod': [
        'createnuclear:uranium_rod',
    ],
    'hdpe_rod': [
        'mekanism:hdpe_rod',
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
    // Wires - Create Additions as primary for cross-mod compatibility
    'copper_wire': 'createaddition:copper_wire',
    'gold_wire': 'createaddition:gold_wire',
    'iron_wire': 'createaddition:iron_wire',
    'electrum_wire': 'createaddition:electrum_wire',
    'aluminum_wire': 'immersiveengineering:wire_aluminum',
    'lead_wire': 'immersiveengineering:wire_lead',
    'steel_wire': 'immersiveengineering:wire_steel',
    'constantan_wire': 'tfmg:constantan_wire',
    // Rods - Create Additions as primary for cross-mod compatibility
    'brass_rod': 'createaddition:brass_rod',
    'copper_rod': 'createaddition:copper_rod',
    'gold_rod': 'createaddition:gold_rod',
    'iron_rod': 'createaddition:iron_rod',
    'electrum_rod': 'createaddition:electrum_rod',
    'graphite_rod': 'createnuclear:graphite_rod',
    'uranium_rod': 'createnuclear:uranium_rod',
    'hdpe_rod': 'mekanism:hdpe_rod',
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

    console.log('Recipe unification complete!');

    // Add conversion recipes for wires
    console.log('Adding wire conversion recipes...');
    
    // Copper wire conversions
    event.shapeless('createaddition:copper_wire', ['immersiveengineering:wire_copper']);
    event.shapeless('createaddition:copper_wire', ['tfmg:copper_wire']);
    event.shapeless('immersiveengineering:wire_copper', ['createaddition:copper_wire']);
    event.shapeless('tfmg:copper_wire', ['createaddition:copper_wire']);
    
    // Electrum wire conversion
    event.shapeless('createaddition:electrum_wire', ['immersiveengineering:wire_electrum']);
    event.shapeless('immersiveengineering:wire_electrum', ['createaddition:electrum_wire']);
    
    console.log('Wire conversion recipes complete!');
    
    // Note: Rods don't need conversion recipes as they're already unified through output replacement
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
