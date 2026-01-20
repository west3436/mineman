// priority: 99
// Unified Materials - Recipe Output Unification
// This script modifies recipes to output the primary mod's items
// Priority order: Create > Immersive Engineering > Mekanism > TFMG > Others

/**
 * Primary Item Mapping:
 * These are the "canonical" items that all recipes should output
 */
const UNIFIED_OUTPUTS = {
    // Ingots
    'forge:ingots/lead': 'immersiveengineering:ingot_lead',
    'forge:ingots/silver': 'immersiveengineering:ingot_silver',
    'forge:ingots/tin': 'mekanism:ingot_tin',
    'forge:ingots/uranium': 'immersiveengineering:ingot_uranium',
    'forge:ingots/nickel': 'immersiveengineering:ingot_nickel',
    'forge:ingots/aluminum': 'immersiveengineering:ingot_aluminum',
    'forge:ingots/steel': 'immersiveengineering:ingot_steel',
    'forge:ingots/bronze': 'mekanism:ingot_bronze',
    'forge:ingots/lithium': 'tfmg:lithium_ingot',
    'forge:ingots/constantan': 'immersiveengineering:ingot_constantan',
    'forge:ingots/electrum': 'immersiveengineering:ingot_electrum',
    'forge:ingots/zinc': 'create:zinc_ingot',
    'forge:ingots/brass': 'create:brass_ingot',
    'forge:ingots/osmium': 'mekanism:ingot_osmium',

    // Nuggets
    'forge:nuggets/lead': 'immersiveengineering:nugget_lead',
    'forge:nuggets/silver': 'immersiveengineering:nugget_silver',
    'forge:nuggets/tin': 'mekanism:nugget_tin',
    'forge:nuggets/uranium': 'immersiveengineering:nugget_uranium',
    'forge:nuggets/nickel': 'immersiveengineering:nugget_nickel',
    'forge:nuggets/aluminum': 'immersiveengineering:nugget_aluminum',
    'forge:nuggets/steel': 'immersiveengineering:nugget_steel',
    'forge:nuggets/bronze': 'mekanism:nugget_bronze',
    'forge:nuggets/copper': 'create:copper_nugget',
    'forge:nuggets/zinc': 'create:zinc_nugget',
    'forge:nuggets/brass': 'create:brass_nugget',
    'forge:nuggets/osmium': 'mekanism:nugget_osmium',
    'forge:nuggets/constantan': 'immersiveengineering:nugget_constantan',
    'forge:nuggets/electrum': 'immersiveengineering:nugget_electrum',

    // Raw Materials
    'forge:raw_materials/lead': 'immersiveengineering:raw_lead',
    'forge:raw_materials/silver': 'immersiveengineering:raw_silver',
    'forge:raw_materials/tin': 'mekanism:raw_tin',
    'forge:raw_materials/uranium': 'immersiveengineering:raw_uranium',
    'forge:raw_materials/nickel': 'immersiveengineering:raw_nickel',
    'forge:raw_materials/aluminum': 'immersiveengineering:raw_aluminum',
    'forge:raw_materials/lithium': 'tfmg:raw_lithium',
    'forge:raw_materials/zinc': 'create:raw_zinc',
    'forge:raw_materials/osmium': 'mekanism:raw_osmium',

    // Dusts
    'forge:dusts/lead': 'immersiveengineering:dust_lead',
    'forge:dusts/silver': 'immersiveengineering:dust_silver',
    'forge:dusts/tin': 'mekanism:dust_tin',
    'forge:dusts/uranium': 'immersiveengineering:dust_uranium',
    'forge:dusts/nickel': 'immersiveengineering:dust_nickel',
    'forge:dusts/aluminum': 'immersiveengineering:dust_aluminum',
    'forge:dusts/steel': 'immersiveengineering:dust_steel',
    'forge:dusts/bronze': 'mekanism:dust_bronze',
    'forge:dusts/copper': 'immersiveengineering:dust_copper',
    'forge:dusts/iron': 'immersiveengineering:dust_iron',
    'forge:dusts/gold': 'immersiveengineering:dust_gold',
    'forge:dusts/sulfur': 'immersiveengineering:dust_sulfur',
    'forge:dusts/lithium': 'mekanism:dust_lithium',
    'forge:dusts/osmium': 'mekanism:dust_osmium',
    'forge:dusts/electrum': 'immersiveengineering:dust_electrum',
    'forge:dusts/constantan': 'immersiveengineering:dust_constantan',

    // Plates
    'forge:plates/lead': 'immersiveengineering:plate_lead',
    'forge:plates/silver': 'immersiveengineering:plate_silver',
    'forge:plates/uranium': 'immersiveengineering:plate_uranium',
    'forge:plates/nickel': 'immersiveengineering:plate_nickel',
    'forge:plates/aluminum': 'immersiveengineering:plate_aluminum',
    'forge:plates/steel': 'immersiveengineering:plate_steel',
    'forge:plates/copper': 'immersiveengineering:plate_copper',
    'forge:plates/iron': 'immersiveengineering:plate_iron',
    'forge:plates/gold': 'immersiveengineering:plate_gold',
    'forge:plates/electrum': 'immersiveengineering:plate_electrum',
    'forge:plates/constantan': 'immersiveengineering:plate_constantan',

    // Storage Blocks (Raw)
    'forge:storage_blocks/raw_lead': 'immersiveengineering:raw_block_lead',
    'forge:storage_blocks/raw_silver': 'immersiveengineering:raw_block_silver',
    'forge:storage_blocks/raw_tin': 'mekanism:block_raw_tin',
    'forge:storage_blocks/raw_uranium': 'immersiveengineering:raw_block_uranium',
    'forge:storage_blocks/raw_nickel': 'immersiveengineering:raw_block_nickel',
    'forge:storage_blocks/raw_aluminum': 'immersiveengineering:raw_block_aluminum',
    'forge:storage_blocks/raw_lithium': 'tfmg:raw_lithium_block',
    'forge:storage_blocks/raw_zinc': 'create:raw_zinc_block',
    'forge:storage_blocks/raw_osmium': 'mekanism:block_raw_osmium',
};

// Items to replace -> canonical item
const ITEM_REPLACEMENTS = {
    // Lead Ingots (Primary: IE)
    'mekanism:ingot_lead': 'immersiveengineering:ingot_lead',
    'tfmg:lead_ingot': 'immersiveengineering:ingot_lead',
    'electrodynamics:ingotlead': 'immersiveengineering:ingot_lead',
    'cgs:lead_ingot': 'immersiveengineering:ingot_lead',

    // Silver Ingots (Primary: IE)
    'electrodynamics:ingotsilver': 'immersiveengineering:ingot_silver',

    // Tin Ingots (Primary: Mekanism)
    'forestry:ingot_tin': 'mekanism:ingot_tin',
    'electrodynamics:ingottin': 'mekanism:ingot_tin',

    // Uranium Ingots (Primary: IE)
    'mekanism:ingot_uranium': 'immersiveengineering:ingot_uranium',

    // Nickel Ingots (Primary: IE)
    'tfmg:nickel_ingot': 'immersiveengineering:ingot_nickel',

    // Aluminum Ingots (Primary: IE)
    'tfmg:aluminum_ingot': 'immersiveengineering:ingot_aluminum',
    'electrodynamics:ingotaluminum': 'immersiveengineering:ingot_aluminum',

    // Steel Ingots (Primary: IE)
    'mekanism:ingot_steel': 'immersiveengineering:ingot_steel',
    'tfmg:steel_ingot': 'immersiveengineering:ingot_steel',
    'electrodynamics:ingotsteel': 'immersiveengineering:ingot_steel',
    'cgs:steel_ingot': 'immersiveengineering:ingot_steel',
    'industrialrenewal:ingot_steel': 'immersiveengineering:ingot_steel',

    // Bronze Ingots (Primary: Mekanism)
    'forestry:ingot_bronze': 'mekanism:ingot_bronze',
    'electrodynamics:ingotbronze': 'mekanism:ingot_bronze',

    // Lithium Ingots (Primary: TFMG)
    'electrodynamics:ingotlithium': 'tfmg:lithium_ingot',

    // Constantan Ingots (Primary: IE)
    'tfmg:constantan_ingot': 'immersiveengineering:ingot_constantan',

    // Lead Nuggets (Primary: IE)
    'mekanism:nugget_lead': 'immersiveengineering:nugget_lead',
    'tfmg:lead_nugget': 'immersiveengineering:nugget_lead',
    'cgs:lead_nugget': 'immersiveengineering:nugget_lead',

    // Silver Nuggets (Primary: IE)
    'electrodynamics:nuggetsilver': 'immersiveengineering:nugget_silver',

    // Tin Nuggets (Primary: Mekanism)
    'electrodynamics:nuggettin': 'mekanism:nugget_tin',

    // Uranium Nuggets (Primary: IE)
    'mekanism:nugget_uranium': 'immersiveengineering:nugget_uranium',

    // Nickel Nuggets (Primary: IE)
    'tfmg:nickel_nugget': 'immersiveengineering:nugget_nickel',

    // Aluminum Nuggets (Primary: IE)
    'tfmg:aluminum_nugget': 'immersiveengineering:nugget_aluminum',

    // Steel Nuggets (Primary: IE)
    'mekanism:nugget_steel': 'immersiveengineering:nugget_steel',
    'tfmg:steel_nugget': 'immersiveengineering:nugget_steel',
    'electrodynamics:nuggetsteel': 'immersiveengineering:nugget_steel',
    'cgs:steel_nugget': 'immersiveengineering:nugget_steel',

    // Copper Nuggets (Primary: Create)
    'immersiveengineering:nugget_copper': 'create:copper_nugget',
    'agricraft:copper_nugget': 'create:copper_nugget',
    'electrodynamics:nuggetcopper': 'create:copper_nugget',

    // Constantan Nuggets (Primary: IE)
    'tfmg:constantan_nugget': 'immersiveengineering:nugget_constantan',

    // Raw Lead (Primary: IE)
    'mekanism:raw_lead': 'immersiveengineering:raw_lead',
    'tfmg:raw_lead': 'immersiveengineering:raw_lead',
    'cgs:raw_lead': 'immersiveengineering:raw_lead',

    // Raw Silver (Primary: IE)
    'electrodynamics:raworesilver': 'immersiveengineering:raw_silver',

    // Raw Tin (Primary: Mekanism)
    'forestry:raw_tin': 'mekanism:raw_tin',
    'electrodynamics:raworetin': 'mekanism:raw_tin',

    // Raw Uranium (Primary: IE)
    'mekanism:raw_uranium': 'immersiveengineering:raw_uranium',
    'electrodynamics:raworeuranium': 'immersiveengineering:raw_uranium',

    // Raw Nickel (Primary: IE)
    'tfmg:raw_nickel': 'immersiveengineering:raw_nickel',

    // Raw Lithium (Primary: TFMG)
    'electrodynamics:raworelepidolite': 'tfmg:raw_lithium',

    // Lead Dust (Primary: IE)
    'mekanism:dust_lead': 'immersiveengineering:dust_lead',
    'electrodynamics:dustlead': 'immersiveengineering:dust_lead',

    // Silver Dust (Primary: IE)
    'electrodynamics:dustsilver': 'immersiveengineering:dust_silver',

    // Tin Dust (Primary: Mekanism)
    'electrodynamics:dusttin': 'mekanism:dust_tin',

    // Uranium Dust (Primary: IE)
    'mekanism:dust_uranium': 'immersiveengineering:dust_uranium',

    // Steel Dust (Primary: IE)
    'mekanism:dust_steel': 'immersiveengineering:dust_steel',
    'electrodynamics:duststeel': 'immersiveengineering:dust_steel',

    // Bronze Dust (Primary: Mekanism)
    'electrodynamics:dustbronze': 'mekanism:dust_bronze',

    // Copper Dust (Primary: IE)
    'mekanism:dust_copper': 'immersiveengineering:dust_copper',
    'electrodynamics:dustcopper': 'immersiveengineering:dust_copper',

    // Iron Dust (Primary: IE)
    'mekanism:dust_iron': 'immersiveengineering:dust_iron',
    'electrodynamics:dustiron': 'immersiveengineering:dust_iron',

    // Gold Dust (Primary: IE)
    'mekanism:dust_gold': 'immersiveengineering:dust_gold',
    'electrodynamics:dustgold': 'immersiveengineering:dust_gold',

    // Sulfur Dust (Primary: IE)
    'mekanism:dust_sulfur': 'immersiveengineering:dust_sulfur',
    'tfmg:sulfur_dust': 'immersiveengineering:dust_sulfur',
    'electrodynamics:dustsulfur': 'immersiveengineering:dust_sulfur',

    // Lithium Dust (Primary: Mekanism)
    'electrodynamics:dustlithium': 'mekanism:dust_lithium',

    // Lead Plate (Primary: IE)
    'electrodynamics:platelead': 'immersiveengineering:plate_lead',

    // Aluminum Plate (Primary: IE)
    'electrodynamics:platealuminum': 'immersiveengineering:plate_aluminum',

    // Steel Plate (Primary: IE)
    'electrodynamics:platesteel': 'immersiveengineering:plate_steel',

    // Copper Plate (Primary: IE)
    'electrodynamics:platecopper': 'immersiveengineering:plate_copper',

    // Iron Plate (Primary: IE)
    'electrodynamics:plateiron': 'immersiveengineering:plate_iron',

    // Raw Block Lead (Primary: IE)
    'mekanism:block_raw_lead': 'immersiveengineering:raw_block_lead',
    'tfmg:raw_lead_block': 'immersiveengineering:raw_block_lead',
    'electrodynamics:raworeblocklead': 'immersiveengineering:raw_block_lead',
    'cgs:raw_lead_block': 'immersiveengineering:raw_block_lead',

    // Raw Block Silver (Primary: IE)
    'electrodynamics:raworeblocksilver': 'immersiveengineering:raw_block_silver',

    // Raw Block Tin (Primary: Mekanism)
    'forestry:raw_tin_block': 'mekanism:block_raw_tin',
    'electrodynamics:raworeblocktin': 'mekanism:block_raw_tin',

    // Raw Block Uranium (Primary: IE)
    'mekanism:block_raw_uranium': 'immersiveengineering:raw_block_uranium',
    'electrodynamics:raworeblockuranium': 'immersiveengineering:raw_block_uranium',

    // Raw Block Nickel (Primary: IE)
    'tfmg:raw_nickel_block': 'immersiveengineering:raw_block_nickel',

    // Cast Iron (Primary: CBC - has same priority as TFMG, prefer CBC)
    'tfmg:cast_iron_ingot': 'createbigcannons:cast_iron_ingot',
    'tfmg:cast_iron_nugget': 'createbigcannons:cast_iron_nugget',
};

ServerEvents.recipes(event => {
    // Replace recipe outputs with unified items
    for (const [oldItem, newItem] of Object.entries(ITEM_REPLACEMENTS)) {
        event.replaceOutput({}, oldItem, newItem);
    }

    console.log('[Unified Materials] Recipe output replacement complete');
});
