// kubejs/server_scripts/recipes/mbd2_machines.js
// MBD2 Machine Recipes - Chemical Mixer and Advanced Circuit Fabricator
// These recipes work with Multiblocked2 multiblock structures

ServerEvents.recipes(event => {
    console.log('Adding MBD2 machine recipes...');

    // ============================================================
    // CHEMICAL MIXER / CHEMICAL PLANT RECIPES
    // Multiblock: mbd2:chemical_plant
    // Purpose: Create plastic from Immersive Petroleum inputs
    // ============================================================

    // Chemical Mixer Recipe - Ethylene + Coal Coke → Unprocessed Plastic
    // Used in the Chemical Plant multiblock
    event.custom({
        type: 'mbd2:mbd_recipe',
        machine: 'mbd2:chemical_plant',
        duration: 100, // 5 seconds
        inputs: {
            item_in: [
                { ingredient: { tag: 'forge:coal_coke' }, count: 1 }
            ],
            fluid_in: [
                { content: { fluid: 'tfmg:ethylene', amount: 100 } }
            ]
        },
        outputs: {
            item_out: [
                { content: { item: 'kubejs:unprocessed_plastic', count: 1 } }
            ]
        },
        conditions: [
            { type: 'mbd2:machine_level', min: 1 }
        ],
        data: {
            energy: 12800  // FE cost
        }
    });

    // Alternative: Direct plastic production from oil (higher cost)
    event.custom({
        type: 'mbd2:mbd_recipe',
        machine: 'mbd2:chemical_plant',
        duration: 200, // 10 seconds
        inputs: {
            fluid_in: [
                { content: { fluid: 'immersivepetroleum:oil', amount: 500 } },
                { content: { fluid: 'minecraft:lava', amount: 100 } }
            ]
        },
        outputs: {
            item_out: [
                { content: { item: 'kubejs:unprocessed_plastic', count: 2 } }
            ]
        },
        data: {
            energy: 25600
        }
    });

    // ============================================================
    // ADVANCED CIRCUIT FABRICATOR RECIPES
    // Multiblock: mbd2:computer_controlled_assembler
    // Purpose: Create advanced circuits from PCBs and alloys
    // ============================================================

    // Primary Recipe - Standard advanced circuit production
    // 4 PCBs + 8 Infused Alloy + 4 Reinforced Alloy + 2 Redstone Blocks → 2 Advanced Circuits
    event.custom({
        type: 'mbd2:mbd_recipe',
        machine: 'mbd2:computer_controlled_assembler',
        duration: 400, // 20 seconds
        inputs: {
            item_in: [
                { ingredient: { item: 'pneumaticcraft:printed_circuit_board' }, count: 4 },
                { ingredient: { item: 'mekanism:alloy_infused' }, count: 8 },
                { ingredient: { item: 'mekanism:alloy_reinforced' }, count: 4 },
                { ingredient: { item: 'minecraft:redstone_block' }, count: 2 }
            ]
        },
        outputs: {
            item_out: [
                { content: { item: 'mineman:advanced_circuit', count: 2 } }
            ]
        },
        data: {
            energy: 50000
        }
    });

    // Alternative Recipe - More PCBs, fewer alloys
    // 6 PCBs + 4 Infused Alloy + 2 Reinforced Alloy + 4 Redstone → 2 Advanced Circuits
    event.custom({
        type: 'mbd2:mbd_recipe',
        machine: 'mbd2:computer_controlled_assembler',
        duration: 300, // 15 seconds
        inputs: {
            item_in: [
                { ingredient: { item: 'pneumaticcraft:printed_circuit_board' }, count: 6 },
                { ingredient: { item: 'mekanism:alloy_infused' }, count: 4 },
                { ingredient: { item: 'mekanism:alloy_reinforced' }, count: 2 },
                { ingredient: { item: 'minecraft:redstone' }, count: 4 }
            ]
        },
        outputs: {
            item_out: [
                { content: { item: 'mineman:advanced_circuit', count: 2 } }
            ]
        },
        data: {
            energy: 40000
        }
    });

    // Early Game Recipe - Lower cost, lower yield
    // 2 PCBs + 4 Infused Alloy + 8 Steel Sheets + 1 Diamond → 1 Advanced Circuit
    event.custom({
        type: 'mbd2:mbd_recipe',
        machine: 'mbd2:computer_controlled_assembler',
        duration: 200, // 10 seconds
        inputs: {
            item_in: [
                { ingredient: { item: 'pneumaticcraft:printed_circuit_board' }, count: 2 },
                { ingredient: { item: 'mekanism:alloy_infused' }, count: 4 },
                { ingredient: { item: 'tfmg:steel_sheet' }, count: 8 },
                { ingredient: { item: 'minecraft:diamond' }, count: 1 }
            ]
        },
        outputs: {
            item_out: [
                { content: { item: 'mineman:advanced_circuit', count: 1 } }
            ]
        },
        data: {
            energy: 30000
        }
    });

    // ============================================================
    // BASIC MIXER RECIPES (Alternative Chemical Processing)
    // Multiblock: mbd2:basic_mixer
    // Purpose: Simpler mixing operations
    // ============================================================

    // Basic plastic mixture creation
    event.custom({
        type: 'mbd2:mbd_recipe',
        machine: 'mbd2:basic_mixer',
        duration: 80,
        inputs: {
            fluid_in: [
                { content: { fluid: 'tfmg:ethylene', amount: 200 } }
            ],
            item_in: [
                { ingredient: { tag: 'forge:dusts/coal' }, count: 2 }
            ]
        },
        outputs: {
            item_out: [
                { content: { item: 'kubejs:unprocessed_plastic', count: 1 } }
            ]
        },
        data: {
            energy: 8000
        }
    });

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
