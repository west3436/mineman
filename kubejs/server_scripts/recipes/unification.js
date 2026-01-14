// kubejs/server_scripts/recipes/unification.js
// Cross-mod item and fluid unification - ensures equivalent items from different mods work together

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

// Unified fluid/gas mappings - all variants map to primary
// Note: Mekanism uses a chemical/gas system, TFMG and IE use fluids
// For cross-mod compatibility, we'll use bucket conversion recipes
const UNIFIED_FLUIDS = {
    // Hydrogen (primary: mekanism)
    'hydrogen_bucket': [
        'mekanism:hydrogen_bucket',
        'tfmg:hydrogen_bucket',
        'chemlib:hydrogen_bucket',
    ],
    
    // Oxygen (primary: mekanism)
    'oxygen_bucket': [
        'mekanism:oxygen_bucket',
        'chemlib:oxygen_bucket',
    ],
    
    // Sulfuric Acid (primary: mekanism)
    'sulfuric_acid_bucket': [
        'mekanism:sulfuric_acid_bucket',
        'tfmg:sulfuric_acid_bucket',
        'chemlib:sulfuric_acid_bucket',
    ],
    
    // Chlorine (primary: mekanism)
    'chlorine_bucket': [
        'mekanism:chlorine_bucket',
        'chemlib:chlorine_bucket',
    ],
    
    // Creosote (primary: immersiveengineering)
    'creosote_bucket': [
        'immersiveengineering:creosote_bucket',
        'tfmg:creosote_bucket',
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

// Primary fluid for each category
const PRIMARY_FLUID_OUTPUTS = {
    'hydrogen_bucket': 'mekanism:hydrogen_bucket',
    'oxygen_bucket': 'mekanism:oxygen_bucket',
    'sulfuric_acid_bucket': 'mekanism:sulfuric_acid_bucket',
    'chlorine_bucket': 'mekanism:chlorine_bucket',
    'creosote_bucket': 'immersiveengineering:creosote_bucket',
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

    // Add fluid bucket conversion recipes
    // These allow converting between equivalent fluid buckets from different mods
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUID_OUTPUTS[key];
        if (!primary) {
            console.warn(`No primary fluid output defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                // Add shapeless conversion recipe: variant bucket -> primary bucket
                event.shapeless(primary, [variant]);
                console.log(`Added fluid conversion: ${variant} -> ${primary}`);
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
