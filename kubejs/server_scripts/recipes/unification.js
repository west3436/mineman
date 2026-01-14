// kubejs/server_scripts/recipes/unification.js
// Cross-mod item and fluid unification - ensures equivalent items/fluids from different mods work together

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
};

// Unified fluid mappings - all variants map to primary (Immersive Petroleum)
const UNIFIED_FLUIDS = {
    // Diesel (2 variants + 1 primary = 3 total sources)
    'diesel': [
        'pneumaticcraft:diesel',
        'tfmg:diesel',
    ],
    // Gasoline (2 variants + 1 primary = 3 total sources)
    'gasoline': [
        'pneumaticcraft:gasoline',
        'tfmg:gasoline',
    ],
    // Kerosene (2 variants + 1 primary = 3 total sources)
    'kerosene': [
        'pneumaticcraft:kerosene',
        'tfmg:kerosene',
    ],
    // Lubricant (1 variant + 1 primary = 2 total sources)
    'lubricant': [
        'pneumaticcraft:lubricant',
    ],
    // Naphtha (1 variant + 1 primary = 2 total sources)
    'naphtha': [
        'tfmg:naphtha',
    ],
    // Crude Oil (2 variants + 1 primary = 3 total sources)
    'crude_oil': [
        'tfmg:crude_oil',
        'pneumaticcraft:oil',
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
};

// Primary fluid for each category (Immersive Petroleum as primary)
const PRIMARY_FLUIDS = {
    'diesel': 'immersivepetroleum:diesel',
    'gasoline': 'immersivepetroleum:gasoline',
    'kerosene': 'immersivepetroleum:kerosene',
    'lubricant': 'immersivepetroleum:lubricant',
    'naphtha': 'immersivepetroleum:naphtha',
    'crude_oil': 'immersivepetroleum:crudeoil',
};

ServerEvents.recipes(event => {
    console.log('Applying recipe unification...');

    // Replace all item outputs with primary
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

    // Replace all fluid inputs and outputs with primary
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUIDS[key];
        if (!primary) {
            console.warn(`No primary fluid defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                // Replace fluid inputs in all recipes (KubeJS handles fluids as strings)
                event.replaceInput({}, Fluid.of(variant, 1), Fluid.of(primary, 1));
                // Replace fluid outputs in all recipes
                event.replaceOutput({}, Fluid.of(variant, 1), Fluid.of(primary, 1));
                console.log(`Unified fluid ${variant} -> ${primary}`);
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

ServerEvents.tags('fluid', event => {
    console.log('Applying fluid tag unification...');

    // Create unified tags for cross-mod fluid compatibility
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUIDS[key];
        if (!primary) return;
        
        const tagName = `forge:${key}`; // e.g., forge:diesel
        
        // Add primary fluid to tag
        event.add(tagName, primary);
        
        // Add all variants to tag for compatibility
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });

    console.log('Fluid tag unification complete!');
});
