// priority: 95
// Unified Materials - Wires and Gears
// Unifies wire and gear items across mods

ServerEvents.tags('item', event => {
    // ==================== WIRES ====================

    // Aluminum Wire -> forge:wires/aluminum (Primary: IE)
    event.add('forge:wires/aluminum', [
        'immersiveengineering:wire_aluminum',  // Primary
        'tfmg:aluminum_wire'
    ]);

    // Copper Wire -> forge:wires/copper (Primary: IE)
    event.add('forge:wires/copper', [
        'immersiveengineering:wire_copper',  // Primary
        'tfmg:copper_wire'
    ]);

    // Constantan Wire -> forge:wires/constantan (Primary: TFMG, IE doesn't have)
    event.add('forge:wires/constantan', [
        'tfmg:constantan_wire'  // Primary (IE doesn't have constantan wire)
    ]);

    // Lead Wire -> forge:wires/lead (Primary: IE)
    event.add('forge:wires/lead', [
        'immersiveengineering:wire_lead'  // Primary
    ]);

    // Steel Wire -> forge:wires/steel (Primary: IE)
    event.add('forge:wires/steel', [
        'immersiveengineering:wire_steel'  // Primary
    ]);

    // Electrum Wire -> forge:wires/electrum (Primary: IE)
    event.add('forge:wires/electrum', [
        'immersiveengineering:wire_electrum'  // Primary
    ]);

    // ==================== GEARS ====================

    // Bronze Gear -> forge:gears/bronze (Primary: Forestry - no higher priority has it)
    event.add('forge:gears/bronze', [
        'forestry:gear_bronze'  // Primary
    ]);

    // Copper Gear -> forge:gears/copper (Primary: Forestry)
    event.add('forge:gears/copper', [
        'forestry:gear_copper'  // Primary
    ]);

    // Tin Gear -> forge:gears/tin (Primary: Forestry)
    event.add('forge:gears/tin', [
        'forestry:gear_tin'  // Primary
    ]);

    // Iron Gear -> forge:gears/iron (Primary: Industrial Foregoing)
    event.add('forge:gears/iron', [
        'industrialforegoing:iron_gear'  // Primary
    ]);

    // Gold Gear -> forge:gears/gold (Primary: Industrial Foregoing)
    event.add('forge:gears/gold', [
        'industrialforegoing:gold_gear'  // Primary
    ]);

    // Diamond Gear -> forge:gears/diamond (Primary: Industrial Foregoing)
    event.add('forge:gears/diamond', [
        'industrialforegoing:diamond_gear'  // Primary
    ]);

    console.log('[Unified Materials] Wire and gear tags added');
});

ServerEvents.recipes(event => {
    // Wire replacements
    event.replaceOutput({}, 'tfmg:aluminum_wire', 'immersiveengineering:wire_aluminum');
    event.replaceOutput({}, 'tfmg:copper_wire', 'immersiveengineering:wire_copper');
    // Note: tfmg:constantan_wire is kept as primary since IE doesn't have it

    // Add wire conversion recipes
    event.shapeless('immersiveengineering:wire_aluminum', ['tfmg:aluminum_wire'])
        .id('kubejs:unified/aluminum_wire_conversion');
    event.shapeless('immersiveengineering:wire_copper', ['tfmg:copper_wire'])
        .id('kubejs:unified/copper_wire_conversion');

    console.log('[Unified Materials] Wire recipe unification complete');
});

JEIEvents.hideItems(event => {
    // Hide duplicate wires
    const hiddenWires = [
        'tfmg:aluminum_wire',
        'tfmg:copper_wire',
    ];

    hiddenWires.forEach(item => {
        try {
            event.hide(item);
        } catch (e) {
            // Item might not exist
        }
    });

    console.log('[Unified Materials] Hidden duplicate wires from JEI');
});
