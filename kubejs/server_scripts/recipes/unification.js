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
        'tfmg:aluminum_sheet',
    ],
    'lead_plate': [
        'tfmg:lead_sheet',
        'immersiveengineering:plate_lead',
    ],

    // Plastic Items
    'plastic': [
        'tfmg:plastic_sheet',
        'pneumaticcraft:plastic',
        'industrialforegoing:plastic',
    ],

    // Electrum
    'electrum_ingot': [
        'createaddition:electrum_ingot',
        'immersiveengineering:ingot_electrum',
    ],
    'electrum_plate': [
        'createaddition:electrum_sheet',
        'immersiveengineering:plate_electrum',
    ],
    'electrum_nugget': [
        'createaddition:electrum_nugget',
    ],
    'electrum_rod': [
        'createaddition:electrum_rod',
    ],
    'electrum_wire': [
        'createaddition:electrum_wire',
        'immersiveengineering:wire_electrum',
    ],

    // Silver
    'silver_ingot': [
        'chemlib:silver_ingot',
        'immersiveengineering:ingot_silver',
    ],
    'silver_plate': [
        'chemlib:silver_plate',
        'immersiveengineering:plate_silver',
    ],
    'silver_dust': [
        'chemlib:silver_dust',
        'immersiveengineering:dust_silver',
    ],
    'silver_nugget': [
        'chemlib:silver_nugget',
    ],
    'silver_wire': [
        'immersiveengineering:wire_silver',
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
        'createnuclear:steel_ingot',
    ],
    'aluminum_ingot': [
        'tfmg:aluminum_ingot',
        'immersiveengineering:ingot_aluminum',
    ],
    'constantan_ingot': [
        'tfmg:constantan_ingot',
        'immersiveengineering:ingot_constantan',
    ],
    'nickel_ingot': [
        'tfmg:nickel_ingot',
        'immersiveengineering:ingot_nickel',
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
    'molten_steel': [
        'tfmg:molten_steel',
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
    'electrum_ingot': 'immersiveengineering:ingot_electrum',
    'electrum_plate': 'immersiveengineering:plate_electrum',
    'electrum_nugget': 'createaddition:electrum_nugget',
    'electrum_rod': 'createaddition:electrum_rod',
    'electrum_wire': 'immersiveengineering:wire_electrum',
    'silver_ingot': 'immersiveengineering:ingot_silver',
    'silver_plate': 'immersiveengineering:plate_silver',
    'silver_dust': 'immersiveengineering:dust_silver',
    'silver_nugget': 'chemlib:silver_nugget',
    'silver_wire': 'immersiveengineering:wire_silver',
    'plastic': 'tfmg:plastic_sheet',
    'constantan_ingot': 'tfmg:constantan_ingot',
    'nickel_ingot': 'tfmg:nickel_ingot',
    'lead_ingot': 'tfmg:lead_ingot',
    'lead_plate': 'tfmg:lead_sheet',
    'lead_dust': 'mekanism:dust_lead',
    'lead_block': 'tfmg:lead_block',
    'raw_lead_block': 'tfmg:raw_lead_block',
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
    // Item tags use forge:type/materials format (e.g., forge:plates/iron)
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

    // Special tag for plastic (singular, not "plastics")
    const plasticVariants = UNIFIED_ITEMS['plastic'];
    if (plasticVariants) {
        plasticVariants.forEach(variant => {
            event.add('forge:plastic', variant);
        });
    }

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
