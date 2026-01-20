// kubejs/server_scripts/recipes/military_defense.js
// Recipe modifications for Ballistix, Nuclear Science, Blastcraft, and Modular Forcefields
//
// NOTE: These recipes are commented out because the item IDs need verification.
// The Electrodynamics ecosystem mods use specific naming conventions.
// To find correct item IDs:
// 1. Press F3+H in-game to enable advanced tooltips
// 2. Hover over items in JEI to see their registry names
// 3. Update the item IDs below accordingly
//
// Common naming patterns for aurilisdev mods:
// - ballistix:launcherplatform (not missilelauncher)
// - ballistix:missileconventional
// - nuclearscience:centrifuge
// - blastcraft:reinforcedconcrete
// - modularforcefields:forcefieldemitter

ServerEvents.recipes(event => {
    console.log('Military & Defense recipes - item IDs need verification');

    // ============================================================
    // RECIPE DOCUMENTATION
    // ============================================================
    // These recipes require verification of item IDs in-game.
    // The mods are installed but item registry names may differ.
    // ============================================================

    // === BLASTCRAFT GATING ===
    // Reinforced blocks require steel production (Tier 2)

    // TODO: Verify item ID - might be blastcraft:reinforced_concrete or blastcraft:reinforcedconcrete
    // event.remove({ output: 'blastcraft:reinforcedconcrete' });
    // event.shaped('8x blastcraft:reinforcedconcrete', [
    //     'CSC',
    //     'SIS',
    //     'CSC'
    // ], {
    //     C: 'minecraft:stone',
    //     S: '#forge:plates/steel',
    //     I: 'minecraft:iron_ingot'
    // });

    // === BALLISTIX GATING ===
    // Explosives and missiles require chemistry tier (Tier 4)

    // TODO: Verify item ID - Ballistix uses "Launcher Platform" not "Missile Launcher"
    // The item ID is likely ballistix:launcherplatform
    // event.remove({ output: 'ballistix:launcherplatform' });
    // event.shaped('ballistix:launcherplatform', [
    //     'SPS',
    //     'PAP',
    //     'SRS'
    // ], {
    //     S: '#forge:plates/steel',
    //     P: 'tfmg:plastic_sheet',
    //     A: 'mekanism:alloy_infused',
    //     R: 'minecraft:redstone_block'
    // });

    // TODO: Verify missile item IDs
    // event.remove({ output: 'ballistix:missileconventional' });
    // event.shaped('ballistix:missileconventional', [
    //     ' I ',
    //     'SES',
    //     'SPS'
    // ], {
    //     I: 'minecraft:iron_ingot',
    //     S: '#forge:plates/steel',
    //     E: 'ballistix:explosive',
    //     P: 'tfmg:plastic_sheet'
    // });

    // === NUCLEAR SCIENCE GATING ===
    // Nuclear technology requires chemistry and electronics tiers (Tier 4-5)

    // TODO: Verify item ID for centrifuge
    // event.remove({ output: 'nuclearscience:centrifuge' });
    // event.shaped('nuclearscience:centrifuge', [
    //     'SAS',
    //     'PMP',
    //     'SRS'
    // ], {
    //     S: '#forge:plates/steel',
    //     A: 'mekanism:alloy_infused',
    //     P: 'tfmg:plastic_sheet',
    //     M: 'mekanism:basic_control_circuit',
    //     R: 'minecraft:redstone_block'
    // });

    // TODO: Verify item ID for reactor core
    // event.remove({ output: 'nuclearscience:reactorcore' });
    // event.shaped('nuclearscience:reactorcore', [
    //     'LAL',
    //     'ACA',
    //     'LAL'
    // ], {
    //     L: '#forge:ingots/lead',
    //     A: 'mekanism:alloy_reinforced',
    //     C: 'pneumaticcraft:printed_circuit_board'
    // });

    // === MODULAR FORCEFIELDS GATING ===
    // Forcefields require electronics tier (Tier 5)

    // TODO: Verify item IDs for Modular Forcefields
    // event.remove({ output: 'modularforcefields:projector' });
    // event.shaped('modularforcefields:projector', [
    //     'SPS',
    //     'PAP',
    //     'SCS'
    // ], {
    //     S: '#forge:plates/steel',
    //     P: 'pneumaticcraft:plastic',
    //     A: 'mekanism:alloy_reinforced',
    //     C: 'pneumaticcraft:printed_circuit_board'
    // });

    // event.remove({ output: 'modularforcefields:coercionderiver' });
    // event.shaped('modularforcefields:coercionderiver', [
    //     'SAS',
    //     'ACA',
    //     'SRS'
    // ], {
    //     S: '#forge:plates/steel',
    //     A: 'mekanism:alloy_infused',
    //     C: 'pneumaticcraft:printed_circuit_board',
    //     R: 'minecraft:redstone_block'
    // });

    // event.remove({ output: 'modularforcefields:fortronconnector' });
    // event.shaped('modularforcefields:fortronconnector', [
    //     'SWS',
    //     'WAW',
    //     'SWS'
    // ], {
    //     S: '#forge:plates/steel',
    //     W: 'immersiveengineering:wire_copper',
    //     A: 'mekanism:alloy_infused'
    // });

    // === BALLISTIX NUCLEAR MISSILE GATING ===
    // Nuclear missiles require all advanced technologies

    // TODO: Verify nuclear missile item IDs
    // event.remove({ output: 'ballistix:missilenuclear' });
    // event.shaped('ballistix:missilenuclear', [
    //     ' U ',
    //     'SPS',
    //     'SCS'
    // ], {
    //     U: 'nuclearscience:fuelheuo2',
    //     S: '#forge:plates/steel',
    //     P: 'pneumaticcraft:printed_circuit_board',
    //     C: 'mineman:advanced_circuit'
    // });

    // === CROSS-MOD INTEGRATION ===
    // Allow Nuclear Science uranium to be processed in Mekanism machines

    // TODO: Verify uranium item IDs
    // event.shapeless('mekanism:enriched_uranium', [
    //     'nuclearscience:celluranium'
    // ]);
    // event.shapeless('nuclearscience:celluranium', [
    //     'mekanism:enriched_uranium'
    // ]);

    console.log('Military & Defense recipes disabled - verify item IDs in-game');
});
