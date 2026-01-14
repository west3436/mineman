// kubejs/server_scripts/recipes/tier2_steel.js
// Tier 2: Steel & Electricity - Recipe modifications and gating

ServerEvents.recipes(event => {
    console.log('Applying Tier 2 (Steel & Electricity) recipe changes...');

    // === FORESTRY GATING ===
    // Require steel/industrial components for Forestry machines
    
    // Remove original Forestry machine recipes
    const forestryMachines = [
        'forestry:carpenter',
        'forestry:fermenter',
        'forestry:bottler',
        'forestry:squeezer',
        'forestry:moistener',
        'forestry:centrifuge',
        'forestry:rainmaker'
    ];
    
    forestryMachines.forEach(machine => {
        event.remove({ output: machine });
    });
    
    // Remove original hardened casing recipe
    event.remove({ output: 'forestry:hardened_casing' });
    
    // Add new hardened casing recipe requiring steel plates
    event.shaped('forestry:hardened_casing', [
        'SBS',
        'BCB',
        'SBS'
    ], {
        S: '#forge:plates/steel',  // Accept both TFMG and IE steel plates
        B: 'minecraft:iron_bars',
        C: 'forestry:sturdy_casing'
    });
    
    // Modify Forestry machines to require steel plates
    // Carpenter
    event.shaped('forestry:carpenter', [
        'SCS',
        'G G',
        'SCS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron'
    });
    
    // Fermenter
    event.shaped('forestry:fermenter', [
        'SCS',
        'G G',
        'SHS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron',
        H: 'forestry:hardened_casing'
    });
    
    // Bottler
    event.shaped('forestry:bottler', [
        'SCS',
        'G G',
        'SHS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron',
        H: 'forestry:hardened_casing'
    });
    
    // Squeezer
    event.shaped('forestry:squeezer', [
        'SCS',
        'G G',
        'SHS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron',
        H: 'forestry:hardened_casing'
    });
    
    // Moistener
    event.shaped('forestry:moistener', [
        'SCS',
        'G G',
        'SHS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron',
        H: 'forestry:hardened_casing'
    });
    
    // Centrifuge
    event.shaped('forestry:centrifuge', [
        'SCS',
        'G G',
        'SHS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron',
        H: 'forestry:hardened_casing'
    });
    
    // Rainmaker
    event.shaped('forestry:rainmaker', [
        'SCS',
        'G G',
        'SHS'
    ], {
        S: '#forge:plates/steel',
        C: 'forestry:sturdy_casing',
        G: '#forge:gears/iron',
        H: 'forestry:hardened_casing'
    });

    // === STORAGE DRAWERS GATING ===
    // Only gate controllers behind steel, not the drawer blocks themselves
    
    // Remove original Storage Drawers controller recipes
    event.remove({ output: 'storagedrawers:controller' });
    event.remove({ output: 'storagedrawers:controller_slave' });
    
    // Add new controller recipe requiring steel plates
    event.shaped('storagedrawers:controller', [
        'SPS',
        'PCP',
        'SRS'
    ], {
        S: '#forge:plates/steel',
        P: '#minecraft:planks',
        C: 'minecraft:comparator',
        R: 'minecraft:redstone'
    });
    
    // Add new controller slave recipe requiring steel
    event.shaped('storagedrawers:controller_slave', [
        'SPS',
        'PCP',
        'SRS'
    ], {
        S: '#forge:plates/steel',
        P: '#minecraft:planks',
        C: 'minecraft:comparator',
        R: 'minecraft:stone'
    });

    // === TINKER'S CONSTRUCT GATING ===
    // Do not gate TC behind steel, but prevent TC from making steel
    
    // Remove any Tinker's Construct recipes that output steel
    // Using forge tags handles all steel variants (TFMG, IE, Mekanism)
    event.remove({ output: '#forge:ingots/steel', mod: 'tconstruct' });
    event.remove({ output: '#forge:plates/steel', mod: 'tconstruct' });

    // === CROSS-PATH STEEL RECIPES ===
    // Ensure both Create (TFMG) and IE can produce steel
    // (Unification handles output standardization)

    console.log('Tier 2 recipe changes complete!');
});
