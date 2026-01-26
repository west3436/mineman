// priority: 100
// Chapter 5 - Antimatter Tier Recipe Modifications
// Recipe changes for antimatter and dark matter progression gate

ServerEvents.recipes(event => {
    // ==================== ELECTRODYNAMICS: BASIC CIRCUIT ====================
    // Replace steel plate with ultimate control circuit in the basic circuit recipe
    event.replaceInput(
        { output: 'electrodynamics:circuitbasic' },
        '#forge:plates/steel',
        'mekanism:ultimate_control_circuit'
    );

    // ==================== HOSTILE NETWORKS: SIM CHAMBER ====================
    // Replace ender pearls with small antimatter cells
    event.replaceInput(
        { output: 'hostilenetworks:sim_chamber' },
        'minecraft:ender_pearl',
        'nuclearscience:cellantimattersmall'
    );

    // ==================== FLUX NETWORKS: FLUX CORE ====================
    // Replace eye of ender with small antimatter cells
    event.replaceInput(
        { output: 'fluxnetworks:flux_core' },
        'minecraft:ender_eye',
        'nuclearscience:cellantimattersmall'
    );

    // ==================== MODULAR FORCEFIELDS: FOCUS MATRIX ====================
    // Replace diamond with small antimatter cells
    event.replaceInput(
        { output: 'modularforcefields:focusmatrix' },
        'minecraft:diamond',
        'nuclearscience:cellantimattersmall'
    );

    // ==================== RFTOOLS DIMENSIONS: DIMENSION BUILDER ====================
    // Replace emerald with dark matter cells
    event.replaceInput(
        { output: 'rftoolsdim:dimension_builder' },
        'minecraft:emerald',
        'nuclearscience:celldarkmatter'
    );

    // ==================== COMPACT MACHINES: PERSONAL SHRINKING DEVICE ====================
    // Replace book with dark matter cells
    event.replaceInput(
        { output: 'compactmachines:personal_shrinking_device' },
        'minecraft:book',
        'nuclearscience:celldarkmatter'
    );

    // ==================== INDUSTRIAL RENEWAL: SPONGE IRON ====================
    // Remove the sponge iron recipe entirely
    event.remove({ output: 'industrialrenewal:sponge_iron' });

    console.log('[Chapter 5] Antimatter tier recipe modifications complete');
});

// ==================== TAGS: REMOVE ELECTRODYNAMICS CIRCUITS FROM OREDICT ====================
ServerEvents.tags('item', event => {
    // Remove electrodynamics:circuitbasic from all forge circuit tags
    event.remove('forge:circuits/basic', 'electrodynamics:circuitbasic');
    event.remove('forge:circuits', 'electrodynamics:circuitbasic');

    console.log('[Chapter 5] Removed electrodynamics:circuitbasic from forge circuit tags');
});
