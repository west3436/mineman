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

    // === STORAGE DRAWERS GATING ===
    // Require steel or industrial components for Storage Drawers
    
    // Remove original Storage Drawers recipes
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
    
    // Gate basic drawer blocks with steel
    const drawerTypes = ['1', '2', '4'];
    const woodTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'cherry'];
    
    woodTypes.forEach(wood => {
        drawerTypes.forEach(type => {
            const drawerId = `storagedrawers:${wood}_full_drawers_${type}`;
            event.remove({ output: drawerId });
            
            if (type === '1') {
                event.shaped(drawerId, [
                    'SSS',
                    ' C ',
                    'SSS'
                ], {
                    S: `minecraft:${wood}_planks`,
                    C: '#forge:plates/steel'
                });
            } else if (type === '2') {
                event.shaped(drawerId, [
                    'SCS',
                    'S S',
                    'SCS'
                ], {
                    S: `minecraft:${wood}_planks`,
                    C: '#forge:plates/steel'
                });
            } else if (type === '4') {
                event.shaped(drawerId, [
                    'CSC',
                    'S S',
                    'CSC'
                ], {
                    S: `minecraft:${wood}_planks`,
                    C: '#forge:plates/steel'
                });
            }
        });
    });

    // === TINKER'S CONSTRUCT GATING ===
    // Modify Smeltery controller to require steel
    
    // Remove original Smeltery Controller recipe
    event.remove({ output: 'tconstruct:smeltery_controller' });
    
    // Add new Smeltery Controller recipe requiring steel ingots
    event.shaped('tconstruct:smeltery_controller', [
        'SBS',
        'BCB',
        'SBS'
    ], {
        S: '#forge:ingots/steel',  // Accept both TFMG and IE steel ingots
        B: 'tconstruct:seared_bricks',
        C: 'minecraft:redstone'
    });

    // === CROSS-PATH STEEL RECIPES ===
    // Ensure both Create (TFMG) and IE can produce steel
    // (Unification handles output standardization)

    console.log('Tier 2 recipe changes complete!');
});
