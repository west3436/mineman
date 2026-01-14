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
        'createnuclear:steel_ingot',
    ],
    'aluminum_ingot': [
        'immersiveengineering:ingot_aluminum',
    ],

    // Blocks
    'steel_block': [
        'tfmg:steel_block',
        'immersiveengineering:storage_steel',
        'mekanism:block_steel',
        'tconstruct:steel_block',
        'createnuclear:steel_block',
    ],

    // Nuggets
    'steel_nugget': [
        'tfmg:steel_nugget',
        'immersiveengineering:nugget_steel',
        'mekanism:nugget_steel',
        'createnuclear:steel_nugget',
    ],
};

// Note: PRIMARY_OUTPUTS is defined in _constants.js and loaded before this file

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
        let tagName;
        
        // Determine the correct tag format based on item type
        if (key.endsWith('_plate')) {
            // plates: steel_plate -> forge:plates/steel
            const material = key.replace('_plate', '');
            tagName = `forge:plates/${material}`;
        } else if (key.endsWith('_dust')) {
            // dusts: iron_dust -> forge:dusts/iron
            const material = key.replace('_dust', '');
            tagName = `forge:dusts/${material}`;
        } else if (key.endsWith('_ingot')) {
            // ingots: steel_ingot -> forge:ingots/steel
            const material = key.replace('_ingot', '');
            tagName = `forge:ingots/${material}`;
        } else if (key.endsWith('_block')) {
            // blocks: steel_block -> forge:storage_blocks/steel
            const material = key.replace('_block', '');
            tagName = `forge:storage_blocks/${material}`;
        } else if (key.endsWith('_nugget')) {
            // nuggets: steel_nugget -> forge:nuggets/steel
            const material = key.replace('_nugget', '');
            tagName = `forge:nuggets/${material}`;
        } else {
            // fallback: use original logic
            tagName = `forge:${key.replace('_', '/')}s`;
        }
        
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });

    console.log('Item tag unification complete!');
});
