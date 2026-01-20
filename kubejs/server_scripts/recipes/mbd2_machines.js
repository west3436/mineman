// kubejs/server_scripts/recipes/mbd2_machines.js
// MBD2 Machine Recipes - Chemical Mixer and Advanced Circuit Fabricator
//
// NOTE: MBD2 recipes are defined within the multiblock definition files (.mb),
// not via KubeJS. The recipe type 'mbd2:mbd_recipe' does not exist.
// These recipes are commented out - MBD2 machines use their internal recipe system.
// To add/modify MBD2 recipes, use the MBD2 in-game recipe editor.

ServerEvents.recipes(event => {
    console.log('MBD2 machine recipes - using internal MBD2 recipe system');

    // ============================================================
    // MBD2 RECIPE DOCUMENTATION
    // ============================================================
    // MBD2 multiblocks have their recipes defined in the .mb files
    // located in ldlib/assets/mbd2/multiblock/
    //
    // To add recipes to MBD2 machines:
    // 1. Use the MBD2 in-game recipe editor (right-click controller)
    // 2. Or modify the .mb files directly using MBD2's tools
    //
    // The following recipe types are available in the reference pack:
    // - mixing.rt - For mixing operations
    // - chemical_processing.rt - For chemical plant
    // - advanced_assemblying.rt - For computer controlled assembler
    // ============================================================

    // Chemical Plant recipes are defined in:
    // ldlib/assets/mbd2/multiblock/chemical_plant.mb
    //
    // Expected recipe:
    // - Input: 100mb Ethylene + 1x Coal Coke
    // - Output: 1x Unprocessed Plastic
    // - Energy: 12800 FE

    // Computer Controlled Assembler recipes are defined in:
    // ldlib/assets/mbd2/multiblock/computer_controlled_assembler.mb
    //
    // Expected recipes for Advanced Circuits:
    // - 4 PCBs + 8 Infused Alloy + 4 Reinforced Alloy + 2 Redstone Blocks → 2 Advanced Circuits
    // - 6 PCBs + 4 Infused Alloy + 2 Reinforced Alloy + 4 Redstone → 2 Advanced Circuits
    // - 2 PCBs + 4 Infused Alloy + 8 Steel Sheets + 1 Diamond → 1 Advanced Circuit

    console.log('MBD2 recipes are handled by internal MBD2 recipe system');
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
