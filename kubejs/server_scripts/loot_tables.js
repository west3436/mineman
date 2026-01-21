// LootJS Loot Tables for Tech Progression Modpack
// Covers all 177+ mods with tiered loot appropriate for world containers and quest rewards
// Priority: 0 (runs before other loot modifications)

LootJS.modifiers((event) => {
    // ============================================================================
    // LOOT POOL DEFINITIONS - Organized by tier and category
    // ============================================================================

    // ==================== TIER 1: EARLY GAME / BASIC RESOURCES ====================
    const tier1Materials = [
        // Vanilla basics
        'minecraft:iron_ingot',
        'minecraft:gold_ingot',
        'minecraft:copper_ingot',
        'minecraft:coal',
        'minecraft:redstone',
        'minecraft:lapis_lazuli',
        'minecraft:string',
        'minecraft:leather',
        'minecraft:bone',
        'minecraft:gunpowder',
        'minecraft:flint',
        // Basic mod materials
        'immersiveengineering:hemp_fiber',
        'immersiveengineering:hemp_seeds',
        'mekanism:bio_fuel',
        'tconstruct:grout',
        'tconstruct:seared_brick',
        'create:andesite_alloy',
        'create:zinc_ingot',
        'tfmg:fireclay_ball',
        'tfmg:coal_coke',
        'electrodynamics:oxidizedirondustite',
        'supplementaries:rope',
        'supplementaries:flax_seeds',
        // Basic foods
        'farmersdelight:tomato_seeds',
        'farmersdelight:cabbage_seeds',
        'farmersdelight:onion',
        'farmersdelight:rice',
        'farmersdelight:rope',
        'growthcraft_rice:rice',
        'growthcraft_apples:apple_seeds',
        'agricraft:seed_analyzer'
    ];

    const tier1Tools = [
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_sword',
        'minecraft:shield',
        'minecraft:bow',
        'minecraft:crossbow',
        'minecraft:fishing_rod',
        'supplementaries:slingshot',
        'supplementaries:quiver',
        'supplementaries:rope_arrow',
        'immersiveengineering:hammer',
        'immersiveengineering:wirecutter',
        'create:wrench',
        'tconstruct:flint_and_brick',
        'mekanism:configurator',
        'electrodynamics:wrench',
        'voltaic:wrench'
    ];

    const tier1Food = [
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:honey_cookie',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'farmersdelight:fried_egg',
        'farmersdelight:mixed_salad',
        'farmersdelight:barbecue_stick',
        'farmersdelight:fruit_salad',
        'minecraft:golden_apple',
        'minecraft:golden_carrot',
        'comforts:sleeping_bag_white',
        'supplementaries:candy',
        'growthcraft_apples:applesauce',
        'tconstruct:bacon',
        'tconstruct:cheese_ingot'
    ];

    const tier1Decorative = [
        'supplementaries:jar',
        'supplementaries:goblet',
        'supplementaries:candle_holder',
        'supplementaries:pedestal',
        'supplementaries:globe',
        'supplementaries:hourglass',
        'supplementaries:clock_block',
        'handcrafted:stackable_book',
        'handcrafted:terracotta_vase',
        'handcrafted:terracotta_thin_pot',
        'handcrafted:table_cloth_white',
        'fairylights:hanging_lights',
        'storagedrawers:oak_full_drawers_1',
        'storagedrawers:upgrade_template',
        'supplementaries:notice_board',
        'supplementaries:item_shelf'
    ];

    // ==================== TIER 2: BRONZE AGE / STEAM POWER ====================
    const tier2Materials = [
        // Alloys
        'kubejs:bronze_machine_casing',
        'create:brass_ingot',
        'create:brass_nugget',
        'create:crushed_raw_zinc',
        'create:crushed_raw_copper',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:plate_constantan',
        'mekanism:bronze_ingot',
        'mekanism:bronze_nugget',
        'tconstruct:rose_gold_ingot',
        'tconstruct:pig_iron_ingot',
        'tfmg:constantan_ingot',
        // Processed materials
        'immersiveengineering:dust_wood',
        'immersiveengineering:hemp_fabric',
        'immersiveengineering:plate_iron',
        'immersiveengineering:plate_copper',
        'create:electron_tube',
        'create:precision_mechanism',
        'create:copper_sheet',
        'create:golden_sheet',
        'tfmg:screw',
        'tfmg:rebar',
        'tconstruct:seared_bricks',
        'tconstruct:pattern',
        'forestry:peat',
        'forestry:mulch'
    ];

    const tier2Machines = [
        'create:mechanical_press',
        'create:mechanical_mixer',
        'create:encased_fan',
        'create:basin',
        'create:millstone',
        'create:depot',
        'create:chute',
        'create:smart_chute',
        'create:item_vault',
        'immersiveengineering:workbench',
        'immersiveengineering:crate',
        'immersiveengineering:wooden_barrel',
        'tconstruct:crafting_station',
        'tconstruct:part_builder',
        'tconstruct:tinker_station',
        'tconstruct:seared_melter',
        'tconstruct:seared_basin',
        'tconstruct:seared_table',
        'tfmg:coke_oven',
        'tfmg:firebox',
        'farmersdelight:stove',
        'farmersdelight:cooking_pot',
        'farmersdelight:cutting_board',
        'cookingforblockheads:oven',
        'cookingforblockheads:cooking_table',
        'storagedrawers:controller',
        'storagedrawers:iron_storage_upgrade'
    ];

    const tier2Components = [
        'create:cogwheel',
        'create:large_cogwheel',
        'create:shaft',
        'create:gearbox',
        'create:vertical_gearbox',
        'create:clutch',
        'create:gearshift',
        'create:belt_connector',
        'create:andesite_casing',
        'create:copper_casing',
        'immersiveengineering:component_iron',
        'immersiveengineering:component_steel',
        'immersiveengineering:coil_lv',
        'immersiveengineering:wirecoil_copper',
        'mekanism:basic_control_circuit',
        'mekanism:alloy_infused',
        'tconstruct:tool_binding',
        'tconstruct:tool_handle',
        'tconstruct:tough_handle'
    ];

    // ==================== TIER 3: STEEL AGE / BASIC ELECTRICITY ====================
    const tier3Materials = [
        'kubejs:steel_circuit',
        'kubejs:steel_machine_casing',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:plate_steel',
        'mekanism:ingot_steel',
        'mekanism:steel_casing',
        'tfmg:steel_ingot',
        'tfmg:steel_block',
        'tconstruct:steel_ingot',
        'electrodynamics:ingotvanadiumsteel',
        'electrodynamics:ingothsla',
        'electrodynamics:ingotstainlesssteel',
        'tfmg:aluminum_ingot',
        'tfmg:lead_ingot',
        'tfmg:nickel_ingot',
        'tfmg:silicon_ingot',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'mekanism:ingot_osmium'
    ];

    const tier3Machines = [
        'mekanism:basic_enrichment_chamber',
        'mekanism:basic_crusher',
        'mekanism:basic_combiner',
        'mekanism:basic_energized_smelter',
        'mekanism:metallurgic_infuser',
        'mekanism:basic_bin',
        'mekanism:basic_energy_cube',
        'mekanism:basic_fluid_tank',
        'immersiveengineering:capacitor_lv',
        'immersiveengineering:dynamo',
        'immersiveengineering:turntable',
        'electrodynamics:wiremill',
        'electrodynamics:electricfurnace',
        'electrodynamics:mineralcrusher',
        'electrodynamics:oxidationfurnace',
        'tfmg:generator',
        'tfmg:electric_motor',
        'tfmg:accumulator',
        'ae2:charger',
        'ae2:inscriber',
        'industrialforegoing:latex_processing_unit',
        'industrialforegoing:dissolution_chamber',
        'compactmachines:machine_small'
    ];

    const tier3Components = [
        'immersiveengineering:coil_mv',
        'immersiveengineering:wirecoil_electrum',
        'immersiveengineering:component_electronic',
        'electrodynamics:circuitbasic',
        'electrodynamics:motorac',
        'electrodynamics:coil',
        'tfmg:circuit_board',
        'tfmg:electromagnetic_coil',
        'tfmg:capacitor_item',
        'tfmg:resistor',
        'tfmg:steel_mechanism',
        'mekanism:advanced_control_circuit',
        'mekanism:alloy_reinforced',
        'ae2:logic_processor',
        'ae2:calculation_processor',
        'ae2:engineering_processor',
        'ae2:certus_quartz_crystal'
    ];

    const tier3Tools = [
        'mekanism:steel_paxel',
        'mekanism:atomic_disassembler',
        'immersiveengineering:revolver',
        'immersiveengineering:railgun',
        'immersiveengineering:drill',
        'immersiveengineering:chemthrower',
        'tfmg:steel_pickaxe',
        'tfmg:steel_axe',
        'tfmg:steel_sword',
        'tfmg:fire_extinguisher',
        'tfmg:flamethrower',
        'tconstruct:pickaxe',
        'tconstruct:hand_axe',
        'tconstruct:sword',
        'tconstruct:dagger',
        'tconstruct:mattock'
    ];

    // ==================== TIER 4: ADVANCED TECH / HIGH VOLTAGE ====================
    const tier4Materials = [
        'kubejs:advanced_circuit',
        'kubejs:advanced_machine_casing',
        'mekanism:alloy_atomic',
        'mekanism:elite_control_circuit',
        'mekanism:enriched_diamond',
        'mekanism:enriched_obsidian',
        'ae2:fluix_crystal',
        'ae2:fluix_dust',
        'ae2:sky_dust',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:plate_electrum',
        'electrodynamics:ingotbronze',
        'electrodynamics:circuitadvanced',
        'electrodynamics:motordc',
        'tconstruct:manyullyn_ingot',
        'tconstruct:hepatizon_ingot',
        'tconstruct:queens_slime_ingot',
        'tconstruct:cobalt_ingot'
    ];

    const tier4Machines = [
        'mekanism:advanced_enrichment_chamber',
        'mekanism:advanced_crusher',
        'mekanism:advanced_energy_cube',
        'mekanism:electrolytic_separator',
        'mekanism:chemical_infuser',
        'mekanism:pressurized_reaction_chamber',
        'mekanism:digital_miner',
        'immersiveengineering:capacitor_mv',
        'immersiveengineering:capacitor_hv',
        'ae2:drive',
        'ae2:controller',
        'ae2:crafting_terminal',
        'ae2:interface',
        'ae2:pattern_provider',
        'electrodynamics:motorcomplex',
        'electrodynamics:chemicalmixer',
        'electrodynamics:chemicalcrystallizer',
        'electrodynamics:fermentationplant',
        'industrialforegoing:laser_drill',
        'industrialforegoing:material_stonework_factory',
        'compactmachines:machine_normal',
        'compactmachines:machine_large'
    ];

    const tier4Storage = [
        'ae2:1k_cell_component',
        'ae2:4k_cell_component',
        'ae2:16k_cell_component',
        'ae2:1k_storage_cell',
        'ae2:4k_storage_cell',
        'ae2:16k_storage_cell',
        'ae2:1k_fluid_cell_component',
        'ae2:4k_fluid_cell_component',
        'mekanism:basic_chemical_tank',
        'mekanism:advanced_chemical_tank',
        'mekanism:advanced_bin',
        'mekanism:advanced_fluid_tank',
        'storagedrawers:gold_storage_upgrade',
        'storagedrawers:diamond_storage_upgrade',
        'sophisticatedstorage:gold_barrel',
        'sophisticatedstorage:gold_chest',
        'sophisticatedstorage:stack_upgrade_tier_2',
        'sophisticatedstorage:pickup_upgrade'
    ];

    // ==================== TIER 5: INDUSTRIAL / NUCLEAR ====================
    const tier5Materials = [
        'kubejs:industrial_circuit',
        'kubejs:industrial_machine_casing',
        'mekanism:ultimate_control_circuit',
        'mekanism:hdpe_pellet',
        'mekanism:hdpe_sheet',
        'mekanism:hdpe_rod',
        'mekanism:polonium_pellet',
        'mekanism:plutonium_pellet',
        'electrodynamics:compositechainsteel',
        'electrodynamics:circuitelite',
        'electrodynamics:motorhighlyadvanced',
        'tconstruct:knightslime_ingot',
        'tconstruct:slimesteel_ingot',
        'tconstruct:soulsteel_ingot',
        'nuclearcraft:ingot_uranium',
        'nuclearcraft:ingot_thorium',
        'nuclearcraft:ingot_plutonium'
    ];

    const tier5Machines = [
        'mekanism:elite_enrichment_chamber',
        'mekanism:elite_crusher',
        'mekanism:elite_energy_cube',
        'mekanism:isotopic_centrifuge',
        'mekanism:nutritional_liquifier',
        'mekanism:chemical_oxidizer',
        'mekanism:antiprotonic_nucleosynthesizer',
        'electrodynamics:electricarcfurnace',
        'electrodynamics:electricpumpmk2',
        'electrodynamics:lathe',
        'ae2:64k_cell_component',
        'ae2:64k_storage_cell',
        'advancedae:advanced_pattern_encoder',
        'industrialforegoing:infinity_drill',
        'industrialforegoing:infinity_saw',
        'industrialforegoing:bioreactor',
        'compactmachines:machine_giant',
        'compactmachines:machine_maximum'
    ];

    const tier5Generators = [
        'mekanismgenerators:wind_generator',
        'mekanismgenerators:solar_generator',
        'mekanismgenerators:advanced_solar_generator',
        'mekanismgenerators:bio_generator',
        'mekanismgenerators:gas_burning_generator',
        'mekanismgenerators:heat_generator',
        'immersiveengineering:connector_mv',
        'immersiveengineering:connector_hv',
        'electrodynamics:solarpanel',
        'electrodynamics:advancedsolarpanel',
        'nuclearcraft:solar_panel_basic'
    ];

    // ==================== TIER 6: ULTIMATE / ENDGAME ====================
    const tier6Materials = [
        'kubejs:ultimate_circuit',
        'kubejs:ultimate_machine_casing',
        'kubejs:quantum_circuit',
        'kubejs:quantum_machine_casing',
        'mekanism:antimatter_pellet',
        'mekanism:module_base',
        'electrodynamics:circuitultimate',
        'ae2:singularity',
        'ae2:quantum_entangled_singularity'
    ];

    const tier6Machines = [
        'mekanism:ultimate_enrichment_chamber',
        'mekanism:ultimate_crusher',
        'mekanism:ultimate_energy_cube',
        'mekanism:quantum_entangloporter',
        'mekanism:teleporter',
        'mekanism:sps_casing',
        'ae2:256k_cell_component',
        'ae2:quantum_ring',
        'ae2:quantum_link',
        'advancedae:advanced_crafting_unit',
        'fluxnetworks:flux_controller',
        'fluxnetworks:flux_point',
        'fluxnetworks:flux_plug',
        'compactmachines:personal_shrinking_device'
    ];

    const tier6Armor = [
        'mekanism:mekasuit_helmet',
        'mekanism:mekasuit_bodyarmor',
        'mekanism:mekasuit_pants',
        'mekanism:mekasuit_boots',
        'mekanism:meka_tool',
        'mekanismtools:osmium_paxel',
        'mekanismtools:refined_obsidian_paxel',
        'mekanismtools:refined_glowstone_paxel',
        'tconstruct:plate_helmet',
        'tconstruct:plate_chestplate',
        'tconstruct:plate_leggings',
        'tconstruct:plate_boots',
        'tconstruct:travelers_helmet',
        'tconstruct:travelers_chestplate',
        'tconstruct:travelers_leggings',
        'tconstruct:travelers_boots'
    ];

    // ==================== SPECIAL CATEGORIES ====================
    const militaryItems = [
        // Guns & Weapons (CGS - Create Guns mod)
        'cgs:iron_pistol',
        'cgs:gold_pistol',
        'cgs:copper_pistol',
        'cgs:diamond_pistol',
        'cgs:netherite_pistol',
        'cgs:iron_smg',
        'cgs:gold_smg',
        'cgs:copper_smg',
        'cgs:iron_rifle',
        'cgs:gold_rifle',
        'cgs:iron_shotgun',
        'cgs:gold_shotgun',
        'cgs:iron_sniper',
        'cgs:gold_sniper',
        'cgs:iron_gatling',
        'cgs:gold_gatling',
        'cgs:iron_grenade_launcher',
        'cgs:iron_rocket_launcher',
        // Ammo
        'cgs:iron_round',
        'cgs:copper_round',
        'cgs:diamond_round',
        'cgs:shotgun_shell',
        'cgs:tracker_round',
        'cgs:explosive_round',
        // Create Big Cannons
        'createbigcannons:autocannon',
        'createbigcannons:machine_gun',
        'createbigcannons:cast_iron_cannon_barrel',
        'createbigcannons:steel_cannon_barrel',
        'createbigcannons:shot',
        'createbigcannons:ap_shot',
        'createbigcannons:he_shot',
        // Ballistix
        'ballistix:missilecloserange',
        'ballistix:missilelongrange',
        'ballistix:missileobjective',
        'ballistix:missileexplosive',
        'ballistix:explosivemix'
    ];

    const transportItems = [
        // Create additions
        'create:minecart_coupling',
        'create:cart_assembler',
        'create:contraption_controls',
        'create:windmill_bearing',
        'create:mechanical_bearing',
        'create:linear_chassis',
        'create:radial_chassis',
        'create:super_glue',
        'create:track',
        'create:train_door',
        // Steam n Rails
        'railways:track_brass',
        'railways:track_aluminum',
        'railways:track_industrial',
        'railways:track_steel',
        // Immersive Aircraft
        'immersive_aircraft:quadrocopter',
        'immersive_aircraft:gyrodyne',
        'immersive_aircraft:biplane',
        'immersive_aircraft:airship',
        'immersive_aircraft:cargo_airship',
        'immersive_aircraft:engine',
        'immersive_aircraft:propeller',
        'immersive_aircraft:sail',
        // Industrial Renewal
        'industrialrenewal:cargo_container',
        'industrialrenewal:steel_fence',
        'industrialrenewal:catwalk',
        'industrialrenewal:handrail'
    ];

    const automationItems = [
        // Computer Craft
        'computercraft:computer_normal',
        'computercraft:computer_advanced',
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced',
        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',
        'computercraft:monitor_normal',
        'computercraft:monitor_advanced',
        'computercraft:disk_drive',
        'computercraft:printer',
        'computercraft:speaker',
        // Advanced Peripherals
        'advancedperipherals:environment_detector',
        'advancedperipherals:player_detector',
        'advancedperipherals:block_reader',
        'advancedperipherals:inventory_manager',
        'advancedperipherals:redstone_integrator',
        'advancedperipherals:nbt_storage',
        'advancedperipherals:geo_scanner',
        'advancedperipherals:me_bridge',
        // XNet
        'xnet:controller',
        'xnet:router',
        'xnet:connector_blue',
        'xnet:connector_green',
        'xnet:connector_red',
        'xnet:connector_yellow',
        'xnet:netcable_blue',
        // Integrated Dynamics
        'integrateddynamics:logic_director',
        'integrateddynamics:variable_store',
        'integrateddynamics:logic_programmer',
        'integrateddynamics:materializer',
        'integrateddynamics:menril_log',
        'integrateddynamics:menril_sapling'
    ];

    const beeItems = [
        'forestry:bee_house',
        'forestry:apiary',
        'forestry:alveary_plain',
        'forestry:propolis',
        'forestry:honeydew',
        'forestry:honey_drop',
        'forestry:beeswax',
        'forestry:royal_jelly',
        'forestry:pollen_cluster_normal',
        'forestry:scoop',
        'forestry:frame_impregnated',
        'forestry:frame_proven',
        'forestry:habitat_locator'
    ];

    const botanicItems = [
        'botanypots:terracotta_botany_pot',
        'botanypots:white_glazed_terracotta_botany_pot',
        'botanypots:black_glazed_terracotta_botany_pot',
        'botanypots:hopper_botany_pot',
        'botanypots:terracotta_hopper_botany_pot',
        'agricraft:debugger',
        'agricraft:clipper',
        'agricraft:magnifying_glass',
        'agricraft:journal',
        'agricraft:crop_sticks'
    ];

    const hostileNetworksItems = [
        'hostilenetworks:deep_learner',
        'hostilenetworks:loot_fabricator',
        'hostilenetworks:sim_chamber',
        'hostilenetworks:blank_data_model',
        'hostilenetworks:prediction_matrix',
        'hostilenetworks:overworld_prediction',
        'hostilenetworks:nether_prediction',
        'hostilenetworks:end_prediction'
    ];

    const rareTreasures = [
        'minecraft:enchanted_golden_apple',
        'minecraft:totem_of_undying',
        'minecraft:elytra',
        'minecraft:trident',
        'minecraft:heart_of_the_sea',
        'minecraft:nether_star',
        'minecraft:dragon_egg',
        'minecraft:dragon_breath',
        'supplementaries:globe_sepia',
        'tconstruct:creative_slot',
        'mekanism:creative_energy_cube',
        'ae2:creative_energy_cell',
        'kubejs:path_exchange_token'
    ];

    const explorationItems = [
        'minecraft:compass',
        'minecraft:clock',
        'minecraft:map',
        'minecraft:filled_map',
        'minecraft:recovery_compass',
        'minecraft:spyglass',
        'minecraft:lead',
        'minecraft:name_tag',
        'minecraft:saddle',
        'explorerscompass:explorerscompass',
        'supplementaries:altimeter',
        'supplementaries:key',
        'supplementaries:slice_map',
        'supplementaries:wind_vane'
    ];

    // Create Numismatics Currency (lowest to highest value)
    // cog (1) -> spur (8) -> bevel (64) -> sprocket (512) -> sun (4096) -> crown (32768)
    const currencyCommon = [
        'numismatics:cog',      // Copper coin (lowest)
        'numismatics:spur'      // Iron coin
    ];

    const currencyUncommon = [
        'numismatics:bevel',    // Brass coin
        'numismatics:sprocket'  // Gold coin
    ];

    const currencyRare = [
        'numismatics:sun',      // Netherite coin
        'numismatics:crown'     // Diamond coin (highest)
    ];

    // ============================================================================
    // HELPER FUNCTIONS
    // ============================================================================

    // Create a random item from array with given weight
    function randomFromPool(pool, minCount, maxCount) {
        const item = pool[Math.floor(Math.random() * pool.length)];
        const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
        return Item.of(item, count);
    }

    
    // ============================================================================
    // VANILLA CHEST LOOT MODIFICATIONS
    // ============================================================================

    // --- Simple Dungeon Chests (Tier 1-2 loot) ---
    event.addLootTableModifier('minecraft:chests/simple_dungeon')
        .randomChance(0.8)
        .addLoot(LootEntry.of(tier1Materials[Math.floor(Math.random() * tier1Materials.length)], 3).setWeight(40))
        .addLoot(LootEntry.of(tier1Tools[Math.floor(Math.random() * tier1Tools.length)]).setWeight(15))
        .addLoot(LootEntry.of(tier1Food[Math.floor(Math.random() * tier1Food.length)], 2).setWeight(25))
        .addLoot(LootEntry.of(tier2Materials[Math.floor(Math.random() * tier2Materials.length)], 2).setWeight(10))
        .addLoot(LootEntry.of(tier2Components[Math.floor(Math.random() * tier2Components.length)]).setWeight(10))
        // Numismatics currency
        .addLoot(LootEntry.of('numismatics:cog', 5).setWeight(20))
        .addLoot(LootEntry.of('numismatics:spur', 3).setWeight(10));

    // --- Abandoned Mineshaft Chests (Mining theme, Tier 1-3) ---
    event.addLootTableModifier('minecraft:chests/abandoned_mineshaft')
        .randomChance(0.85)
        .addLoot(LootEntry.of('create:crushed_raw_iron', 4).setWeight(30))
        .addLoot(LootEntry.of('create:crushed_raw_copper', 4).setWeight(30))
        .addLoot(LootEntry.of('create:crushed_raw_gold', 3).setWeight(20))
        .addLoot(LootEntry.of('create:crushed_raw_zinc', 3).setWeight(25))
        .addLoot(LootEntry.of('tconstruct:raw_cobalt', 2).setWeight(10))
        .addLoot(LootEntry.of('immersiveengineering:dust_wood', 10).setWeight(20))
        .addLoot(LootEntry.of('mekanism:dust_iron', 4).setWeight(25))
        .addLoot(LootEntry.of('mekanism:dust_gold', 3).setWeight(20))
        .addLoot(LootEntry.of('electrodynamics:dustiron', 4).setWeight(20))
        .addLoot(LootEntry.of('tfmg:raw_lead', 3).setWeight(15))
        .addLoot(LootEntry.of('tfmg:raw_nickel', 3).setWeight(15))
        .addLoot(LootEntry.of('immersiveengineering:drill').setWeight(3))
        .addLoot(LootEntry.of('create:mechanical_drill').setWeight(5))
        // Numismatics currency
        .addLoot(LootEntry.of('numismatics:cog', 7).setWeight(20))
        .addLoot(LootEntry.of('numismatics:spur', 4).setWeight(15));

    // --- Stronghold Libraries (Tech/Knowledge theme, Tier 2-4) ---
    event.addLootTableModifier('minecraft:chests/stronghold_library')
        .randomChance(0.9)
        .addLoot(LootEntry.of('tconstruct:materials_and_you').setWeight(20))
        .addLoot(LootEntry.of('tconstruct:puny_smelting').setWeight(15))
        .addLoot(LootEntry.of('tconstruct:mighty_smelting').setWeight(10))
        .addLoot(LootEntry.of('tconstruct:encyclopedia').setWeight(8))
        .addLoot(LootEntry.of('tconstruct:fantastic_foundry').setWeight(5))
        .addLoot(LootEntry.of('patchouli:guide_book').setWeight(15))
        .addLoot(LootEntry.of('ae2:certus_quartz_crystal', 5).setWeight(25))
        .addLoot(LootEntry.of('ae2:fluix_crystal', 3).setWeight(15))
        .addLoot(LootEntry.of(tier3Components[Math.floor(Math.random() * tier3Components.length)]).setWeight(20))
        .addLoot(LootEntry.of(tier4Materials[Math.floor(Math.random() * tier4Materials.length)]).setWeight(10));

    // --- Stronghold Corridor (Combat theme, Tier 2-4) ---
    event.addLootTableModifier('minecraft:chests/stronghold_corridor')
        .randomChance(0.85)
        .addLoot(LootEntry.of(tier2Materials[Math.floor(Math.random() * tier2Materials.length)], 4).setWeight(30))
        .addLoot(LootEntry.of(tier3Materials[Math.floor(Math.random() * tier3Materials.length)], 3).setWeight(20))
        .addLoot(LootEntry.of(tier3Tools[Math.floor(Math.random() * tier3Tools.length)]).setWeight(15))
        .addLoot(LootEntry.of(militaryItems[Math.floor(Math.random() * militaryItems.length)]).setWeight(10));

    // --- Desert Pyramid (Ancient tech theme, Tier 2-4) ---
    event.addLootTableModifier('minecraft:chests/desert_pyramid')
        .randomChance(0.9)
        .addLoot(LootEntry.of('immersiveengineering:ingot_electrum', 5).setWeight(25))
        .addLoot(LootEntry.of('immersiveengineering:ingot_constantan', 4).setWeight(25))
        .addLoot(LootEntry.of('create:precision_mechanism', 2).setWeight(15))
        .addLoot(LootEntry.of('tfmg:circuit_board', 2).setWeight(10))
        .addLoot(LootEntry.of(explorationItems[Math.floor(Math.random() * explorationItems.length)]).setWeight(20))
        .addLoot(LootEntry.of(tier3Components[Math.floor(Math.random() * tier3Components.length)]).setWeight(20))
        .addLoot(LootEntry.of(tier4Materials[Math.floor(Math.random() * tier4Materials.length)], 2).setWeight(10))
        // Numismatics currency
        .addLoot(LootEntry.of('numismatics:spur', 5).setWeight(20))
        .addLoot(LootEntry.of('numismatics:bevel', 3).setWeight(15))
        .addLoot(LootEntry.of('numismatics:sprocket', 2).setWeight(8));

    // --- Jungle Temple (Automation theme, Tier 2-4) ---
    event.addLootTableModifier('minecraft:chests/jungle_temple')
        .randomChance(0.85)
        .addLoot(LootEntry.of('create:redstone_link', 2).setWeight(25))
        .addLoot(LootEntry.of('create:rotation_speed_controller').setWeight(15))
        .addLoot(LootEntry.of('create:sequenced_gearshift').setWeight(15))
        .addLoot(LootEntry.of('create:content_observer').setWeight(20))
        .addLoot(LootEntry.of('immersiveengineering:logic_unit', 2).setWeight(15))
        .addLoot(LootEntry.of(automationItems[Math.floor(Math.random() * automationItems.length)]).setWeight(15))
        .addLoot(LootEntry.of(tier3Machines[Math.floor(Math.random() * tier3Machines.length)]).setWeight(8));

    // --- End City Treasure (Endgame, Tier 4-6) ---
    event.addLootTableModifier('minecraft:chests/end_city_treasure')
        .randomChance(0.95)
        .addLoot(LootEntry.of(tier4Materials[Math.floor(Math.random() * tier4Materials.length)], 4).setWeight(25))
        .addLoot(LootEntry.of(tier5Materials[Math.floor(Math.random() * tier5Materials.length)], 3).setWeight(20))
        .addLoot(LootEntry.of(tier6Materials[Math.floor(Math.random() * tier6Materials.length)]).setWeight(10))
        .addLoot(LootEntry.of(tier5Machines[Math.floor(Math.random() * tier5Machines.length)]).setWeight(15))
        .addLoot(LootEntry.of(tier6Machines[Math.floor(Math.random() * tier6Machines.length)]).setWeight(8))
        .addLoot(LootEntry.of(tier6Armor[Math.floor(Math.random() * tier6Armor.length)]).setWeight(5))
        .addLoot(LootEntry.of('ae2:64k_cell_component').setWeight(10))
        .addLoot(LootEntry.of('ae2:singularity').setWeight(5))
        .addLoot(LootEntry.of('mekanism:teleporter').setWeight(8))
        // Numismatics currency (high value)
        .addLoot(LootEntry.of('numismatics:sprocket', 5).setWeight(20))
        .addLoot(LootEntry.of('numismatics:sun', 3).setWeight(12))
        .addLoot(LootEntry.of('numismatics:crown', 2).setWeight(5));

    // --- Nether Fortress (Fire/Blaze theme, Tier 3-5) ---
    event.addLootTableModifier('minecraft:chests/nether_bridge')
        .randomChance(0.9)
        .addLoot(LootEntry.of('tconstruct:blazing_bone', 3).setWeight(30))
        .addLoot(LootEntry.of('tconstruct:blazewood', 5).setWeight(25))
        .addLoot(LootEntry.of('tconstruct:scorched_brick', 10).setWeight(20))
        .addLoot(LootEntry.of('tconstruct:nether_grout', 5).setWeight(25))
        .addLoot(LootEntry.of('tconstruct:cobalt_ingot', 3).setWeight(15))
        .addLoot(LootEntry.of('tfmg:fireproof_brick', 8).setWeight(20))
        .addLoot(LootEntry.of(tier3Materials[Math.floor(Math.random() * tier3Materials.length)], 4).setWeight(20))
        .addLoot(LootEntry.of(tier4Materials[Math.floor(Math.random() * tier4Materials.length)], 2).setWeight(15));

    // --- Bastion Treasure (High value, Tier 4-6) ---
    event.addLootTableModifier('minecraft:chests/bastion_treasure')
        .randomChance(0.95)
        .addLoot(LootEntry.of('tconstruct:manyullyn_ingot', 3).setWeight(20))
        .addLoot(LootEntry.of('tconstruct:hepatizon_ingot', 3).setWeight(20))
        .addLoot(LootEntry.of('tconstruct:queens_slime_ingot', 2).setWeight(15))
        .addLoot(LootEntry.of('tconstruct:knightslime_ingot', 3).setWeight(15))
        .addLoot(LootEntry.of(tier5Materials[Math.floor(Math.random() * tier5Materials.length)], 2).setWeight(20))
        .addLoot(LootEntry.of(tier5Generators[Math.floor(Math.random() * tier5Generators.length)]).setWeight(10))
        .addLoot(LootEntry.of(tier5Machines[Math.floor(Math.random() * tier5Machines.length)]).setWeight(10))
        .addLoot(LootEntry.of(rareTreasures[Math.floor(Math.random() * rareTreasures.length)]).setWeight(3))
        // Numismatics currency (high value - piglin treasure hoard)
        .addLoot(LootEntry.of('numismatics:bevel', 10).setWeight(25))
        .addLoot(LootEntry.of('numismatics:sprocket', 5).setWeight(20))
        .addLoot(LootEntry.of('numismatics:sun', 2).setWeight(10))
        .addLoot(LootEntry.of('numismatics:crown', 2).setWeight(3));
    event.addLootTableModifier('minecraft:chests/ruined_portal')
        .randomChance(0.85)
        .addLoot(LootEntry.of('immersiveengineering:ingot_constantan', 3).setWeight(25))
        .addLoot(LootEntry.of('create:brass_ingot', 4).setWeight(25))
        .addLoot(LootEntry.of('mekanism:enriched_obsidian', 3).setWeight(15))
        .addLoot(LootEntry.of('ae2:sky_stone_block', 5).setWeight(20))
        .addLoot(LootEntry.of('fluxnetworks:flux_dust', 10).setWeight(15))
        .addLoot(LootEntry.of(tier3Materials[Math.floor(Math.random() * tier3Materials.length)], 3).setWeight(20));

    // --- Shipwreck Treasure (Naval/Exploration theme, Tier 1-3) ---
    event.addLootTableModifier('minecraft:chests/shipwreck_treasure')
        .randomChance(0.85)
        .addLoot(LootEntry.of(explorationItems[Math.floor(Math.random() * explorationItems.length)]).setWeight(30))
        .addLoot(LootEntry.of('create:diving_helmet').setWeight(15))
        .addLoot(LootEntry.of('create:diving_boots').setWeight(15))
        .addLoot(LootEntry.of('create:copper_diving_helmet').setWeight(10))
        .addLoot(LootEntry.of('create:copper_diving_boots').setWeight(10))
        .addLoot(LootEntry.of('supplementaries:rope', 20).setWeight(25))
        .addLoot(LootEntry.of('immersive_aircraft:sail').setWeight(10))
        .addLoot(LootEntry.of(tier2Materials[Math.floor(Math.random() * tier2Materials.length)], 4).setWeight(20))
        // Numismatics currency (sailor's pay)
        .addLoot(LootEntry.of('numismatics:cog', 10).setWeight(25))
        .addLoot(LootEntry.of('numismatics:spur', 5).setWeight(20))
        .addLoot(LootEntry.of('numismatics:bevel', 3).setWeight(10));

    // --- Underwater Ruins Big (Ocean theme, Tier 1-3) ---
    event.addLootTableModifier('minecraft:chests/underwater_ruin_big')
        .randomChance(0.8)
        .addLoot(LootEntry.of('ae2:sky_stone_block', 3).setWeight(25))
        .addLoot(LootEntry.of('ae2:certus_quartz_crystal', 4).setWeight(20))
        .addLoot(LootEntry.of('tconstruct:ender_slime_crystal', 3).setWeight(15))
        .addLoot(LootEntry.of('minecraft:heart_of_the_sea').setWeight(5))
        .addLoot(LootEntry.of(tier2Materials[Math.floor(Math.random() * tier2Materials.length)], 4).setWeight(25));

    // --- Buried Treasure (High value, Tier 2-4) ---
    event.addLootTableModifier('minecraft:chests/buried_treasure')
        .randomChance(0.9)
        .addLoot(LootEntry.of('ae2:fluix_crystal', 5).setWeight(20))
        .addLoot(LootEntry.of('create:precision_mechanism', 3).setWeight(15))
        .addLoot(LootEntry.of('tconstruct:manyullyn_nugget', 8).setWeight(15))
        .addLoot(LootEntry.of('mekanism:ingot_osmium', 5).setWeight(20))
        .addLoot(LootEntry.of(tier3Materials[Math.floor(Math.random() * tier3Materials.length)], 5).setWeight(25))
        .addLoot(LootEntry.of(tier4Storage[Math.floor(Math.random() * tier4Storage.length)]).setWeight(10))
        // Numismatics currency (buried pirate treasure!)
        .addLoot(LootEntry.of('numismatics:spur', 10).setWeight(30))
        .addLoot(LootEntry.of('numismatics:bevel', 5).setWeight(25))
        .addLoot(LootEntry.of('numismatics:sprocket', 3).setWeight(15))
        .addLoot(LootEntry.of('numismatics:sun', 2).setWeight(5));

    // --- Woodland Mansion (Illager theme, mix of all tiers) ---
    event.addLootTableModifier('minecraft:chests/woodland_mansion')
        .randomChance(0.9)
        .addLoot(LootEntry.of(tier1Decorative[Math.floor(Math.random() * tier1Decorative.length)]).setWeight(25))
        .addLoot(LootEntry.of(tier2Machines[Math.floor(Math.random() * tier2Machines.length)]).setWeight(15))
        .addLoot(LootEntry.of(tier3Machines[Math.floor(Math.random() * tier3Machines.length)]).setWeight(10))
        .addLoot(LootEntry.of(militaryItems[Math.floor(Math.random() * militaryItems.length)]).setWeight(20))
        .addLoot(LootEntry.of(automationItems[Math.floor(Math.random() * automationItems.length)]).setWeight(15))
        .addLoot(LootEntry.of(rareTreasures[Math.floor(Math.random() * rareTreasures.length)]).setWeight(5));

    // --- Pillager Outpost (Military theme, Tier 2-4) ---
    event.addLootTableModifier('minecraft:chests/pillager_outpost')
        .randomChance(0.85)
        .addLoot(LootEntry.of(militaryItems[Math.floor(Math.random() * militaryItems.length)]).setWeight(40))
        .addLoot(LootEntry.of('immersiveengineering:revolver').setWeight(10))
        .addLoot(LootEntry.of('immersiveengineering:shield').setWeight(8))
        .addLoot(LootEntry.of('cgs:iron_round', 20).setWeight(25))
        .addLoot(LootEntry.of('cgs:shotgun_shell', 10).setWeight(20))
        .addLoot(LootEntry.of(tier3Tools[Math.floor(Math.random() * tier3Tools.length)]).setWeight(15));

    // --- Ancient City (Deep Dark theme, Tier 4-6) ---
    event.addLootTableModifier('minecraft:chests/ancient_city')
        .randomChance(0.95)
        .addLoot(LootEntry.of(tier4Materials[Math.floor(Math.random() * tier4Materials.length)], 4).setWeight(25))
        .addLoot(LootEntry.of(tier5Materials[Math.floor(Math.random() * tier5Materials.length)], 3).setWeight(20))
        .addLoot(LootEntry.of(tier5Machines[Math.floor(Math.random() * tier5Machines.length)]).setWeight(15))
        .addLoot(LootEntry.of(tier6Materials[Math.floor(Math.random() * tier6Materials.length)]).setWeight(8))
        .addLoot(LootEntry.of(hostileNetworksItems[Math.floor(Math.random() * hostileNetworksItems.length)]).setWeight(15))
        .addLoot(LootEntry.of('ae2:quantum_ring').setWeight(5))
        .addLoot(LootEntry.of('mekanism:digital_miner').setWeight(5))
        .addLoot(LootEntry.of(rareTreasures[Math.floor(Math.random() * rareTreasures.length)]).setWeight(5));

    // --- Village Chests (Early game help, Tier 1-2) ---
    const villageTypes = [
        'minecraft:chests/village/village_weaponsmith',
        'minecraft:chests/village/village_toolsmith', 
        'minecraft:chests/village/village_armorer',
        'minecraft:chests/village/village_cartographer',
        'minecraft:chests/village/village_mason',
        'minecraft:chests/village/village_shepherd',
        'minecraft:chests/village/village_butcher',
        'minecraft:chests/village/village_fletcher',
        'minecraft:chests/village/village_fisher',
        'minecraft:chests/village/village_tannery',
        'minecraft:chests/village/village_temple'
    ];

    villageTypes.forEach(villageChest => {
        event.addLootTableModifier(villageChest)
            .randomChance(0.7)
            .addLoot(LootEntry.of(tier1Materials[Math.floor(Math.random() * tier1Materials.length)], 3).setWeight(35))
            .addLoot(LootEntry.of(tier1Tools[Math.floor(Math.random() * tier1Tools.length)]).setWeight(15))
            .addLoot(LootEntry.of(tier1Food[Math.floor(Math.random() * tier1Food.length)], 3).setWeight(25))
            .addLoot(LootEntry.of(tier1Decorative[Math.floor(Math.random() * tier1Decorative.length)]).setWeight(15))
            .addLoot(LootEntry.of(tier2Components[Math.floor(Math.random() * tier2Components.length)]).setWeight(10))
            // Numismatics currency (villager savings)
            .addLoot(LootEntry.of('numismatics:cog', 4).setWeight(20))
            .addLoot(LootEntry.of('numismatics:spur', 2).setWeight(10));
    });

    // ============================================================================
    // DUNGEONS AND TAVERNS MOD CHESTS (if mod is present)
    // ============================================================================

    // Generic dungeon loot for dungeon mods
    event.addLootTableModifier(/dungeons.*:chests/)
        .randomChance(0.8)
        .addLoot(LootEntry.of(tier2Materials[Math.floor(Math.random() * tier2Materials.length)], 4).setWeight(30))
        .addLoot(LootEntry.of(tier3Materials[Math.floor(Math.random() * tier3Materials.length)], 3).setWeight(20))
        .addLoot(LootEntry.of(tier2Machines[Math.floor(Math.random() * tier2Machines.length)]).setWeight(10))
        .addLoot(LootEntry.of(tier3Tools[Math.floor(Math.random() * tier3Tools.length)]).setWeight(15))
        .addLoot(LootEntry.of(tier4Materials[Math.floor(Math.random() * tier4Materials.length)], 2).setWeight(8));

    // ============================================================================
    // FISHING LOOT (Added treasures to fishing)
    // ============================================================================

    event.addLootTableModifier('minecraft:gameplay/fishing/treasure')
        .randomChance(0.6)
        .addLoot(LootEntry.of('ae2:certus_quartz_crystal', 2).setWeight(25))
        .addLoot(LootEntry.of('create:brass_nugget', 4).setWeight(30))
        .addLoot(LootEntry.of('tconstruct:earth_slime_ball', 3).setWeight(20))
        .addLoot(LootEntry.of('tconstruct:sky_slime_ball', 2).setWeight(15))
        .addLoot(LootEntry.of('supplementaries:antique_ink').setWeight(10))
        .addLoot(LootEntry.of(tier1Decorative[Math.floor(Math.random() * tier1Decorative.length)]).setWeight(15));

    // ============================================================================
    // MOB DROPS ADDITIONS
    // ============================================================================

    // Enderman drops
    event.addEntityLootModifier('minecraft:enderman')
        .randomChance(0.15)
        .addLoot(LootEntry.of('ae2:sky_dust', 2).setWeight(50))
        .addLoot(LootEntry.of('tconstruct:ender_slime_ball').setWeight(30))
        .addLoot(LootEntry.of('ae2:certus_quartz_crystal').setWeight(20));

    // Blaze drops
    event.addEntityLootModifier('minecraft:blaze')
        .randomChance(0.2)
        .addLoot(LootEntry.of('tconstruct:blazing_bone').setWeight(30))
        .addLoot(LootEntry.of('tfmg:sulfur', 2).setWeight(40))
        .addLoot(LootEntry.of('electrodynamics:dustite', 2).setWeight(30));

    // Wither Skeleton drops
    event.addEntityLootModifier('minecraft:wither_skeleton')
        .randomChance(0.15)
        .addLoot(LootEntry.of('tconstruct:necrotic_bone').setWeight(60))
        .addLoot(LootEntry.of('tconstruct:necronium_bone').setWeight(20))
        .addLoot(LootEntry.of('mekanism:dust_coal', 2).setWeight(40));

    // Ghast drops
    event.addEntityLootModifier('minecraft:ghast')
        .randomChance(0.25)
        .addLoot(LootEntry.of('tconstruct:ichor_slime_ball', 2).setWeight(50))
        .addLoot(LootEntry.of('tconstruct:scorched_brick', 4).setWeight(40));

    // Elder Guardian drops
    event.addEntityLootModifier('minecraft:elder_guardian')
        .randomChance(0.5)
        .addLoot(LootEntry.of('ae2:fluix_crystal', 8).setWeight(40))
        .addLoot(LootEntry.of('ae2:singularity').setWeight(10))
        .addLoot(LootEntry.of(tier4Storage[Math.floor(Math.random() * tier4Storage.length)]).setWeight(30));

    // Warden drops
    event.addEntityLootModifier('minecraft:warden')
        .randomChance(0.8)
        .addLoot(LootEntry.of(tier5Materials[Math.floor(Math.random() * tier5Materials.length)], 4).setWeight(30))
        .addLoot(LootEntry.of(tier6Materials[Math.floor(Math.random() * tier6Materials.length)]).setWeight(20))
        .addLoot(LootEntry.of(tier6Machines[Math.floor(Math.random() * tier6Machines.length)]).setWeight(15))
        .addLoot(LootEntry.of('mekanism:module_base', 2).setWeight(15))
        .addLoot(LootEntry.of(rareTreasures[Math.floor(Math.random() * rareTreasures.length)]).setWeight(10));

    // Ender Dragon drops
    event.addEntityLootModifier('minecraft:ender_dragon')
        .addLoot(LootEntry.of(tier6Materials[Math.floor(Math.random() * tier6Materials.length)], 6))
        .addLoot(LootEntry.of(tier6Machines[Math.floor(Math.random() * tier6Machines.length)], 2))
        .addLoot(LootEntry.of('ae2:quantum_entangled_singularity', 3))
        .addLoot(LootEntry.of('mekanism:antimatter_pellet', 2))
        .addLoot(LootEntry.of('kubejs:quantum_circuit', 2));

    // Wither drops
    event.addEntityLootModifier('minecraft:wither')
        .addLoot(LootEntry.of(tier5Materials[Math.floor(Math.random() * tier5Materials.length)], 6))
        .addLoot(LootEntry.of(tier5Machines[Math.floor(Math.random() * tier5Machines.length)], 2))
        .addLoot(LootEntry.of('mekanism:polonium_pellet', 3))
        .addLoot(LootEntry.of('mekanism:plutonium_pellet', 2))
        .addLoot(LootEntry.of('kubejs:industrial_circuit', 3));

    // ============================================================================
    // BLOCK DROPS (Bonus drops from ores and special blocks)
    // ============================================================================

    // Coal ore bonus
    event.addBlockLootModifier('minecraft:coal_ore')
        .randomChance(0.05)
        .addLoot(LootEntry.of('tfmg:coal_coke', 2));

    // Diamond ore bonus
    event.addBlockLootModifier('minecraft:diamond_ore')
        .randomChance(0.1)
        .addLoot(LootEntry.of('ae2:certus_quartz_crystal'));

    // Ancient debris bonus
    event.addBlockLootModifier('minecraft:ancient_debris')
        .randomChance(0.15)
        .addLoot(LootEntry.of('tconstruct:cobalt_ore'));

        
    console.log('[LootJS] Comprehensive loot tables loaded successfully!');
});
