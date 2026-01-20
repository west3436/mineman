// kubejs/server_scripts/recipes/mbd2_machines.js
// MBD2 Machine Recipes - Chemical Plant, Computer Controlled Assembler, and Basic Mixer
//
// Uses MBD2's KubeJS integration to define recipes for multiblock machines
// Documentation: https://low-drag-mc.github.io/LowDragMC-Doc/multiblocked2/

ServerEvents.recipes(event => {
    console.log('Adding MBD2 machine recipes via KubeJS...');

    // ============================================================
    // CHEMICAL PLANT (mbd2:chemical_plant)
    // ============================================================
    // Tier 3 multiblock for plastic production
    // Converts ethylene gas + coal coke into unprocessed plastic
    // Recipe type: chemical_processing

    event.recipes.mbd2.chemical_processing('mbd2:plastic_production')
        .duration(200)                                      // 10 seconds (200 ticks)
        .inputFluids(Fluid.of('tfmg:ethylene', 100))       // 100mb ethylene fluid
        .inputItems('immersiveengineering:coal_coke')      // 1x coal coke catalyst
        .outputItems('kubejs:unprocessed_plastic')         // 1x unprocessed plastic
        .inputFE(12800);                                   // 12800 FE total (64 FE/tick)

    // ============================================================
    // COMPUTER CONTROLLED ASSEMBLER (mbd2:computer_controlled_assembler)
    // ============================================================
    // Tier 5 multiblock for advanced circuit fabrication
    // Multiple recipes with different material combinations
    // Recipe type: advanced_assemblying

    // Recipe 1: Balanced recipe using PCBs and alloys
    event.recipes.mbd2.advanced_assemblying('mbd2:advanced_circuit_balanced')
        .duration(400)                                              // 20 seconds
        .inputItems([
            '4x pneumaticcraft:printed_circuit_board',
            '8x mekanism:alloy_infused',
            '4x mekanism:alloy_reinforced',
            '2x minecraft:redstone_block'
        ])
        .outputItems('2x mineman:advanced_circuit')                // 2x advanced circuits
        .inputFE(25600);                                           // 25600 FE total (64 FE/tick)

    // Recipe 2: Redstone-heavy recipe (cheaper alloys)
    event.recipes.mbd2.advanced_assemblying('mbd2:advanced_circuit_redstone')
        .duration(400)                                              // 20 seconds
        .inputItems([
            '6x pneumaticcraft:printed_circuit_board',
            '4x mekanism:alloy_infused',
            '2x mekanism:alloy_reinforced',
            '4x minecraft:redstone'
        ])
        .outputItems('2x mineman:advanced_circuit')                // 2x advanced circuits
        .inputFE(25600);                                           // 25600 FE total

    // Recipe 3: Steel-based recipe (uses steel sheets instead of reinforced alloy)
    event.recipes.mbd2.advanced_assemblying('mbd2:advanced_circuit_steel')
        .duration(400)                                              // 20 seconds
        .inputItems([
            '2x pneumaticcraft:printed_circuit_board',
            '4x mekanism:alloy_infused',
            '8x tfmg:steel_sheet',
            'minecraft:diamond'
        ])
        .outputItems('mineman:advanced_circuit')                   // 1x advanced circuit
        .inputFE(25600);                                           // 25600 FE total

    // ============================================================
    // BASIC MIXER (mbd2:basic_mixer)
    // ============================================================
    // Tier 2-3 multiblock for general mixing operations
    // Example recipes for common mixing tasks
    // Recipe type: mixing

    // Example: Mix concrete powder (can be customized)
    event.recipes.mbd2.mixing('mbd2:concrete_mixing')
        .duration(100)                                              // 5 seconds
        .inputItems([
            '4x minecraft:sand',
            '4x minecraft:gravel',
            'minecraft:clay_ball'
        ])
        .inputFluids(Fluid.of('minecraft:water', 250))             // 250mb water
        .outputItems('8x minecraft:white_concrete_powder')
        .inputFE(1600);                                            // 1600 FE total (16 FE/tick)

    console.log('MBD2 machine recipes added successfully!');
});

// ============================================================
// MULTIBLOCK BUILDING GUIDE
// ============================================================
//
// CHEMICAL PLANT (mbd2:chemical_plant):
// Use the MBD2 in-game preview tool to see the structure.
// Right-click on a controller block with empty hand to see requirements.
// Accepts fluid inputs (ethylene) and item inputs (coal coke).
// Produces unprocessed plastic for further processing.
//
// COMPUTER CONTROLLED ASSEMBLER (mbd2:computer_controlled_assembler):
// Advanced multiblock for circuit fabrication.
// Requires multiple item input slots for PCBs, alloys, and components.
// Produces advanced circuits for Tier 5+ recipes.
//
// BASIC MIXER (mbd2:basic_mixer):
// Simpler alternative for basic mixing operations.
// Lower energy requirements, good for early automation.
