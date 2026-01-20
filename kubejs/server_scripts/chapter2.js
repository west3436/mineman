// priority: 100
// Chapter 2 - Recipe Replacements
// Building Gadgets 2 iron -> plastic substitution
// Simply Jetpacks leather strap recipe

ServerEvents.recipes(event => {
    // ==================== BUILDING GADGETS 2: REPLACE IRON WITH PLASTIC ====================
    // Replace iron inputs with plastic for all buildinggadgets2 recipes
    
    const bg2Items = [
        'buildinggadgets2:gadget_building',
        'buildinggadgets2:gadget_copy_paste',
        'buildinggadgets2:gadget_cut_paste',
        'buildinggadgets2:gadget_destruction',
        'buildinggadgets2:gadget_exchanging',
        'buildinggadgets2:redprint',
        'buildinggadgets2:template',
        'buildinggadgets2:template_manager'
    ];

    // Replace iron ingots with plastic in all buildinggadgets2 recipes
    bg2Items.forEach(item => {
        event.replaceInput(
            { output: item },
            '#forge:ingots/iron',
            '#forge:plastic'
        );
    });

    // Also replace iron nuggets and iron blocks if used
    bg2Items.forEach(item => {
        event.replaceInput(
            { output: item },
            '#forge:nuggets/iron',
            '#forge:plastic'
        );
        event.replaceInput(
            { output: item },
            '#forge:storage_blocks/iron',
            '#forge:plastic'
        );
    });

    // ==================== SIMPLY JETPACKS: LEATHER STRAP ====================
    // Remove original recipe
    event.remove({ output: 'simplyjetpacks:leather_strap' });
    
    // New recipe:
    // leather plastic leather
    // leather plastic leather
    event.shaped('simplyjetpacks:leather_strap', [
        'LPL',
        'LPL'
    ], {
        L: 'minecraft:leather',
        P: '#forge:plastic'
    }).id('kubejs:chapter2/leather_strap');

    // ==================== IE REFINERY: NAPHTHA TO ETHYLENE ====================
    // Convert Naphtha to Ethylene in the IE Refinery
    event.custom({
        type: 'immersiveengineering:refinery',
        input0: {
            tag: 'forge:naphtha',
            amount: 100
        },
        input1: {
            tag: 'forge:naphtha',
            amount: 100
        },
        result: {
            fluid: 'tfmg:ethylene',
            amount: 200
        },
        energy: 80
    }).id('kubejs:chapter2/refinery_naphtha_to_ethylene');

    // ==================== IE REFINERY: ETHYLENE TO MOLTEN PLASTIC ====================
    // Convert Ethylene to Molten Plastic in the IE Refinery
    event.custom({
        type: 'immersiveengineering:refinery',
        input0: {
            tag: 'forge:ethylene',
            amount: 100
        },
        input1: {
            tag: 'forge:ethylene',
            amount: 100
        },
        result: {
            fluid: 'tfmg:molten_plastic',
            amount: 200
        },
        energy: 80
    }).id('kubejs:chapter2/refinery_ethylene_to_plastic');

    // ==================== PNEUMATICCRAFT: SMALL TANK ====================
    // Remove original recipe
    event.remove({ output: 'pneumaticcraft:small_tank' });
    
    // New recipe:
    // plastic iron_compressed plastic
    // iron_compressed glass iron_compressed
    // plastic iron_compressed plastic
    event.shaped('pneumaticcraft:small_tank', [
        'PIP',
        'IGI',
        'PIP'
    ], {
        P: '#forge:plastic',
        I: 'pneumaticcraft:ingot_iron_compressed',
        G: '#forge:glass'
    }).id('kubejs:chapter2/small_tank');

    // ==================== PNEUMATICCRAFT: PRESSURE TUBE ====================
    // Remove original recipe
    event.remove({ output: 'pneumaticcraft:pressure_tube' });
    
    // New recipe:
    // iron_compressed plastic iron_compressed
    event.shaped('pneumaticcraft:pressure_tube', [
        'IPI'
    ], {
        P: '#forge:plastic',
        I: 'pneumaticcraft:ingot_iron_compressed'
    }).id('kubejs:chapter2/pressure_tube');

    console.log('[Chapter 2] Recipe replacements complete');
});
