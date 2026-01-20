// Tech Progression - JEI Item Hiding
// Hides duplicate items and unavailable machines from JEI
// Priority: Create > Immersive Engineering > Mekanism > Create: TFMG > Others

JEIEvents.hideItems(event => {
    console.log('[Tech Progression] Hiding duplicate items from JEI...');

    // ============================================
    // DUPLICATE INGOT HIDING
    // Priority: Create > IE > Mekanism
    // ============================================

    // Steel - keep IE (no Create steel ingot), hide Mekanism
    event.hide('mekanism:ingot_steel');

    // Lead - keep IE, hide Mekanism
    event.hide('mekanism:ingot_lead');

    // ============================================
    // DUPLICATE PLATE HIDING
    // Priority: Create > IE > Mekanism
    // ============================================

    // Copper - keep Create, hide IE and Mekanism
    event.hide('immersiveengineering:plate_copper');
    event.hide('mekanism:plate_copper');

    // Iron - keep Create, hide IE
    event.hide('immersiveengineering:plate_iron');

    // Gold - keep Create, hide IE
    event.hide('immersiveengineering:plate_gold');

    // Steel - keep Create if available, else IE, hide Mekanism
    event.hide('mekanism:plate_steel');
    event.hide('immersiveengineering:plate_steel'); // Hide IE plate since Create steel sheet is canonical

    // Bronze - keep Create, hide Mekanism
    event.hide('mekanism:plate_bronze');

    // Lead - keep IE, hide Mekanism
    event.hide('mekanism:plate_lead');

    // ============================================
    // DUPLICATE DUST HIDING
    // Priority: IE > Mekanism (IE has better processing)
    // ============================================

    // Copper - keep IE, hide Mekanism
    event.hide('mekanism:dust_copper');

    // Iron - keep IE, hide Mekanism
    event.hide('mekanism:dust_iron');

    // Gold - keep IE, hide Mekanism
    event.hide('mekanism:dust_gold');

    // Silver - keep IE, hide Mekanism
    event.hide('mekanism:dust_silver');

    // Lead - keep IE, hide Mekanism
    event.hide('mekanism:dust_lead');

    // ============================================
    // DUPLICATE NUGGET HIDING
    // Priority: Create > IE > Mekanism
    // ============================================

    // Copper - keep Create, hide IE and Mekanism
    event.hide('immersiveengineering:nugget_copper');
    event.hide('mekanism:nugget_copper');

    // Steel - keep IE, hide Mekanism
    event.hide('mekanism:nugget_steel');

    // Lead - keep IE, hide Mekanism
    event.hide('mekanism:nugget_lead');

    // ============================================
    // DUPLICATE STORAGE BLOCK HIDING
    // Priority: Create > IE > Mekanism
    // ============================================

    // Steel - keep IE, hide Mekanism
    event.hide('mekanism:block_steel');

    // Lead - keep IE, hide Mekanism
    event.hide('mekanism:block_lead');

    // ============================================
    // DUPLICATE RAW ORE HIDING
    // Priority: Create > IE > Mekanism
    // ============================================

    // Lead - keep IE, hide Mekanism
    event.hide('mekanism:raw_lead');

    // ============================================
    // DUPLICATE ROD/STICK HIDING
    // Priority: Create > IE
    // ============================================

    // Iron Rod - keep Create, hide IE
    event.hide('immersiveengineering:stick_iron');

    // ============================================
    // DUPLICATE WIRE HIDING
    // Priority: IE > Mekanism (IE is electrical mod)
    // ============================================

    // Copper Wire - keep IE, hide Mekanism
    event.hide('mekanism:wire_copper');

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
