// Tech Progression - Tier 0: Primitive/Stone Age
// Early game recipes before metal processing

ServerEvents.recipes(event => {
    console.log('[Tech Progression] Loading Tier 0 recipes...');

    // ============================================
    // EARLY GAME PROGRESSION
    // Player must use Tinkers Construct for first metal tools
    // ============================================

    // Gravel -> Flint (improved chance via crafting)
    event.shapeless('3x minecraft:flint', [
        '3x minecraft:gravel'
    ]).id('techprogression:flint_from_gravel');

    // Clay gathering helper - grass + water bucket
    event.shapeless('4x minecraft:clay_ball', [
        'minecraft:dirt',
        'minecraft:water_bucket'
    ]).id('techprogression:clay_from_dirt').replaceIngredient('minecraft:water_bucket', 'minecraft:bucket');

    // ============================================
    // BASIC STORAGE (Available from start)
    // ============================================

    // Basic crate/barrel recipes unchanged - these are Tier 0

    // ============================================
    // TINKERS SMELTERY HELPERS
    // Make smeltery slightly easier to bootstrap
    // ============================================

    // Grout recipe adjustment (if needed)
    // Default: sand + gravel + clay = grout
    // This is fine for tier 0

    // ============================================
    // TORCH ALTERNATIVES
    // Since coal may be limited early
    // ============================================

    // Charcoal from any log in campfire (vanilla already has this)

    // Stick + coal/charcoal = 4 torches (standard)

    // Stick + resin/sap alternatives if mods provide them

    // ============================================
    // BASIC CRAFTING HELPERS
    // ============================================

    // Cobblestone tools remain available
    // Stone tools remain available
    // Wooden tools remain available

    // Furnace remains craftable (needed for smelting basics)

    // ============================================
    // COPPER TOOLS (Bridge to Tier 1)
    // Copper can be smelted in vanilla furnace
    // But tools require Tinkers or these shapeless recipes
    // ============================================

    // Note: Copper tools through Tinkers are the intended path
    // These are emergency fallback recipes with worse stats

    console.log('[Tech Progression] Tier 0 recipes loaded');
});
