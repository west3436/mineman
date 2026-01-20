// Tech Progression - Recipe Removals
// Removes default recipes to enforce tier progression

ServerEvents.recipes(event => {
    console.log('[Tech Progression] Removing recipes for tier gating...');

    // ============================================
    // TIER 0 GATES - Prevent skipping stone age
    // ============================================

    // Remove vanilla iron+ tool recipes (must use Tinkers)
    event.remove({ output: 'minecraft:iron_pickaxe' });
    event.remove({ output: 'minecraft:iron_axe' });
    event.remove({ output: 'minecraft:iron_shovel' });
    event.remove({ output: 'minecraft:iron_hoe' });
    event.remove({ output: 'minecraft:iron_sword' });

    event.remove({ output: 'minecraft:golden_pickaxe' });
    event.remove({ output: 'minecraft:golden_axe' });
    event.remove({ output: 'minecraft:golden_shovel' });
    event.remove({ output: 'minecraft:golden_hoe' });
    event.remove({ output: 'minecraft:golden_sword' });

    event.remove({ output: 'minecraft:diamond_pickaxe' });
    event.remove({ output: 'minecraft:diamond_axe' });
    event.remove({ output: 'minecraft:diamond_shovel' });
    event.remove({ output: 'minecraft:diamond_hoe' });
    event.remove({ output: 'minecraft:diamond_sword' });

    event.remove({ output: 'minecraft:netherite_pickaxe' });
    event.remove({ output: 'minecraft:netherite_axe' });
    event.remove({ output: 'minecraft:netherite_shovel' });
    event.remove({ output: 'minecraft:netherite_hoe' });
    event.remove({ output: 'minecraft:netherite_sword' });

    // Remove vanilla armor recipes (must use Tinkers)
    event.remove({ output: 'minecraft:iron_helmet' });
    event.remove({ output: 'minecraft:iron_chestplate' });
    event.remove({ output: 'minecraft:iron_leggings' });
    event.remove({ output: 'minecraft:iron_boots' });

    event.remove({ output: 'minecraft:golden_helmet' });
    event.remove({ output: 'minecraft:golden_chestplate' });
    event.remove({ output: 'minecraft:golden_leggings' });
    event.remove({ output: 'minecraft:golden_boots' });

    event.remove({ output: 'minecraft:diamond_helmet' });
    event.remove({ output: 'minecraft:diamond_chestplate' });
    event.remove({ output: 'minecraft:diamond_leggings' });
    event.remove({ output: 'minecraft:diamond_boots' });

    event.remove({ output: 'minecraft:netherite_helmet' });
    event.remove({ output: 'minecraft:netherite_chestplate' });
    event.remove({ output: 'minecraft:netherite_leggings' });
    event.remove({ output: 'minecraft:netherite_boots' });

    // ============================================
    // TIER 5 GATES - Mekanism machines
    // ============================================

    // Digital Miner - Tier 5 only
    event.remove({ output: 'mekanism:digital_miner' });

    // QIO System - Tier 5+
    event.remove({ output: 'mekanism:qio_drive_array' });
    event.remove({ output: 'mekanism:qio_dashboard' });
    event.remove({ output: 'mekanism:qio_importer' });
    event.remove({ output: 'mekanism:qio_exporter' });
    event.remove({ output: 'mekanism:qio_redstone_adapter' });

    // Nuclear - Tier 5
    event.remove({ output: 'mekanismgenerators:fission_reactor_casing' });
    event.remove({ output: 'mekanismgenerators:fission_reactor_port' });
    event.remove({ output: 'mekanismgenerators:fission_fuel_assembly' });
    event.remove({ output: 'mekanismgenerators:control_rod_assembly' });
    event.remove({ output: 'mekanismgenerators:fusion_reactor_controller' });
    event.remove({ output: 'mekanismgenerators:fusion_reactor_frame' });
    event.remove({ output: 'mekanismgenerators:fusion_reactor_port' });
    event.remove({ output: 'mekanismgenerators:fusion_reactor_logic_adapter' });
    event.remove({ output: 'mekanismgenerators:laser_focus_matrix' });
    event.remove({ output: 'mekanismgenerators:reactor_glass' });

    // Quantum Entangloporter - Tier 5+
    event.remove({ output: 'mekanism:quantum_entangloporter' });

    // ============================================
    // TIER 6 GATES - End-game items
    // ============================================

    // Flux Networks - Tier 6 only
    event.remove({ output: 'fluxnetworks:flux_block' });
    event.remove({ output: 'fluxnetworks:flux_plug' });
    event.remove({ output: 'fluxnetworks:flux_point' });
    event.remove({ output: 'fluxnetworks:flux_controller' });
    event.remove({ output: 'fluxnetworks:flux_storage_1' });
    event.remove({ output: 'fluxnetworks:flux_storage_2' });
    event.remove({ output: 'fluxnetworks:flux_storage_3' });

    // RFTools Teleportation - Tier 6
    event.remove({ output: 'rftoolsutility:matter_transmitter' });
    event.remove({ output: 'rftoolsutility:matter_receiver' });
    event.remove({ output: 'rftoolsutility:dialing_device' });
    event.remove({ output: 'rftoolsutility:simple_dialer' });

    // RFTools Dimensions - Tier 6
    event.remove({ output: 'rftoolsdim:dimension_builder' });
    event.remove({ output: 'rftoolsdim:dimension_editor' });
    event.remove({ output: 'rftoolsdim:dimension_enscriber' });

    // Shrinking Device - Tier 6
    // event.remove({ output: 'shrink:shrinking_device' }); // Check mod ID

    // ============================================
    // DUPLICATE ITEM REMOVAL (use unified versions)
    // ============================================

    // We don't remove duplicate recipes here - we handle that via JEI hiding
    // and by making all recipes use forge tags instead of specific items

    console.log('[Tech Progression] Recipe removals complete');
});
