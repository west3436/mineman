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
    'lead_plate': [
        'tfmg:lead_sheet',
        'immersiveengineering:plate_lead',
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
    'lead_dust': [
        'mekanism:dust_lead',
        'immersiveengineering:dust_lead',
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
    'lead_ingot': [
        'tfmg:lead_ingot',
        'immersiveengineering:ingot_lead',
        'mekanism:ingot_lead',
        'createnuclear:lead_ingot',
    ],

    // Blocks
    'lead_block': [
        'tfmg:lead_block',
        'createnuclear:lead_block',
    ],
    'raw_lead_block': [
        'tfmg:raw_lead_block',
        'createnuclear:raw_lead_block',
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
    'lead_ingot': 'tfmg:lead_ingot',
    'lead_plate': 'tfmg:lead_sheet',
    'lead_dust': 'mekanism:dust_lead',
    'lead_block': 'tfmg:lead_block',
    'raw_lead_block': 'tfmg:raw_lead_block',
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
