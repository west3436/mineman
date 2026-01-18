// kubejs/server_scripts/recipes/tier3_plastic_multiblock.js
// IE-Only Plastic Production for IE Path Players
// Uses Immersive Engineering mechanics exclusively - no Create required

ServerEvents.recipes(event => {
    console.log('Adding IE-based plastic production recipes...');

    // === INTERMEDIATE ITEM: UNPROCESSED PLASTIC ===
    // Create an unprocessed plastic item that IE players can make
    // This will be pressed into plastic sheets using IE Metal Press
    
    // Define unprocessed plastic if not already defined by another mod
    // Using IE's treated wood bucket as a template for custom item pattern
    const UNPROCESSED_PLASTIC = 'kubejs:unprocessed_plastic';
    
    // === STEP 1: REFINE OIL TO ETHYLENE ===
    // Use IE Refinery multiblock to process oil into ethylene (using TFMG fluid)
    // Immersive Petroleum oil → ethylene (fluid intermediate for plastic)
    event.recipes.immersiveengineering.refinery(
        Fluid.of('tfmg:ethylene', 100),            // Output: 100mb ethylene (TFMG fluid)
        Fluid.of('immersivepetroleum:oil', 250),   // Input: 250mb crude oil
        Fluid.of('minecraft:empty', 0),            // No second fluid input
        512                                        // Energy: 512 RF
    );

    // === STEP 2: PLASTIC SOLIDIFIER MULTIBLOCK - ETHYLENE TO UNPROCESSED PLASTIC ===
    // Use custom Masterful Machinery multiblock built with IE blocks
    // This creates a semi-solid unprocessed plastic item
    // Multiblock ID: 'plastic_solidifier' - must be defined in-game using Masterful Machinery
    event.custom({
        type: 'masterfulmachinery:machine_process',
        structureId: 'mineman:plastic_solidifier',
        controllerId: 'mineman:plastic_solidifier',
        ticks: 100, // Duration: 100 ticks (5 seconds)
        inputs: [
            { type: 'masterfulmachinery:fluids', data: { fluid: 'tfmg:ethylene', amount: 100, inputId: 'fluid_input' } },
            { type: 'masterfulmachinery:items', data: { tag: 'forge:coal_coke', count: 1, inputId: 'item_input' } },
            { type: 'masterfulmachinery:energy', data: { amount: 12800, inputId: 'energy_input' } } // 256 RF/t * 100 ticks = 25600 RF total
        ],
        outputs: [
            { type: 'masterfulmachinery:items', data: { item: UNPROCESSED_PLASTIC, count: 1, outputId: 'item_output' } }
        ]
    });

    // === STEP 3: METAL PRESS - STAMP INTO PLASTIC SHEETS ===
    // Use IE Metal Press to stamp unprocessed plastic into plastic sheets
    // This is the final step that produces usable plastic sheets
    event.recipes.immersiveengineering.metal_press(
        '2x tfmg:plastic_sheet',                   // Output: 2 plastic sheets
        UNPROCESSED_PLASTIC,                       // Input: unprocessed plastic
        'immersiveengineering:mold_plate',         // Mold: plate mold
        2400,                                      // Energy: 2400 RF
        1                                          // Input size: 1
    );

    // === ALTERNATIVE: DIRECT REFINERY RECIPE (Less Efficient) ===
    // For early game before having full IE automation
    // Higher oil cost but simpler single-machine process
    // Uses TFMG molten_plastic as intermediate (can be cast directly)
    event.recipes.immersiveengineering.refinery(
        Fluid.of('tfmg:molten_plastic', 125),      // Output: molten plastic (TFMG fluid, can be cast)
        Fluid.of('immersivepetroleum:oil', 500),   // Input: 500mb crude oil (2x cost)
        Fluid.of('minecraft:lava', 100),           // Input: 100mb lava (heat source)
        1024                                       // Energy: 1024 RF (2x cost)
    );

    // Cast molten plastic directly into sheets (emergency recipe)
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
// 2. Plastic Solidifier Multiblock (3x3x3 - Masterful Machinery) - Creates unprocessed plastic
// 3. IE Metal Press (1x1x1) - Stamps unprocessed plastic into sheets
//
// PLASTIC SOLIDIFIER MULTIBLOCK (Custom Masterful Machinery Structure)
// ID: 'plastic_solidifier'
// Size: 3x3x3 compact IE-style multiblock
// 
// Materials needed (IE blocks only):
// - 18x Heavy Engineering Block (immersiveengineering:heavy_engineering)
// - 6x Redstone Engineering Block (immersiveengineering:rs_engineering)
// - 2x Steel Fluid Pipe (immersiveengineering:fluid_pipe)
// - 1x LV Capacitor (immersiveengineering:capacitor_lv)
// - 1x Multiblock Controller (masterfulmachinery:controller)
//
// Structure Layout (IE-themed):
// Layer 1 (Base):    [Heavy][Heavy][Heavy]
//                    [Heavy][Redstone][Heavy]
//                    [Heavy][Heavy][Heavy]
//
// Layer 2 (Core):    [Heavy][Redstone][Heavy]
//                    [Pipe][Controller][Pipe]
//                    [Heavy][Redstone][Heavy]
//
// Layer 3 (Top):     [Heavy][Heavy][Heavy]
//                    [Heavy][Capacitor][Heavy]
//                    [Heavy][Heavy][Heavy]
//
// Multiblock Recipe:
// - Input: 100mb Ethylene (from IE Refinery, using TFMG fluid)
// - Input: 1x Coal Coke (catalyst)
// - Output: 1x Unprocessed Plastic (solid item)
// - Energy: 12800 RF total (over 5 seconds)
//
// Full Process: 250mb Oil + Coal Coke → Unprocessed Plastic → 2 Plastic Sheets
// Total Power: 512 RF (refinery) + 12800 RF (solidifier) + 2400 RF (press) = 15712 RF
// Total Time: ~10s (refinery) + 5s (solidifier) + 4s (press) = ~19 seconds per 2 sheets
// Tier: 3 (requires steel and IE electricity)
//
// TO BUILD IN-GAME:
// 1. Construct the 3x3x3 structure using IE blocks as shown above
// 2. Use Masterful Machinery's builder tool on the controller
// 3. Define the structure pattern and save as 'plastic_solidifier'
// 4. Configure the recipe: 100mb ethylene + coal coke → unprocessed plastic
// 5. Set energy requirement: 12800 RF total, duration: 100 ticks
// 6. Assign input ports (fluid + item) and output port (item)
