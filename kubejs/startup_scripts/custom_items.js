// kubejs/startup_scripts/custom_items.js
// Define custom items for the modpack

StartupEvents.registry('item', event => {
    console.log('Registering custom items...');
    
    // Advanced Circuit - Tier 5 progression item produced by Circuit Fabrication Multiblock
    event.create('mineman:advanced_circuit', 'basic')
        .displayName('Advanced Circuit')
        .tooltip('§7Used for Tier 6 gating')
        .tooltip('§8Produced in Circuit Fabrication Multiblock')
        .maxStackSize(64)
        .rarity('uncommon');
    
    console.log('Custom items registered!');
});
