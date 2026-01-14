// kubejs/server_scripts/recipes/tier3_plastic_multiblock.js
// Alternative Plastic Production for IE Path Players
// Provides oil-to-plastic conversion without TFMG distillation tower

ServerEvents.recipes(event => {
    console.log('Adding alternative plastic production recipes for IE path...');

    // === OIL TO PLASTIC CONVERSION ===
    // Alternative to TFMG's distillation tower for IE-focused players
    
    // Method 1: Create Heated Mixing - Oil + Coal → Plastic Sheets
    // Primary recipe for IE path players (250mb oil + 1 coal → 2 plastic sheets)
    // Uses Create's Heated Mixing for oil processing
    event.recipes.create.mixing('2x tfmg:plastic_sheet', [
        Fluid.of('immersivepetroleum:oil', 250),
        'minecraft:coal'
    ]).heated();

    // Method 2: Bulk Processing - Industrial Plastic Production
    // Higher efficiency batch processing for mid-game (4x efficiency with sulfur catalyst)
    // 1000mb oil + 4 coal + sulfur → 8 plastic sheets
    event.recipes.create.mixing('8x tfmg:plastic_sheet', [
        Fluid.of('immersivepetroleum:oil', 1000),
        '4x minecraft:coal',
        '#forge:dusts/sulfur'
    ]).superheated();

    // Method 3: Alternative with IE Crude Oil
    // Uses IE's Crude Oil for cross-mod compatibility (300mb crude oil + 1 coal → 2 plastic sheets)
    event.recipes.create.mixing('2x tfmg:plastic_sheet', [
        Fluid.of('immersiveengineering:crude_oil', 300),
        'minecraft:coal'
    ]).heated();

    // Method 4: Charcoal Alternative
    // Allows using charcoal as catalyst (250mb oil + 1 charcoal → 2 plastic sheets)
    event.recipes.create.mixing('2x tfmg:plastic_sheet', [
        Fluid.of('immersivepetroleum:oil', 250),
        'minecraft:charcoal'
    ]).heated();

    console.log('Alternative plastic production recipes added!');
});

// === MULTIBLOCK STRUCTURE DOCUMENTATION ===
// This file provides recipes for IE path players to produce plastic
// without requiring TFMG's distillation tower.
//
// Recommended Multiblock Design (to be built in-game with Multiblocked2):
// 
// PLASTIC REFINERY MULTIBLOCK (3x3x4 structure)
// Materials needed:
// - 18x Steel Plates (casing blocks)
// - 4x Brass Casing (for processors)
// - 2x Mechanical Mixer
// - 2x Fluid Tank (for oil input)
// - 1x Item Vault (for coal input)
// - 1x Item Vault (for plastic output)
// - 1x Create Motor (for power)
// - Various pipes and connections
//
// Recipe: 250mb Oil + 1 Coal → 2 Plastic (1 minute processing)
// Power: 256 RF/t (equivalent to ~128 SU in Create terms)
// Tier: 3 (requires steel + electricity)
//
// Structure Layout:
// Layer 1 (Base):    [Tank][Steel][Tank]
//                    [Steel][Motor][Steel]
//                    [Vault][Steel][Vault]
//
// Layer 2-3:         [Steel][Brass][Steel]
//                    [Brass][Mixer][Brass]
//                    [Steel][Brass][Steel]
//
// Layer 4 (Top):     [Steel][Steel][Steel]
//                    [Steel][Output][Steel]
//                    [Steel][Steel][Steel]
