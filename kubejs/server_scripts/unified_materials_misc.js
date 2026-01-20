// priority: 93
// Unified Materials - Miscellaneous Items
// Unifies coal coke, sawdust, wheat flour, dough, silicon, slag, charcoal, plastic, iron sticks, and other duplicated items
// Priority: Create > IE > Mekanism > TFMG > Others

// ==================== COAL COKE ====================
// Primary: immersiveengineering:coal_coke
// Duplicates: tfmg:coal_coke, electrodynamics:coalcoke

// ==================== COAL COKE DUST ====================
// Primary: immersiveengineering:dust_coke
// Duplicates: tfmg:coal_coke_dust

// ==================== COKE BLOCK ====================
// Primary: immersiveengineering:coke
// Duplicates: tfmg:coal_coke_block

// ==================== SAWDUST ====================
// Primary: immersiveengineering:sawdust
// Duplicates: mekanism:sawdust

// ==================== WHEAT FLOUR ====================
// Primary: create:wheat_flour
// Duplicates: pneumaticcraft:wheat_flour

// ==================== DOUGH ====================
// Primary: create:dough
// Duplicates: farmersdelight:wheat_dough

// ==================== SLAG ====================
// Primary: immersiveengineering:slag
// Duplicates: electrodynamics:slag

// ==================== CHARCOAL DUST ====================
// Primary: mekanism:dust_charcoal (Mekanism has good charcoal processing)
// Duplicates: cgs:charcoal_dust

// ==================== CHARCOAL BLOCK ====================
// Primary: mekanism:block_charcoal
// No duplicates found

// ==================== SILICON ====================
// Primary: ae2:silicon (AE2 has the primary silicon processing)
// Duplicates: tfmg:silicon_ingot

// ==================== OBSIDIAN DUST ====================
// Primary: mekanism:dust_obsidian
// Duplicates: electrodynamics:dustobsidian

// ==================== NETHERITE DUST ====================
// Primary: mekanism:dust_netherite
// Duplicates: electrodynamics:dustnetherite

// ==================== IRON STICKS/RODS ====================
// Primary: immersiveengineering:stick_iron
// Duplicates: industrialrenewal:stick_iron

// ==================== STEEL STICKS/RODS ====================
// Primary: immersiveengineering:stick_steel
// Duplicates: industrialrenewal:stick_steel

// ==================== PLASTIC (sheet/ingot form) ====================
// Primary: tfmg:plastic_sheet (TFMG has comprehensive plastic processing)
// Similar items: industrialforegoing:plastic, pneumaticcraft:plastic

// ==================== FERTILIZER ====================
// Primary: immersiveengineering:fertilizer
// Duplicates: industrialforegoing:fertilizer (different recipe, keep both)

// ==================== BITUMEN ====================
// Primary: immersivepetroleum:bitumen (only source)

// ==================== WOOD PULP ====================
// Primary: create:pulp
// Duplicates: forestry:wood_pulp

ServerEvents.tags('item', event => {
    // Coal Coke tag
    event.add('forge:coal_coke', [
        'immersiveengineering:coal_coke',
        'tfmg:coal_coke',
        'electrodynamics:coalcoke'
    ]);

    // Coal Coke Dust tag
    event.add('forge:dusts/coal_coke', [
        'immersiveengineering:dust_coke',
        'tfmg:coal_coke_dust'
    ]);

    // Coke Block tag
    event.add('forge:storage_blocks/coal_coke', [
        'immersiveengineering:coke',
        'tfmg:coal_coke_block'
    ]);

    // Sawdust tag
    event.add('forge:sawdust', [
        'immersiveengineering:sawdust',
        'mekanism:sawdust'
    ]);

    // Wheat Flour tag
    event.add('forge:flour/wheat', [
        'create:wheat_flour',
        'pneumaticcraft:wheat_flour'
    ]);
    event.add('forge:flour', [
        'create:wheat_flour',
        'pneumaticcraft:wheat_flour'
    ]);

    // Dough tag
    event.add('forge:dough/wheat', [
        'create:dough',
        'farmersdelight:wheat_dough'
    ]);
    event.add('forge:dough', [
        'create:dough',
        'farmersdelight:wheat_dough'
    ]);

    // Slag tag
    event.add('forge:slag', [
        'immersiveengineering:slag',
        'electrodynamics:slag'
    ]);

    // Charcoal Dust tag
    event.add('forge:dusts/charcoal', [
        'mekanism:dust_charcoal',
        'cgs:charcoal_dust'
    ]);

    // Coal Dust tag
    event.add('forge:dusts/coal', [
        'mekanism:dust_coal'
    ]);

    // Silicon tag
    event.add('forge:silicon', [
        'ae2:silicon',
        'tfmg:silicon_ingot'
    ]);

    // Obsidian Dust tag
    event.add('forge:dusts/obsidian', [
        'mekanism:dust_obsidian',
        'electrodynamics:dustobsidian'
    ]);

    // Netherite Dust tag
    event.add('forge:dusts/netherite', [
        'mekanism:dust_netherite',
        'electrodynamics:dustnetherite'
    ]);

    // Iron Rod/Stick tag
    event.add('forge:rods/iron', [
        'immersiveengineering:stick_iron',
        'industrialrenewal:stick_iron'
    ]);

    // Steel Rod/Stick tag
    event.add('forge:rods/steel', [
        'immersiveengineering:stick_steel',
        'industrialrenewal:stick_steel'
    ]);

    // All metal rods
    event.add('forge:rods/all_metal', [
        'immersiveengineering:stick_iron',
        'immersiveengineering:stick_steel',
        'immersiveengineering:stick_aluminum',
        'industrialrenewal:stick_iron',
        'industrialrenewal:stick_steel'
    ]);

    // Plastic sheets/items tag
    event.add('forge:plastic', [
        'tfmg:plastic_sheet',
        'industrialforegoing:plastic',
        'pneumaticcraft:plastic'
    ]);

    // Wood Pulp tag
    event.add('forge:pulp/wood', [
        'create:pulp',
        'forestry:wood_pulp'
    ]);

    // Bitumen tag
    event.add('forge:bitumen', [
        'immersivepetroleum:bitumen'
    ]);

    // Petcoke tags (petroleum coke from IP)
    event.add('forge:petcoke', [
        'immersivepetroleum:petcoke'
    ]);
    event.add('forge:dusts/petcoke', [
        'immersivepetroleum:petcoke_dust'
    ]);
    event.add('forge:storage_blocks/petcoke', [
        'immersivepetroleum:petcoke_block'
    ]);

    // Graphite Electrode tag
    event.add('forge:graphite_electrodes', [
        'immersiveengineering:graphite_electrode',
        'tfmg:graphite_electrode'
    ]);

    // Cinder Flour tag
    event.add('forge:cinder_flour', [
        'create:cinder_flour'
    ]);

    console.log('[Unified Materials] Miscellaneous item tags added');
});

ServerEvents.recipes(event => {
    // ==================== RECIPE OUTPUT REPLACEMENTS ====================
    
    const MISC_REPLACEMENTS = {
        // Coal Coke -> IE
        'tfmg:coal_coke': 'immersiveengineering:coal_coke',
        'electrodynamics:coalcoke': 'immersiveengineering:coal_coke',
        
        // Coke Dust -> IE
        'tfmg:coal_coke_dust': 'immersiveengineering:dust_coke',
        
        // Coke Block -> IE
        'tfmg:coal_coke_block': 'immersiveengineering:coke',
        
        // Sawdust -> IE
        'mekanism:sawdust': 'immersiveengineering:sawdust',
        
        // Wheat Flour -> Create
        'pneumaticcraft:wheat_flour': 'create:wheat_flour',
        
        // Dough -> Create
        'farmersdelight:wheat_dough': 'create:dough',
        
        // Slag -> IE
        'electrodynamics:slag': 'immersiveengineering:slag',
        
        // Charcoal Dust -> Mekanism
        'cgs:charcoal_dust': 'mekanism:dust_charcoal',
        
        // Silicon -> AE2
        'tfmg:silicon_ingot': 'ae2:silicon',
        
        // Obsidian Dust -> Mekanism
        'electrodynamics:dustobsidian': 'mekanism:dust_obsidian',
        
        // Netherite Dust -> Mekanism
        'electrodynamics:dustnetherite': 'mekanism:dust_netherite',
        
        // Iron Sticks -> IE
        'industrialrenewal:stick_iron': 'immersiveengineering:stick_iron',
        
        // Steel Sticks -> IE
        'industrialrenewal:stick_steel': 'immersiveengineering:stick_steel',
        
        // Wood Pulp -> Create
        'forestry:wood_pulp': 'create:pulp',

        // Graphite Electrode -> IE
        'tfmg:graphite_electrode': 'immersiveengineering:graphite_electrode',
    };

    // Apply replacements
    Object.entries(MISC_REPLACEMENTS).forEach(([from, to]) => {
        event.replaceInput({}, from, to);
        event.replaceOutput({}, from, to);
    });

    // ==================== CONVERSION RECIPES ====================
    
    // Coal Coke conversions
    event.shapeless('immersiveengineering:coal_coke', ['tfmg:coal_coke'])
        .id('kubejs:unified/coal_coke_from_tfmg');
    event.shapeless('immersiveengineering:coal_coke', ['electrodynamics:coalcoke'])
        .id('kubejs:unified/coal_coke_from_electrodynamics');
    
    // Coke Dust conversions
    event.shapeless('immersiveengineering:dust_coke', ['tfmg:coal_coke_dust'])
        .id('kubejs:unified/coke_dust_from_tfmg');
    
    // Coke Block conversions
    event.shapeless('immersiveengineering:coke', ['tfmg:coal_coke_block'])
        .id('kubejs:unified/coke_block_from_tfmg');
    
    // Sawdust conversions
    event.shapeless('immersiveengineering:sawdust', ['mekanism:sawdust'])
        .id('kubejs:unified/sawdust_from_mekanism');
    
    // Wheat Flour conversions
    event.shapeless('create:wheat_flour', ['pneumaticcraft:wheat_flour'])
        .id('kubejs:unified/wheat_flour_from_pneumaticcraft');
    
    // Dough conversions
    event.shapeless('create:dough', ['farmersdelight:wheat_dough'])
        .id('kubejs:unified/dough_from_farmersdelight');
    
    // Slag conversions
    event.shapeless('immersiveengineering:slag', ['electrodynamics:slag'])
        .id('kubejs:unified/slag_from_electrodynamics');
    
    // Charcoal Dust conversions
    event.shapeless('mekanism:dust_charcoal', ['cgs:charcoal_dust'])
        .id('kubejs:unified/charcoal_dust_from_cgs');
    
    // Silicon conversions
    event.shapeless('ae2:silicon', ['tfmg:silicon_ingot'])
        .id('kubejs:unified/silicon_from_tfmg');
    
    // Obsidian Dust conversions
    event.shapeless('mekanism:dust_obsidian', ['electrodynamics:dustobsidian'])
        .id('kubejs:unified/obsidian_dust_from_electrodynamics');
    
    // Netherite Dust conversions
    event.shapeless('mekanism:dust_netherite', ['electrodynamics:dustnetherite'])
        .id('kubejs:unified/netherite_dust_from_electrodynamics');
    
    // Iron Stick conversions
    event.shapeless('immersiveengineering:stick_iron', ['industrialrenewal:stick_iron'])
        .id('kubejs:unified/iron_stick_from_industrialrenewal');
    
    // Steel Stick conversions
    event.shapeless('immersiveengineering:stick_steel', ['industrialrenewal:stick_steel'])
        .id('kubejs:unified/steel_stick_from_industrialrenewal');
    
    // Wood Pulp conversions
    event.shapeless('create:pulp', ['forestry:wood_pulp'])
        .id('kubejs:unified/pulp_from_forestry');

    // Graphite Electrode conversions
    event.shapeless('immersiveengineering:graphite_electrode', ['tfmg:graphite_electrode'])
        .id('kubejs:unified/graphite_electrode_from_tfmg');

    // ==================== COKE BLOCK PACKING/UNPACKING ====================
    
    // 9 Coal Coke -> Coke Block
    event.shaped('immersiveengineering:coke', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: '#forge:coal_coke'
    }).id('kubejs:unified/coke_block_from_coke');

    // Coke Block -> 9 Coal Coke
    event.shapeless(Item.of('immersiveengineering:coal_coke', 9), ['#forge:storage_blocks/coal_coke'])
        .id('kubejs:unified/coke_from_coke_block');

    // ==================== SMELTING RECIPES FOR DUPLICATES ====================
    
    // Non-IE coal coke production still gives IE coke
    // (IE coke oven recipes handle the primary production)

    console.log('[Unified Materials] Miscellaneous item recipe unification complete');
});
