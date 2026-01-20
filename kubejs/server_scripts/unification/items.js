// Tech Progression - Item/Ore Unification
// Unifies items across mods using tags

ServerEvents.tags('item', event => {
    console.log('[Tech Progression] Applying item tag unification...');

    // ============================================
    // INGOT UNIFICATION
    // ============================================

    // Copper Ingots (vanilla is canonical)
    event.add('forge:ingots/copper', [
        'minecraft:copper_ingot'
    ]);

    // Tin Ingots
    event.add('forge:ingots/tin', [
        'mekanism:ingot_tin'
    ]);

    // Bronze Ingots
    event.add('forge:ingots/bronze', [
        'mekanism:ingot_bronze'
    ]);

    // Steel Ingots
    event.add('forge:ingots/steel', [
        'mekanism:ingot_steel',
        'immersiveengineering:ingot_steel'
    ]);

    // Nickel Ingots
    event.add('forge:ingots/nickel', [
        'immersiveengineering:ingot_nickel'
    ]);

    // Silver Ingots
    event.add('forge:ingots/silver', [
        'immersiveengineering:ingot_silver'
    ]);

    // Lead Ingots
    event.add('forge:ingots/lead', [
        'mekanism:ingot_lead',
        'immersiveengineering:ingot_lead'
    ]);

    // Aluminum Ingots
    event.add('forge:ingots/aluminum', [
        'immersiveengineering:ingot_aluminum'
    ]);

    // Electrum Ingots
    event.add('forge:ingots/electrum', [
        'immersiveengineering:ingot_electrum'
    ]);

    // Constantan Ingots
    event.add('forge:ingots/constantan', [
        'immersiveengineering:ingot_constantan'
    ]);

    // Osmium Ingots
    event.add('forge:ingots/osmium', [
        'mekanism:ingot_osmium'
    ]);

    // Uranium Ingots
    event.add('forge:ingots/uranium', [
        'mekanism:ingot_uranium'
    ]);

    // Brass Ingots
    event.add('forge:ingots/brass', [
        'create:brass_ingot'
    ]);

    // Zinc Ingots
    event.add('forge:ingots/zinc', [
        'create:zinc_ingot'
    ]);

    // ============================================
    // PLATE UNIFICATION
    // ============================================

    // Copper Plates
    event.add('forge:plates/copper', [
        'create:copper_sheet',
        'immersiveengineering:plate_copper'
    ]);

    // Iron Plates
    event.add('forge:plates/iron', [
        'create:iron_sheet',
        'immersiveengineering:plate_iron'
    ]);

    // Gold Plates
    event.add('forge:plates/gold', [
        'create:golden_sheet',
        'immersiveengineering:plate_gold'
    ]);

    // Steel Plates (Priority: Create > IE > Mekanism)
    event.add('forge:plates/steel', [
        'create:steel_sheet',
        'immersiveengineering:plate_steel',
        'mekanism:plate_steel'
    ]);

    // Nickel Plates
    event.add('forge:plates/nickel', [
        'immersiveengineering:plate_nickel'
    ]);

    // Silver Plates
    event.add('forge:plates/silver', [
        'immersiveengineering:plate_silver'
    ]);

    // Lead Plates
    event.add('forge:plates/lead', [
        'mekanism:plate_lead',
        'immersiveengineering:plate_lead'
    ]);

    // Aluminum Plates
    event.add('forge:plates/aluminum', [
        'immersiveengineering:plate_aluminum'
    ]);

    // Electrum Plates
    event.add('forge:plates/electrum', [
        'immersiveengineering:plate_electrum'
    ]);

    // Constantan Plates
    event.add('forge:plates/constantan', [
        'immersiveengineering:plate_constantan'
    ]);

    // Brass Plates
    event.add('forge:plates/brass', [
        'create:brass_sheet'
    ]);

    // Tin Plates
    event.add('forge:plates/tin', [
        'mekanism:plate_tin'
    ]);

    // Bronze Plates (Priority: Create > Mekanism)
    event.add('forge:plates/bronze', [
        'create:bronze_sheet',
        'mekanism:plate_bronze'
    ]);

    // Osmium Plates
    event.add('forge:plates/osmium', [
        'mekanism:plate_osmium'
    ]);

    // Uranium Plates
    event.add('forge:plates/uranium', [
        'mekanism:plate_uranium'
    ]);

    // ============================================
    // GEAR UNIFICATION
    // ============================================

    // Iron Gears
    event.add('forge:gears/iron', [
        'mekanism:gear_iron'
    ]);

    // Gold Gears
    event.add('forge:gears/gold', [
        'mekanism:gear_gold'
    ]);

    // Copper Gears
    event.add('forge:gears/copper', [
        'mekanism:gear_copper'
    ]);

    // Tin Gears
    event.add('forge:gears/tin', [
        'mekanism:gear_tin'
    ]);

    // Bronze Gears
    event.add('forge:gears/bronze', [
        'mekanism:gear_bronze'
    ]);

    // Steel Gears
    event.add('forge:gears/steel', [
        'mekanism:gear_steel'
    ]);

    // Osmium Gears
    event.add('forge:gears/osmium', [
        'mekanism:gear_osmium'
    ]);

    // ============================================
    // ROD/STICK UNIFICATION
    // ============================================

    // Iron Rods (Priority: Create > IE)
    event.add('forge:rods/iron', [
        'create:iron_rod',
        'immersiveengineering:stick_iron'
    ]);

    // Steel Rods
    event.add('forge:rods/steel', [
        'immersiveengineering:stick_steel'
    ]);

    // Aluminum Rods
    event.add('forge:rods/aluminum', [
        'immersiveengineering:stick_aluminum'
    ]);

    // ============================================
    // WIRE UNIFICATION
    // ============================================

    // Copper Wire
    event.add('forge:wires/copper', [
        'immersiveengineering:wire_copper'
    ]);

    // Electrum Wire
    event.add('forge:wires/electrum', [
        'immersiveengineering:wire_electrum'
    ]);

    // Aluminum Wire
    event.add('forge:wires/aluminum', [
        'immersiveengineering:wire_aluminum'
    ]);

    // Steel Wire
    event.add('forge:wires/steel', [
        'immersiveengineering:wire_steel'
    ]);

    // ============================================
    // DUST UNIFICATION
    // ============================================

    // Copper Dust
    event.add('forge:dusts/copper', [
        'mekanism:dust_copper',
        'immersiveengineering:dust_copper'
    ]);

    // Iron Dust
    event.add('forge:dusts/iron', [
        'mekanism:dust_iron',
        'immersiveengineering:dust_iron'
    ]);

    // Gold Dust
    event.add('forge:dusts/gold', [
        'mekanism:dust_gold',
        'immersiveengineering:dust_gold'
    ]);

    // Tin Dust
    event.add('forge:dusts/tin', [
        'mekanism:dust_tin'
    ]);

    // Steel Dust
    event.add('forge:dusts/steel', [
        'mekanism:dust_steel'
    ]);

    // Nickel Dust
    event.add('forge:dusts/nickel', [
        'immersiveengineering:dust_nickel'
    ]);

    // Silver Dust
    event.add('forge:dusts/silver', [
        'mekanism:dust_silver',
        'immersiveengineering:dust_silver'
    ]);

    // Lead Dust
    event.add('forge:dusts/lead', [
        'mekanism:dust_lead',
        'immersiveengineering:dust_lead'
    ]);

    // Aluminum Dust
    event.add('forge:dusts/aluminum', [
        'immersiveengineering:dust_aluminum'
    ]);

    // Electrum Dust
    event.add('forge:dusts/electrum', [
        'immersiveengineering:dust_electrum'
    ]);

    // Constantan Dust
    event.add('forge:dusts/constantan', [
        'immersiveengineering:dust_constantan'
    ]);

    // Osmium Dust
    event.add('forge:dusts/osmium', [
        'mekanism:dust_osmium'
    ]);

    // Uranium Dust
    event.add('forge:dusts/uranium', [
        'mekanism:dust_uranium'
    ]);

    // ============================================
    // NUGGET UNIFICATION
    // ============================================

    // Copper Nuggets
    event.add('forge:nuggets/copper', [
        'mekanism:nugget_copper',
        'immersiveengineering:nugget_copper',
        'create:copper_nugget'
    ]);

    // Tin Nuggets
    event.add('forge:nuggets/tin', [
        'mekanism:nugget_tin'
    ]);

    // Bronze Nuggets
    event.add('forge:nuggets/bronze', [
        'mekanism:nugget_bronze'
    ]);

    // Steel Nuggets
    event.add('forge:nuggets/steel', [
        'mekanism:nugget_steel',
        'immersiveengineering:nugget_steel'
    ]);

    // Nickel Nuggets
    event.add('forge:nuggets/nickel', [
        'immersiveengineering:nugget_nickel'
    ]);

    // Silver Nuggets
    event.add('forge:nuggets/silver', [
        'immersiveengineering:nugget_silver'
    ]);

    // Lead Nuggets
    event.add('forge:nuggets/lead', [
        'mekanism:nugget_lead',
        'immersiveengineering:nugget_lead'
    ]);

    // Aluminum Nuggets
    event.add('forge:nuggets/aluminum', [
        'immersiveengineering:nugget_aluminum'
    ]);

    // Electrum Nuggets
    event.add('forge:nuggets/electrum', [
        'immersiveengineering:nugget_electrum'
    ]);

    // Constantan Nuggets
    event.add('forge:nuggets/constantan', [
        'immersiveengineering:nugget_constantan'
    ]);

    // Osmium Nuggets
    event.add('forge:nuggets/osmium', [
        'mekanism:nugget_osmium'
    ]);

    // Uranium Nuggets
    event.add('forge:nuggets/uranium', [
        'mekanism:nugget_uranium'
    ]);

    // Brass Nuggets
    event.add('forge:nuggets/brass', [
        'create:brass_nugget'
    ]);

    // Zinc Nuggets
    event.add('forge:nuggets/zinc', [
        'create:zinc_nugget'
    ]);

    // ============================================
    // RAW ORE UNIFICATION
    // ============================================

    // Raw Copper (vanilla is canonical)
    event.add('forge:raw_materials/copper', [
        'minecraft:raw_copper'
    ]);

    // Raw Iron (vanilla is canonical)
    event.add('forge:raw_materials/iron', [
        'minecraft:raw_iron'
    ]);

    // Raw Gold (vanilla is canonical)
    event.add('forge:raw_materials/gold', [
        'minecraft:raw_gold'
    ]);

    // Raw Tin
    event.add('forge:raw_materials/tin', [
        'mekanism:raw_tin'
    ]);

    // Raw Lead
    event.add('forge:raw_materials/lead', [
        'mekanism:raw_lead',
        'immersiveengineering:raw_lead'
    ]);

    // Raw Silver
    event.add('forge:raw_materials/silver', [
        'immersiveengineering:raw_silver'
    ]);

    // Raw Nickel
    event.add('forge:raw_materials/nickel', [
        'immersiveengineering:raw_nickel'
    ]);

    // Raw Aluminum
    event.add('forge:raw_materials/aluminum', [
        'immersiveengineering:raw_aluminum'
    ]);

    // Raw Osmium
    event.add('forge:raw_materials/osmium', [
        'mekanism:raw_osmium'
    ]);

    // Raw Uranium
    event.add('forge:raw_materials/uranium', [
        'mekanism:raw_uranium'
    ]);

    // Raw Zinc
    event.add('forge:raw_materials/zinc', [
        'create:raw_zinc'
    ]);

    // ============================================
    // STORAGE BLOCK UNIFICATION
    // ============================================

    // Copper Block (vanilla is canonical)
    event.add('forge:storage_blocks/copper', [
        'minecraft:copper_block'
    ]);

    // Tin Block
    event.add('forge:storage_blocks/tin', [
        'mekanism:block_tin'
    ]);

    // Bronze Block
    event.add('forge:storage_blocks/bronze', [
        'mekanism:block_bronze'
    ]);

    // Steel Block
    event.add('forge:storage_blocks/steel', [
        'mekanism:block_steel',
        'immersiveengineering:storage_steel'
    ]);

    // Nickel Block
    event.add('forge:storage_blocks/nickel', [
        'immersiveengineering:storage_nickel'
    ]);

    // Silver Block
    event.add('forge:storage_blocks/silver', [
        'immersiveengineering:storage_silver'
    ]);

    // Lead Block
    event.add('forge:storage_blocks/lead', [
        'mekanism:block_lead',
        'immersiveengineering:storage_lead'
    ]);

    // Aluminum Block
    event.add('forge:storage_blocks/aluminum', [
        'immersiveengineering:storage_aluminum'
    ]);

    // Electrum Block
    event.add('forge:storage_blocks/electrum', [
        'immersiveengineering:storage_electrum'
    ]);

    // Constantan Block
    event.add('forge:storage_blocks/constantan', [
        'immersiveengineering:storage_constantan'
    ]);

    // Osmium Block
    event.add('forge:storage_blocks/osmium', [
        'mekanism:block_osmium'
    ]);

    // Uranium Block
    event.add('forge:storage_blocks/uranium', [
        'mekanism:block_uranium'
    ]);

    // Brass Block
    event.add('forge:storage_blocks/brass', [
        'create:brass_block'
    ]);

    // Zinc Block
    event.add('forge:storage_blocks/zinc', [
        'create:zinc_block'
    ]);

    console.log('[Tech Progression] Item tag unification complete');
});
