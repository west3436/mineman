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

    // Wires (single-source items included to ensure consistent tagging for cross-mod compatibility)
    'copper_wire': [
        'createaddition:copper_wire',
        'immersiveengineering:wire_copper',
        'tfmg:copper_wire',
    ],
    'gold_wire': [
        'createaddition:gold_wire',
    ],
    'iron_wire': [
        'createaddition:iron_wire',
    ],
    'electrum_wire': [
        'createaddition:electrum_wire',
        'immersiveengineering:wire_electrum',
    ],
    'aluminum_wire': [
        'immersiveengineering:wire_aluminum',
    ],
    'lead_wire': [
        'immersiveengineering:wire_lead',
    ],
    'steel_wire': [
        'immersiveengineering:wire_steel',
    ],
    'constantan_wire': [
        'tfmg:constantan_wire',
    ],

    // Rods (single-source items included to ensure consistent tagging for cross-mod compatibility)
    'brass_rod': [
        'createaddition:brass_rod',
    ],
    'copper_rod': [
        'createaddition:copper_rod',
    ],
    'gold_rod': [
        'createaddition:gold_rod',
    ],
    'iron_rod': [
        'createaddition:iron_rod',
    ],
    'electrum_rod': [
        'createaddition:electrum_rod',
    ],
    'graphite_rod': [
        'createnuclear:graphite_rod',
    ],
    'uranium_rod': [
        'createnuclear:uranium_rod',
    ],
    'hdpe_rod': [
        'mekanism:hdpe_rod',
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
    // Gears - Single source currently, but registered to tags for cross-mod compatibility
    // Industrial Foregoing provides common material gears
    'iron_gear': [
        'industrialforegoing:iron_gear',
    ],
    'gold_gear': [
        'industrialforegoing:gold_gear',
    ],
    'diamond_gear': [
        'industrialforegoing:diamond_gear',
    ],
    
    // Forestry provides unique alloy gears
    'copper_gear': [
        'forestry:gear_copper',
    ],
    'bronze_gear': [
        'forestry:gear_bronze',
    ],
    'tin_gear': [
        'forestry:gear_tin',
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
    'honey': [
        'create:honey',
        'forestry:honey',
        'growthcraft_apiary:honey_fluid_source',
        'tconstruct:honey',
    ],
};

// Unified fluid mappings - all variants map to primary (TFMG for oil refinery chain)
const UNIFIED_FLUIDS = {
    // Hydrocarbon gases from oil refining
    'lpg': [
        'pneumaticcraft:lpg',
        'tfmg:lpg',
    ],
    'propane': [
        'chemlib:propane',
        'tfmg:propane',
    ],
    'butane': [
        'chemlib:butane',
        'tfmg:butane',
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
    // Gears
    'iron_gear': 'industrialforegoing:iron_gear',
    'gold_gear': 'industrialforegoing:gold_gear',
    'diamond_gear': 'industrialforegoing:diamond_gear',
    'copper_gear': 'forestry:gear_copper',
    'bronze_gear': 'forestry:gear_bronze',
    'tin_gear': 'forestry:gear_tin',
    // Wires - Create Additions as primary for cross-mod compatibility
    'copper_wire': 'createaddition:copper_wire',
    'gold_wire': 'createaddition:gold_wire',
    'iron_wire': 'createaddition:iron_wire',
    'aluminum_wire': 'immersiveengineering:wire_aluminum',
    'lead_wire': 'immersiveengineering:wire_lead',
    'steel_wire': 'immersiveengineering:wire_steel',
    'constantan_wire': 'tfmg:constantan_wire',
    // Rods - Create Additions as primary for cross-mod compatibility
    'brass_rod': 'createaddition:brass_rod',
    'copper_rod': 'createaddition:copper_rod',
    'gold_rod': 'createaddition:gold_rod',
    'iron_rod': 'createaddition:iron_rod',
    'electrum_rod': 'createaddition:electrum_rod',
    'graphite_rod': 'createnuclear:graphite_rod',
    'uranium_rod': 'createnuclear:uranium_rod',
    'hdpe_rod': 'mekanism:hdpe_rod',
    'electrum_ingot': 'immersiveengineering:ingot_electrum',
    'electrum_plate': 'immersiveengineering:plate_electrum',
    'electrum_nugget': 'createaddition:electrum_nugget',
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
    'honey': 'create:honey',
};

// Primary fluid for each category (TFMG for oil refinery chain consistency)
const PRIMARY_FLUID_OUTPUTS = {
    'lpg': 'tfmg:lpg',
    'propane': 'tfmg:propane',
    'butane': 'tfmg:butane',
};

// Primary fluid for each category
const PRIMARY_FLUID_OUTPUTS = {
    'ethanol': 'immersiveengineering:ethanol',
    'biodiesel': 'immersiveengineering:biodiesel',
    'seed_oil': 'createaddition:seed_oil',
};

// Primary fluid for each category (derived from first/primary item in each UNIFIED_FLUIDS array)
// The first item in each array is marked with '// Primary' comment and represents the preferred source
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
        } else if (key.endsWith('_gear')) {
            const material = key.replace('_gear', '');
            tagName = `forge:gears/${material}`; // e.g., forge:gears/iron
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
