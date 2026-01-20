// Tech Progression - Ore Tag Unification
// Unifies ore blocks and raw materials across mods using forge tags

ServerEvents.tags('block', event => {
    console.log('[Tech Progression] Applying ore tag unification...');

    // ============================================
    // ORE BLOCK UNIFICATION - TIER 0-1 (Bronze Age)
    // ============================================

    // Copper Ores (Vanilla + Mods)
    event.add('forge:ores/copper', [
        'minecraft:copper_ore',
        'minecraft:deepslate_copper_ore'
    ]);

    // Tin Ores (Tier 1 - Bronze Age)
    event.add('forge:ores/tin', [
        'mekanism:tin_ore',
        'mekanism:deepslate_tin_ore'
    ]);

    // Zinc Ores (Create - Tier 1)
    event.add('forge:ores/zinc', [
        'create:zinc_ore',
        'create:deepslate_zinc_ore'
    ]);

    // ============================================
    // ORE BLOCK UNIFICATION - TIER 2 (Steel Age)
    // ============================================

    // Iron Ores (Vanilla)
    event.add('forge:ores/iron', [
        'minecraft:iron_ore',
        'minecraft:deepslate_iron_ore'
    ]);

    // Gold Ores (Vanilla)
    event.add('forge:ores/gold', [
        'minecraft:gold_ore',
        'minecraft:deepslate_gold_ore'
    ]);

    // Coal Ores (Vanilla)
    event.add('forge:ores/coal', [
        'minecraft:coal_ore',
        'minecraft:deepslate_coal_ore'
    ]);

    // ============================================
    // ORE BLOCK UNIFICATION - TIER 3 (Industrial)
    // ============================================

    // Nickel Ores (Immersive Engineering)
    event.add('forge:ores/nickel', [
        'immersiveengineering:ore_nickel',
        'immersiveengineering:deepslate_ore_nickel'
    ]);

    // Silver Ores (Immersive Engineering)
    event.add('forge:ores/silver', [
        'immersiveengineering:ore_silver',
        'immersiveengineering:deepslate_ore_silver'
    ]);

    // Lead Ores
    event.add('forge:ores/lead', [
        'mekanism:lead_ore',
        'mekanism:deepslate_lead_ore',
        'immersiveengineering:ore_lead',
        'immersiveengineering:deepslate_ore_lead'
    ]);

    // Aluminum Ores (Immersive Engineering)
    event.add('forge:ores/aluminum', [
        'immersiveengineering:ore_aluminum',
        'immersiveengineering:deepslate_ore_aluminum'
    ]);

    // ============================================
    // ORE BLOCK UNIFICATION - TIER 5 (Quantum)
    // ============================================

    // Osmium Ores (Mekanism)
    event.add('forge:ores/osmium', [
        'mekanism:osmium_ore',
        'mekanism:deepslate_osmium_ore'
    ]);

    // Uranium Ores (Mekanism)
    event.add('forge:ores/uranium', [
        'mekanism:uranium_ore',
        'mekanism:deepslate_uranium_ore'
    ]);

    // Fluorite Ores (Mekanism - used in uranium processing)
    event.add('forge:ores/fluorite', [
        'mekanism:fluorite_ore',
        'mekanism:deepslate_fluorite_ore'
    ]);

    // ============================================
    // VANILLA GEMS & RESOURCES
    // ============================================

    // Diamond Ores
    event.add('forge:ores/diamond', [
        'minecraft:diamond_ore',
        'minecraft:deepslate_diamond_ore'
    ]);

    // Emerald Ores
    event.add('forge:ores/emerald', [
        'minecraft:emerald_ore',
        'minecraft:deepslate_emerald_ore'
    ]);

    // Redstone Ores
    event.add('forge:ores/redstone', [
        'minecraft:redstone_ore',
        'minecraft:deepslate_redstone_ore'
    ]);

    // Lapis Ores
    event.add('forge:ores/lapis', [
        'minecraft:lapis_ore',
        'minecraft:deepslate_lapis_ore'
    ]);

    // Quartz Ores (Nether)
    event.add('forge:ores/quartz', [
        'minecraft:nether_quartz_ore'
    ]);

    // ============================================
    // NETHER ORES
    // ============================================

    // Nether Gold Ore (added to gold ore tag for processing recipes)
    event.add('forge:ores/gold', [
        'minecraft:nether_gold_ore'
    ]);

    // Ancient Debris (Netherite source)
    event.add('forge:ores/netherite_scrap', [
        'minecraft:ancient_debris'
    ]);

    console.log('[Tech Progression] Ore tag unification complete');
});

ServerEvents.tags('item', event => {
    console.log('[Tech Progression] Applying ore item tag unification...');

    // ============================================
    // RAW ORE ITEMS - TIER 0-1
    // ============================================

    // Raw Copper (vanilla is canonical)
    event.add('forge:raw_materials/copper', [
        'minecraft:raw_copper'
    ]);

    // Raw Tin
    event.add('forge:raw_materials/tin', [
        'mekanism:raw_tin'
    ]);

    // Raw Zinc (Create)
    event.add('forge:raw_materials/zinc', [
        'create:raw_zinc'
    ]);

    // ============================================
    // RAW ORE ITEMS - TIER 2
    // ============================================

    // Raw Iron (vanilla is canonical)
    event.add('forge:raw_materials/iron', [
        'minecraft:raw_iron'
    ]);

    // Raw Gold (vanilla is canonical)
    event.add('forge:raw_materials/gold', [
        'minecraft:raw_gold'
    ]);

    // ============================================
    // RAW ORE ITEMS - TIER 3
    // ============================================

    // Raw Nickel
    event.add('forge:raw_materials/nickel', [
        'immersiveengineering:raw_nickel'
    ]);

    // Raw Silver
    event.add('forge:raw_materials/silver', [
        'immersiveengineering:raw_silver'
    ]);

    // Raw Lead
    event.add('forge:raw_materials/lead', [
        'mekanism:raw_lead',
        'immersiveengineering:raw_lead'
    ]);

    // Raw Aluminum
    event.add('forge:raw_materials/aluminum', [
        'immersiveengineering:raw_aluminum'
    ]);

    // ============================================
    // RAW ORE ITEMS - TIER 5
    // ============================================

    // Raw Osmium
    event.add('forge:raw_materials/osmium', [
        'mekanism:raw_osmium'
    ]);

    // Raw Uranium
    event.add('forge:raw_materials/uranium', [
        'mekanism:raw_uranium'
    ]);

    // ============================================
    // RAW ORE STORAGE BLOCKS
    // ============================================

    // Raw Copper Block
    event.add('forge:storage_blocks/raw_copper', [
        'minecraft:raw_copper_block'
    ]);

    // Raw Iron Block
    event.add('forge:storage_blocks/raw_iron', [
        'minecraft:raw_iron_block'
    ]);

    // Raw Gold Block
    event.add('forge:storage_blocks/raw_gold', [
        'minecraft:raw_gold_block'
    ]);

    // Raw Tin Block
    event.add('forge:storage_blocks/raw_tin', [
        'mekanism:block_raw_tin'
    ]);

    // Raw Lead Block
    event.add('forge:storage_blocks/raw_lead', [
        'mekanism:block_raw_lead',
        'immersiveengineering:raw_block_lead'
    ]);

    // Raw Osmium Block
    event.add('forge:storage_blocks/raw_osmium', [
        'mekanism:block_raw_osmium'
    ]);

    // Raw Uranium Block
    event.add('forge:storage_blocks/raw_uranium', [
        'mekanism:block_raw_uranium'
    ]);

    // Raw Zinc Block
    event.add('forge:storage_blocks/raw_zinc', [
        'create:raw_zinc_block'
    ]);

    console.log('[Tech Progression] Ore item tag unification complete');
});
