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
// TConstruct is primary for molten metals (smeltery integration)
const UNIFIED_FLUIDS = {
    'molten_steel': [
        'tfmg:molten_steel',
    ],
    'molten_copper': [
        // TFMG doesn't have molten_copper, only TConstruct does
    ],
    'molten_iron': [
        // TFMG doesn't have molten_iron, only TConstruct does
    ],
    'molten_lead': [
        // TFMG doesn't have molten_lead, only TConstruct does
    ],
    'molten_gold': [
        // TFMG doesn't have molten_gold, only TConstruct does
    ],
    'molten_aluminum': [
        // TFMG doesn't have molten_aluminum, only TConstruct does
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
// TConstruct molten metals are primary for smeltery integration
const PRIMARY_FLUIDS = {
    'molten_steel': 'tconstruct:molten_steel',
    'molten_copper': 'tconstruct:molten_copper',
    'molten_iron': 'tconstruct:molten_iron',
    'molten_lead': 'tconstruct:molten_lead',
    'molten_gold': 'tconstruct:molten_gold',
    'molten_aluminum': 'tconstruct:molten_aluminum',
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
        const primary = PRIMARY_FLUIDS[key];
        if (!primary) {
            console.warn(`No primary fluid defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                event.replaceOutput({}, variant, primary);
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
        if (!primary) {
            return;
        }

        // Add both primary and variants to forge tags for compatibility
        const tagName = `forge:${key}`; // e.g., forge:molten_steel
        event.add(tagName, primary);
        variants.forEach(variant => {
            if (variant !== primary) {
                event.add(tagName, variant);
            }
        });
    });

    console.log('Fluid tag unification complete!');
});
