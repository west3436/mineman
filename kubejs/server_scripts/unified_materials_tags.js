// priority: 100
// Unified Materials - Tag Unification Script
// This script adds all mod variants of materials to common Forge tags
// Priority order: Create > Immersive Engineering > Mekanism > TFMG > Others

/**
 * Material Unification Priority:
 * 1. Create (create:)
 * 2. Immersive Engineering (immersiveengineering:)
 * 3. Mekanism (mekanism:)
 * 4. Create: The Factory Must Grow (tfmg:)
 * 5. All other mods (electrodynamics:, forestry:, cgs:, etc.)
 */

ServerEvents.tags('item', event => {
    // ==================== INGOTS ====================
    
    // Lead Ingots -> forge:ingots/lead (Primary: IE)
    event.add('forge:ingots/lead', [
        'immersiveengineering:ingot_lead',  // Primary
        'mekanism:ingot_lead',
        'tfmg:lead_ingot',
        'electrodynamics:ingotlead',
        'cgs:lead_ingot'
    ]);

    // Silver Ingots -> forge:ingots/silver (Primary: IE)
    event.add('forge:ingots/silver', [
        'immersiveengineering:ingot_silver',  // Primary
        'electrodynamics:ingotsilver'
    ]);

    // Tin Ingots -> forge:ingots/tin (Primary: Mekanism)
    event.add('forge:ingots/tin', [
        'mekanism:ingot_tin',  // Primary
        'forestry:ingot_tin',
        'electrodynamics:ingottin'
    ]);

    // Uranium Ingots -> forge:ingots/uranium (Primary: IE)
    event.add('forge:ingots/uranium', [
        'immersiveengineering:ingot_uranium',  // Primary
        'mekanism:ingot_uranium'
    ]);

    // Nickel Ingots -> forge:ingots/nickel (Primary: IE)
    event.add('forge:ingots/nickel', [
        'immersiveengineering:ingot_nickel',  // Primary
        'tfmg:nickel_ingot'
    ]);

    // Aluminum Ingots -> forge:ingots/aluminum (Primary: IE)
    event.add('forge:ingots/aluminum', [
        'immersiveengineering:ingot_aluminum',  // Primary
        'tfmg:aluminum_ingot',
        'electrodynamics:ingotaluminum'
    ]);

    // Steel Ingots -> forge:ingots/steel (Primary: IE)
    event.add('forge:ingots/steel', [
        'immersiveengineering:ingot_steel',  // Primary
        'mekanism:ingot_steel',
        'tfmg:steel_ingot',
        'electrodynamics:ingotsteel',
        'cgs:steel_ingot',
        'industrialrenewal:ingot_steel'
    ]);

    // Bronze Ingots -> forge:ingots/bronze (Primary: Mekanism)
    event.add('forge:ingots/bronze', [
        'mekanism:ingot_bronze',  // Primary
        'forestry:ingot_bronze',
        'electrodynamics:ingotbronze'
    ]);

    // Lithium Ingots -> forge:ingots/lithium (Primary: TFMG)
    event.add('forge:ingots/lithium', [
        'tfmg:lithium_ingot',  // Primary
        'electrodynamics:ingotlithium'
    ]);

    // Constantan Ingots -> forge:ingots/constantan (Primary: IE)
    event.add('forge:ingots/constantan', [
        'immersiveengineering:ingot_constantan',  // Primary
        'tfmg:constantan_ingot'
    ]);

    // Electrum Ingots -> forge:ingots/electrum (Primary: IE)
    event.add('forge:ingots/electrum', [
        'immersiveengineering:ingot_electrum'  // Primary
    ]);

    // Osmium Ingots -> forge:ingots/osmium (Primary: Mekanism - unique)
    event.add('forge:ingots/osmium', [
        'mekanism:ingot_osmium'
    ]);

    // Zinc Ingots -> forge:ingots/zinc (Primary: Create - unique)
    event.add('forge:ingots/zinc', [
        'create:zinc_ingot'
    ]);

    // Brass Ingots -> forge:ingots/brass (Primary: Create - unique)
    event.add('forge:ingots/brass', [
        'create:brass_ingot'
    ]);

    // Cast Iron Ingots -> forge:ingots/cast_iron
    event.add('forge:ingots/cast_iron', [
        'createbigcannons:cast_iron_ingot',
        'tfmg:cast_iron_ingot'
    ]);

    // ==================== NUGGETS ====================

    // Lead Nuggets -> forge:nuggets/lead (Primary: IE)
    event.add('forge:nuggets/lead', [
        'immersiveengineering:nugget_lead',  // Primary
        'mekanism:nugget_lead',
        'tfmg:lead_nugget',
        'cgs:lead_nugget'
    ]);

    // Silver Nuggets -> forge:nuggets/silver (Primary: IE)
    event.add('forge:nuggets/silver', [
        'immersiveengineering:nugget_silver',  // Primary
        'electrodynamics:nuggetsilver'
    ]);

    // Tin Nuggets -> forge:nuggets/tin (Primary: Mekanism)
    event.add('forge:nuggets/tin', [
        'mekanism:nugget_tin',  // Primary
        'electrodynamics:nuggettin'
    ]);

    // Uranium Nuggets -> forge:nuggets/uranium (Primary: IE)
    event.add('forge:nuggets/uranium', [
        'immersiveengineering:nugget_uranium',  // Primary
        'mekanism:nugget_uranium'
    ]);

    // Nickel Nuggets -> forge:nuggets/nickel (Primary: IE)
    event.add('forge:nuggets/nickel', [
        'immersiveengineering:nugget_nickel',  // Primary
        'tfmg:nickel_nugget'
    ]);

    // Aluminum Nuggets -> forge:nuggets/aluminum (Primary: IE)
    event.add('forge:nuggets/aluminum', [
        'immersiveengineering:nugget_aluminum',  // Primary
        'tfmg:aluminum_nugget'
    ]);

    // Steel Nuggets -> forge:nuggets/steel (Primary: IE)
    event.add('forge:nuggets/steel', [
        'immersiveengineering:nugget_steel',  // Primary
        'mekanism:nugget_steel',
        'tfmg:steel_nugget',
        'electrodynamics:nuggetsteel',
        'cgs:steel_nugget'
    ]);

    // Bronze Nuggets -> forge:nuggets/bronze (Primary: Mekanism)
    event.add('forge:nuggets/bronze', [
        'mekanism:nugget_bronze'  // Primary
    ]);

    // Lithium Nuggets -> forge:nuggets/lithium (Primary: TFMG)
    event.add('forge:nuggets/lithium', [
        'tfmg:lithium_nugget'  // Primary
    ]);

    // Constantan Nuggets -> forge:nuggets/constantan (Primary: IE)
    event.add('forge:nuggets/constantan', [
        'immersiveengineering:nugget_constantan',  // Primary
        'tfmg:constantan_nugget'
    ]);

    // Electrum Nuggets -> forge:nuggets/electrum (Primary: IE)
    event.add('forge:nuggets/electrum', [
        'immersiveengineering:nugget_electrum'  // Primary
    ]);

    // Copper Nuggets -> forge:nuggets/copper
    event.add('forge:nuggets/copper', [
        'create:copper_nugget',  // Primary
        'immersiveengineering:nugget_copper',
        'agricraft:copper_nugget',
        'electrodynamics:nuggetcopper'
    ]);

    // Zinc Nuggets -> forge:nuggets/zinc (Primary: Create)
    event.add('forge:nuggets/zinc', [
        'create:zinc_nugget'
    ]);

    // Brass Nuggets -> forge:nuggets/brass (Primary: Create)
    event.add('forge:nuggets/brass', [
        'create:brass_nugget'
    ]);

    // Osmium Nuggets -> forge:nuggets/osmium (Primary: Mekanism)
    event.add('forge:nuggets/osmium', [
        'mekanism:nugget_osmium'
    ]);

    // Cast Iron Nuggets -> forge:nuggets/cast_iron
    event.add('forge:nuggets/cast_iron', [
        'createbigcannons:cast_iron_nugget',
        'tfmg:cast_iron_nugget'
    ]);

    // ==================== RAW ORES ====================

    // Raw Lead -> forge:raw_materials/lead (Primary: IE)
    event.add('forge:raw_materials/lead', [
        'immersiveengineering:raw_lead',  // Primary
        'mekanism:raw_lead',
        'tfmg:raw_lead',
        'cgs:raw_lead'
    ]);

    // Raw Silver -> forge:raw_materials/silver (Primary: IE)
    event.add('forge:raw_materials/silver', [
        'immersiveengineering:raw_silver',  // Primary
        'electrodynamics:raworesilver'
    ]);

    // Raw Tin -> forge:raw_materials/tin (Primary: Mekanism)
    event.add('forge:raw_materials/tin', [
        'mekanism:raw_tin',  // Primary
        'forestry:raw_tin',
        'electrodynamics:raworetin'
    ]);

    // Raw Uranium -> forge:raw_materials/uranium (Primary: IE)
    event.add('forge:raw_materials/uranium', [
        'immersiveengineering:raw_uranium',  // Primary
        'mekanism:raw_uranium',
        'electrodynamics:raworeuranium'
    ]);

    // Raw Nickel -> forge:raw_materials/nickel (Primary: IE)
    event.add('forge:raw_materials/nickel', [
        'immersiveengineering:raw_nickel',  // Primary
        'tfmg:raw_nickel'
    ]);

    // Raw Aluminum -> forge:raw_materials/aluminum (Primary: IE)
    event.add('forge:raw_materials/aluminum', [
        'immersiveengineering:raw_aluminum'  // Primary
    ]);

    // Raw Lithium -> forge:raw_materials/lithium (Primary: TFMG)
    event.add('forge:raw_materials/lithium', [
        'tfmg:raw_lithium',  // Primary
        'electrodynamics:raworelepidolite'
    ]);

    // Raw Osmium -> forge:raw_materials/osmium (Primary: Mekanism)
    event.add('forge:raw_materials/osmium', [
        'mekanism:raw_osmium'
    ]);

    // Raw Zinc -> forge:raw_materials/zinc (Primary: Create)
    event.add('forge:raw_materials/zinc', [
        'create:raw_zinc'
    ]);

    // ==================== ORES ====================

    // Lead Ores -> forge:ores/lead (Primary: IE)
    event.add('forge:ores/lead', [
        'immersiveengineering:ore_lead',  // Primary
        'mekanism:lead_ore',
        'mekanism:deepslate_lead_ore',
        'tfmg:lead_ore',
        'tfmg:deepslate_lead_ore',
        'electrodynamics:orelead',
        'electrodynamics:deepslateorelead',
        'cgs:lead_ore',
        'cgs:deepslate_lead_ore'
    ]);

    // Silver Ores -> forge:ores/silver (Primary: IE)
    event.add('forge:ores/silver', [
        'immersiveengineering:ore_silver',  // Primary
        'electrodynamics:oresilver',
        'electrodynamics:deepslateoresilver'
    ]);

    // Tin Ores -> forge:ores/tin (Primary: Mekanism)
    event.add('forge:ores/tin', [
        'mekanism:tin_ore',  // Primary
        'mekanism:deepslate_tin_ore',
        'forestry:tin_ore',
        'forestry:deepslate_tin_ore',
        'electrodynamics:oretin',
        'electrodynamics:deepslateoretin'
    ]);

    // Uranium Ores -> forge:ores/uranium (Primary: IE)
    event.add('forge:ores/uranium', [
        'immersiveengineering:ore_uranium',  // Primary
        'mekanism:uranium_ore',
        'mekanism:deepslate_uranium_ore',
        'electrodynamics:oreuranium',
        'electrodynamics:deepslateoreuranium'
    ]);

    // Nickel Ores -> forge:ores/nickel (Primary: IE)
    event.add('forge:ores/nickel', [
        'immersiveengineering:ore_nickel',  // Primary
        'tfmg:nickel_ore',
        'tfmg:deepslate_nickel_ore'
    ]);

    // Aluminum Ores -> forge:ores/aluminum (Primary: IE)
    event.add('forge:ores/aluminum', [
        'immersiveengineering:ore_aluminum',  // Primary
        'electrodynamics:orealuminum',
        'electrodynamics:deepslateorealuminum'
    ]);

    // Lithium Ores -> forge:ores/lithium (Primary: TFMG)
    event.add('forge:ores/lithium', [
        'tfmg:lithium_ore',  // Primary
        'tfmg:deepslate_lithium_ore',
        'electrodynamics:orelithium',
        'electrodynamics:deepslateorelithium'
    ]);

    // Osmium Ores -> forge:ores/osmium (Primary: Mekanism)
    event.add('forge:ores/osmium', [
        'mekanism:osmium_ore',
        'mekanism:deepslate_osmium_ore'
    ]);

    // Zinc Ores -> forge:ores/zinc (Primary: Create)
    event.add('forge:ores/zinc', [
        'create:zinc_ore',
        'create:deepslate_zinc_ore'
    ]);

    // Fluorite Ores -> forge:ores/fluorite (Primary: Mekanism)
    event.add('forge:ores/fluorite', [
        'mekanism:fluorite_ore',  // Primary
        'mekanism:deepslate_fluorite_ore',
        'electrodynamics:orefluorite',
        'electrodynamics:deepslateorefluorite'
    ]);

    // ==================== DUSTS ====================

    // Lead Dust -> forge:dusts/lead (Primary: IE)
    event.add('forge:dusts/lead', [
        'immersiveengineering:dust_lead',  // Primary
        'mekanism:dust_lead',
        'electrodynamics:dustlead'
    ]);

    // Silver Dust -> forge:dusts/silver (Primary: IE)
    event.add('forge:dusts/silver', [
        'immersiveengineering:dust_silver',  // Primary
        'electrodynamics:dustsilver'
    ]);

    // Tin Dust -> forge:dusts/tin (Primary: Mekanism)
    event.add('forge:dusts/tin', [
        'mekanism:dust_tin',  // Primary
        'electrodynamics:dusttin'
    ]);

    // Uranium Dust -> forge:dusts/uranium (Primary: IE)
    event.add('forge:dusts/uranium', [
        'immersiveengineering:dust_uranium',  // Primary
        'mekanism:dust_uranium'
    ]);

    // Nickel Dust -> forge:dusts/nickel (Primary: IE)
    event.add('forge:dusts/nickel', [
        'immersiveengineering:dust_nickel'  // Primary
    ]);

    // Aluminum Dust -> forge:dusts/aluminum (Primary: IE)
    event.add('forge:dusts/aluminum', [
        'immersiveengineering:dust_aluminum'  // Primary
    ]);

    // Steel Dust -> forge:dusts/steel (Primary: IE)
    event.add('forge:dusts/steel', [
        'immersiveengineering:dust_steel',  // Primary
        'mekanism:dust_steel',
        'electrodynamics:duststeel'
    ]);

    // Bronze Dust -> forge:dusts/bronze (Primary: Mekanism)
    event.add('forge:dusts/bronze', [
        'mekanism:dust_bronze',  // Primary
        'electrodynamics:dustbronze'
    ]);

    // Copper Dust -> forge:dusts/copper (Primary: IE)
    event.add('forge:dusts/copper', [
        'immersiveengineering:dust_copper',  // Primary
        'mekanism:dust_copper',
        'electrodynamics:dustcopper'
    ]);

    // Iron Dust -> forge:dusts/iron (Primary: IE)
    event.add('forge:dusts/iron', [
        'immersiveengineering:dust_iron',  // Primary
        'mekanism:dust_iron',
        'electrodynamics:dustiron'
    ]);

    // Gold Dust -> forge:dusts/gold (Primary: IE)
    event.add('forge:dusts/gold', [
        'immersiveengineering:dust_gold',  // Primary
        'mekanism:dust_gold',
        'electrodynamics:dustgold'
    ]);

    // Sulfur Dust -> forge:dusts/sulfur (Primary: IE)
    event.add('forge:dusts/sulfur', [
        'immersiveengineering:dust_sulfur',  // Primary
        'mekanism:dust_sulfur',
        'tfmg:sulfur_dust',
        'electrodynamics:dustsulfur'
    ]);

    // Lithium Dust -> forge:dusts/lithium (Primary: Mekanism)
    event.add('forge:dusts/lithium', [
        'mekanism:dust_lithium',  // Primary
        'electrodynamics:dustlithium'
    ]);

    // Obsidian Dust -> forge:dusts/obsidian (Primary: Mekanism)
    event.add('forge:dusts/obsidian', [
        'mekanism:dust_obsidian',  // Primary
        'electrodynamics:dustobsidian'
    ]);

    // Osmium Dust -> forge:dusts/osmium (Primary: Mekanism)
    event.add('forge:dusts/osmium', [
        'mekanism:dust_osmium'
    ]);

    // Electrum Dust -> forge:dusts/electrum (Primary: IE)
    event.add('forge:dusts/electrum', [
        'immersiveengineering:dust_electrum'
    ]);

    // Constantan Dust -> forge:dusts/constantan (Primary: IE)
    event.add('forge:dusts/constantan', [
        'immersiveengineering:dust_constantan'
    ]);

    // Coal Dust / Coke Dust -> forge:dusts/coal_cite
    event.add('forge:dusts/coal_coke', [
        'immersiveengineering:dust_coke',
        'tfmg:coal_coke_dust'
    ]);

    // Charcoal Dust -> forge:dusts/charcoal
    event.add('forge:dusts/charcoal', [
        'mekanism:dust_charcoal',
        'cgs:charcoal_dust'
    ]);

    // ==================== PLATES ====================

    // Lead Plate -> forge:plates/lead (Primary: IE)
    event.add('forge:plates/lead', [
        'immersiveengineering:plate_lead',  // Primary
        'electrodynamics:platelead'
    ]);

    // Silver Plate -> forge:plates/silver (Primary: IE)
    event.add('forge:plates/silver', [
        'immersiveengineering:plate_silver'  // Primary
    ]);

    // Uranium Plate -> forge:plates/uranium (Primary: IE)
    event.add('forge:plates/uranium', [
        'immersiveengineering:plate_uranium'  // Primary
    ]);

    // Nickel Plate -> forge:plates/nickel (Primary: IE)
    event.add('forge:plates/nickel', [
        'immersiveengineering:plate_nickel'  // Primary
    ]);

    // Aluminum Plate -> forge:plates/aluminum (Primary: IE)
    event.add('forge:plates/aluminum', [
        'immersiveengineering:plate_aluminum',  // Primary
        'electrodynamics:platealuminum'
    ]);

    // Steel Plate -> forge:plates/steel (Primary: IE)
    event.add('forge:plates/steel', [
        'immersiveengineering:plate_steel',  // Primary
        'electrodynamics:platesteel'
    ]);

    // Bronze Plate -> forge:plates/bronze (Primary: Electrodynamics)
    event.add('forge:plates/bronze', [
        'electrodynamics:platebronze'
    ]);

    // Copper Plate -> forge:plates/copper (Primary: IE)
    event.add('forge:plates/copper', [
        'immersiveengineering:plate_copper',  // Primary
        'electrodynamics:platecopper'
    ]);

    // Iron Plate -> forge:plates/iron (Primary: IE)
    event.add('forge:plates/iron', [
        'immersiveengineering:plate_iron',  // Primary
        'electrodynamics:plateiron'
    ]);

    // Gold Plate -> forge:plates/gold (Primary: IE)
    event.add('forge:plates/gold', [
        'immersiveengineering:plate_gold'  // Primary
    ]);

    // Electrum Plate -> forge:plates/electrum (Primary: IE)
    event.add('forge:plates/electrum', [
        'immersiveengineering:plate_electrum'  // Primary
    ]);

    // Constantan Plate -> forge:plates/constantan (Primary: IE)
    event.add('forge:plates/constantan', [
        'immersiveengineering:plate_constantan'  // Primary
    ]);

    // Lithium Plate -> forge:plates/lithium
    event.add('forge:plates/lithium', [
        'electrodynamics:platelithium'
    ]);

    // ==================== STORAGE BLOCKS ====================

    // Raw Lead Block -> forge:storage_blocks/raw_lead (Primary: IE)
    event.add('forge:storage_blocks/raw_lead', [
        'immersiveengineering:raw_block_lead',  // Primary
        'mekanism:block_raw_lead',
        'tfmg:raw_lead_block',
        'electrodynamics:raworeblocklead',
        'cgs:raw_lead_block'
    ]);

    // Raw Silver Block -> forge:storage_blocks/raw_silver (Primary: IE)
    event.add('forge:storage_blocks/raw_silver', [
        'immersiveengineering:raw_block_silver',  // Primary
        'electrodynamics:raworeblocksilver'
    ]);

    // Raw Tin Block -> forge:storage_blocks/raw_tin (Primary: Mekanism)
    event.add('forge:storage_blocks/raw_tin', [
        'mekanism:block_raw_tin',  // Primary
        'forestry:raw_tin_block',
        'electrodynamics:raworeblocktin'
    ]);

    // Raw Uranium Block -> forge:storage_blocks/raw_uranium (Primary: IE)
    event.add('forge:storage_blocks/raw_uranium', [
        'immersiveengineering:raw_block_uranium',  // Primary
        'mekanism:block_raw_uranium',
        'electrodynamics:raworeblockuranium'
    ]);

    // Raw Nickel Block -> forge:storage_blocks/raw_nickel (Primary: IE)
    event.add('forge:storage_blocks/raw_nickel', [
        'immersiveengineering:raw_block_nickel',  // Primary
        'tfmg:raw_nickel_block'
    ]);

    // Raw Aluminum Block -> forge:storage_blocks/raw_aluminum (Primary: IE)
    event.add('forge:storage_blocks/raw_aluminum', [
        'immersiveengineering:raw_block_aluminum'  // Primary
    ]);

    // Raw Lithium Block -> forge:storage_blocks/raw_lithium (Primary: TFMG)
    event.add('forge:storage_blocks/raw_lithium', [
        'tfmg:raw_lithium_block'  // Primary
    ]);

    // Raw Osmium Block -> forge:storage_blocks/raw_osmium (Primary: Mekanism)
    event.add('forge:storage_blocks/raw_osmium', [
        'mekanism:block_raw_osmium'
    ]);

    // Raw Zinc Block -> forge:storage_blocks/raw_zinc (Primary: Create)
    event.add('forge:storage_blocks/raw_zinc', [
        'create:raw_zinc_block'
    ]);

    // ==================== CRUSHED ORES (Create) ====================

    // Crushed Raw Lead -> create:crushed_raw_lead
    event.add('create:crushed_raw_materials/lead', [
        'create:crushed_raw_lead'
    ]);

    // Crushed Raw Silver -> create:crushed_raw_silver
    event.add('create:crushed_raw_materials/silver', [
        'create:crushed_raw_silver'
    ]);

    // Crushed Raw Tin -> create:crushed_raw_tin
    event.add('create:crushed_raw_materials/tin', [
        'create:crushed_raw_tin'
    ]);

    // Crushed Raw Uranium -> create:crushed_raw_uranium
    event.add('create:crushed_raw_materials/uranium', [
        'create:crushed_raw_uranium'
    ]);

    // Crushed Raw Nickel -> create:crushed_raw_nickel
    event.add('create:crushed_raw_materials/nickel', [
        'create:crushed_raw_nickel'
    ]);

    // Crushed Raw Aluminum -> create:crushed_raw_aluminum
    event.add('create:crushed_raw_materials/aluminum', [
        'create:crushed_raw_aluminum'
    ]);

    // Crushed Raw Zinc -> create:crushed_raw_zinc
    event.add('create:crushed_raw_materials/zinc', [
        'create:crushed_raw_zinc'
    ]);

    // Crushed Raw Osmium -> create:crushed_raw_osmium
    event.add('create:crushed_raw_materials/osmium', [
        'create:crushed_raw_osmium'
    ]);

    // ==================== SALT ====================
    event.add('forge:dusts/salt', [
        'mekanism:salt',  // Primary (Mekanism's salt block/item)
        'electrodynamics:dustsalt'
    ]);

    console.log('[Unified Materials] Tag unification complete');
});
