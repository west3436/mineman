// priority: 94
// Unified Materials - Storage Blocks
// Unifies metal storage blocks across mods

ServerEvents.tags('item', event => {
    // ==================== STORAGE BLOCKS ====================

    // Lead Block -> forge:storage_blocks/lead (Primary: IE)
    event.add('forge:storage_blocks/lead', [
        'immersiveengineering:storage_lead',  // Primary
        'mekanism:block_lead',
        'cgs:lead_block'
    ]);

    // Silver Block -> forge:storage_blocks/silver (Primary: IE)
    event.add('forge:storage_blocks/silver', [
        'immersiveengineering:storage_silver'  // Primary
    ]);

    // Tin Block -> forge:storage_blocks/tin (Primary: Mekanism)
    event.add('forge:storage_blocks/tin', [
        'mekanism:block_tin'  // Primary
    ]);

    // Uranium Block -> forge:storage_blocks/uranium (Primary: IE)
    event.add('forge:storage_blocks/uranium', [
        'immersiveengineering:storage_uranium',  // Primary
        'mekanism:block_uranium'
    ]);

    // Nickel Block -> forge:storage_blocks/nickel (Primary: IE)
    event.add('forge:storage_blocks/nickel', [
        'immersiveengineering:storage_nickel'  // Primary
    ]);

    // Aluminum Block -> forge:storage_blocks/aluminum (Primary: IE)
    event.add('forge:storage_blocks/aluminum', [
        'immersiveengineering:storage_aluminum'  // Primary
    ]);

    // Steel Block -> forge:storage_blocks/steel (Primary: IE)
    event.add('forge:storage_blocks/steel', [
        'immersiveengineering:storage_steel',  // Primary
        'mekanism:block_steel',
        'cgs:steel_block',
        'industrialrenewal:block_steel'
    ]);

    // Bronze Block -> forge:storage_blocks/bronze (Primary: Mekanism)
    event.add('forge:storage_blocks/bronze', [
        'mekanism:block_bronze'  // Primary
    ]);

    // Constantan Block -> forge:storage_blocks/constantan (Primary: IE)
    event.add('forge:storage_blocks/constantan', [
        'immersiveengineering:storage_constantan'  // Primary
    ]);

    // Electrum Block -> forge:storage_blocks/electrum (Primary: IE)
    event.add('forge:storage_blocks/electrum', [
        'immersiveengineering:storage_electrum'  // Primary
    ]);

    // Osmium Block -> forge:storage_blocks/osmium (Primary: Mekanism)
    event.add('forge:storage_blocks/osmium', [
        'mekanism:block_osmium'  // Primary
    ]);

    console.log('[Unified Materials] Storage block tags added');
});

ServerEvents.recipes(event => {
    // Storage block recipe replacements
    
    // Lead blocks (Primary: IE)
    event.replaceOutput({}, 'mekanism:block_lead', 'immersiveengineering:storage_lead');
    event.replaceOutput({}, 'cgs:lead_block', 'immersiveengineering:storage_lead');
    
    // Uranium blocks (Primary: IE)
    event.replaceOutput({}, 'mekanism:block_uranium', 'immersiveengineering:storage_uranium');
    
    // Steel blocks (Primary: IE)
    event.replaceOutput({}, 'mekanism:block_steel', 'immersiveengineering:storage_steel');
    event.replaceOutput({}, 'cgs:steel_block', 'immersiveengineering:storage_steel');
    event.replaceOutput({}, 'industrialrenewal:block_steel', 'immersiveengineering:storage_steel');

    // Conversion recipes for storage blocks
    const blockConversions = [
        // Lead blocks -> IE Lead Block
        { inputs: ['mekanism:block_lead', 'cgs:lead_block'], output: 'immersiveengineering:storage_lead' },
        // Uranium blocks -> IE Uranium Block
        { inputs: ['mekanism:block_uranium'], output: 'immersiveengineering:storage_uranium' },
        // Steel blocks -> IE Steel Block
        { inputs: ['mekanism:block_steel', 'cgs:steel_block', 'industrialrenewal:block_steel'], output: 'immersiveengineering:storage_steel' },
    ];

    blockConversions.forEach(conv => {
        conv.inputs.forEach(input => {
            if (input !== conv.output) {
                const name = input.replace(':', '_').replace(/\//g, '_');
                event.shapeless(conv.output, [input])
                    .id(`kubejs:unified/block_${name}`);
            }
        });
    });

    // Ensure storage blocks can be unpacked to the unified ingot
    // Lead Block -> 9 IE Lead Ingots
    event.shapeless(Item.of('immersiveengineering:ingot_lead', 9), ['#forge:storage_blocks/lead'])
        .id('kubejs:unified/lead_ingots_from_block');
    
    // Steel Block -> 9 IE Steel Ingots
    event.shapeless(Item.of('immersiveengineering:ingot_steel', 9), ['#forge:storage_blocks/steel'])
        .id('kubejs:unified/steel_ingots_from_block');
    
    // Uranium Block -> 9 IE Uranium Ingots
    event.shapeless(Item.of('immersiveengineering:ingot_uranium', 9), ['#forge:storage_blocks/uranium'])
        .id('kubejs:unified/uranium_ingots_from_block');

    console.log('[Unified Materials] Storage block recipe unification complete');
});

JEIEvents.hideItems(event => {
    // Hide duplicate storage blocks
    const hiddenBlocks = [
        // Lead blocks (non-IE)
        'mekanism:block_lead',
        'cgs:lead_block',
        // Uranium blocks (non-IE)
        'mekanism:block_uranium',
        // Steel blocks (non-IE)
        'mekanism:block_steel',
        'cgs:steel_block',
        'industrialrenewal:block_steel',
    ];

    hiddenBlocks.forEach(item => {
        try {
            event.hide(item);
        } catch (e) {
            // Item might not exist
        }
    });

    console.log('[Unified Materials] Hidden duplicate storage blocks from JEI');
});
