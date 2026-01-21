// priority: 99
// Unified Materials - Recipe Input/Output Unification
// This script modifies recipes to:
// - Replace OUTPUTS with the primary mod's item
// - Replace INPUTS with the forge tag (so any unified item works)
// Priority order: Create > Immersive Engineering > Mekanism > TFMG > Others

/**
 * Item Unification Mapping
 * Each entry contains:
 * - tag: The forge tag to use for inputs
 * - primary: The primary item to use for outputs
 * - variants: All item variants that should be unified
 */
const ITEM_UNIFICATIONS = [
    // ==================== INGOTS ====================
    {
        tag: 'forge:ingots/lead',
        primary: 'immersiveengineering:ingot_lead',
        variants: ['immersiveengineering:ingot_lead', 'mekanism:ingot_lead', 'tfmg:lead_ingot', 'electrodynamics:ingotlead', 'cgs:lead_ingot']
    },
    {
        tag: 'forge:ingots/silver',
        primary: 'immersiveengineering:ingot_silver',
        variants: ['immersiveengineering:ingot_silver', 'electrodynamics:ingotsilver']
    },
    {
        tag: 'forge:ingots/tin',
        primary: 'mekanism:ingot_tin',
        variants: ['mekanism:ingot_tin', 'forestry:ingot_tin', 'electrodynamics:ingottin']
    },
    {
        tag: 'forge:ingots/uranium',
        primary: 'immersiveengineering:ingot_uranium',
        variants: ['immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium']
    },
    {
        tag: 'forge:ingots/nickel',
        primary: 'immersiveengineering:ingot_nickel',
        variants: ['immersiveengineering:ingot_nickel', 'tfmg:nickel_ingot']
    },
    {
        tag: 'forge:ingots/aluminum',
        primary: 'immersiveengineering:ingot_aluminum',
        variants: ['immersiveengineering:ingot_aluminum', 'tfmg:aluminum_ingot', 'electrodynamics:ingotaluminum']
    },
    {
        tag: 'forge:ingots/steel',
        primary: 'immersiveengineering:ingot_steel',
        variants: ['immersiveengineering:ingot_steel', 'mekanism:ingot_steel', 'tfmg:steel_ingot', 'electrodynamics:ingotsteel', 'cgs:steel_ingot', 'industrialrenewal:ingot_steel']
    },
    {
        tag: 'forge:ingots/bronze',
        primary: 'mekanism:ingot_bronze',
        variants: ['mekanism:ingot_bronze', 'forestry:ingot_bronze', 'electrodynamics:ingotbronze']
    },
    {
        tag: 'forge:ingots/lithium',
        primary: 'tfmg:lithium_ingot',
        variants: ['tfmg:lithium_ingot', 'electrodynamics:ingotlithium']
    },
    {
        tag: 'forge:ingots/constantan',
        primary: 'immersiveengineering:ingot_constantan',
        variants: ['immersiveengineering:ingot_constantan', 'tfmg:constantan_ingot']
    },
    {
        tag: 'forge:ingots/electrum',
        primary: 'immersiveengineering:ingot_electrum',
        variants: ['immersiveengineering:ingot_electrum']
    },
    {
        tag: 'forge:ingots/zinc',
        primary: 'create:zinc_ingot',
        variants: ['create:zinc_ingot']
    },
    {
        tag: 'forge:ingots/brass',
        primary: 'create:brass_ingot',
        variants: ['create:brass_ingot']
    },
    {
        tag: 'forge:ingots/osmium',
        primary: 'mekanism:ingot_osmium',
        variants: ['mekanism:ingot_osmium']
    },

    // ==================== NUGGETS ====================
    {
        tag: 'forge:nuggets/lead',
        primary: 'immersiveengineering:nugget_lead',
        variants: ['immersiveengineering:nugget_lead', 'mekanism:nugget_lead', 'tfmg:lead_nugget', 'cgs:lead_nugget']
    },
    {
        tag: 'forge:nuggets/silver',
        primary: 'immersiveengineering:nugget_silver',
        variants: ['immersiveengineering:nugget_silver', 'electrodynamics:nuggetsilver']
    },
    {
        tag: 'forge:nuggets/tin',
        primary: 'mekanism:nugget_tin',
        variants: ['mekanism:nugget_tin', 'electrodynamics:nuggettin']
    },
    {
        tag: 'forge:nuggets/uranium',
        primary: 'immersiveengineering:nugget_uranium',
        variants: ['immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium']
    },
    {
        tag: 'forge:nuggets/nickel',
        primary: 'immersiveengineering:nugget_nickel',
        variants: ['immersiveengineering:nugget_nickel', 'tfmg:nickel_nugget']
    },
    {
        tag: 'forge:nuggets/aluminum',
        primary: 'immersiveengineering:nugget_aluminum',
        variants: ['immersiveengineering:nugget_aluminum', 'tfmg:aluminum_nugget']
    },
    {
        tag: 'forge:nuggets/steel',
        primary: 'immersiveengineering:nugget_steel',
        variants: ['immersiveengineering:nugget_steel', 'mekanism:nugget_steel', 'tfmg:steel_nugget', 'electrodynamics:nuggetsteel', 'cgs:steel_nugget']
    },
    {
        tag: 'forge:nuggets/bronze',
        primary: 'mekanism:nugget_bronze',
        variants: ['mekanism:nugget_bronze']
    },
    {
        tag: 'forge:nuggets/copper',
        primary: 'create:copper_nugget',
        variants: ['create:copper_nugget', 'immersiveengineering:nugget_copper', 'agricraft:copper_nugget', 'electrodynamics:nuggetcopper']
    },
    {
        tag: 'forge:nuggets/zinc',
        primary: 'create:zinc_nugget',
        variants: ['create:zinc_nugget']
    },
    {
        tag: 'forge:nuggets/brass',
        primary: 'create:brass_nugget',
        variants: ['create:brass_nugget']
    },
    {
        tag: 'forge:nuggets/osmium',
        primary: 'mekanism:nugget_osmium',
        variants: ['mekanism:nugget_osmium']
    },
    {
        tag: 'forge:nuggets/constantan',
        primary: 'immersiveengineering:nugget_constantan',
        variants: ['immersiveengineering:nugget_constantan', 'tfmg:constantan_nugget']
    },
    {
        tag: 'forge:nuggets/electrum',
        primary: 'immersiveengineering:nugget_electrum',
        variants: ['immersiveengineering:nugget_electrum']
    },

    // ==================== RAW MATERIALS ====================
    {
        tag: 'forge:raw_materials/lead',
        primary: 'immersiveengineering:raw_lead',
        variants: ['immersiveengineering:raw_lead', 'mekanism:raw_lead', 'tfmg:raw_lead', 'cgs:raw_lead']
    },
    {
        tag: 'forge:raw_materials/silver',
        primary: 'immersiveengineering:raw_silver',
        variants: ['immersiveengineering:raw_silver', 'electrodynamics:raworesilver']
    },
    {
        tag: 'forge:raw_materials/tin',
        primary: 'mekanism:raw_tin',
        variants: ['mekanism:raw_tin', 'forestry:raw_tin', 'electrodynamics:raworetin']
    },
    {
        tag: 'forge:raw_materials/uranium',
        primary: 'immersiveengineering:raw_uranium',
        variants: ['immersiveengineering:raw_uranium', 'mekanism:raw_uranium', 'electrodynamics:raworeuranium']
    },
    {
        tag: 'forge:raw_materials/nickel',
        primary: 'immersiveengineering:raw_nickel',
        variants: ['immersiveengineering:raw_nickel', 'tfmg:raw_nickel']
    },
    {
        tag: 'forge:raw_materials/aluminum',
        primary: 'immersiveengineering:raw_aluminum',
        variants: ['immersiveengineering:raw_aluminum']
    },
    {
        tag: 'forge:raw_materials/lithium',
        primary: 'tfmg:raw_lithium',
        variants: ['tfmg:raw_lithium', 'electrodynamics:raworelepidolite']
    },
    {
        tag: 'forge:raw_materials/zinc',
        primary: 'create:raw_zinc',
        variants: ['create:raw_zinc']
    },
    {
        tag: 'forge:raw_materials/osmium',
        primary: 'mekanism:raw_osmium',
        variants: ['mekanism:raw_osmium']
    },

    // ==================== DUSTS ====================
    {
        tag: 'forge:dusts/lead',
        primary: 'immersiveengineering:dust_lead',
        variants: ['immersiveengineering:dust_lead', 'mekanism:dust_lead', 'electrodynamics:dustlead']
    },
    {
        tag: 'forge:dusts/silver',
        primary: 'immersiveengineering:dust_silver',
        variants: ['immersiveengineering:dust_silver', 'electrodynamics:dustsilver']
    },
    {
        tag: 'forge:dusts/tin',
        primary: 'mekanism:dust_tin',
        variants: ['mekanism:dust_tin', 'electrodynamics:dusttin']
    },
    {
        tag: 'forge:dusts/uranium',
        primary: 'immersiveengineering:dust_uranium',
        variants: ['immersiveengineering:dust_uranium', 'mekanism:dust_uranium']
    },
    {
        tag: 'forge:dusts/nickel',
        primary: 'immersiveengineering:dust_nickel',
        variants: ['immersiveengineering:dust_nickel']
    },
    {
        tag: 'forge:dusts/aluminum',
        primary: 'immersiveengineering:dust_aluminum',
        variants: ['immersiveengineering:dust_aluminum']
    },
    {
        tag: 'forge:dusts/steel',
        primary: 'immersiveengineering:dust_steel',
        variants: ['immersiveengineering:dust_steel', 'mekanism:dust_steel', 'electrodynamics:duststeel']
    },
    {
        tag: 'forge:dusts/bronze',
        primary: 'mekanism:dust_bronze',
        variants: ['mekanism:dust_bronze', 'electrodynamics:dustbronze']
    },
    {
        tag: 'forge:dusts/copper',
        primary: 'immersiveengineering:dust_copper',
        variants: ['immersiveengineering:dust_copper', 'mekanism:dust_copper', 'electrodynamics:dustcopper']
    },
    {
        tag: 'forge:dusts/iron',
        primary: 'immersiveengineering:dust_iron',
        variants: ['immersiveengineering:dust_iron', 'mekanism:dust_iron', 'electrodynamics:dustiron']
    },
    {
        tag: 'forge:dusts/gold',
        primary: 'immersiveengineering:dust_gold',
        variants: ['immersiveengineering:dust_gold', 'mekanism:dust_gold', 'electrodynamics:dustgold']
    },
    {
        tag: 'forge:dusts/sulfur',
        primary: 'immersiveengineering:dust_sulfur',
        variants: ['immersiveengineering:dust_sulfur', 'mekanism:dust_sulfur', 'tfmg:sulfur_dust', 'electrodynamics:dustsulfur']
    },
    {
        tag: 'forge:dusts/lithium',
        primary: 'mekanism:dust_lithium',
        variants: ['mekanism:dust_lithium', 'electrodynamics:dustlithium']
    },
    {
        tag: 'forge:dusts/osmium',
        primary: 'mekanism:dust_osmium',
        variants: ['mekanism:dust_osmium']
    },
    {
        tag: 'forge:dusts/electrum',
        primary: 'immersiveengineering:dust_electrum',
        variants: ['immersiveengineering:dust_electrum']
    },
    {
        tag: 'forge:dusts/constantan',
        primary: 'immersiveengineering:dust_constantan',
        variants: ['immersiveengineering:dust_constantan']
    },

    // ==================== PLATES ====================
    {
        tag: 'forge:plates/lead',
        primary: 'immersiveengineering:plate_lead',
        variants: ['immersiveengineering:plate_lead', 'electrodynamics:platelead']
    },
    {
        tag: 'forge:plates/silver',
        primary: 'immersiveengineering:plate_silver',
        variants: ['immersiveengineering:plate_silver']
    },
    {
        tag: 'forge:plates/uranium',
        primary: 'immersiveengineering:plate_uranium',
        variants: ['immersiveengineering:plate_uranium']
    },
    {
        tag: 'forge:plates/nickel',
        primary: 'immersiveengineering:plate_nickel',
        variants: ['immersiveengineering:plate_nickel']
    },
    {
        tag: 'forge:plates/aluminum',
        primary: 'immersiveengineering:plate_aluminum',
        variants: ['immersiveengineering:plate_aluminum', 'electrodynamics:platealuminum']
    },
    {
        tag: 'forge:plates/steel',
        primary: 'immersiveengineering:plate_steel',
        variants: ['immersiveengineering:plate_steel', 'electrodynamics:platesteel']
    },
    {
        tag: 'forge:plates/copper',
        primary: 'immersiveengineering:plate_copper',
        variants: ['immersiveengineering:plate_copper', 'electrodynamics:platecopper']
    },
    {
        tag: 'forge:plates/iron',
        primary: 'immersiveengineering:plate_iron',
        variants: ['immersiveengineering:plate_iron', 'electrodynamics:plateiron']
    },
    {
        tag: 'forge:plates/gold',
        primary: 'immersiveengineering:plate_gold',
        variants: ['immersiveengineering:plate_gold']
    },
    {
        tag: 'forge:plates/electrum',
        primary: 'immersiveengineering:plate_electrum',
        variants: ['immersiveengineering:plate_electrum']
    },
    {
        tag: 'forge:plates/constantan',
        primary: 'immersiveengineering:plate_constantan',
        variants: ['immersiveengineering:plate_constantan']
    },

    // ==================== RAW STORAGE BLOCKS ====================
    {
        tag: 'forge:storage_blocks/raw_lead',
        primary: 'immersiveengineering:raw_block_lead',
        variants: ['immersiveengineering:raw_block_lead', 'mekanism:block_raw_lead', 'tfmg:raw_lead_block', 'electrodynamics:raworeblocklead', 'cgs:raw_lead_block']
    },
    {
        tag: 'forge:storage_blocks/raw_silver',
        primary: 'immersiveengineering:raw_block_silver',
        variants: ['immersiveengineering:raw_block_silver', 'electrodynamics:raworeblocksilver']
    },
    {
        tag: 'forge:storage_blocks/raw_tin',
        primary: 'mekanism:block_raw_tin',
        variants: ['mekanism:block_raw_tin', 'forestry:raw_tin_block', 'electrodynamics:raworeblocktin']
    },
    {
        tag: 'forge:storage_blocks/raw_uranium',
        primary: 'immersiveengineering:raw_block_uranium',
        variants: ['immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium', 'electrodynamics:raworeblockuranium']
    },
    {
        tag: 'forge:storage_blocks/raw_nickel',
        primary: 'immersiveengineering:raw_block_nickel',
        variants: ['immersiveengineering:raw_block_nickel', 'tfmg:raw_nickel_block']
    },
    {
        tag: 'forge:storage_blocks/raw_aluminum',
        primary: 'immersiveengineering:raw_block_aluminum',
        variants: ['immersiveengineering:raw_block_aluminum']
    },
    {
        tag: 'forge:storage_blocks/raw_lithium',
        primary: 'tfmg:raw_lithium_block',
        variants: ['tfmg:raw_lithium_block']
    },
    {
        tag: 'forge:storage_blocks/raw_zinc',
        primary: 'create:raw_zinc_block',
        variants: ['create:raw_zinc_block']
    },
    {
        tag: 'forge:storage_blocks/raw_osmium',
        primary: 'mekanism:block_raw_osmium',
        variants: ['mekanism:block_raw_osmium']
    },

    // ==================== CAST IRON ====================
    {
        tag: 'forge:ingots/cast_iron',
        primary: 'createbigcannons:cast_iron_ingot',
        variants: ['createbigcannons:cast_iron_ingot', 'tfmg:cast_iron_ingot']
    },
    {
        tag: 'forge:nuggets/cast_iron',
        primary: 'createbigcannons:cast_iron_nugget',
        variants: ['createbigcannons:cast_iron_nugget', 'tfmg:cast_iron_nugget']
    },

    // ==================== PLASTIC (item form) ====================
    {
        tag: 'forge:plastic',
        primary: 'tfmg:plastic_sheet',
        variants: ['tfmg:plastic_sheet', 'industrialforegoing:plastic', 'pneumaticcraft:plastic']
    },
];

ServerEvents.recipes(event => {
    ITEM_UNIFICATIONS.forEach(unification => {
        const { tag, primary, variants } = unification;

        // Replace all variant OUTPUTS with the primary item
        variants.forEach(variant => {
            if (variant !== primary) {
                try {
                    event.replaceOutput({}, variant, primary);
                } catch (e) {
                    // Item might not exist, continue
                }
            }
        });

        // Replace all variant INPUTS with the forge tag
        // This allows any unified item to be used as input
        variants.forEach(variant => {
            try {
                event.replaceInput({}, variant, '#' + tag);
            } catch (e) {
                // Item might not exist, continue
            }
        });
    });

    console.log('[Unified Materials] Recipe unification complete - outputs use primary, inputs use tags');
});
