// kubejs/server_scripts/recipes/unification.js
// Cross-mod item and fluid unification - redirects all variant outputs to primary items
// and creates unified Forge tags for cross-mod recipe compatibility

// =============================================================================
// UNIFIED ITEMS - All variants that should map to a single primary item
// =============================================================================

const UNIFIED_ITEMS = {
    // -------------------------------------------------------------------------
    // Ingots
    // -------------------------------------------------------------------------
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
    'lead_ingot': [
        'tfmg:lead_ingot',
        'immersiveengineering:ingot_lead',
        'mekanism:ingot_lead',
        'createnuclear:lead_ingot',
    ],
    'electrum_ingot': [
        'createaddition:electrum_ingot',
        'immersiveengineering:ingot_electrum',
    ],
    'silver_ingot': [
        'chemlib:silver_ingot',
        'immersiveengineering:ingot_silver',
    ],

    // -------------------------------------------------------------------------
    // Plates
    // -------------------------------------------------------------------------
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
    'electrum_plate': [
        'createaddition:electrum_sheet',
        'immersiveengineering:plate_electrum',
    ],
    'silver_plate': [
        'chemlib:silver_plate',
        'immersiveengineering:plate_silver',
    ],

    // -------------------------------------------------------------------------
    // Dusts
    // -------------------------------------------------------------------------
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
    'silver_dust': [
        'chemlib:silver_dust',
        'immersiveengineering:dust_silver',
    ],

    // -------------------------------------------------------------------------
    // Nuggets
    // -------------------------------------------------------------------------
    'steel_nugget': [
        'tfmg:steel_nugget',
        'immersiveengineering:nugget_steel',
        'mekanism:nugget_steel',
        'createnuclear:steel_nugget',
    ],
    'electrum_nugget': [
        'createaddition:electrum_nugget',
    ],
    'silver_nugget': [
        'chemlib:silver_nugget',
    ],

    // -------------------------------------------------------------------------
    // Storage Blocks
    // -------------------------------------------------------------------------
    'steel_block': [
        'tfmg:steel_block',
        'immersiveengineering:storage_steel',
        'mekanism:block_steel',
        'tconstruct:steel_block',
        'createnuclear:steel_block',
    ],
    'lead_block': [
        'tfmg:lead_block',
        'createnuclear:lead_block',
    ],
    'raw_lead_block': [
        'tfmg:raw_lead_block',
        'createnuclear:raw_lead_block',
    ],

    // -------------------------------------------------------------------------
    // Gears
    // Single-source items registered to tags for cross-mod compatibility
    // -------------------------------------------------------------------------
    'iron_gear': [
        'industrialforegoing:iron_gear',
    ],
    'gold_gear': [
        'industrialforegoing:gold_gear',
    ],
    'diamond_gear': [
        'industrialforegoing:diamond_gear',
    ],
    'copper_gear': [
        'forestry:gear_copper',
    ],
    'bronze_gear': [
        'forestry:gear_bronze',
    ],
    'tin_gear': [
        'forestry:gear_tin',
    ],

    // -------------------------------------------------------------------------
    // Wires
    // -------------------------------------------------------------------------
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
    'silver_wire': [
        'immersiveengineering:wire_silver',
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

    // -------------------------------------------------------------------------
    // Rods
    // -------------------------------------------------------------------------
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

    // -------------------------------------------------------------------------
    // Miscellaneous
    // -------------------------------------------------------------------------
    'plastic': [
        'tfmg:plastic_sheet',
        'pneumaticcraft:plastic',
        'industrialforegoing:plastic',
    ],
};

// =============================================================================
// UNIFIED FLUIDS - All variants that should map to a single primary fluid
// =============================================================================

const UNIFIED_FLUIDS = {
    // -------------------------------------------------------------------------
    // Oil Products (Primary: Immersive Petroleum)
    // -------------------------------------------------------------------------
    'crude_oil': [
        'tfmg:crude_oil',
        'pneumaticcraft:oil',
    ],
    'diesel': [
        'pneumaticcraft:diesel',
        'tfmg:diesel',
    ],
    'gasoline': [
        'pneumaticcraft:gasoline',
        'tfmg:gasoline',
    ],
    'kerosene': [
        'pneumaticcraft:kerosene',
        'tfmg:kerosene',
    ],
    'lubricant': [
        'pneumaticcraft:lubricant',
    ],
    'naphtha': [
        'tfmg:naphtha',
    ],

    // -------------------------------------------------------------------------
    // Hydrocarbon Gases (Primary: TFMG)
    // -------------------------------------------------------------------------
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

    // -------------------------------------------------------------------------
    // Biofuels (Primary: Immersive Engineering / Create Additions)
    // -------------------------------------------------------------------------
    'ethanol': [
        'immersiveengineering:ethanol',
        'createaddition:bioethanol',
        'forestry:bio_ethanol',
        'mekanismgenerators:bioethanol',
        'pneumaticcraft:ethanol',
        'chemlib:ethanol',
    ],
    'biodiesel': [
        'immersiveengineering:biodiesel',
        'pneumaticcraft:biodiesel',
    ],
    'seed_oil': [
        'createaddition:seed_oil',
        'forestry:seed_oil',
    ],

    // -------------------------------------------------------------------------
    // Miscellaneous Fluids
    // -------------------------------------------------------------------------
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

// =============================================================================
// UNIFIED BUCKET ITEMS - Chemical gas buckets for item-based unification
// Mekanism gases have bucket representations for fluid transfer compatibility
// =============================================================================

const UNIFIED_BUCKET_ITEMS = {
    'hydrogen_bucket': [
        'mekanism:hydrogen_bucket',
        'tfmg:hydrogen_bucket',
        'chemlib:hydrogen_bucket',
    ],
    'oxygen_bucket': [
        'mekanism:oxygen_bucket',
        'chemlib:oxygen_bucket',
    ],
    'chlorine_bucket': [
        'mekanism:chlorine_bucket',
        'chemlib:chlorine_bucket',
    ],
    'sulfuric_acid_bucket': [
        'mekanism:sulfuric_acid_bucket',
        'tfmg:sulfuric_acid_bucket',
        'chemlib:sulfuric_acid_bucket',
    ],
    'creosote_bucket': [
        'immersiveengineering:creosote_bucket',
        'tfmg:creosote_bucket',
    ],
};

// =============================================================================
// PRIMARY OUTPUTS - The canonical item for each unified category
// =============================================================================

const PRIMARY_OUTPUTS = {
    // Ingots
    'steel_ingot': 'tfmg:steel_ingot',
    'aluminum_ingot': 'immersiveengineering:ingot_aluminum',
    'constantan_ingot': 'tfmg:constantan_ingot',
    'nickel_ingot': 'tfmg:nickel_ingot',
    'lead_ingot': 'tfmg:lead_ingot',
    'electrum_ingot': 'immersiveengineering:ingot_electrum',
    'silver_ingot': 'immersiveengineering:ingot_silver',

    // Plates
    'iron_plate': 'create:iron_sheet',
    'copper_plate': 'create:copper_sheet',
    'gold_plate': 'create:golden_sheet',
    'steel_plate': 'tfmg:steel_sheet',
    'aluminum_plate': 'immersiveengineering:plate_aluminum',
    'lead_plate': 'tfmg:lead_sheet',
    'electrum_plate': 'immersiveengineering:plate_electrum',
    'silver_plate': 'immersiveengineering:plate_silver',

    // Dusts
    'iron_dust': 'mekanism:dust_iron',
    'copper_dust': 'mekanism:dust_copper',
    'gold_dust': 'mekanism:dust_gold',
    'lead_dust': 'mekanism:dust_lead',
    'silver_dust': 'immersiveengineering:dust_silver',

    // Nuggets
    'steel_nugget': 'tfmg:steel_nugget',
    'electrum_nugget': 'createaddition:electrum_nugget',
    'silver_nugget': 'chemlib:silver_nugget',

    // Storage Blocks
    'steel_block': 'tfmg:steel_block',
    'lead_block': 'tfmg:lead_block',
    'raw_lead_block': 'tfmg:raw_lead_block',

    // Gears
    'iron_gear': 'industrialforegoing:iron_gear',
    'gold_gear': 'industrialforegoing:gold_gear',
    'diamond_gear': 'industrialforegoing:diamond_gear',
    'copper_gear': 'forestry:gear_copper',
    'bronze_gear': 'forestry:gear_bronze',
    'tin_gear': 'forestry:gear_tin',

    // Wires
    'copper_wire': 'createaddition:copper_wire',
    'gold_wire': 'createaddition:gold_wire',
    'iron_wire': 'createaddition:iron_wire',
    'electrum_wire': 'immersiveengineering:wire_electrum',
    'silver_wire': 'immersiveengineering:wire_silver',
    'aluminum_wire': 'immersiveengineering:wire_aluminum',
    'lead_wire': 'immersiveengineering:wire_lead',
    'steel_wire': 'immersiveengineering:wire_steel',
    'constantan_wire': 'tfmg:constantan_wire',

    // Rods
    'brass_rod': 'createaddition:brass_rod',
    'copper_rod': 'createaddition:copper_rod',
    'gold_rod': 'createaddition:gold_rod',
    'iron_rod': 'createaddition:iron_rod',
    'electrum_rod': 'createaddition:electrum_rod',
    'graphite_rod': 'createnuclear:graphite_rod',
    'uranium_rod': 'createnuclear:uranium_rod',
    'hdpe_rod': 'mekanism:hdpe_rod',

    // Miscellaneous
    'plastic': 'tfmg:plastic_sheet',
};

// =============================================================================
// RECIPE UNIFICATION - Replace all variant outputs with primary items/fluids
// (PRIMARY_FLUIDS and PRIMARY_BUCKET_ITEMS are defined in _constants.js)
// =============================================================================

ServerEvents.recipes(event => {
    console.log('Applying recipe unification...');

    // Unify item outputs
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

    // Unify fluid outputs
    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUIDS[key];
        if (!primary) {
            console.warn(`No primary fluid defined for ${key}`);
            return;
        }

        variants.forEach(variant => {
            if (variant !== primary) {
                event.replaceInput({}, Fluid.of(variant, 1), Fluid.of(primary, 1));
                event.replaceOutput({}, Fluid.of(variant, 1), Fluid.of(primary, 1));
                console.log(`Unified fluid ${variant} -> ${primary}`);
            }
        });
    });

    console.log('Recipe unification complete!');
});

// =============================================================================
// ITEM TAG UNIFICATION - Create Forge tags for cross-mod compatibility
// =============================================================================

ServerEvents.tags('item', event => {
    console.log('Applying item tag unification...');

    Object.entries(UNIFIED_ITEMS).forEach(([key, variants]) => {
        let tagName;

        // Determine tag format based on item type suffix
        if (key.endsWith('_plate')) {
            tagName = `forge:plates/${key.replace('_plate', '')}`;
        } else if (key.endsWith('_dust')) {
            tagName = `forge:dusts/${key.replace('_dust', '')}`;
        } else if (key.endsWith('_ingot')) {
            tagName = `forge:ingots/${key.replace('_ingot', '')}`;
        } else if (key.endsWith('_block')) {
            tagName = `forge:storage_blocks/${key.replace('_block', '')}`;
        } else if (key.endsWith('_nugget')) {
            tagName = `forge:nuggets/${key.replace('_nugget', '')}`;
        } else if (key.endsWith('_gear')) {
            tagName = `forge:gears/${key.replace('_gear', '')}`;
        } else if (key.endsWith('_wire')) {
            tagName = `forge:wires/${key.replace('_wire', '')}`;
        } else if (key.endsWith('_rod')) {
            tagName = `forge:rods/${key.replace('_rod', '')}`;
        } else {
            tagName = `forge:${key.replace('_', '/')}s`;
        }

        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });

    // Special tag for plastic (singular form)
    const plasticVariants = UNIFIED_ITEMS['plastic'];
    if (plasticVariants) {
        plasticVariants.forEach(variant => {
            event.add('forge:plastic', variant);
        });
    }

    console.log('Item tag unification complete!');
});

// =============================================================================
// FLUID TAG UNIFICATION - Create Forge tags for cross-mod compatibility
// =============================================================================

ServerEvents.tags('fluid', event => {
    console.log('Applying fluid tag unification...');

    Object.entries(UNIFIED_FLUIDS).forEach(([key, variants]) => {
        const primary = PRIMARY_FLUIDS[key];
        if (!primary) return;

        const tagName = `forge:${key}`;

        // Add primary fluid to tag
        event.add(tagName, primary);

        // Add all variants to tag
        variants.forEach(variant => {
            event.add(tagName, variant);
        });
    });

    console.log('Fluid tag unification complete!');
});
