// Tech Progression - Tier 2: Iron/Steel Age
// Steel unlocks proper automation and belts

ServerEvents.recipes(event => {
    console.log('[Tech Progression] Loading Tier 2 recipes...');

    // ============================================
    // STEEL MACHINE CASING
    // Required for all Tier 2 machines
    // ============================================

    event.shaped('kubejs:steel_machine_casing', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        C: 'kubejs:bronze_machine_casing'
    }).id('techprogression:steel_machine_casing');

    // Steel Circuit
    event.shaped('kubejs:steel_circuit', [
        'RRR',
        'PSP',
        'RRR'
    ], {
        R: 'minecraft:redstone',
        P: '#forge:plates/steel',
        S: '#forge:ingots/steel'
    }).id('techprogression:steel_circuit');

    // ============================================
    // STEEL PRODUCTION PATHS
    // Multiple ways to make steel
    // ============================================

    // Path 1: Create - Mixing (iron + coal coke + blaze powder)
    event.recipes.create.mixing(
        Fluid.of('tconstruct:molten_steel', 90),
        [
            '#forge:ingots/iron',
            '2x immersiveengineering:coal_cite',
            'minecraft:blaze_powder'
        ]
    ).heated().id('techprogression:steel_create_mixing');

    // Path 2: IE Blast Furnace - default recipe is fine

    // Path 3: Tinkers Smeltery - alloying recipe
    // (Tinkers should have this by default)

    // ============================================
    // CREATE PATH - TIER 2
    // ============================================

    // Brass Casing now requires steel
    event.remove({ output: 'create:brass_casing' });
    event.shaped('create:brass_casing', [
        ' P ',
        'SBS',
        ' P '
    ], {
        P: '#forge:plates/steel',
        S: '#forge:ingots/steel',
        B: 'create:brass_ingot'
    }).id('techprogression:brass_casing_steel');

    // Mechanical Belt
    event.remove({ output: 'create:belt_connector' });
    event.shaped('create:belt_connector', [
        'LLL',
        'LSL',
        'LLL'
    ], {
        L: 'minecraft:leather',
        S: '#forge:ingots/steel'
    }).id('techprogression:belt_connector_steel');

    // Crushing Wheel
    event.remove({ output: 'create:crushing_wheel' });
    event.shaped('create:crushing_wheel', [
        ' S ',
        'SCS',
        ' S '
    ], {
        S: '#forge:plates/steel',
        C: 'create:andesite_casing'
    }).id('techprogression:crushing_wheel_steel');

    // Mechanical Saw
    event.remove({ output: 'create:mechanical_saw' });
    event.shaped('create:mechanical_saw', [
        ' S ',
        ' C ',
        ' I '
    ], {
        S: '#forge:plates/steel',
        C: 'create:andesite_casing',
        I: 'minecraft:iron_ingot'
    }).id('techprogression:mechanical_saw_steel');

    // Mechanical Drill
    event.remove({ output: 'create:mechanical_drill' });
    event.shaped('create:mechanical_drill', [
        ' S ',
        ' C ',
        ' S '
    ], {
        S: '#forge:plates/steel',
        C: 'create:andesite_casing'
    }).id('techprogression:mechanical_drill_steel');

    // Encased Fan
    event.remove({ output: 'create:encased_fan' });
    event.shaped('create:encased_fan', [
        ' P ',
        'SCS',
        ' P '
    ], {
        P: '#forge:plates/steel',
        S: 'create:shaft',
        C: 'create:andesite_casing'
    }).id('techprogression:encased_fan_steel');

    // Windmill Bearing
    event.remove({ output: 'create:windmill_bearing' });
    event.shaped('create:windmill_bearing', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: '#forge:plates/steel',
        C: 'create:andesite_casing'
    }).id('techprogression:windmill_bearing_steel');

    // Steam Engine
    event.remove({ output: 'create:steam_engine' });
    event.shaped('create:steam_engine', [
        'SCS',
        'PBP',
        'SGS'
    ], {
        S: '#forge:plates/steel',
        C: 'create:brass_casing',
        P: 'create:fluid_pipe',
        B: 'minecraft:copper_block',
        G: '#forge:gears/steel'
    }).id('techprogression:steam_engine_steel');

    // Fluid Tank
    event.remove({ output: 'create:fluid_tank' });
    event.shaped('create:fluid_tank', [
        'PPP',
        'PGP',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        G: 'minecraft:glass'
    }).id('techprogression:fluid_tank_steel');

    // Item Vault
    event.remove({ output: 'create:item_vault' });
    event.shaped('create:item_vault', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        C: 'minecraft:barrel'
    }).id('techprogression:item_vault_steel');

    // Funnels
    event.remove({ output: 'create:andesite_funnel' });
    event.shaped('create:andesite_funnel', [
        'S S',
        ' A '
    ], {
        S: '#forge:ingots/steel',
        A: 'create:andesite_alloy'
    }).id('techprogression:andesite_funnel_steel');

    event.remove({ output: 'create:brass_funnel' });
    event.shaped('create:brass_funnel', [
        'S S',
        ' B '
    ], {
        S: '#forge:ingots/steel',
        B: 'create:brass_ingot'
    }).id('techprogression:brass_funnel_steel');

    // Chutes
    event.remove({ output: 'create:chute' });
    event.shaped('create:chute', [
        'S',
        'S',
        'S'
    ], {
        S: '#forge:plates/steel'
    }).id('techprogression:chute_steel');

    // ============================================
    // IMMERSIVE ENGINEERING PATH - TIER 2
    // ============================================

    // Metal Press requires steel casing
    event.remove({ output: 'immersiveengineering:metal_press' });
    // IE multiblocks are formed differently, may need config changes instead

    // Conveyor Belt (basic)
    event.remove({ output: 'immersiveengineering:conveyor_basic' });
    event.shaped('8x immersiveengineering:conveyor_basic', [
        'LLL',
        'SRS'
    ], {
        L: 'minecraft:leather',
        S: '#forge:plates/steel',
        R: 'minecraft:redstone'
    }).id('techprogression:ie_conveyor_steel');

    // LV Wire Coil requires steel
    event.remove({ output: 'immersiveengineering:wirecoil_copper' });
    event.shaped('4x immersiveengineering:wirecoil_copper', [
        ' W ',
        'WSW',
        ' W '
    ], {
        W: '#forge:wires/copper',
        S: '#forge:rods/steel'
    }).id('techprogression:lv_wirecoil_steel');

    // ============================================
    // SHARED TIER 2 MACHINES
    // ============================================

    // Sophisticated Storage - Iron tier
    event.remove({ output: 'sophisticatedstorage:iron_chest' });
    event.shaped('sophisticatedstorage:iron_chest', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        C: 'minecraft:chest'
    }).id('techprogression:sophisticated_iron_chest');

    event.remove({ output: 'sophisticatedstorage:iron_barrel' });
    event.shaped('sophisticatedstorage:iron_barrel', [
        'PPP',
        'PBP',
        'PPP'
    ], {
        P: '#forge:plates/steel',
        B: 'minecraft:barrel'
    }).id('techprogression:sophisticated_iron_barrel');

    // Sophisticated Backpacks - Iron tier
    event.remove({ output: 'sophisticatedbackpacks:iron_backpack' });
    event.shaped('sophisticatedbackpacks:iron_backpack', [
        'PSP',
        'PBP',
        'PSP'
    ], {
        P: '#forge:plates/steel',
        S: 'minecraft:string',
        B: 'sophisticatedbackpacks:backpack'
    }).id('techprogression:iron_backpack_steel');

    // Trash Cans - Tier 2
    event.remove({ output: 'trashcans:item_trash_can' });
    event.shaped('trashcans:item_trash_can', [
        'SPS',
        'P P',
        'PPP'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/steel'
    }).id('techprogression:item_trash_can_steel');

    event.remove({ output: 'trashcans:liquid_trash_can' });
    event.shaped('trashcans:liquid_trash_can', [
        'SPS',
        'PGP',
        'PPP'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/steel',
        G: 'minecraft:glass'
    }).id('techprogression:liquid_trash_can_steel');

    event.remove({ output: 'trashcans:energy_trash_can' });
    event.shaped('trashcans:energy_trash_can', [
        'SPS',
        'PRP',
        'PPP'
    ], {
        S: '#forge:ingots/steel',
        P: '#forge:plates/steel',
        R: 'minecraft:redstone_block'
    }).id('techprogression:energy_trash_can_steel');

    // Storage Drawers - Tier 2
    event.remove({ output: 'storagedrawers:upgrade_template' });
    event.shaped('4x storagedrawers:upgrade_template', [
        'SRS',
        'R R',
        'SRS'
    ], {
        S: '#forge:rods/wooden',
        R: '#forge:ingots/steel'
    }).id('techprogression:drawer_upgrade_template');

    // Create Enchantment Industry - Disenchanter
    event.remove({ output: 'create_enchantment_industry:disenchanter' });
    event.shaped('create_enchantment_industry:disenchanter', [
        ' B ',
        'SCS',
        'PPP'
    ], {
        B: 'minecraft:glass_bottle',
        S: '#forge:plates/steel',
        C: 'create:brass_casing',
        P: 'minecraft:obsidian'
    }).id('techprogression:disenchanter_steel');

    console.log('[Tech Progression] Tier 2 recipes loaded');
});
