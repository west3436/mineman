// kubejs/server_scripts/recipes/unification.js
// Cross-mod item and chemical gas/fluid unification
// Ensures equivalent items and chemical gases from different mods work together

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
// Note: These are BUCKET ITEMS that contain the fluids/gases
// Mekanism gases (hydrogen, oxygen, chlorine) may have bucket representations for fluid transfer
// TFMG and IE use regular fluids (which have bucket items)
// ChemLib adds chemical compounds as items/fluids with bucket forms
const UNIFIED_FLUIDS = {
    // Hydrogen - Primary: mekanism:hydrogen_bucket
    'hydrogen_bucket': [
        'mekanism:hydrogen_bucket',    // Primary
        'tfmg:hydrogen_bucket',
        'chemlib:hydrogen_bucket',
    ],
    
    // Oxygen - Primary: mekanism:oxygen_bucket
    'oxygen_bucket': [
        'mekanism:oxygen_bucket',      // Primary
        'chemlib:oxygen_bucket',
    ],
    
    // Sulfuric Acid - Primary: mekanism:sulfuric_acid_bucket
    'sulfuric_acid_bucket': [
        'mekanism:sulfuric_acid_bucket',  // Primary
        'tfmg:sulfuric_acid_bucket',
        'chemlib:sulfuric_acid_bucket',
    ],
    
    // Chlorine - Primary: mekanism:chlorine_bucket
    'chlorine_bucket': [
        'mekanism:chlorine_bucket',    // Primary
        'chemlib:chlorine_bucket',
    ],
    
    // Creosote - Primary: immersiveengineering:creosote_bucket
    'creosote_bucket': [
        'immersiveengineering:creosote_bucket',  // Primary
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

// Primary fluid for each category (derived from first item in each UNIFIED_FLUIDS array)
const PRIMARY_FLUID_OUTPUTS = Object.fromEntries(
    Object.entries(UNIFIED_FLUIDS).map(([key, variants]) => [key, variants[0]])
);

// Constants for fluid tag generation
const BUCKET_SUFFIX = '_bucket';

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
    // Note: Recipes are only added if the items exist in the pack
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUID_OUTPUTS[key];
        if (!primary) {
            console.warn(`No primary fluid output defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                try {
                    // Add shapeless conversion recipe: variant bucket -> primary bucket
                    event.shapeless(primary, [variant]);
                    console.log(`Added fluid conversion: ${variant} -> ${primary}`);
                } catch (e) {
                    console.warn(`Could not add fluid conversion for ${variant}: ${e.message || e}`);
                }
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

    // Create unified fluid tags for cross-mod compatibility
    // This ensures recipes can accept fluids from different mods
    // Note: These reference the fluid itself (e.g., 'mekanism:hydrogen'),
    // not the bucket item (e.g., 'mekanism:hydrogen_bucket')
    // Fluid IDs are derived from bucket IDs by removing '_bucket' suffix
    Object.entries(UNIFIED_FLUIDS).forEach(([key, bucketVariants]) => {
        // Validate that the key ends with '_bucket'
        if (!key.endsWith(BUCKET_SUFFIX)) {
            console.warn(`Skipping fluid tag creation for ${key}: key must end with '${BUCKET_SUFFIX}'`);
            return;
        }
        
        // Convert bucket category to fluid tag name (e.g., 'hydrogen_bucket' -> 'forge:hydrogen')
        const fluidName = key.slice(0, -BUCKET_SUFFIX.length);
        const tagName = `forge:${fluidName}`;
        
        // Convert bucket item IDs to fluid IDs (e.g., 'mekanism:hydrogen_bucket' -> 'mekanism:hydrogen')
        bucketVariants.forEach(bucketItem => {
            // Validate that the bucket item ID ends with '_bucket'
            if (!bucketItem.endsWith(BUCKET_SUFFIX)) {
                console.warn(`Skipping ${bucketItem}: expected bucket item to end with '${BUCKET_SUFFIX}'`);
                return;
            }
            
            const fluidId = bucketItem.slice(0, -BUCKET_SUFFIX.length);
            try {
                event.add(tagName, fluidId);
                console.log(`Added ${fluidId} to ${tagName}`);
            } catch (e) {
                console.warn(`Could not add ${fluidId} to ${tagName}: ${e.message || e}`);
            }
        });
    });

    console.log('Fluid tag unification complete!');
});
