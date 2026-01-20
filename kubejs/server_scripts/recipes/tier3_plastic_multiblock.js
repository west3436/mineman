// kubejs/server_scripts/recipes/tier3_plastic_multiblock.js
// IE-Only Plastic Production for IE Path Players
// Uses Immersive Engineering mechanics exclusively - no Create required
//
// Requires: KubeJS Immersive Engineering UNOFFICIAL for 1.20.1
// https://www.curseforge.com/minecraft/mc-mods/kubejs-immersive-engineering-unofficial

ServerEvents.recipes(event => {
    console.log('Adding IE-based plastic production recipes...');

    // Define unprocessed plastic item
    const UNPROCESSED_PLASTIC = 'kubejs:unprocessed_plastic';

    // === STEP 1: REFINE OIL TO ETHYLENE ===
    // Use IE Refinery multiblock to process oil into ethylene (using TFMG fluid)
    // Immersive Petroleum oil → ethylene (fluid intermediate for plastic)
    // NOTE: Refinery recipe may be broken in some KubeJS IE versions
    // If this doesn't work, use Immersive Petroleum's native distillation instead
    try {
        event.recipes.immersiveengineering.refinery(
            Fluid.of('tfmg:ethylene', 100),                // Output: 100mb ethylene (TFMG fluid)
            [Fluid.of('immersivepetroleum:oil', 250)]      // Input: 250mb crude oil (array format)
        ).energy(512);
    } catch (e) {
        console.log('IE Refinery recipe failed - use Immersive Petroleum distillation instead');
    }

    // === STEP 2: CHEMICAL MIXER MULTIBLOCK - ETHYLENE TO UNPROCESSED PLASTIC ===
    // Use MBD2 Chemical Plant multiblock built with IE blocks
    // This creates a semi-solid unprocessed plastic item
    // Multiblock: mbd2:chemical_plant - build using MBD2 preview in-game
    // Recipe defined in MBD2's internal recipe system

    // === STEP 3: METAL PRESS - STAMP INTO PLASTIC SHEETS ===
    // Use IE Metal Press to stamp unprocessed plastic into plastic sheets
    // This is the final step that produces usable plastic sheets
    event.recipes.immersiveengineering.metal_press(
        '2x tfmg:plastic_sheet',                   // Output: 2 plastic sheets
        UNPROCESSED_PLASTIC,                       // Input: unprocessed plastic
        'immersiveengineering:mold_plate'          // Mold: plate mold
    ).energy(2400);

    // === ALTERNATIVE: DIRECT REFINERY RECIPE (Less Efficient) ===
    // For early game before having full IE automation
    // Higher oil cost but simpler single-machine process
    // Uses TFMG molten_plastic as intermediate (can be cast directly)
    try {
        event.recipes.immersiveengineering.refinery(
            Fluid.of('tfmg:molten_plastic', 125),          // Output: molten plastic (TFMG fluid)
            [
                Fluid.of('immersivepetroleum:oil', 500),   // Input: 500mb crude oil (2x cost)
                Fluid.of('minecraft:lava', 100)            // Input: 100mb lava (heat source)
            ]
        ).energy(1024);
    } catch (e) {
        console.log('IE Refinery alt recipe failed');
    }

    // Cast molten plastic directly into sheets using bottling machine
    event.recipes.immersiveengineering.bottling(
        'tfmg:plastic_sheet',                      // Output: 1 plastic sheet
        'minecraft:bucket',                        // Input: bucket (returns empty)
        Fluid.of('tfmg:molten_plastic', 125)       // Input: molten plastic (TFMG fluid)
    );

    console.log('IE-based plastic production recipes complete!');
});

// === IE MULTIBLOCK STRUCTURE DOCUMENTATION ===
// This system uses ONLY Immersive Engineering blocks and machines
// NO Create components required - fully IE-compatible
//
// REQUIRED MACHINES:
// 1. IE Refinery (3x5x3) - Processes oil into ethylene
// 2. MBD2 Chemical Plant - Creates unprocessed plastic (use in-game preview to build)
// 3. IE Metal Press (1x1x1) - Stamps unprocessed plastic into sheets
//
// CHEMICAL PLANT MULTIBLOCK (Multiblocked2)
// Use the MBD2 in-game preview system to build the Chemical Plant structure.
// Right-click with empty hand on the controller to see the required structure.
//
// Recipe (defined in MBD2's internal recipe system):
// - Input: 100mb Ethylene (from IE Refinery, using TFMG fluid)
// - Input: 1x Coal Coke (catalyst)
// - Output: 1x Unprocessed Plastic (solid item)
// - Energy: 12800 FE total
//
// Full Process: 250mb Oil + Coal Coke → Unprocessed Plastic → 2 Plastic Sheets
// Tier: 3 (requires steel and IE electricity)
