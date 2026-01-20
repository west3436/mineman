// Tech Progression - Custom Items
// Registers custom items needed for the progression system

StartupEvents.registry('item', event => {
    console.log('[Tech Progression] Registering custom items...');

    // ============================================
    // MACHINE CASINGS (by tier)
    // ============================================

    // Tier 1 - Bronze Machine Casing
    event.create('bronze_machine_casing')
        .displayName('Bronze Machine Casing')
        .tooltip('Tier 1 machine component')
        .maxStackSize(64);

    // Tier 2 - Steel Machine Casing
    event.create('steel_machine_casing')
        .displayName('Steel Machine Casing')
        .tooltip('Tier 2 machine component')
        .maxStackSize(64);

    // Tier 3 - Industrial Machine Casing
    event.create('industrial_machine_casing')
        .displayName('Industrial Machine Casing')
        .tooltip('Tier 3 machine component')
        .maxStackSize(64);

    // Tier 4 - Advanced Machine Casing
    event.create('advanced_machine_casing')
        .displayName('Advanced Machine Casing')
        .tooltip('Tier 4 machine component')
        .maxStackSize(64);

    // Tier 5 - Quantum Machine Casing
    event.create('quantum_machine_casing')
        .displayName('Quantum Machine Casing')
        .tooltip('Tier 5 machine component')
        .maxStackSize(64);

    // Tier 6 - Ultimate Machine Casing
    event.create('ultimate_machine_casing')
        .displayName('Ultimate Machine Casing')
        .tooltip('Tier 6 machine component')
        .maxStackSize(64);

    // ============================================
    // TIER UNLOCK ITEMS (crafting components)
    // ============================================

    // Tier 2 - Steel Circuit
    event.create('steel_circuit')
        .displayName('Steel Circuit')
        .tooltip('Basic circuit for Tier 2 machines')
        .maxStackSize(64);

    // Tier 3 - Industrial Circuit
    event.create('industrial_circuit')
        .displayName('Industrial Circuit')
        .tooltip('Advanced circuit for Tier 3 machines')
        .maxStackSize(64);

    // Tier 4 - Advanced Circuit
    event.create('advanced_circuit')
        .displayName('Advanced Circuit')
        .tooltip('High-tech circuit for Tier 4 machines')
        .maxStackSize(64);

    // Tier 5 - Quantum Circuit
    event.create('quantum_circuit')
        .displayName('Quantum Circuit')
        .tooltip('Quantum entangled circuit for Tier 5 machines')
        .maxStackSize(64);

    // Tier 6 - Ultimate Circuit
    event.create('ultimate_circuit')
        .displayName('Ultimate Circuit')
        .tooltip('The pinnacle of circuit technology')
        .maxStackSize(64);

    // ============================================
    // SPECIAL COMPONENTS
    // ============================================

    // Path Exchange Token - allows switching between Create and IE paths
    event.create('path_exchange_token')
        .displayName('Path Exchange Token')
        .tooltip('Use to convert machines between Create and IE equivalents')
        .tooltip('§7One-time use per machine')
        .maxStackSize(16)
        .rarity('rare');

    console.log('[Tech Progression] Custom items registered');
});
