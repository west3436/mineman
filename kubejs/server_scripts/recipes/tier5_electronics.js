// kubejs/server_scripts/recipes/tier5_electronics.js
// Tier 5: Electronics - Recipe modifications and gating

ServerEvents.recipes(event => {
    console.log('Applying Tier 5 (Electronics) recipe changes...');

    // === INDUSTRIAL FOREGOING GATING ===
    // Require advanced circuits/PCBs from PneumaticCraft
    
    // Remove original Industrial Foregoing machine frame recipes
    event.remove({ output: 'industrialforegoing:machine_frame_pity' });
    event.remove({ output: 'industrialforegoing:machine_frame_simple' });
    event.remove({ output: 'industrialforegoing:machine_frame_advanced' });
    event.remove({ output: 'industrialforegoing:machine_frame_supreme' });
    
    // Pity Machine Frame - requires PCB and chemistry components
    event.shaped('industrialforegoing:machine_frame_pity', [
        'IAI',
        'PCP',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic',
        C: 'pneumaticcraft:printed_circuit_board'
    });
    
    // Simple Machine Frame - requires Pity frame and PCB
    event.shaped('industrialforegoing:machine_frame_simple', [
        'PCP',
        'AFA',
        'PCP'
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:plastic',
        A: 'mekanism:alloy_infused',
        F: 'industrialforegoing:machine_frame_pity'
    });
    
    // Advanced Machine Frame - requires Simple frame and advanced components
    event.shaped('industrialforegoing:machine_frame_advanced', [
        'DPD',
        'CFC',
        'DPD'
    ], {
        D: 'minecraft:diamond',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:plastic',
        F: 'industrialforegoing:machine_frame_simple'
    });
    
    // Supreme Machine Frame - requires Advanced frame and supreme components
    event.shaped('industrialforegoing:machine_frame_supreme', [
        'EPE',
        'NFN',
        'EPE'
    ], {
        E: 'minecraft:emerald',
        P: 'pneumaticcraft:printed_circuit_board',
        N: 'minecraft:netherite_ingot',
        F: 'industrialforegoing:machine_frame_advanced'
    });

    // === COMPUTERCRAFT PROGRESSION ===
    // Computers and turtles require PCBs
    
    // Remove original ComputerCraft recipes
    const computerCraftItems = [
        'computercraft:computer_normal',
        'computercraft:computer_advanced',
        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced'
    ];
    
    computerCraftItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Normal Computer - requires PCB
    event.shaped('computercraft:computer_normal', [
        'IPI',
        'CGC',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:plastic',
        G: '#forge:glass_panes',
        R: 'minecraft:redstone'
    });
    
    // Advanced Computer - requires PCB and gold
    event.shaped('computercraft:computer_advanced', [
        'GPG',
        'CLC',
        'GRG'
    ], {
        G: 'minecraft:gold_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'pneumaticcraft:plastic',
        L: '#forge:glass_panes',
        R: 'minecraft:redstone'
    });
    
    // Normal Turtle - requires computer and PCB
    event.shaped('computercraft:turtle_normal', [
        'IPI',
        'ICI',
        'IAI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'computercraft:computer_normal',
        A: '#forge:chests/wooden'
    });
    
    // Advanced Turtle - requires advanced computer and PCB
    event.shaped('computercraft:turtle_advanced', [
        'GPG',
        'GCG',
        'GAG'
    ], {
        G: 'minecraft:gold_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'computercraft:computer_advanced',
        A: '#forge:chests/wooden'
    });
    
    // Normal Pocket Computer - requires computer and PCB
    event.shaped('computercraft:pocket_computer_normal', [
        'IPI',
        'ICI',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'computercraft:computer_normal',
        R: 'minecraft:redstone'
    });
    
    // Advanced Pocket Computer - requires advanced computer and PCB
    event.shaped('computercraft:pocket_computer_advanced', [
        'GPG',
        'GCG',
        'GRG'
    ], {
        G: 'minecraft:gold_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        C: 'computercraft:computer_advanced',
        R: 'minecraft:redstone'
    });

    // === ADVANCED PERIPHERALS GATING ===
    // Require circuit boards for advanced peripherals
    
    // Remove original Advanced Peripherals recipes
    const advancedPeripheralsItems = [
        'advancedperipherals:computer_tool',
        'advancedperipherals:environment_detector',
        'advancedperipherals:chat_box',
        'advancedperipherals:player_detector',
        'advancedperipherals:me_bridge',
        'advancedperipherals:rs_bridge',
        'advancedperipherals:energy_detector'
    ];
    
    advancedPeripheralsItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Computer Tool - requires PCB
    event.shaped('advancedperipherals:computer_tool', [
        'PIP',
        'ICI',
        'PIP'
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        I: 'minecraft:iron_ingot',
        C: 'pneumaticcraft:plastic'
    });
    
    // Environment Detector - requires PCB and sensors
    event.shaped('advancedperipherals:environment_detector', [
        'IPI',
        'ECE',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        E: 'minecraft:ender_eye',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });
    
    // Chat Box - requires PCB
    event.shaped('advancedperipherals:chat_box', [
        'IPI',
        'NCN',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        N: 'minecraft:note_block',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });
    
    // Player Detector - requires PCB
    event.shaped('advancedperipherals:player_detector', [
        'IPI',
        'ECE',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        E: 'minecraft:skeleton_skull',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });
    
    // ME Bridge - requires PCB and advanced materials
    event.shaped('advancedperipherals:me_bridge', [
        'DPD',
        'ECE',
        'DRD'
    ], {
        D: 'minecraft:diamond',
        P: 'pneumaticcraft:printed_circuit_board',
        E: 'minecraft:ender_pearl',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });
    
    // RS Bridge - requires PCB
    event.shaped('advancedperipherals:rs_bridge', [
        'IPI',
        'RCR',
        'IEI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        R: 'minecraft:redstone',
        C: 'pneumaticcraft:plastic',
        E: 'minecraft:ender_pearl'
    });
    
    // Energy Detector - requires PCB
    event.shaped('advancedperipherals:energy_detector', [
        'IPI',
        'RCR',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        R: 'minecraft:redstone_block',
        C: 'pneumaticcraft:plastic'
    });

    // === HOSTILE NEURAL NETWORKS GATING ===
    // Neural network machines require electronics/computing components
    
    // Remove original Hostile Neural Networks recipes
    const hostileNeuralNetworksItems = [
        'hostilenetworks:sim_chamber',
        'hostilenetworks:deep_learner',
        'hostilenetworks:loot_fabricator',
        'hostilenetworks:model_framework'
    ];
    
    hostileNeuralNetworksItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Simulation Chamber - requires PCB and advanced components
    event.shaped('hostilenetworks:sim_chamber', [
        'IPI',
        'RCR',
        'IMI'
    ], {
        I: 'minecraft:iron_block',
        P: 'pneumaticcraft:printed_circuit_board',
        R: 'minecraft:redstone_block',
        C: 'pneumaticcraft:plastic',
        M: 'mekanism:alloy_infused'
    });
    
    // Deep Learner - requires PCB
    event.shaped('hostilenetworks:deep_learner', [
        'IPI',
        'GCG',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        G: '#forge:glass_panes',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });
    
    // Loot Fabricator - requires PCB
    event.shaped('hostilenetworks:loot_fabricator', [
        'IPI',
        'DCD',
        'IMI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        D: 'minecraft:diamond',
        C: 'pneumaticcraft:plastic',
        M: 'mekanism:alloy_infused'
    });
    
    // Model Framework - requires PCB
    event.shaped('hostilenetworks:model_framework', [
        'IPI',
        'GCG',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        G: '#forge:glass_panes',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });

    // === MORE PERIPHERALS GATING ===
    // Require advanced electronics for More Peripherals
    
    // Remove original More Peripherals recipes
    const morePeripheralsItems = [
        'moreperipherals:configurator',
        'moreperipherals:compass_turtle',
        'moreperipherals:analyzer'
    ];
    
    morePeripheralsItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Configurator - requires PCB and advanced materials
    event.shaped('moreperipherals:configurator', [
        'GPG',
        'RCR',
        'GIG'
    ], {
        G: 'minecraft:gold_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        R: 'minecraft:redstone',
        C: 'pneumaticcraft:plastic',
        I: 'minecraft:iron_ingot'
    });
    
    // Compass Turtle - requires turtle and PCB
    event.shaped('moreperipherals:compass_turtle', [
        ' P ',
        'ICI',
        ' T '
    ], {
        P: 'pneumaticcraft:printed_circuit_board',
        I: 'minecraft:iron_ingot',
        C: 'minecraft:compass',
        T: 'computercraft:turtle_normal'
    });
    
    // Analyzer - requires PCB and advanced components
    event.shaped('moreperipherals:analyzer', [
        'IPI',
        'ECE',
        'IRI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'pneumaticcraft:printed_circuit_board',
        E: 'minecraft:ender_eye',
        C: 'pneumaticcraft:plastic',
        R: 'minecraft:redstone'
    });

    console.log('Tier 5 recipe changes complete!');
});
