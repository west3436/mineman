// LootJS Quest Reward Pools for FTB Quests Integration
// These are custom loot tables designed for quest rewards
// Use with FTB Quests random reward system or custom loot pools
// Priority: 0

LootJS.modifiers((event) => {
    // ============================================================================
    // QUEST REWARD LOOT TABLES
    // These tables are designed for use as quest rewards at various progression points
    // ============================================================================

    // --- Early Game Starter Pack ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/starter_pack')
        .addPool(pool => {
            pool.rolls([2, 4]);
            // Basic materials
            pool.addLoot(LootEntry.of('minecraft:iron_ingot').setCount(8, 16).setWeight(30));
            pool.addLoot(LootEntry.of('minecraft:copper_ingot').setCount(8, 16).setWeight(30));
            pool.addLoot(LootEntry.of('minecraft:coal').setCount(16, 32).setWeight(25));
            pool.addLoot(LootEntry.of('minecraft:redstone').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('create:andesite_alloy').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('create:zinc_ingot').setCount(4, 12).setWeight(20));
            pool.addLoot(LootEntry.of('immersiveengineering:hemp_seeds').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('tconstruct:grout').setCount(16, 32).setWeight(20));
            // Tools
            pool.addLoot(LootEntry.of('create:wrench').setWeight(10));
            pool.addLoot(LootEntry.of('immersiveengineering:hammer').setWeight(10));
            pool.addLoot(LootEntry.of('supplementaries:wrench').setWeight(10));
            // Useful items
            pool.addLoot(LootEntry.of('supplementaries:rope').setCount(16, 32).setWeight(20));
            pool.addLoot(LootEntry.of('comforts:sleeping_bag_white').setWeight(8));
        });

    // --- Bronze Age Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/bronze_age')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('kubejs:bronze_machine_casing').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('create:brass_ingot').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('create:precision_mechanism').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('create:electron_tube').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('immersiveengineering:plate_iron').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('immersiveengineering:plate_copper').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('immersiveengineering:component_iron').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('tconstruct:seared_bricks').setCount(16, 32).setWeight(20));
            pool.addLoot(LootEntry.of('tconstruct:pattern').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:basic_control_circuit').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('tfmg:coal_coke').setCount(16, 32).setWeight(20));
        });

    // --- Create Mastery Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/create_mastery')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('create:precision_mechanism').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('create:brass_casing').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('create:railway_casing').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('create:mechanical_arm').setWeight(10));
            pool.addLoot(LootEntry.of('create:rotation_speed_controller').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('create:sequenced_gearshift').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('create:display_link').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('create:smart_observer').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('create:track').setCount(16, 32).setWeight(20));
            pool.addLoot(LootEntry.of('create:controls').setWeight(10));
            pool.addLoot(LootEntry.of('create:train_door').setCount(2, 4).setWeight(15));
        });

    // --- Immersive Engineering Mastery Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/ie_mastery')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('immersiveengineering:ingot_steel').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('immersiveengineering:plate_steel').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('immersiveengineering:component_steel').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('immersiveengineering:component_electronic').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('immersiveengineering:coil_mv').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('immersiveengineering:wirecoil_electrum').setCount(8, 16).setWeight(20));
            pool.addLoot(LootEntry.of('immersiveengineering:blueprint').setWeight(10));
            pool.addLoot(LootEntry.of('immersiveengineering:earmuffs').setWeight(8));
            pool.addLoot(LootEntry.of('immersiveengineering:toolbox').setWeight(8));
        });

    // --- Steel Age Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/steel_age')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('kubejs:steel_circuit').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('kubejs:steel_machine_casing').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('tfmg:steel_ingot').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('tfmg:steel_mechanism').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('tfmg:circuit_board').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('tfmg:electromagnetic_coil').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:ingot_steel').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('mekanism:steel_casing').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('electrodynamics:ingotvanadiumsteel').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('tfmg:generator').setWeight(8));
        });

    // --- Mekanism Mastery Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/mekanism_mastery')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('mekanism:advanced_control_circuit').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('mekanism:elite_control_circuit').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:alloy_reinforced').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('mekanism:alloy_atomic').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:advanced_energy_cube').setWeight(10));
            pool.addLoot(LootEntry.of('mekanism:advanced_bin').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:enriched_diamond').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:ingot_osmium').setCount(8, 16).setWeight(20));
            pool.addLoot(LootEntry.of('mekanism:upgrade_speed').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:upgrade_energy').setCount(2, 4).setWeight(15));
        });

    // --- AE2 Mastery Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/ae2_mastery')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('ae2:certus_quartz_crystal').setCount(16, 32).setWeight(25));
            pool.addLoot(LootEntry.of('ae2:fluix_crystal').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('ae2:logic_processor').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('ae2:calculation_processor').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('ae2:engineering_processor').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('ae2:4k_cell_component').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('ae2:16k_cell_component').setWeight(10));
            pool.addLoot(LootEntry.of('ae2:terminal').setWeight(10));
            pool.addLoot(LootEntry.of('ae2:crafting_terminal').setWeight(8));
            pool.addLoot(LootEntry.of('ae2:pattern_provider').setWeight(10));
            pool.addLoot(LootEntry.of('ae2:interface').setCount(1, 2).setWeight(15));
        });

    // --- Advanced Tech Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/advanced_tech')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('kubejs:advanced_circuit').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('kubejs:advanced_machine_casing').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('mekanism:elite_control_circuit').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('ae2:64k_cell_component').setWeight(10));
            pool.addLoot(LootEntry.of('electrodynamics:circuitadvanced').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('electrodynamics:motordc').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('tconstruct:manyullyn_ingot').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('tconstruct:hepatizon_ingot').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('industrialforegoing:machine_frame_simple').setCount(2, 4).setWeight(15));
        });

    // --- Industrial Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/industrial')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('kubejs:industrial_circuit').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('kubejs:industrial_machine_casing').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('mekanism:ultimate_control_circuit').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:hdpe_sheet').setCount(8, 16).setWeight(20));
            pool.addLoot(LootEntry.of('electrodynamics:circuitelite').setCount(4, 8).setWeight(15));
            pool.addLoot(LootEntry.of('electrodynamics:motorhighlyadvanced').setCount(2, 4).setWeight(10));
            pool.addLoot(LootEntry.of('ae2:256k_cell_component').setWeight(8));
            pool.addLoot(LootEntry.of('mekanismgenerators:advanced_solar_generator').setWeight(8));
            pool.addLoot(LootEntry.of('industrialforegoing:machine_frame_advanced').setCount(1, 2).setWeight(12));
        });

    // --- Ultimate/Endgame Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/ultimate')
        .addPool(pool => {
            pool.rolls([2, 3]);
            pool.addLoot(LootEntry.of('kubejs:ultimate_circuit').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('kubejs:ultimate_machine_casing').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('kubejs:quantum_circuit').setCount(1, 2).setWeight(10));
            pool.addLoot(LootEntry.of('kubejs:quantum_machine_casing').setCount(1, 2).setWeight(10));
            pool.addLoot(LootEntry.of('mekanism:antimatter_pellet').setCount(2, 4).setWeight(10));
            pool.addLoot(LootEntry.of('mekanism:module_base').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('ae2:singularity').setCount(1, 2).setWeight(10));
            pool.addLoot(LootEntry.of('ae2:quantum_entangled_singularity').setWeight(5));
            pool.addLoot(LootEntry.of('electrodynamics:circuitultimate').setCount(2, 4).setWeight(10));
            pool.addLoot(LootEntry.of('industrialforegoing:machine_frame_supreme').setWeight(8));
        });

    // --- Tinkers' Construct Materials Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/tinkers_materials')
        .addPool(pool => {
            pool.rolls([3, 5]);
            pool.addLoot(LootEntry.of('tconstruct:cobalt_ingot').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('tconstruct:manyullyn_ingot').setCount(2, 6).setWeight(20));
            pool.addLoot(LootEntry.of('tconstruct:hepatizon_ingot').setCount(2, 6).setWeight(20));
            pool.addLoot(LootEntry.of('tconstruct:queens_slime_ingot').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('tconstruct:knightslime_ingot').setCount(2, 6).setWeight(20));
            pool.addLoot(LootEntry.of('tconstruct:slimesteel_ingot').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('tconstruct:soulsteel_ingot').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('tconstruct:rose_gold_ingot').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('tconstruct:pig_iron_ingot').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('tconstruct:amethyst_bronze_ingot').setCount(4, 8).setWeight(20));
        });

    // --- Food & Farming Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/food_farming')
        .addPool(pool => {
            pool.rolls([3, 5]);
            pool.addLoot(LootEntry.of('farmersdelight:stove').setWeight(15));
            pool.addLoot(LootEntry.of('farmersdelight:cooking_pot').setWeight(15));
            pool.addLoot(LootEntry.of('farmersdelight:cutting_board').setWeight(20));
            pool.addLoot(LootEntry.of('farmersdelight:canvas').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('farmersdelight:rope').setCount(16, 32).setWeight(25));
            pool.addLoot(LootEntry.of('farmersdelight:tomato_seeds').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('farmersdelight:cabbage_seeds').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('farmersdelight:onion').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('farmersdelight:rice').setCount(8, 16).setWeight(20));
            pool.addLoot(LootEntry.of('cookingforblockheads:oven').setWeight(10));
            pool.addLoot(LootEntry.of('cookingforblockheads:cooking_table').setWeight(12));
            pool.addLoot(LootEntry.of('botanypots:terracotta_botany_pot').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('agricraft:seed_analyzer').setWeight(10));
        });

    // --- Military/Combat Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/military')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('cgs:iron_pistol').setWeight(20));
            pool.addLoot(LootEntry.of('cgs:iron_smg').setWeight(15));
            pool.addLoot(LootEntry.of('cgs:iron_rifle').setWeight(12));
            pool.addLoot(LootEntry.of('cgs:iron_shotgun').setWeight(12));
            pool.addLoot(LootEntry.of('cgs:iron_round').setCount(32, 64).setWeight(30));
            pool.addLoot(LootEntry.of('cgs:shotgun_shell').setCount(16, 32).setWeight(25));
            pool.addLoot(LootEntry.of('immersiveengineering:revolver').setWeight(10));
            pool.addLoot(LootEntry.of('immersiveengineering:speedloader').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('ballistix:missilecloserange').setWeight(8));
            pool.addLoot(LootEntry.of('supplementaries:bomb').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('tfmg:thermite_grenade').setCount(2, 4).setWeight(15));
        });

    // --- Automation & Computing Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/automation')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('computercraft:computer_normal').setWeight(15));
            pool.addLoot(LootEntry.of('computercraft:computer_advanced').setWeight(10));
            pool.addLoot(LootEntry.of('computercraft:monitor_normal').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('computercraft:disk_drive').setWeight(12));
            pool.addLoot(LootEntry.of('advancedperipherals:player_detector').setWeight(10));
            pool.addLoot(LootEntry.of('advancedperipherals:inventory_manager').setWeight(10));
            pool.addLoot(LootEntry.of('advancedperipherals:redstone_integrator').setWeight(12));
            pool.addLoot(LootEntry.of('xnet:controller').setWeight(10));
            pool.addLoot(LootEntry.of('xnet:connector_blue').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('integrateddynamics:logic_programmer').setWeight(10));
            pool.addLoot(LootEntry.of('integrateddynamics:menril_sapling').setCount(1, 2).setWeight(15));
        });

    // --- Transportation Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/transportation')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('create:track').setCount(32, 64).setWeight(25));
            pool.addLoot(LootEntry.of('create:train_door').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('create:controls').setWeight(15));
            pool.addLoot(LootEntry.of('create:minecart_coupling').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('immersive_aircraft:engine').setWeight(10));
            pool.addLoot(LootEntry.of('immersive_aircraft:propeller').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('immersive_aircraft:sail').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('immersive_aircraft:gyrodyne').setWeight(5));
            pool.addLoot(LootEntry.of('railways:track_brass').setCount(16, 32).setWeight(20));
            pool.addLoot(LootEntry.of('industrialrenewal:catwalk').setCount(8, 16).setWeight(15));
        });

    // --- Storage & Organization Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/storage')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('storagedrawers:oak_full_drawers_1').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('storagedrawers:controller').setWeight(12));
            pool.addLoot(LootEntry.of('storagedrawers:iron_storage_upgrade').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('storagedrawers:gold_storage_upgrade').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('sophisticatedstorage:iron_chest').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('sophisticatedstorage:gold_chest').setWeight(12));
            pool.addLoot(LootEntry.of('sophisticatedstorage:stack_upgrade_tier_1').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('sophisticatedstorage:pickup_upgrade').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('ae2:1k_storage_cell').setWeight(10));
            pool.addLoot(LootEntry.of('ae2:4k_storage_cell').setWeight(8));
        });

    // --- Decoration & Building Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/decoration')
        .addPool(pool => {
            pool.rolls([3, 5]);
            pool.addLoot(LootEntry.of('supplementaries:jar').setCount(4, 8).setWeight(25));
            pool.addLoot(LootEntry.of('supplementaries:goblet').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('supplementaries:pedestal').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('supplementaries:globe').setWeight(10));
            pool.addLoot(LootEntry.of('supplementaries:hourglass').setWeight(12));
            pool.addLoot(LootEntry.of('handcrafted:stackable_book').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('handcrafted:terracotta_vase').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('fairylights:hanging_lights').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('mcwfurnitures:oak_chair').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('mcwfurnitures:oak_table').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('framedblocks:framed_cube').setCount(8, 16).setWeight(20));
        });

    // --- Beekeeping Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/beekeeping')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('forestry:bee_house').setWeight(20));
            pool.addLoot(LootEntry.of('forestry:apiary').setWeight(12));
            pool.addLoot(LootEntry.of('forestry:scoop').setWeight(25));
            pool.addLoot(LootEntry.of('forestry:frame_impregnated').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('forestry:frame_proven').setWeight(10));
            pool.addLoot(LootEntry.of('forestry:habitat_locator').setWeight(15));
            pool.addLoot(LootEntry.of('forestry:beeswax').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('forestry:honey_drop').setCount(8, 16).setWeight(25));
            pool.addLoot(LootEntry.of('forestry:propolis').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('forestry:royal_jelly').setCount(2, 4).setWeight(15));
        });

    // --- Power Generation Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/power_generation')
        .addPool(pool => {
            pool.rolls([2, 3]);
            pool.addLoot(LootEntry.of('tfmg:generator').setWeight(20));
            pool.addLoot(LootEntry.of('tfmg:accumulator').setCount(1, 2).setWeight(15));
            pool.addLoot(LootEntry.of('mekanismgenerators:heat_generator').setWeight(15));
            pool.addLoot(LootEntry.of('mekanismgenerators:solar_generator').setWeight(12));
            pool.addLoot(LootEntry.of('mekanismgenerators:wind_generator').setWeight(10));
            pool.addLoot(LootEntry.of('mekanismgenerators:bio_generator').setWeight(12));
            pool.addLoot(LootEntry.of('immersiveengineering:capacitor_lv').setWeight(15));
            pool.addLoot(LootEntry.of('immersiveengineering:capacitor_mv').setWeight(10));
            pool.addLoot(LootEntry.of('electrodynamics:solarpanel').setWeight(12));
            pool.addLoot(LootEntry.of('mekanism:basic_energy_cube').setWeight(15));
        });

    // --- Hostile Networks/Mob Farming Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/mob_farming')
        .addPool(pool => {
            pool.rolls([2, 3]);
            pool.addLoot(LootEntry.of('hostilenetworks:deep_learner').setWeight(20));
            pool.addLoot(LootEntry.of('hostilenetworks:sim_chamber').setWeight(15));
            pool.addLoot(LootEntry.of('hostilenetworks:loot_fabricator').setWeight(12));
            pool.addLoot(LootEntry.of('hostilenetworks:blank_data_model').setCount(2, 4).setWeight(25));
            pool.addLoot(LootEntry.of('hostilenetworks:prediction_matrix').setCount(4, 8).setWeight(20));
            pool.addLoot(LootEntry.of('industrialforegoing:mob_crusher').setWeight(10));
            pool.addLoot(LootEntry.of('industrialforegoing:mob_duplicator').setWeight(8));
            pool.addLoot(LootEntry.of('industrialforegoing:mob_imprisonment_tool').setCount(1, 2).setWeight(15));
        });

    // --- Path Exchange Token Pack (for switching tech paths) ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/path_exchange')
        .addPool(pool => {
            pool.rolls(1);
            pool.addLoot(LootEntry.of('kubejs:path_exchange_token').setWeight(100));
        });

    // --- Lucky Dip (Random mix of all tiers) ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/lucky_dip')
        .addPool(pool => {
            pool.rolls([3, 5]);
            // Tier 1
            pool.addLoot(LootEntry.of('minecraft:diamond').setCount(1, 4).setWeight(20));
            pool.addLoot(LootEntry.of('minecraft:emerald').setCount(2, 8).setWeight(20));
            pool.addLoot(LootEntry.of('minecraft:netherite_scrap').setWeight(5));
            // Tier 2-3
            pool.addLoot(LootEntry.of('create:precision_mechanism').setCount(2, 6).setWeight(15));
            pool.addLoot(LootEntry.of('mekanism:ingot_osmium').setCount(4, 12).setWeight(15));
            pool.addLoot(LootEntry.of('ae2:fluix_crystal').setCount(4, 12).setWeight(15));
            // Tier 4-5
            pool.addLoot(LootEntry.of('mekanism:elite_control_circuit').setCount(1, 4).setWeight(10));
            pool.addLoot(LootEntry.of('tconstruct:manyullyn_ingot').setCount(1, 4).setWeight(10));
            pool.addLoot(LootEntry.of('ae2:64k_cell_component').setWeight(5));
            // Tier 6 (rare)
            pool.addLoot(LootEntry.of('mekanism:antimatter_pellet').setWeight(2));
            pool.addLoot(LootEntry.of('ae2:singularity').setWeight(2));
            pool.addLoot(LootEntry.of('kubejs:quantum_circuit').setWeight(1));
            // Fun items
            pool.addLoot(LootEntry.of('minecraft:enchanted_golden_apple').setWeight(3));
            pool.addLoot(LootEntry.of('supplementaries:globe_sepia').setWeight(5));
        });

    // --- Exploration Kit ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/exploration_kit')
        .addPool(pool => {
            pool.rolls([3, 5]);
            pool.addLoot(LootEntry.of('explorerscompass:explorerscompass').setWeight(15));
            pool.addLoot(LootEntry.of('supplementaries:altimeter').setWeight(20));
            pool.addLoot(LootEntry.of('supplementaries:key').setCount(2, 4).setWeight(15));
            pool.addLoot(LootEntry.of('supplementaries:slice_map').setWeight(12));
            pool.addLoot(LootEntry.of('supplementaries:quiver').setWeight(15));
            pool.addLoot(LootEntry.of('supplementaries:sack').setCount(2, 4).setWeight(20));
            pool.addLoot(LootEntry.of('minecraft:spyglass').setWeight(15));
            pool.addLoot(LootEntry.of('minecraft:recovery_compass').setWeight(8));
            pool.addLoot(LootEntry.of('comforts:sleeping_bag_white').setWeight(20));
            pool.addLoot(LootEntry.of('create:diving_helmet').setWeight(10));
            pool.addLoot(LootEntry.of('create:diving_boots').setWeight(10));
        });

    // --- Compact Machines Rewards ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/compact_machines')
        .addPool(pool => {
            pool.rolls([1, 2]);
            pool.addLoot(LootEntry.of('compactmachines:machine_small').setWeight(30));
            pool.addLoot(LootEntry.of('compactmachines:machine_normal').setWeight(20));
            pool.addLoot(LootEntry.of('compactmachines:machine_large').setWeight(15));
            pool.addLoot(LootEntry.of('compactmachines:machine_giant').setWeight(10));
            pool.addLoot(LootEntry.of('compactmachines:machine_maximum').setWeight(5));
            pool.addLoot(LootEntry.of('compactmachines:personal_shrinking_device').setWeight(20));
        });

    // --- Numismatics Currency Rewards (Small) ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/currency_small')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('numismatics:cog').setCount(4, 16).setWeight(40));
            pool.addLoot(LootEntry.of('numismatics:spur').setCount(2, 8).setWeight(30));
            pool.addLoot(LootEntry.of('numismatics:bevel').setCount(1, 4).setWeight(20));
            pool.addLoot(LootEntry.of('numismatics:sprocket').setCount(1, 2).setWeight(10));
        });

    // --- Numismatics Currency Rewards (Medium) ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/currency_medium')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('numismatics:spur').setCount(4, 16).setWeight(35));
            pool.addLoot(LootEntry.of('numismatics:bevel').setCount(2, 8).setWeight(30));
            pool.addLoot(LootEntry.of('numismatics:sprocket').setCount(1, 4).setWeight(25));
            pool.addLoot(LootEntry.of('numismatics:sun').setCount(1, 2).setWeight(10));
        });

    // --- Numismatics Currency Rewards (Large) ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/currency_large')
        .addPool(pool => {
            pool.rolls([2, 4]);
            pool.addLoot(LootEntry.of('numismatics:bevel').setCount(4, 16).setWeight(30));
            pool.addLoot(LootEntry.of('numismatics:sprocket').setCount(2, 8).setWeight(30));
            pool.addLoot(LootEntry.of('numismatics:sun').setCount(1, 4).setWeight(25));
            pool.addLoot(LootEntry.of('numismatics:crown').setCount(1, 2).setWeight(15));
        });

    // --- Numismatics Currency Rewards (Jackpot) ---
    event.addLootTypeModifier(LootType.CHEST)
        .createNewLootTable('kubejs:quest_rewards/currency_jackpot')
        .addPool(pool => {
            pool.rolls([3, 5]);
            pool.addLoot(LootEntry.of('numismatics:sprocket').setCount(4, 16).setWeight(25));
            pool.addLoot(LootEntry.of('numismatics:sun').setCount(2, 8).setWeight(35));
            pool.addLoot(LootEntry.of('numismatics:crown').setCount(1, 4).setWeight(30));
            // Bonus: Banking equipment
            pool.addLoot(LootEntry.of('numismatics:bank_terminal').setWeight(5));
            pool.addLoot(LootEntry.of('numismatics:brass_depositor').setWeight(5));
        });

    console.log('[LootJS] Quest reward loot tables loaded successfully!');
});
