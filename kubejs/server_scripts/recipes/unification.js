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
    ],
    'aluminum_ingot': [
        'immersiveengineering:ingot_aluminum',
    ],

    // Gears - Industrial Foregoing variants (primary for common materials)
    'iron_gear': [
        'industrialforegoing:iron_gear',
    ],
    'gold_gear': [
        'industrialforegoing:gold_gear',
    ],
    'diamond_gear': [
        'industrialforegoing:diamond_gear',
    ],
    
    // Gears - Forestry variants (unique alloy materials)
    'copper_gear': [
        'forestry:gear_copper',
    ],
    'bronze_gear': [
        'forestry:gear_bronze',
    ],
    'tin_gear': [
        'forestry:gear_tin',
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
    // Gears
    'iron_gear': 'industrialforegoing:iron_gear',
    'gold_gear': 'industrialforegoing:gold_gear',
    'diamond_gear': 'industrialforegoing:diamond_gear',
    'copper_gear': 'forestry:gear_copper',
    'bronze_gear': 'forestry:gear_bronze',
    'tin_gear': 'forestry:gear_tin',
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
        // Generate tag name based on item type
        let tagName;
        if (key.endsWith('_plate')) {
            const material = key.replace('_plate', '');
            tagName = `forge:plates/${material}`; // e.g., forge:plates/iron
        } else if (key.endsWith('_dust')) {
            const material = key.replace('_dust', '');
            tagName = `forge:dusts/${material}`; // e.g., forge:dusts/iron
        } else if (key.endsWith('_ingot')) {
            const material = key.replace('_ingot', '');
            tagName = `forge:ingots/${material}`; // e.g., forge:ingots/steel
        } else if (key.endsWith('_gear')) {
            const material = key.replace('_gear', '');
            tagName = `forge:gears/${material}`; // e.g., forge:gears/iron
        } else {
            tagName = `forge:${key.replace('_', '/')}`; // fallback
        }
        
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });

    console.log('Item tag unification complete!');
});
