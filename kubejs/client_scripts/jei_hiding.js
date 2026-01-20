// Tech Progression - JEI Item Hiding
// Hides duplicate items and unavailable machines from JEI

JEIEvents.hideItems(event => {
    console.log('[Tech Progression] Hiding duplicate items from JEI...');

    // ============================================
    // DUPLICATE INGOT HIDING
    // Keep only the canonical version
    // ============================================

    // Steel - keep Mekanism, hide IE
    event.hide('immersiveengineering:ingot_steel');

    // Lead - keep Mekanism, hide IE
    event.hide('immersiveengineering:ingot_lead');

    // Silver - keep IE (more items), hide Mekanism
    // event.hide('mekanism:ingot_silver'); // Uncomment if Mekanism has silver

    // ============================================
    // DUPLICATE PLATE HIDING
    // ============================================

    // Copper - keep Create, hide IE
    event.hide('immersiveengineering:plate_copper');

    // Iron - keep Create, hide IE
    event.hide('immersiveengineering:plate_iron');

    // Gold - keep Create, hide IE
    event.hide('immersiveengineering:plate_gold');

    // Steel - keep Mekanism, hide IE
    event.hide('immersiveengineering:plate_steel');

    // Lead - keep Mekanism, hide IE
    event.hide('immersiveengineering:plate_lead');

    // ============================================
    // DUPLICATE DUST HIDING
    // ============================================

    // Copper - keep Mekanism, hide IE
    event.hide('immersiveengineering:dust_copper');

    // Iron - keep Mekanism, hide IE
    event.hide('immersiveengineering:dust_iron');

    // Gold - keep Mekanism, hide IE
    event.hide('immersiveengineering:dust_gold');

    // Silver - keep Mekanism, hide IE
    event.hide('immersiveengineering:dust_silver');

    // Lead - keep Mekanism, hide IE
    event.hide('immersiveengineering:dust_lead');

    // ============================================
    // DUPLICATE NUGGET HIDING
    // ============================================

    // Copper - keep Mekanism, hide IE and Create
    event.hide('immersiveengineering:nugget_copper');
    event.hide('create:copper_nugget');

    // Steel - keep Mekanism, hide IE
    event.hide('immersiveengineering:nugget_steel');

    // Lead - keep Mekanism, hide IE
    event.hide('immersiveengineering:nugget_lead');

    // Silver - keep IE, hide Mekanism if exists
    // event.hide('mekanism:nugget_silver');

    // ============================================
    // DUPLICATE STORAGE BLOCK HIDING
    // ============================================

    // Steel - keep Mekanism, hide IE
    event.hide('immersiveengineering:storage_steel');

    // Lead - keep Mekanism, hide IE
    event.hide('immersiveengineering:storage_lead');

    // ============================================
    // DUPLICATE RAW ORE HIDING
    // ============================================

    // Lead - keep Mekanism, hide IE
    event.hide('immersiveengineering:raw_lead');

    // ============================================
    // TIER-GATED ITEMS (hidden until unlocked)
    // These should ideally be handled by quests/advancements
    // For now, we just hide them to reduce clutter
    // ============================================

    // Vanilla tools (removed recipes, hide from JEI)
    event.hide('minecraft:iron_pickaxe');
    event.hide('minecraft:iron_axe');
    event.hide('minecraft:iron_shovel');
    event.hide('minecraft:iron_hoe');
    event.hide('minecraft:iron_sword');
    event.hide('minecraft:golden_pickaxe');
    event.hide('minecraft:golden_axe');
    event.hide('minecraft:golden_shovel');
    event.hide('minecraft:golden_hoe');
    event.hide('minecraft:golden_sword');
    event.hide('minecraft:diamond_pickaxe');
    event.hide('minecraft:diamond_axe');
    event.hide('minecraft:diamond_shovel');
    event.hide('minecraft:diamond_hoe');
    event.hide('minecraft:diamond_sword');
    event.hide('minecraft:netherite_pickaxe');
    event.hide('minecraft:netherite_axe');
    event.hide('minecraft:netherite_shovel');
    event.hide('minecraft:netherite_hoe');
    event.hide('minecraft:netherite_sword');

    // Vanilla armor
    event.hide('minecraft:iron_helmet');
    event.hide('minecraft:iron_chestplate');
    event.hide('minecraft:iron_leggings');
    event.hide('minecraft:iron_boots');
    event.hide('minecraft:golden_helmet');
    event.hide('minecraft:golden_chestplate');
    event.hide('minecraft:golden_leggings');
    event.hide('minecraft:golden_boots');
    event.hide('minecraft:diamond_helmet');
    event.hide('minecraft:diamond_chestplate');
    event.hide('minecraft:diamond_leggings');
    event.hide('minecraft:diamond_boots');
    event.hide('minecraft:netherite_helmet');
    event.hide('minecraft:netherite_chestplate');
    event.hide('minecraft:netherite_leggings');
    event.hide('minecraft:netherite_boots');

    console.log('[Tech Progression] JEI hiding complete');
});

// Hide fluids that are duplicates
JEIEvents.hideFluids(event => {
    console.log('[Tech Progression] Hiding duplicate fluids from JEI...');

    // Molten metals - keep Tinkers, hide Mekanism liquid variants
    event.hide('mekanism:liquid_iron');
    event.hide('mekanism:liquid_gold');
    event.hide('mekanism:liquid_copper');
    event.hide('mekanism:liquid_tin');
    event.hide('mekanism:liquid_lead');
    event.hide('mekanism:liquid_silver');
    event.hide('mekanism:liquid_osmium');
    event.hide('mekanism:liquid_uranium');
    event.hide('mekanism:liquid_steel');
    event.hide('mekanism:liquid_bronze');

    console.log('[Tech Progression] Fluid hiding complete');
});
