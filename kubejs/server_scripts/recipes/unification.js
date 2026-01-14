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
};

// Unified fluid mappings - all variants map to primary
const UNIFIED_FLUIDS = {
    // Ethanol/Bio-ethanol
    'ethanol': [
        'immersiveengineering:ethanol',
        'createaddition:bioethanol',
        'forestry:bio_ethanol',
        'mekanismgenerators:bioethanol',
        'pneumaticcraft:ethanol',
        'chemlib:ethanol',
    ],
    
    // Biodiesel
    'biodiesel': [
        'immersiveengineering:biodiesel',
        'pneumaticcraft:biodiesel',
    ],
    
    // Seed Oil
    'seed_oil': [
        'createaddition:seed_oil',
        'forestry:seed_oil',
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
    'ethanol': 'immersiveengineering:ethanol',
    'biodiesel': 'immersiveengineering:biodiesel',
    'seed_oil': 'createaddition:seed_oil',
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

    // Replace all fluid inputs and outputs with primary
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUID_OUTPUTS[key];
        if (!primary) {
            console.warn(`No primary fluid output defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                // Replace fluid inputs in all recipe types
                event.replaceInput({}, Fluid.of(variant), Fluid.of(primary));
                
                // Replace fluid outputs in all recipe types
                event.replaceOutput({}, Fluid.of(variant), Fluid.of(primary));
                
                console.log(`Unified fluid ${variant} -> ${primary}`);
            }
        });
    });

    // Add fluid conversion recipes using Create Mixing (1:1 conversion)
    // This allows players to convert duplicate fluids in a Create mixer
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUID_OUTPUTS[key];
        if (!primary) return;

        variants.forEach(variant => {
            if (variant !== primary) {
                // Add mixing conversion recipe: variant -> primary (1:1 ratio)
                // Extract just mod and fluid names for cleaner IDs
                const variantName = variant.split(':')[1];
                const primaryName = primary.split(':')[1];
                event.recipes.create.mixing(
                    Fluid.of(primary, 1000),
                    Fluid.of(variant, 1000)
                ).id(`kubejs:fluid_unification/${key}/${variantName}_to_${primaryName}`);
                
                console.log(`Added conversion recipe: ${variant} -> ${primary}`);
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
        const tagName = `forge:${key}`; // e.g., forge:ethanol
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
        console.log(`Created fluid tag ${tagName} with ${variants.length} variants`);
    });

    console.log('Fluid tag unification complete!');
});
