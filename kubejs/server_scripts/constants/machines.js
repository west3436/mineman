// Tech Progression - Machine Definitions
// Machines organized by tier and tech path

/**
 * Machine categories:
 * - PROCESSING: Ore processing, crafting
 * - POWER: Power generation
 * - LOGISTICS: Item/fluid transport
 * - STORAGE: Storage systems
 * - UTILITY: Miscellaneous machines
 */

// ============================================
// TIER 0 - PRIMITIVE (Manual only)
// ============================================
global.MACHINES_TIER_0 = {
    processing: [
        'tconstruct:smeltery_controller',
        'tconstruct:seared_melter',
        'tconstruct:seared_heater',
        'tconstruct:casting_table',
        'tconstruct:casting_basin'
    ],
    power: [],
    logistics: [],
    storage: [
        'minecraft:barrel',
        'minecraft:chest'
    ],
    utility: []
};

// ============================================
// TIER 1 - BRONZE AGE (Water power only)
// ============================================
global.MACHINES_TIER_1 = {
    // Create Path
    create: {
        processing: [
            'create:millstone',
            'create:mechanical_press',
            'create:mechanical_mixer',
            'create:deployer',
            'create:basin',
            'create:blaze_burner'
        ],
        power: [
            'create:hand_crank',
            'create:water_wheel',
            'create:large_water_wheel'
        ],
        logistics: [],
        storage: [
            'create:depot',
            'create:weighted_ejector'
        ]
    },
    // Immersive Engineering Path
    immersive: {
        processing: [
            'immersiveengineering:coke_oven',
            'immersiveengineering:blast_furnace',
            'immersiveengineering:alloy_smelter',
            'immersiveengineering:crusher'
        ],
        power: [
            'immersiveengineering:watermill'
        ],
        logistics: [],
        storage: [
            'immersiveengineering:crate',
            'immersiveengineering:wooden_barrel'
        ]
    },
    // Shared (both paths)
    shared: {
        processing: [
            'tconstruct:smeltery_controller'
        ],
        storage: [
            'sophisticatedstorage:barrel',
            'sophisticatedstorage:chest',
            'sophisticatedbackpacks:backpack' // Basic leather
        ]
    }
};

// ============================================
// TIER 2 - IRON/STEEL AGE
// ============================================
global.MACHINES_TIER_2 = {
    create: {
        processing: [
            'create:crushing_wheel',
            'create:mechanical_saw',
            'create:mechanical_drill',
            'create:encased_fan',
            'create:item_drain',
            'create:spout'
        ],
        power: [
            'create:windmill_bearing',
            'create:steam_engine',
            'create:steam_whistle'
        ],
        logistics: [
            'create:mechanical_belt',
            'create:chute',
            'create:smart_chute',
            'create:andesite_funnel',
            'create:brass_funnel',
            'create:andesite_tunnel',
            'create:brass_tunnel'
        ],
        storage: [
            'create:item_vault',
            'create:fluid_tank'
        ]
    },
    immersive: {
        processing: [
            'immersiveengineering:metal_press',
            'immersiveengineering:assembler',
            'immersiveengineering:arc_furnace',
            'immersiveengineering:fermenter',
            'immersiveengineering:squeezer'
        ],
        power: [
            'immersiveengineering:dynamo',
            'immersiveengineering:thermoelectric_generator'
        ],
        logistics: [
            'immersiveengineering:conveyor_basic',
            'immersiveengineering:conveyor_vertical',
            'immersiveengineering:conveyor_dropper',
            'immersiveengineering:conveyor_extract'
        ],
        storage: [
            'immersiveengineering:silo',
            'immersiveengineering:tank'
        ]
    },
    shared: {
        processing: [
            'createenchantmentindustry:disenchanter'
        ],
        storage: [
            'sophisticatedstorage:iron_barrel',
            'sophisticatedstorage:iron_chest',
            'sophisticatedbackpacks:iron_backpack',
            'storagedrawers:oak_full_drawers_1',
            'storagedrawers:oak_full_drawers_2',
            'storagedrawers:oak_full_drawers_4'
        ],
        utility: [
            'trashcans:item_trash_can',
            'trashcans:liquid_trash_can',
            'trashcans:energy_trash_can'
        ]
    }
};

// ============================================
// TIER 3 - INDUSTRIAL REVOLUTION
// ============================================
global.MACHINES_TIER_3 = {
    create: {
        processing: [
            'create:sequenced_gearshift',
            'create:mechanical_crafter',
            'create:contraption_controls'
        ],
        power: [
            'createaddition:electric_motor',
            'createaddition:alternator'
        ],
        logistics: [
            'create:content_observer',
            'create:stockpile_switch',
            'create:creative_crate'
        ]
    },
    immersive: {
        processing: [
            'immersiveengineering:excavator',
            'immersiveengineering:bottling_machine',
            'immersiveengineering:refinery',
            'immersiveengineering:mixer'
        ],
        power: [
            'immersiveengineering:diesel_generator',
            'immersivepetroleum:pumpjack'
        ],
        logistics: [
            'immersiveengineering:fluid_pipe',
            'immersiveengineering:fluid_pump'
        ]
    },
    shared: {
        processing: [
            'ae2:inscriber',
            'ae2:charger',
            'ae2:vibration_chamber'
        ],
        power: [],
        logistics: [
            'ae2:cable_glass',
            'ae2:cable_covered',
            'ae2:cable_smart'
        ],
        storage: [
            'ae2:drive',
            'ae2:cell_workbench',
            'ae2:1k_cell_component',
            'ae2:4k_cell_component',
            'sophisticatedstorage:gold_barrel',
            'sophisticatedstorage:gold_chest',
            'sophisticatedbackpacks:gold_backpack'
        ],
        utility: [
            'mob_grinding_utils:fan',
            'mob_grinding_utils:absorption_hopper',
            'mob_grinding_utils:xp_drain'
        ]
    }
};

// ============================================
// TIER 4 - ADVANCED TECHNOLOGY
// ============================================
global.MACHINES_TIER_4 = {
    create: {
        processing: [
            'create:potato_cannon',
            'create:extendo_grip'
        ],
        logistics: [
            'create:linked_controller',
            'create:redstone_link'
        ]
    },
    immersive: {
        processing: [
            'immersiveengineering:lightning_rod'
        ],
        power: [
            'immersiveengineering:lightning_rod'
        ]
    },
    shared: {
        processing: [
            'ae2:molecular_assembler',
            'mekanism:enrichment_chamber',
            'mekanism:crusher',
            'mekanism:energized_smelter',
            'mekanism:precision_sawmill',
            'mekanism:purification_chamber',
            'mekanism:chemical_injection_chamber'
        ],
        power: [
            'mekanism:heat_generator',
            'mekanism:solar_generator',
            'mekanism:bio_generator'
        ],
        logistics: [
            'ae2:me_interface',
            'ae2:import_bus',
            'ae2:export_bus',
            'ae2:storage_bus',
            'ae2:p2p_tunnel_me',
            'mekanism:basic_logistical_transporter',
            'mekanism:advanced_logistical_transporter'
        ],
        storage: [
            'ae2:16k_cell_component',
            'ae2:64k_cell_component',
            'ae2:crafting_unit',
            'ae2:crafting_accelerator',
            'mekanism:basic_bin',
            'mekanism:advanced_bin',
            'sophisticatedstorage:diamond_barrel',
            'sophisticatedstorage:diamond_chest',
            'sophisticatedbackpacks:diamond_backpack'
        ],
        utility: [
            'hostilenetworks:sim_chamber',
            'hostilenetworks:loot_fabricator'
        ]
    }
};

// ============================================
// TIER 5 - QUANTUM AGE
// ============================================
global.MACHINES_TIER_5 = {
    shared: {
        processing: [
            'mekanism:chemical_dissolution_chamber',
            'mekanism:chemical_washer',
            'mekanism:chemical_crystallizer',
            'mekanism:chemical_oxidizer',
            'mekanism:electrolytic_separator',
            'mekanism:rotary_condensentrator',
            'mekanism:metallurgic_infuser',
            'mekanism:osmium_compressor',
            'mekanism:combiner',
            'mekanism:pressurized_reaction_chamber'
        ],
        power: [
            'mekanism:gas_burning_generator',
            'mekanismgenerators:fission_reactor_casing',
            'mekanismgenerators:fission_reactor_port',
            'mekanismgenerators:fission_fuel_assembly',
            'mekanismgenerators:control_rod_assembly',
            'mekanismgenerators:fusion_reactor_controller'
        ],
        logistics: [
            'mekanism:elite_logistical_transporter',
            'mekanism:ultimate_logistical_transporter',
            'mekanism:quantum_entangloporter'
        ],
        storage: [
            'mekanism:elite_bin',
            'mekanism:ultimate_bin',
            'mekanism:qio_drive_array',
            'mekanism:qio_dashboard',
            'mekanism:qio_importer',
            'mekanism:qio_exporter',
            'sophisticatedstorage:netherite_barrel',
            'sophisticatedstorage:netherite_chest',
            'sophisticatedbackpacks:netherite_backpack'
        ],
        utility: [
            'mekanism:digital_miner',
            'mekanism:laser',
            'mekanism:laser_amplifier',
            'rftools:builder', // RFTools Builder for quarry
            'rftools:shield_projector'
        ]
    }
};

// ============================================
// TIER 6 - CREATIVE/END-GAME
// ============================================
global.MACHINES_TIER_6 = {
    shared: {
        processing: [
            'mekanism:antiprotonic_nucleosynthesizer'
        ],
        power: [
            'fluxnetworks:flux_plug',
            'fluxnetworks:flux_point',
            'fluxnetworks:flux_controller'
        ],
        logistics: [
            'rftoolsutility:matter_transmitter',
            'rftoolsutility:matter_receiver',
            'rftoolsutility:dialing_device'
        ],
        storage: [
            'ae2:256k_cell_component',
            'mekanism:creative_bin'
        ],
        utility: [
            'rftoolsdim:dimension_builder',
            'rftoolsdim:dimension_editor',
            'rftoolsdim:dimension_enscriber',
            'shrink:shrinking_device'
        ]
    }
};

// Helper function to get all machines for a tier
global.getMachinesForTier = (tier) => {
    const tierMachines = {
        0: global.MACHINES_TIER_0,
        1: global.MACHINES_TIER_1,
        2: global.MACHINES_TIER_2,
        3: global.MACHINES_TIER_3,
        4: global.MACHINES_TIER_4,
        5: global.MACHINES_TIER_5,
        6: global.MACHINES_TIER_6
    };
    return tierMachines[tier] || {};
};

// Helper to check if a machine is available at a given tier
global.isMachineAvailable = (machineId, maxTier) => {
    for (let tier = 0; tier <= maxTier; tier++) {
        const machines = global.getMachinesForTier(tier);
        // Check all categories
        for (const path of ['create', 'immersive', 'shared']) {
            if (machines[path]) {
                for (const category of Object.values(machines[path])) {
                    if (Array.isArray(category) && category.includes(machineId)) {
                        return true;
                    }
                }
            }
        }
        // Check direct categories (for tier 0)
        for (const category of Object.values(machines)) {
            if (Array.isArray(category) && category.includes(machineId)) {
                return true;
            }
        }
    }
    return false;
};

console.log('[Tech Progression] Machine definitions loaded');
