// kubejs/server_scripts/recipes/tier6_future.js
// Tier 6: Future Tech - Recipe modifications and gating

ServerEvents.recipes(event => {
    console.log('Applying Tier 6 (Future Tech) recipe changes...');

    // === APPLIED ENERGISTICS 2 GATING ===
    // Require advanced circuits from Circuit Fabrication Multiblock
    
    // Remove original AE2 controller recipe
    event.remove({ output: 'ae2:controller' });
    
    // AE2 Controller - requires advanced circuits
    event.shaped('ae2:controller', [
        'IAI',
        'ACA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        C: 'ae2:engineering_processor'
    });
    
    // Remove original AE2 processor recipes
    const ae2Processors = [
        'ae2:calculation_processor',
        'ae2:engineering_processor',
        'ae2:logic_processor'
    ];
    
    ae2Processors.forEach(processor => {
        event.remove({ output: processor });
    });
    
    // Calculation Processor - requires advanced circuits
    event.shaped('ae2:calculation_processor', [
        'RCR',
        'CAC',
        'RCR'
    ], {
        R: 'minecraft:redstone',
        C: 'ae2:certus_quartz_crystal',
        A: 'mineman:advanced_circuit'
    });
    
    // Engineering Processor - requires advanced circuits
    event.shaped('ae2:engineering_processor', [
        'RDR',
        'DAD',
        'RDR'
    ], {
        R: 'minecraft:redstone',
        D: 'minecraft:diamond',
        A: 'mineman:advanced_circuit'
    });
    
    // Logic Processor - requires advanced circuits
    event.shaped('ae2:logic_processor', [
        'RGR',
        'GAG',
        'RGR'
    ], {
        R: 'minecraft:redstone',
        G: 'minecraft:gold_ingot',
        A: 'mineman:advanced_circuit'
    });
    
    // Remove original AE2 ME Drive recipe
    event.remove({ output: 'ae2:drive' });
    
    // ME Drive - requires advanced circuits
    event.shaped('ae2:drive', [
        'IAI',
        'C C',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        C: 'ae2:engineering_processor'
    });
    
    // Remove original AE2 ME Chest recipe
    event.remove({ output: 'ae2:chest' });
    
    // ME Chest - requires advanced circuits
    event.shaped('ae2:chest', [
        'GCG',
        'CAC',
        'IPI'
    ], {
        G: '#forge:glass',
        C: 'ae2:calculation_processor',
        A: 'mineman:advanced_circuit',
        I: 'mekanism:alloy_infused',
        P: 'minecraft:chest'
    });
    
    // Remove original AE2 Energy Acceptor recipe
    event.remove({ output: 'ae2:energy_acceptor' });
    
    // Energy Acceptor - requires advanced circuits
    event.shaped('ae2:energy_acceptor', [
        'IAI',
        'ACA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        C: 'ae2:quartz_glass'
    });

    // === ADVANCED AE GATING ===
    // Requires base AE2 completion
    
    // Remove original Advanced AE pattern provider recipe
    event.remove({ output: 'advancedae:adv_pattern_provider' });
    
    // Advanced Pattern Provider - requires advanced circuits and AE2 base
    event.shaped('advancedae:adv_pattern_provider', [
        'IAI',
        'CPC',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        C: 'ae2:engineering_processor',
        P: 'ae2:pattern_provider'
    });

    // === APPLIED MEKANISTICS GATING ===
    // Requires both AE2 and Mekanism
    
    // Remove original Applied Mekanistics chemical storage cell recipes
    event.remove({ output: 'appmek:chemical_storage_cell_1k' });
    event.remove({ output: 'appmek:chemical_storage_cell_4k' });
    
    // Chemical Storage Cell 1k - requires advanced circuits
    event.shaped('appmek:chemical_storage_cell_1k', [
        'RCR',
        'CAC',
        'IAI'
    ], {
        R: 'minecraft:redstone',
        C: 'ae2:certus_quartz_crystal',
        A: 'mineman:advanced_circuit',
        I: 'mekanism:alloy_infused'
    });
    
    // Chemical Storage Cell 4k - requires advanced circuits
    event.shaped('appmek:chemical_storage_cell_4k', [
        'RCR',
        'SAS',
        'IAI'
    ], {
        R: 'minecraft:redstone',
        C: 'ae2:calculation_processor',
        S: 'appmek:chemical_storage_cell_1k',
        A: 'mineman:advanced_circuit',
        I: 'mekanism:alloy_infused'
    });

    // === XNET GATING ===
    // Advanced networking requires Tier 6 components
    
    // Remove original XNet controller recipe
    event.remove({ output: 'xnet:controller' });
    
    // XNet Controller - requires advanced circuits
    event.shaped('xnet:controller', [
        'IAI',
        'ACA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        C: 'minecraft:redstone_block'
    });
    
    // Remove original XNet router recipe
    event.remove({ output: 'xnet:router' });
    
    // XNet Router - requires advanced circuits
    event.shaped('xnet:router', [
        'IAI',
        'RCR',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        R: 'minecraft:redstone',
        C: 'minecraft:ender_pearl'
    });

    // === FLUX NETWORKS GATING ===
    // Advanced energy network requires Tier 6 circuits
    
    // Remove original Flux Networks recipes
    event.remove({ output: 'fluxnetworks:flux_controller' });
    event.remove({ output: 'fluxnetworks:flux_point' });
    event.remove({ output: 'fluxnetworks:flux_plug' });
    event.remove({ output: 'fluxnetworks:flux_core' });
    
    // Flux Core - base component requires advanced circuits
    event.shaped('fluxnetworks:flux_core', [
        'IAI',
        'AEA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        E: 'minecraft:ender_pearl'
    });
    
    // Flux Controller - requires flux core and advanced circuits
    event.shaped('fluxnetworks:flux_controller', [
        'DAD',
        'FCF',
        'DAD'
    ], {
        D: 'minecraft:diamond',
        A: 'mineman:advanced_circuit',
        F: 'fluxnetworks:flux_core',
        C: 'minecraft:redstone_block'
    });
    
    // Flux Point - requires flux core and advanced circuits
    event.shaped('fluxnetworks:flux_point', [
        'IAI',
        'RFR',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        R: 'minecraft:redstone',
        F: 'fluxnetworks:flux_core'
    });
    
    // Flux Plug - requires flux core and advanced circuits
    event.shaped('fluxnetworks:flux_plug', [
        'IAI',
        'RFR',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'mineman:advanced_circuit',
        R: 'minecraft:redstone',
        F: 'fluxnetworks:flux_core'
    });

    // === CREATE: NUCLEAR GATING ===
    // Nuclear technology requires endgame components
    
    // Remove original Create: Nuclear recipes
    event.remove({ output: 'createnuclear:reactor_casing' });
    event.remove({ output: 'createnuclear:control_rod' });
    event.remove({ output: 'createnuclear:uranium_fuel_rod' });
    event.remove({ output: 'createnuclear:reactor_glass' });
    
    // Reactor Casing - requires advanced circuits and steel
    event.shaped('4x createnuclear:reactor_casing', [
        'SAS',
        'ACA',
        'SAS'
    ], {
        S: '#forge:plates/steel',
        A: 'mineman:advanced_circuit',
        C: 'minecraft:iron_block'
    });
    
    // Control Rod - requires advanced circuits and diamond
    event.shaped('createnuclear:control_rod', [
        'DAD',
        'ACA',
        'DAD'
    ], {
        D: 'minecraft:diamond',
        A: 'mineman:advanced_circuit',
        C: 'minecraft:redstone_block'
    });
    
    // Uranium Fuel Rod - requires advanced circuits and uranium
    event.shaped('createnuclear:uranium_fuel_rod', [
        'IAI',
        'UCU',
        'IAI'
    ], {
        I: 'minecraft:iron_ingot',
        A: 'mineman:advanced_circuit',
        U: 'mekanism:uranium_fuel',
        C: '#forge:plates/steel'
    });
    
    // Reactor Glass - requires advanced circuits and tempered glass
    event.shaped('4x createnuclear:reactor_glass', [
        'GAG',
        'ACA',
        'GAG'
    ], {
        G: '#forge:glass',
        A: 'mineman:advanced_circuit',
        C: 'minecraft:diamond'
    });

    console.log('Tier 6 recipe changes complete!');
});
