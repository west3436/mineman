// kubejs/server_scripts/recipes/tier4_chemistry.js
// Tier 4: Chemistry - Recipe modifications and gating

ServerEvents.recipes(event => {
    console.log('Applying Tier 4 (Chemistry) recipe changes...');

    // === RFTOOLS BASE GATING ===
    // Machine Frame is the core component for all RFTools modules
    
    // Remove original RFTools Base machine frame recipe
    event.remove({ output: 'rftoolsbase:machine_frame' });
    
    // Machine Frame - requires PneumaticCraft plastic and Mekanism infused alloy
    event.shaped('rftoolsbase:machine_frame', [
        'PIP',
        'AGA',
        'PIP'
    ], {
        P: 'pneumaticcraft:plastic',
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        G: '#forge:gears/iron'
    });

    // === RFTOOLS BUILDER GATING ===
    // Require chemistry components for building machines
    
    // Remove original RFTools Builder recipes
    const rftoolsBuilderItems = [
        'rftoolsbuilder:builder',
        'rftoolsbuilder:shape_card',
        'rftoolsbuilder:support_block'
    ];
    
    rftoolsBuilderItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Builder - requires machine frame and chemistry components
    event.shaped('rftoolsbuilder:builder', [
        'PCP',
        'RFR',
        'PIP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'minecraft:diamond_pickaxe',
        R: 'minecraft:redstone',
        F: 'rftoolsbase:machine_frame',
        I: 'mekanism:alloy_infused'
    });
    
    // Shape Card - requires plastic
    event.shaped('rftoolsbuilder:shape_card', [
        'PPP',
        'PEP',
        'PPP'
    ], {
        P: 'pneumaticcraft:plastic',
        E: 'minecraft:ender_pearl'
    });
    
    // Support Block - requires chemistry materials
    event.shaped('rftoolsbuilder:support_block', [
        'IAI',
        'APA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic'
    });

    // === RFTOOLS CONTROL GATING ===
    // Require chemistry components for automation
    
    // Remove original RFTools Control recipes
    const rftoolsControlItems = [
        'rftoolscontrol:processor',
        'rftoolscontrol:workbench',
        'rftoolscontrol:cpu_core_1000'
    ];
    
    rftoolsControlItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Processor - requires machine frame and chemistry
    event.shaped('rftoolscontrol:processor', [
        'PRP',
        'IFI',
        'PAP'
    ], {
        P: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone_block',
        I: 'mekanism:alloy_infused',
        F: 'rftoolsbase:machine_frame',
        A: '#forge:plates/steel'
    });
    
    // Workbench - requires processor and chemistry
    event.shaped('rftoolscontrol:workbench', [
        'PCP',
        'IWI',
        'PPP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'minecraft:crafting_table',
        I: 'mekanism:alloy_infused',
        W: 'rftoolscontrol:processor'
    });
    
    // CPU Core - requires advanced chemistry
    event.shaped('rftoolscontrol:cpu_core_1000', [
        'IAI',
        'ARA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone_block'
    });

    // === RFTOOLS POWER GATING ===
    // Require chemistry components for power systems
    
    // Remove original RFTools Power recipes
    const rftoolsPowerItems = [
        'rftoolspower:power_core1',
        'rftoolspower:dimensionalcell_simple',
        'rftoolspower:energycell_simple'
    ];
    
    rftoolsPowerItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Power Core - requires machine frame and chemistry
    event.shaped('rftoolspower:power_core1', [
        'IAI',
        'RFR',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone',
        F: 'rftoolsbase:machine_frame'
    });
    
    // Dimensional Cell - requires chemistry materials
    event.shaped('rftoolspower:dimensionalcell_simple', [
        'PIP',
        'ECE',
        'PIP'
    ], {
        P: 'pneumaticcraft:plastic',
        I: 'mekanism:alloy_infused',
        E: 'minecraft:ender_pearl',
        C: 'rftoolspower:power_core1'
    });
    
    // Energy Cell - requires chemistry components
    event.shaped('rftoolspower:energycell_simple', [
        'IAI',
        'RCR',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        R: 'minecraft:redstone',
        C: 'rftoolspower:power_core1'
    });

    // === RFTOOLS STORAGE GATING ===
    // Require chemistry components for storage systems
    
    // Remove original RFTools Storage recipes
    const rftoolsStorageItems = [
        'rftoolsstorage:storage_module0',
        'rftoolsstorage:modular_storage'
    ];
    
    rftoolsStorageItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Storage Module - requires chemistry materials
    event.shaped('rftoolsstorage:storage_module0', [
        'PCP',
        'IAI',
        'PCP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: '#forge:chests/wooden',
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel'
    });
    
    // Modular Storage - requires machine frame
    event.shaped('rftoolsstorage:modular_storage', [
        'PAP',
        'IFI',
        'PAP'
    ], {
        P: 'pneumaticcraft:plastic',
        A: 'mekanism:alloy_infused',
        I: '#forge:plates/steel',
        F: 'rftoolsbase:machine_frame'
    });

    // === RFTOOLS UTILITY GATING ===
    // Require chemistry components for utility machines
    
    // Remove original RFTools Utility recipes
    const rftoolsUtilityItems = [
        'rftoolsutility:crafter1',
        'rftoolsutility:screen',
        'rftoolsutility:matter_transmitter'
    ];
    
    rftoolsUtilityItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Crafter - requires machine frame and chemistry
    event.shaped('rftoolsutility:crafter1', [
        'PCP',
        'IFI',
        'PAP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'minecraft:crafting_table',
        I: 'mekanism:alloy_infused',
        F: 'rftoolsbase:machine_frame',
        A: '#forge:plates/steel'
    });
    
    // Screen - requires chemistry materials
    event.shaped('rftoolsutility:screen', [
        'PAP',
        'IGI',
        'PAP'
    ], {
        P: 'pneumaticcraft:plastic',
        A: 'mekanism:alloy_infused',
        I: '#forge:plates/steel',
        G: '#forge:glass'
    });
    
    // Matter Transmitter - requires advanced chemistry
    event.shaped('rftoolsutility:matter_transmitter', [
        'PEP',
        'IFI',
        'PAP'
    ], {
        P: 'pneumaticcraft:plastic',
        E: 'minecraft:ender_pearl',
        I: 'mekanism:alloy_infused',
        F: 'rftoolsbase:machine_frame',
        A: '#forge:plates/steel'
    });

    // === ALCHEMISTRY GATING ===
    // Require chemistry tier items for alchemical machines
    
    // Remove original Alchemistry machine recipes
    const alchemistryMachines = [
        'alchemistry:dissolver',
        'alchemistry:combiner',
        'alchemistry:atomizer',
        'alchemistry:liquifier',
        'alchemistry:evaporator',
        'alchemistry:fission_controller',
        'alchemistry:fusion_controller'
    ];
    
    alchemistryMachines.forEach(machine => {
        event.remove({ output: machine });
    });
    
    // Dissolver - requires chemistry components
    event.shaped('alchemistry:dissolver', [
        'IAI',
        'PFP',
        'ICI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        F: 'minecraft:furnace',
        C: 'mekanism:basic_chemical_tank'
    });
    
    // Combiner - requires chemistry materials
    event.shaped('alchemistry:combiner', [
        'IAI',
        'PCP',
        'IBI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        C: 'minecraft:crafting_table',
        B: 'mekanism:basic_chemical_tank'
    });
    
    // Atomizer - requires advanced chemistry
    event.shaped('alchemistry:atomizer', [
        'PAP',
        'IFI',
        'PCP'
    ], {
        P: 'pneumaticcraft:plastic',
        A: 'mekanism:alloy_infused',
        I: '#forge:plates/steel',
        F: 'minecraft:piston',
        C: 'mekanism:basic_chemical_tank'
    });
    
    // Liquifier - requires chemistry materials
    event.shaped('alchemistry:liquifier', [
        'IAI',
        'PFP',
        'ICI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        F: 'minecraft:bucket',
        C: 'mekanism:basic_chemical_tank'
    });
    
    // Evaporator - requires chemistry components
    event.shaped('alchemistry:evaporator', [
        'IAI',
        'PBP',
        'IFI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        B: 'minecraft:bucket',
        F: 'minecraft:furnace'
    });
    
    // Fission Controller - requires advanced chemistry
    event.shaped('alchemistry:fission_controller', [
        'AIA',
        'PCP',
        'AIA'
    ], {
        A: 'mekanism:alloy_infused',
        I: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        C: 'mekanism:basic_chemical_tank'
    });
    
    // Fusion Controller - requires advanced chemistry
    event.shaped('alchemistry:fusion_controller', [
        'AIA',
        'PDP',
        'AIA'
    ], {
        A: 'mekanism:alloy_infused',
        I: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        D: 'minecraft:diamond'
    });

    // === MODULAR ROUTERS GATING ===
    // Require chemistry components for modular routing
    
    // Remove original Modular Routers recipes
    const modularRoutersItems = [
        'modularrouters:modular_router',
        'modularrouters:blank_module',
        'modularrouters:blank_upgrade'
    ];
    
    modularRoutersItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Modular Router - requires chemistry materials
    event.shaped('modularrouters:modular_router', [
        'PAP',
        'ICI',
        'PRP'
    ], {
        P: 'pneumaticcraft:plastic',
        A: 'mekanism:alloy_infused',
        I: '#forge:plates/steel',
        C: 'minecraft:chest',
        R: 'minecraft:redstone'
    });
    
    // Blank Module - requires chemistry components
    event.shaped('modularrouters:blank_module', [
        'PIP',
        'IAI',
        'PIP'
    ], {
        P: 'pneumaticcraft:plastic',
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel'
    });
    
    // Blank Upgrade - requires chemistry materials
    event.shaped('modularrouters:blank_upgrade', [
        'IAI',
        'APA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic'
    });

    // === COMPACT MACHINES GATING ===
    // Require chemistry tier materials for compact machines
    
    // Remove original Compact Machines recipes
    const compactMachinesItems = [
        'compactmachines:wall',
        'compactmachines:machine_tiny',
        'compactmachines:machine_small',
        'compactmachines:machine_normal',
        'compactmachines:machine_large',
        'compactmachines:machine_giant',
        'compactmachines:machine_maximum',
        'compactmachines:solid_wall'
    ];
    
    compactMachinesItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Compact Machine Wall - requires chemistry materials (base component)
    event.shaped('compactmachines:wall', [
        'IAI',
        'APA',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic'
    });
    
    // Solid Wall - requires chemistry materials
    event.shaped('compactmachines:solid_wall', [
        'PAP',
        'AIA',
        'PAP'
    ], {
        P: 'pneumaticcraft:plastic',
        A: '#forge:plates/steel',
        I: 'mekanism:alloy_infused'
    });
    
    // Tiny Compact Machine - requires chemistry tier
    event.shaped('compactmachines:machine_tiny', [
        'WWW',
        'WPW',
        'WWW'
    ], {
        W: 'compactmachines:wall',
        P: 'pneumaticcraft:plastic'
    });
    
    // Small Compact Machine - requires chemistry tier
    event.shaped('compactmachines:machine_small', [
        'WWW',
        'WIW',
        'WWW'
    ], {
        W: 'compactmachines:wall',
        I: 'mekanism:alloy_infused'
    });
    
    // Normal Compact Machine - requires chemistry tier
    event.shaped('compactmachines:machine_normal', [
        'WWW',
        'WAW',
        'WWW'
    ], {
        W: 'compactmachines:wall',
        A: '#forge:plates/steel'
    });
    
    // Large Compact Machine - requires chemistry tier
    event.shaped('compactmachines:machine_large', [
        'WWW',
        'WDW',
        'WWW'
    ], {
        W: 'compactmachines:wall',
        D: 'minecraft:diamond'
    });
    
    // Giant Compact Machine - requires chemistry tier
    event.shaped('compactmachines:machine_giant', [
        'WWW',
        'WEW',
        'WWW'
    ], {
        W: 'compactmachines:wall',
        E: 'minecraft:emerald'
    });
    
    // Maximum Compact Machine - requires chemistry tier
    event.shaped('compactmachines:machine_maximum', [
        'WWW',
        'WNW',
        'WWW'
    ], {
        W: 'compactmachines:wall',
        N: 'minecraft:nether_star'
    });

    // === PNEUMATICCRAFT PROGRESSION ===
    // Ensure PNC unlocks at Tier 4 start (plastic requirement)
    // PneumaticCraft plastic is gated behind TFMG plastic sheets in its own recipes
    
    // Remove original PneumaticCraft plastic recipe
    event.remove({ output: 'pneumaticcraft:plastic' });
    
    // PneumaticCraft Plastic - requires TFMG plastic sheets (Tier 3)
    event.shapeless('pneumaticcraft:plastic', [
        'tfmg:plastic_sheet',
        'tfmg:plastic_sheet'
    ]);

    // === MEKANISM PROGRESSION ===
    // Ensure Mekanism unlocks at Tier 4 start
    // Mekanism machines require steel which is Tier 2
    // Infused Alloy requires steel and redstone (natural Tier 4 progression)
    // Keep Mekanism's original progression as it aligns with our tiers

    console.log('Tier 4 recipe changes complete!');
});
