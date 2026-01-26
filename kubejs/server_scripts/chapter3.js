// priority: 100
// Chapter 3 - Mekanism Recipe Modifications
// Steel casing, metallurgic infuser, and control circuit progression changes

ServerEvents.recipes(event => {
    // ==================== STEEL CASING: REPLACE GLASS WITH PLASTIC ====================
    // Replace glass in the steel casing recipe with plastic ingots
    event.replaceInput(
        { output: 'mekanism:steel_casing' },
        '#forge:glass',
        '#forge:ingots/plastic'
    );

    // ==================== METALLURGIC INFUSER: REPLACE IRON WITH PLASTIC ====================
    // Replace iron ingots in the metallurgic infuser crafting recipe with plastic ingots
    event.replaceInput(
        { output: 'mekanism:metallurgic_infuser' },
        '#forge:ingots/iron',
        '#forge:ingots/plastic'
    );

    // ==================== REMOVE: STEEL DUST FROM ENRICHED IRON ====================
    // Remove the metallurgic infuser recipe that creates steel dust from enriched iron
    event.remove({ type: 'mekanism:metallurgic_infusing', output: 'mekanism:dust_steel' });

    // ==================== REMOVE: BASIC CONTROL CIRCUIT ====================
    // Remove the default basic control circuit recipe from the metallurgic infuser
    event.remove({ type: 'mekanism:metallurgic_infusing', output: 'mekanism:basic_control_circuit' });

    // ==================== ADD: BASIC CONTROL CIRCUIT FROM TFMG CIRCUIT BOARD ====================
    // 20mB redstone + TFMG circuit board -> basic control circuit
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        itemInput: { ingredient: { item: 'tfmg:circuit_board' } },
        infusionInput: { infuse_type: 'mekanism:redstone', amount: 20 },
        output: { item: 'mekanism:basic_control_circuit', count: 1 }
    }).id('kubejs:chapter3/basic_control_circuit_from_tfmg');

    // ==================== ADD: TFMG CIRCUIT BOARD FROM IE WORKBENCH ====================
    // IE Engineer's Workbench: circuit board + advanced electronic + electronic -> TFMG circuit board
    event.recipes.immersiveengineering.blueprint(
        'tfmg:circuit_board',
        [
            'immersiveengineering:circuit_board',
            'immersiveengineering:component_electronic_adv',
            'immersiveengineering:component_electronic'
        ],
        'components'
    ).id('kubejs:chapter3/workbench_tfmg_circuit_board');

    // ==================== INDUSTRIAL FOREGOING: MACHINE FRAME (PITY) ====================
    // Replace redstone block with basic control circuit
    event.replaceInput(
        { output: 'industrialforegoing:machine_frame_pity' },
        'minecraft:redstone_block',
        'mekanism:basic_control_circuit'
    );

    // ==================== RFTOOLS: MACHINE FRAME ====================
    // New recipe: iron, blue dye, iron / gold nugget, basic control circuit, gold nugget / iron, blue dye, iron
    event.remove({ output: 'rftoolsbase:machine_frame' });
    event.shaped('rftoolsbase:machine_frame', [
        'IDI',
        'GCG',
        'IDI'
    ], {
        I: '#forge:ingots/iron',
        D: 'minecraft:blue_dye',
        G: '#forge:nuggets/gold',
        C: 'mekanism:basic_control_circuit'
    }).id('kubejs:chapter3/rftools_machine_frame');

    // ==================== XNET: CONTROLLER ====================
    // Replace redstone with advanced control circuit
    event.replaceInput(
        { output: 'xnet:controller' },
        'minecraft:redstone',
        'mekanism:advanced_control_circuit'
    );

    // ==================== AE2: INSCRIBER ====================
    // New recipe: plastic, piston, plastic / copper, elite circuit, plastic / plastic, piston, plastic
    event.remove({ output: 'ae2:inscriber' });
    event.shaped('ae2:inscriber', [
        'PIP',
        'CEP',
        'PIP'
    ], {
        P: '#forge:ingots/plastic',
        I: 'minecraft:piston',
        C: '#forge:ingots/copper',
        E: 'mekanism:elite_control_circuit'
    }).id('kubejs:chapter3/ae2_inscriber');

    console.log('[Chapter 3] Mekanism recipe modifications complete');
});
