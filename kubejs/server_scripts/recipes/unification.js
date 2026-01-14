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

// Unified fluid mappings - all variants map to primary
const UNIFIED_FLUIDS = {
    'honey': [
        'create:honey',
        'forestry:honey',
        'growthcraft_apiary:honey_fluid_source',
        'tconstruct:honey',
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
    'honey': 'create:honey',
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

    // Replace all fluid outputs with primary
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUID_OUTPUTS[key];
        if (!primary) {
            console.warn(`No primary fluid output defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                // Replace fluid outputs in recipes
                event.replaceOutput({ type: 'minecraft:crafting_shaped' }, Fluid.of(variant), Fluid.of(primary), false);
                event.replaceOutput({ type: 'minecraft:crafting_shapeless' }, Fluid.of(variant), Fluid.of(primary), false);
                console.log(`Unified fluid ${variant} -> ${primary}`);
            }
        });
    });

    // Add fluid conversion recipes (bucket to bucket)
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUID_OUTPUTS[key];
        if (!primary) return;

        variants.forEach(variant => {
            if (variant !== primary) {
                // Create conversion recipe using Create's emptying and filling
                // Emptying: variant bucket -> empty bucket + primary fluid
                event.recipes.create.emptying(
                    [Fluid.of(primary, 1000), 'minecraft:bucket'],
                    `${variant}_bucket`
                ).id(`mineman:unification/${variant.replace(':', '_')}_to_${primary.replace(':', '_')}_emptying`);

                // Filling: empty bucket + variant fluid -> primary bucket
                event.recipes.create.filling(
                    `${primary}_bucket`,
                    [Fluid.of(variant, 1000), 'minecraft:bucket']
                ).id(`mineman:unification/${variant.replace(':', '_')}_to_${primary.replace(':', '_')}_filling`);

                console.log(`Added conversion recipes for ${variant} <-> ${primary}`);
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
        const tagName = `forge:${key}`; // e.g., forge:honey
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
        console.log(`Added fluid tag ${tagName} for ${variants.join(', ')}`);
    });

    console.log('Fluid tag unification complete!');
});
