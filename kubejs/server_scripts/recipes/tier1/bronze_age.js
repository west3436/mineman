// Tech Progression - Tier 1: Bronze Age
// Bronze components unlock basic automation

ServerEvents.recipes(event => {
    console.log('[Tech Progression] Loading Tier 1 recipes...');

    // ============================================
    // BRONZE MACHINE CASING
    // Required for all Tier 1 machines
    // ============================================

    // Bronze Machine Casing (universal for both paths)
    event.shaped('kubejs:bronze_machine_casing', [
        'PPP',
        'P P',
        'PPP'
    ], {
        P: '#forge:plates/bronze'
    }).id('techprogression:bronze_machine_casing');

    // ============================================
    // CREATE PATH - TIER 1 MODIFICATIONS
    // Require bronze components
    // ============================================

    // Andesite Casing now requires bronze
    event.remove({ output: 'create:andesite_casing' });
    event.shaped('create:andesite_casing', [
        ' P ',
        'PAP',
        ' P '
    ], {
        P: '#forge:plates/bronze',
        A: 'minecraft:andesite'
    }).id('techprogression:andesite_casing_bronze');

    // Cogwheel requires bronze gear
    event.remove({ output: 'create:cogwheel' });
    event.shaped('create:cogwheel', [
        ' W ',
        'WGW',
        ' W '
    ], {
        W: '#minecraft:planks',
        G: '#forge:gears/bronze'
    }).id('techprogression:cogwheel_bronze');

    // Large Cogwheel
    event.remove({ output: 'create:large_cogwheel' });
    event.shaped('create:large_cogwheel', [
        'WWW',
        'WGW',
        'WWW'
    ], {
        W: '#minecraft:planks',
        G: '#forge:gears/bronze'
    }).id('techprogression:large_cogwheel_bronze');

    // Shaft requires bronze rod
    event.remove({ output: 'create:shaft' });
    event.shaped('2x create:shaft', [
        'A',
        'R',
        'A'
    ], {
        A: 'create:andesite_alloy',
        R: '#forge:ingots/bronze'
    }).id('techprogression:shaft_bronze');

    // Mechanical Press
    event.remove({ output: 'create:mechanical_press' });
    event.shaped('create:mechanical_press', [
        ' S ',
        'BCB',
        ' I '
    ], {
        S: 'create:shaft',
        B: '#forge:ingots/bronze',
        C: 'create:andesite_casing',
        I: 'minecraft:iron_block'
    }).id('techprogression:mechanical_press_bronze');

    // Millstone
    event.remove({ output: 'create:millstone' });
    event.shaped('create:millstone', [
        ' G ',
        'SCS',
        'SSS'
    ], {
        G: '#forge:gears/bronze',
        S: 'minecraft:stone',
        C: 'create:andesite_casing'
    }).id('techprogression:millstone_bronze');

    // Basin
    event.remove({ output: 'create:basin' });
    event.shaped('create:basin', [
        'B B',
        'B B',
        'BBB'
    ], {
        B: '#forge:ingots/bronze'
    }).id('techprogression:basin_bronze');

    // Deployer
    event.remove({ output: 'create:deployer' });
    event.shaped('create:deployer', [
        ' H ',
        'BCB',
        ' S '
    ], {
        H: 'create:brass_hand',
        B: '#forge:ingots/bronze',
        C: 'create:andesite_casing',
        S: 'create:shaft'
    }).id('techprogression:deployer_bronze');

    // Mechanical Mixer
    event.remove({ output: 'create:mechanical_mixer' });
    event.shaped('create:mechanical_mixer', [
        ' S ',
        'BCB',
        ' W '
    ], {
        S: 'create:shaft',
        B: '#forge:ingots/bronze',
        C: 'create:andesite_casing',
        W: 'create:whisk'
    }).id('techprogression:mechanical_mixer_bronze');

    // ============================================
    // IMMERSIVE ENGINEERING PATH - TIER 1
    // Require bronze components
    // ============================================

    // Engineer's Workbench requires bronze
    event.remove({ output: 'immersiveengineering:workbench' });
    event.shaped('immersiveengineering:workbench', [
        'PPP',
        'B B',
        'W W'
    ], {
        P: '#forge:plates/bronze',
        B: '#forge:ingots/bronze',
        W: '#minecraft:planks'
    }).id('techprogression:ie_workbench_bronze');

    // Coke Oven Brick (unchanged - clay based, appropriate for Tier 1)

    // Blast Furnace Brick (unchanged - needs steel eventually anyway)

    // ============================================
    // TINKERS CONSTRUCT - TIER 1
    // Smeltery improvements
    // ============================================

    // Bronze alloying recipe (copper + tin) - standard Tinkers
    // 3 copper + 1 tin = 4 bronze (molten)

    // ============================================
    // SHARED MACHINES - TIER 1
    // ============================================

    // Sophisticated Backpacks - Iron tier requires bronze frame
    event.remove({ output: 'sophisticatedbackpacks:iron_backpack' });
    // Recipe will be re-added when we have the iron_backpack upgrade path
    // For now, iron backpack is technically Tier 2

    // Basic sophisticated storage uses bronze
    // (Keep default recipes for leather/basic tier)

    console.log('[Tech Progression] Tier 1 recipes loaded');
});
