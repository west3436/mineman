// kubejs/server_scripts/recipes/tier5_electronics.js
// Tier 5: Electronics - Recipe modifications and gating

ServerEvents.recipes(event => {
    console.log('Applying Tier 5 (Electronics) recipe changes...');

    // === CIRCUIT FABRICATION MULTIBLOCK ===
    // Custom multiblock recipes for advanced circuit production
    
    // Advanced Circuit Recipe - requires PNC PCBs and Mekanism alloys
    // Produced in Circuit Fabrication Multiblock (Multiblocked2)
    event.recipes.multiblocked.multiblock('circuit_fabrication')
        .inputItems([
            '4x pneumaticcraft:printed_circuit_board',
            '8x mekanism:alloy_infused',
            '4x mekanism:alloy_reinforced',
            '2x minecraft:redstone_block'
        ])
        .outputItems('2x mineman:advanced_circuit')
        .inputFE(50000)
        .duration(400); // 20 seconds

    // Alternative recipe with more PCBs, less alloys
    event.recipes.multiblocked.multiblock('circuit_fabrication')
        .inputItems([
            '6x pneumaticcraft:printed_circuit_board',
            '4x mekanism:alloy_infused',
            '2x mekanism:alloy_reinforced',
            '4x minecraft:redstone'
        ])
        .outputItems('2x mineman:advanced_circuit')
        .inputFE(40000)
        .duration(300); // 15 seconds

    // Cheaper early-game recipe with lower yield
    event.recipes.multiblocked.multiblock('circuit_fabrication')
        .inputItems([
            '2x pneumaticcraft:printed_circuit_board',
            '4x mekanism:alloy_infused',
            '8x tfmg:steel_sheet',
            '1x minecraft:diamond'
        ])
        .outputItems('1x mineman:advanced_circuit')
        .inputFE(30000)
        .duration(200); // 10 seconds

    // === INDUSTRIAL FOREGOING GATING ===
    // Require advanced circuits/PCBs from PneumaticCraft or Circuit Fabricator
    
    // Remove original Industrial Foregoing machine frame recipe
    event.remove({ output: 'industrialforegoing:machine_frame_pity' });
    
    // Machine Frame Pity - requires PCBs from PneumaticCraft
    event.shaped('industrialforegoing:machine_frame_pity', [
        'PCP',
        'IAI',
        'PCP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel'
    });

    // === COMPUTERCRAFT PROGRESSION ===
    // Computers should require chemistry tier components
    
    // Remove original ComputerCraft computer recipes
    const computerCraftItems = [
        'computercraft:computer_normal',
        'computercraft:computer_advanced',
        'computercraft:turtle_normal',
        'computercraft:turtle_advanced'
    ];
    
    computerCraftItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Computer Normal - requires chemistry materials
    event.shaped('computercraft:computer_normal', [
        'IAI',
        'IGI',
        'IRI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'pneumaticcraft:plastic',
        G: '#forge:glass',
        R: 'minecraft:redstone'
    });
    
    // Computer Advanced - requires PCBs
    event.shaped('computercraft:computer_advanced', [
        'ICI',
        'PGP',
        'IRI'
    ], {
        I: 'mekanism:alloy_infused',
        C: 'pneumaticcraft:printed_circuit_board',
        P: 'pneumaticcraft:plastic',
        G: 'minecraft:gold_ingot',
        R: 'minecraft:redstone'
    });
    
    // Turtle Normal - requires computer and chemistry materials
    event.shaped('computercraft:turtle_normal', [
        'IAI',
        'ICI',
        'IPI'
    ], {
        I: 'mekanism:alloy_infused',
        A: 'pneumaticcraft:plastic',
        C: 'computercraft:computer_normal',
        P: 'minecraft:piston'
    });
    
    // Turtle Advanced - requires advanced computer
    event.shaped('computercraft:turtle_advanced', [
        'ICI',
        'PGP',
        'IRI'
    ], {
        I: 'mekanism:alloy_infused',
        C: 'computercraft:computer_advanced',
        P: 'pneumaticcraft:plastic',
        G: 'minecraft:gold_ingot',
        R: 'minecraft:piston'
    });

    // === ADVANCED PERIPHERALS GATING ===
    // Advanced peripherals require electronics tier
    
    // Remove original Advanced Peripherals recipes
    const advancedPeripheralsItems = [
        'advancedperipherals:computer_tool',
        'advancedperipherals:chunk_controller',
        'advancedperipherals:energy_detector',
        'advancedperipherals:player_detector'
    ];
    
    advancedPeripheralsItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Computer Tool - requires PCBs
    event.shaped('advancedperipherals:computer_tool', [
        'ICI',
        'IAI',
        'IPI'
    ], {
        I: 'mekanism:alloy_infused',
        C: 'pneumaticcraft:printed_circuit_board',
        A: '#forge:plates/steel',
        P: 'pneumaticcraft:plastic'
    });
    
    // Chunk Controller - requires PCBs
    event.shaped('advancedperipherals:chunk_controller', [
        'PCP',
        'IAI',
        'PEP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        E: 'minecraft:ender_pearl'
    });
    
    // Energy Detector - requires chemistry materials
    event.shaped('advancedperipherals:energy_detector', [
        'IAI',
        'RCR',
        'IAI'
    ], {
        I: 'mekanism:alloy_infused',
        A: '#forge:plates/steel',
        R: 'minecraft:redstone',
        C: 'pneumaticcraft:printed_circuit_board'
    });
    
    // Player Detector - requires PCBs
    event.shaped('advancedperipherals:player_detector', [
        'PCP',
        'IAI',
        'PRP'
    ], {
        P: 'pneumaticcraft:plastic',
        C: 'pneumaticcraft:printed_circuit_board',
        I: 'mekanism:alloy_infused',
        A: 'minecraft:player_head',
        R: 'minecraft:redstone'
    });

    // === HOSTILE NEURAL NETWORKS GATING ===
    // Neural network machines require electronics/computing components
    
    // Remove original Hostile Neural Networks recipes
    const hostileNeuralNetworksItems = [
        'hostilenetworks:sim_chamber',
        'hostilenetworks:deep_learner',
        'hostilenetworks:loot_fabricator'
    ];
    
    hostileNeuralNetworksItems.forEach(item => {
        event.remove({ output: item });
    });
    
    // Simulation Chamber - requires PCBs and chemistry materials
    event.shaped('hostilenetworks:sim_chamber', [
        'ICI',
        'PAP',
        'IRI'
    ], {
        I: 'mekanism:alloy_infused',
        C: 'pneumaticcraft:printed_circuit_board',
        P: 'pneumaticcraft:plastic',
        A: '#forge:plates/steel',
        R: 'minecraft:redstone_block'
    });
    
    // Deep Learner - requires PCBs
    event.shaped('hostilenetworks:deep_learner', [
        'ICI',
        'PAP',
        'IEI'
    ], {
        I: 'mekanism:alloy_infused',
        C: 'pneumaticcraft:printed_circuit_board',
        P: 'pneumaticcraft:plastic',
        A: 'minecraft:diamond',
        E: 'minecraft:ender_pearl'
    });
    
    // Loot Fabricator - requires PCBs and chemistry materials
    event.shaped('hostilenetworks:loot_fabricator', [
        'ICI',
        'PAP',
        'IRI'
    ], {
        I: 'mekanism:alloy_infused',
        C: 'pneumaticcraft:printed_circuit_board',
        P: 'pneumaticcraft:plastic',
        A: 'minecraft:chest',
        R: 'minecraft:redstone_block'
    });

    console.log('Tier 5 recipe changes complete!');
});
