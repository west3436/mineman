// priority: 100
// Chapter 1 - Recipe Replacements
// Custom crafting recipes for tech progression

ServerEvents.recipes(event => {
    // ==================== FORESTRY: STURDY MACHINE ====================
    // Remove original recipe
    event.remove({ output: 'forestry:sturdy_machine' });
    
    // New recipe:
    // bronze steel bronze
    // steel       steel
    // bronze steel bronze
    event.shaped('forestry:sturdy_machine', [
        'BSB',
        'S S',
        'BSB'
    ], {
        B: '#forge:ingots/bronze',
        S: '#forge:ingots/steel'
    }).id('kubejs:chapter1/sturdy_machine');

    // ==================== IMMERSIVE AIRCRAFT: BOILER ====================
    // Remove original recipe
    event.remove({ output: 'immersive_aircraft:boiler' });
    
    // New recipe:
    // steel copper steel
    // copper      copper
    // copper furnace copper
    event.shaped('immersive_aircraft:boiler', [
        'SCS',
        'C C',
        'CFC'
    ], {
        S: '#forge:ingots/steel',
        C: '#forge:ingots/copper',
        F: 'minecraft:furnace'
    }).id('kubejs:chapter1/boiler');

    // ==================== IMMERSIVE AIRCRAFT: PROPELLER ====================
    // Remove original recipe
    event.remove({ output: 'immersive_aircraft:propeller' });
    
    // New recipe:
    // iron iron null
    // null steel null
    // null iron iron
    event.shaped('immersive_aircraft:propeller', [
        'II ',
        ' S ',
        ' II'
    ], {
        I: '#forge:ingots/iron',
        S: '#forge:ingots/steel'
    }).id('kubejs:chapter1/propeller');

    // ==================== INTEGRATED DYNAMICS: SQUEEZER ====================
    // Remove original recipe
    event.remove({ output: 'integrateddynamics:squeezer' });
    
    // New recipe:
    // stick iron_block stick
    // stick           stick
    // plank steel     plank
    event.shaped('integrateddynamics:squeezer', [
        'SIS',
        'S S',
        'PTP'
    ], {
        S: '#forge:rods/wooden',
        I: '#forge:storage_blocks/iron',
        P: '#minecraft:planks',
        T: '#forge:ingots/steel'
    }).id('kubejs:chapter1/squeezer');

    // ==================== MODULAR ROUTERS: MODULAR ROUTER ====================
    // Remove original recipe
    event.remove({ output: 'modularrouters:modular_router' });
    
    // New recipe:
    // steel iron_bars steel
    // iron_bars blank_module iron_bars
    // steel iron_bars steel
    event.shaped('modularrouters:modular_router', [
        'SBS',
        'BMB',
        'SBS'
    ], {
        S: '#forge:ingots/steel',
        B: 'minecraft:iron_bars',
        M: 'modularrouters:blank_module'
    }).id('kubejs:chapter1/modular_router');

    console.log('[Chapter 1] Recipe replacements complete');
});
