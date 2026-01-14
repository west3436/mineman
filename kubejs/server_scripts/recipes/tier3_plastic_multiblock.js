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
    
    // === STEP 1: REFINE OIL TO PLASTIC MIXTURE ===
    // Use IE Refinery multiblock to process oil into plastic mixture
    // Immersive Petroleum oil + coal coke → unprocessed plastic (fluid intermediate)
    event.recipes.immersiveengineering.refinery(
        Fluid.of('kubejs:plastic_mixture', 100),  // Output: 100mb plastic mixture
        Fluid.of('immersivepetroleum:oil', 250),   // Input: 250mb crude oil
        Fluid.of('minecraft:empty', 0),            // No second fluid input
        512                                        // Energy: 512 RF
    );

    // === STEP 2: BOTTLING - PLASTIC MIXTURE TO UNPROCESSED PLASTIC ===
    // Use IE Bottling Machine to fill coal coke with plastic mixture
    // This creates a semi-solid unprocessed plastic item
    event.recipes.immersiveengineering.bottling(
        UNPROCESSED_PLASTIC,                       // Output: unprocessed plastic item
        '#forge:coal_coke',                        // Input: coal coke (catalyst/binder)
        Fluid.of('kubejs:plastic_mixture', 100)    // Input: plastic mixture fluid
    );

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
    event.recipes.immersiveengineering.refinery(
        Fluid.of('kubejs:molten_plastic', 125),    // Output: molten plastic (can be cast)
        Fluid.of('immersivepetroleum:oil', 500),   // Input: 500mb crude oil (2x cost)
        Fluid.of('minecraft:lava', 100),           // Input: 100mb lava (heat source)
        1024                                       // Energy: 1024 RF (2x cost)
    );

    // Cast molten plastic directly into sheets (emergency recipe)
    event.recipes.immersiveengineering.bottling(
        'tfmg:plastic_sheet',                      // Output: 1 plastic sheet
        'minecraft:bucket',                        // Input: bucket (returns empty)
        Fluid.of('kubejs:molten_plastic', 125)     // Input: molten plastic
    );

    console.log('IE-based plastic production recipes complete!');
});

// === IE MULTIBLOCK STRUCTURE DOCUMENTATION ===
// This system uses ONLY Immersive Engineering blocks and machines
// NO Create components required - fully IE-compatible
//
// REQUIRED IE MULTIBLOCKS:
// 1. Refinery (3x5x3) - Processes oil into plastic mixture
// 2. Metal Press (1x1x1) - Stamps unprocessed plastic into sheets
// 3. Optional: Arc Furnace for coal coke production
//
// PLASTIC PRODUCTION MULTIBLOCK (Custom Multiblocked2 Structure)
// Size: 3x3x3 compact IE-style multiblock
// 
// Materials needed:
// - 18x Heavy Engineering Block (IE multiblock casing)
// - 6x Redstone Engineering Block (control/power)
// - 3x Steel Fluid Pipes (IE fluid handling)
// - 2x Capacitor (IE power storage)
// - 1x Multiblock Controller (Multiblocked2)
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
// Recipe: 250mb Oil + Coal Coke → Unprocessed Plastic → 2 Plastic Sheets
// Power: 512 RF/t (IE standard power)
// Processing: 3-step process (Refinery → Bottling → Press)
// Tier: 3 (requires steel and IE electricity)
