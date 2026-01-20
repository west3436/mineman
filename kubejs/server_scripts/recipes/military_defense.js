// kubejs/server_scripts/recipes/military_defense.js
// Recipe modifications for Ballistix, Nuclear Science, Blastcraft, and Modular Forcefields

ServerEvents.recipes(event => {
    console.log('Applying Military & Defense recipe changes...');

    // === ELECTRODYNAMICS INTEGRATION ===
    // Electrodynamics serves as the base for all military mods
    // Gate some advanced items behind steel tier (Tier 2)
    
    // === BLASTCRAFT GATING ===
    // Reinforced blocks require steel production (Tier 2)
    
    // Remove original reinforced concrete recipe if it exists
    event.remove({ output: 'blastcraft:reinforcedconcrete' });
    
    // Reinforced Concrete - requires steel
    event.shaped('8x blastcraft:reinforcedconcrete', [
        'CSC',
        'SIS',
        'CSC'
    ], {
        C: 'minecraft:stone',
        S: '#forge:plates/steel',
        I: 'minecraft:iron_ingot'
    });

    // === BALLISTIX GATING ===
    // Explosives and missiles require chemistry tier (Tier 4)
    
    // Remove original missile launcher recipe
    event.remove({ output: 'ballistix:missilelauncher' });
    
    // Missile Launcher - requires steel plates and alloys
    event.shaped('ballistix:missilelauncher', [
        'SPS',
        'PAP',
        'SRS'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        A: 'mekanism:alloy_infused',
        R: 'minecraft:redstone_block'
    });
    
    // Remove original conventional missile recipe
    event.remove({ output: 'ballistix:missileconventional' });
    
    // Conventional Missile - requires plastic and steel
    event.shaped('ballistix:missileconventional', [
        ' I ',
        'SES',
        'SPS'
    ], {
        I: 'minecraft:iron_ingot',
        S: '#forge:plates/steel',
        E: 'ballistix:explosive',
        P: 'tfmg:plastic_sheet'
    });

    // === NUCLEAR SCIENCE GATING ===
    // Nuclear technology requires chemistry and electronics tiers (Tier 4-5)
    
    // Remove original centrifuge recipe
    event.remove({ output: 'nuclearscience:centrifuge' });
    
    // Centrifuge - requires advanced components
    event.shaped('nuclearscience:centrifuge', [
        'SAS',
        'PMP',
        'SRS'
    ], {
        S: '#forge:plates/steel',
        A: 'mekanism:alloy_infused',
        P: 'tfmg:plastic_sheet',
        M: 'mekanism:basic_control_circuit',
        R: 'minecraft:redstone_block'
    });
    
    // Remove original reactor core recipe
    event.remove({ output: 'nuclearscience:reactorcore' });
    
    // Reactor Core - requires advanced materials
    event.shaped('nuclearscience:reactorcore', [
        'LAL',
        'ACA',
        'LAL'
    ], {
        L: '#forge:ingots/lead',
        A: 'mekanism:alloy_reinforced',
        C: 'pneumaticcraft:printed_circuit_board'
    });

    // === MODULAR FORCEFIELDS GATING ===
    // Forcefields require electronics tier (Tier 5)
    
    // Remove original projector recipe
    event.remove({ output: 'modularforcefields:projector' });
    
    // Forcefield Projector - requires PCB and advanced circuits
    event.shaped('modularforcefields:projector', [
        'SPS',
        'PAP',
        'SCS'
    ], {
        S: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        A: 'mekanism:alloy_reinforced',
        C: 'pneumaticcraft:printed_circuit_board'
    });
    
    // Remove original coercion deriver recipe
    event.remove({ output: 'modularforcefields:coercionderiver' });
    
    // Coercion Deriver - power source for forcefields
    event.shaped('modularforcefields:coercionderiver', [
        'SAS',
        'ACA',
        'SRS'
    ], {
        S: '#forge:plates/steel',
        A: 'mekanism:alloy_infused',
        C: 'pneumaticcraft:printed_circuit_board',
        R: 'minecraft:redstone_block'
    });
    
    // Remove original fortron connector recipe
    event.remove({ output: 'modularforcefields:fortronconnector' });
    
    // Fortron Connector - energy transfer
    event.shaped('modularforcefields:fortronconnector', [
        'SWS',
        'WAW',
        'SWS'
    ], {
        S: '#forge:plates/steel',
        W: 'immersiveengineering:wire_copper',
        A: 'mekanism:alloy_infused'
    });

    // === BALLISTIX NUCLEAR MISSILE GATING ===
    // Nuclear missiles require all advanced technologies
    
    // Remove original nuclear missile recipe
    event.remove({ output: 'ballistix:missilenuclear' });
    
    // Nuclear Missile - endgame content requiring nuclear materials
    event.shaped('ballistix:missilenuclear', [
        ' U ',
        'SPS',
        'SCS'
    ], {
        U: 'nuclearscience:fuelheuo2',
        S: '#forge:plates/steel',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'mineman:advanced_circuit'
    });

    // === CROSS-MOD INTEGRATION ===
    // Allow Nuclear Science uranium to be processed in Mekanism machines
    
    // Enriched uranium conversion
    event.shapeless('mekanism:enriched_uranium', [
        'nuclearscience:celluranium'
    ]);
    
    event.shapeless('nuclearscience:celluranium', [
        'mekanism:enriched_uranium'
    ]);

    console.log('Military & Defense recipe changes complete!');
});
