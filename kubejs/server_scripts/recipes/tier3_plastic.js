// kubejs/server_scripts/recipes/tier3_plastic.js
// Tier 3: Oil & Plastic - Recipe modifications and gating

ServerEvents.recipes(event => {
    console.log('Applying Tier 3 (Oil & Plastic) recipe changes...');

    // === BUILDING GADGETS GATING ===
    // Require plastic for Building Gadgets
    
    // Remove original Building Gadgets recipes
    const buildingGadgets = [
        'buildinggadgets2:gadget_building',
        'buildinggadgets2:gadget_exchanging',
        'buildinggadgets2:gadget_copy_paste',
        'buildinggadgets2:gadget_cut_paste',
        'buildinggadgets2:gadget_destruction'
    ];
    
    buildingGadgets.forEach(gadget => {
        event.remove({ output: gadget });
    });
    
    // Building Gadget - requires plastic sheets
    event.shaped('buildinggadgets2:gadget_building', [
        'PDP',
        'RLR',
        ' R '
    ], {
        P: 'tfmg:plastic_sheet',
        D: 'minecraft:diamond',
        R: 'minecraft:redstone',
        L: 'minecraft:lapis_lazuli'
    });
    
    // Exchanging Gadget - requires plastic sheets
    event.shaped('buildinggadgets2:gadget_exchanging', [
        'PDP',
        'RLR',
        ' E '
    ], {
        P: 'tfmg:plastic_sheet',
        D: 'minecraft:diamond',
        R: 'minecraft:redstone',
        L: 'minecraft:lapis_lazuli',
        E: 'minecraft:ender_pearl'
    });
    
    // Copy-Paste Gadget - requires plastic sheets
    event.shaped('buildinggadgets2:gadget_copy_paste', [
        'PEP',
        'RMR',
        ' R '
    ], {
        P: 'tfmg:plastic_sheet',
        E: 'minecraft:emerald',
        R: 'minecraft:redstone',
        M: 'minecraft:redstone_torch'
    });
    
    // Cut-Paste Gadget - requires plastic sheets
    event.shaped('buildinggadgets2:gadget_cut_paste', [
        'PEP',
        'RMR',
        ' E '
    ], {
        P: 'tfmg:plastic_sheet',
        E: 'minecraft:emerald',
        R: 'minecraft:redstone',
        M: 'minecraft:ender_pearl'
    });
    
    // Destruction Gadget - requires plastic sheets
    event.shaped('buildinggadgets2:gadget_destruction', [
        'PDP',
        'EAE',
        ' E '
    ], {
        P: 'tfmg:plastic_sheet',
        D: 'minecraft:diamond',
        E: 'minecraft:ender_pearl',
        A: 'minecraft:diamond_pickaxe'
    });

    // === SOPHISTICATED STORAGE GATING ===
    // Require plastic sheets for advanced storage
    
    // Remove original Sophisticated Storage core recipes
    event.remove({ output: 'sophisticatedstorage:barrel' });
    event.remove({ output: 'sophisticatedstorage:chest' });
    event.remove({ output: 'sophisticatedstorage:limited_barrel_1' });
    event.remove({ output: 'sophisticatedstorage:limited_barrel_2' });
    event.remove({ output: 'sophisticatedstorage:limited_barrel_3' });
    event.remove({ output: 'sophisticatedstorage:limited_barrel_4' });
    event.remove({ output: 'sophisticatedstorage:shulker_box' });
    
    // Basic Barrel - requires plastic sheets
    event.shaped('sophisticatedstorage:barrel', [
        'PSP',
        'P P',
        'PSP'
    ], {
        P: 'tfmg:plastic_sheet',
        S: '#forge:rods/wooden'
    });
    
    // Basic Chest - requires plastic sheets
    event.shaped('sophisticatedstorage:chest', [
        'PSP',
        'PCP',
        'PSP'
    ], {
        P: 'tfmg:plastic_sheet',
        S: '#forge:rods/wooden',
        C: '#forge:chests/wooden'
    });
    
    // Limited Barrels - require plastic sheets
    event.shaped('sophisticatedstorage:limited_barrel_1', [
        'PSP',
        'PWP',
        'PSP'
    ], {
        P: 'tfmg:plastic_sheet',
        S: '#forge:rods/wooden',
        W: '#minecraft:planks'
    });
    
    event.shaped('sophisticatedstorage:limited_barrel_2', [
        ' P ',
        'PBP',
        ' P '
    ], {
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedstorage:limited_barrel_1'
    });
    
    event.shaped('sophisticatedstorage:limited_barrel_3', [
        ' P ',
        'PBP',
        ' P '
    ], {
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedstorage:limited_barrel_2'
    });
    
    event.shaped('sophisticatedstorage:limited_barrel_4', [
        ' P ',
        'PBP',
        ' P '
    ], {
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedstorage:limited_barrel_3'
    });
    
    // Shulker Box - requires plastic sheets and shulker shells
    event.shaped('sophisticatedstorage:shulker_box', [
        'SPS',
        'PCP',
        'SPS'
    ], {
        S: 'minecraft:shulker_shell',
        P: 'tfmg:plastic_sheet',
        C: '#forge:chests/wooden'
    });

    // === SOPHISTICATED BACKPACKS GATING ===
    // Require plastic sheets for backpacks
    
    // Remove original Sophisticated Backpacks recipes
    event.remove({ output: 'sophisticatedbackpacks:backpack' });
    event.remove({ output: 'sophisticatedbackpacks:iron_backpack' });
    event.remove({ output: 'sophisticatedbackpacks:gold_backpack' });
    event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' });
    event.remove({ output: 'sophisticatedbackpacks:netherite_backpack' });
    
    // Basic Backpack - requires plastic sheets
    event.shaped('sophisticatedbackpacks:backpack', [
        'SPS',
        'LCL',
        'SPS'
    ], {
        S: 'minecraft:string',
        P: 'tfmg:plastic_sheet',
        L: 'minecraft:leather',
        C: '#forge:chests/wooden'
    });
    
    // Iron Backpack - requires plastic sheets
    event.shaped('sophisticatedbackpacks:iron_backpack', [
        'IPI',
        'IBI',
        'IPI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedbackpacks:backpack'
    });
    
    // Gold Backpack - requires plastic sheets
    event.shaped('sophisticatedbackpacks:gold_backpack', [
        'GPG',
        'GBG',
        'GPG'
    ], {
        G: 'minecraft:gold_ingot',
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedbackpacks:iron_backpack'
    });
    
    // Diamond Backpack - requires plastic sheets
    event.shaped('sophisticatedbackpacks:diamond_backpack', [
        'DPD',
        'DBD',
        'DPD'
    ], {
        D: 'minecraft:diamond',
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedbackpacks:gold_backpack'
    });
    
    // Netherite Backpack - requires plastic sheets
    event.shaped('sophisticatedbackpacks:netherite_backpack', [
        'NPN',
        'NBN',
        'NPN'
    ], {
        N: 'minecraft:netherite_ingot',
        P: 'tfmg:plastic_sheet',
        B: 'sophisticatedbackpacks:diamond_backpack'
    });

    // === CREATE ORE EXCAVATION GATING ===
    // Require plastic/advanced materials
    
    // Remove original Create Ore Excavation recipes
    event.remove({ output: 'createoreexcavation:drilling_machine' });
    event.remove({ output: 'createoreexcavation:extractor' });
    event.remove({ output: 'createoreexcavation:vein_finder' });
    
    // Drilling Machine - requires plastic sheets and steel
    event.shaped('createoreexcavation:drilling_machine', [
        'SPS',
        'DCD',
        'SES'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        D: 'create:mechanical_drill',
        C: 'create:brass_casing',
        E: 'create:mechanical_piston'
    });
    
    // Extractor - requires plastic sheets and steel
    event.shaped('createoreexcavation:extractor', [
        'SPS',
        'ECE',
        'SPS'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        E: 'create:encased_fan',
        C: 'create:brass_casing'
    });
    
    // Vein Finder - requires plastic and advanced components
    event.shaped('createoreexcavation:vein_finder', [
        'PCP',
        'RDR',
        'PGP'
    ], {
        P: 'tfmg:plastic_sheet',
        C: 'minecraft:compass',
        R: 'minecraft:redstone',
        D: 'minecraft:diamond',
        G: 'minecraft:glowstone_dust'
    });

    // === INDUSTRIAL RENEWAL GATING ===
    // Require oil/plastic infrastructure
    
    // Remove original Industrial Renewal machine recipes
    event.remove({ output: 'industrialrenewal:electric_pump' });
    event.remove({ output: 'industrialrenewal:fluid_pump' });
    event.remove({ output: 'industrialrenewal:solar_panel' });
    event.remove({ output: 'industrialrenewal:battery' });
    event.remove({ output: 'industrialrenewal:battery_bank' });
    event.remove({ output: 'industrialrenewal:electric_gate' });
    
    // Electric Pump - requires plastic and steel
    event.shaped('industrialrenewal:electric_pump', [
        'SPS',
        'PMP',
        'SCS'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        M: 'minecraft:piston',
        C: 'minecraft:redstone'
    });
    
    // Fluid Pump - requires plastic and steel
    event.shaped('industrialrenewal:fluid_pump', [
        'SPS',
        'BMB',
        'SCS'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        B: 'minecraft:iron_bars',
        M: 'minecraft:piston',
        C: 'minecraft:bucket'
    });
    
    // Solar Panel - requires plastic sheets
    event.shaped('industrialrenewal:solar_panel', [
        'GPG',
        'PLP',
        'SRS'
    ], {
        G: '#forge:glass',
        P: 'tfmg:plastic_sheet',
        L: 'minecraft:lapis_lazuli',
        S: '#forge:plates/steel',
        R: 'minecraft:redstone'
    });
    
    // Battery - requires plastic housing
    event.shaped('industrialrenewal:battery', [
        'PCP',
        'RLR',
        'PIP'
    ], {
        P: 'tfmg:plastic_sheet',
        C: 'minecraft:copper_ingot',
        R: 'minecraft:redstone',
        L: 'minecraft:lapis_lazuli',
        I: 'minecraft:iron_ingot'
    });
    
    // Battery Bank - requires plastic and batteries
    event.shaped('industrialrenewal:battery_bank', [
        'SPS',
        'BBB',
        'SCS'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        B: 'industrialrenewal:battery',
        C: 'minecraft:redstone_block'
    });
    
    // Electric Gate - requires plastic and steel
    event.shaped('industrialrenewal:electric_gate', [
        'SPS',
        'RFR',
        'SPS'
    ], {
        S: '#forge:plates/steel',
        P: 'tfmg:plastic_sheet',
        R: 'minecraft:redstone',
        F: 'minecraft:oak_fence_gate'
    });

    console.log('Tier 3 recipe changes complete!');
});
