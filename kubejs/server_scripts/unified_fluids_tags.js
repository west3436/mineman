// priority: 90
// Unified Fluids - Tag Unification Script
// This script adds all mod variants of fluids to common Forge tags
// Priority order: Create > IE > Immersive Petroleum > TFMG > Mekanism > Others

/**
 * Fluid Unification Priority:
 * 1. Create (create:)
 * 2. Immersive Engineering (immersiveengineering:)
 * 3. Immersive Petroleum (immersivepetroleum:)
 * 4. Create: The Factory Must Grow (tfmg:)
 * 5. Mekanism (mekanism:)
 * 6. All other mods
 */

ServerEvents.tags('fluid', event => {
    // ==================== HONEY ====================
    // Primary: Create
    event.add('forge:honey', [
        'create:honey',                        // Primary
        'forestry:honey',
        'tconstruct:honey',
        'growthcraft_apiary:honey_fluid_source'
    ]);

    // ==================== ETHANOL / BIOETHANOL ====================
    // Primary: IE
    event.add('forge:ethanol', [
        'immersiveengineering:ethanol',        // Primary
        'forestry:bio_ethanol',
        'pneumaticcraft:ethanol',
        'mekanismgenerators:bioethanol',
        'electrodynamics:fluidethanol'
    ]);
    // Alias tag
    event.add('forge:bioethanol', [
        'immersiveengineering:ethanol',        // Primary
        'forestry:bio_ethanol',
        'pneumaticcraft:ethanol',
        'mekanismgenerators:bioethanol'
    ]);

    // ==================== CRUDE OIL ====================
    // Primary: Immersive Petroleum
    event.add('forge:crude_oil', [
        'immersivepetroleum:crudeoil',         // Primary
        'tfmg:crude_oil',
        'pneumaticcraft:oil'
    ]);
    // Alias tag
    event.add('forge:oil', [
        'immersivepetroleum:crudeoil',         // Primary
        'tfmg:crude_oil',
        'pneumaticcraft:oil'
    ]);

    // ==================== DIESEL ====================
    // Primary: Immersive Petroleum
    event.add('forge:diesel', [
        'immersivepetroleum:diesel',           // Primary
        'tfmg:diesel',
        'pneumaticcraft:diesel'
    ]);

    // ==================== GASOLINE ====================
    // Primary: Immersive Petroleum
    event.add('forge:gasoline', [
        'immersivepetroleum:gasoline',         // Primary
        'tfmg:gasoline',
        'pneumaticcraft:gasoline'
    ]);

    // ==================== KEROSENE ====================
    // Primary: Immersive Petroleum
    event.add('forge:kerosene', [
        'immersivepetroleum:kerosene',         // Primary
        'tfmg:kerosene',
        'pneumaticcraft:kerosene'
    ]);

    // ==================== NAPHTHA ====================
    // Primary: Immersive Petroleum
    event.add('forge:naphtha', [
        'immersivepetroleum:naphtha',          // Primary
        'tfmg:naphtha'
    ]);

    // ==================== LPG / PETROLEUM GAS ====================
    // Primary: Immersive Petroleum (as petroleum_gas)
    event.add('forge:lpg', [
        'immersivepetroleum:petroleum_gas',    // Primary
        'tfmg:lpg',
        'pneumaticcraft:lpg'
    ]);

    // ==================== LUBRICANT ====================
    // Primary: Immersive Petroleum
    event.add('forge:lubricant', [
        'immersivepetroleum:lubricant',        // Primary
        'tfmg:lubrication_oil',
        'pneumaticcraft:lubricant'
    ]);

    // ==================== NAPALM ====================
    // Primary: Immersive Petroleum
    event.add('forge:napalm', [
        'immersivepetroleum:napalm',           // Primary
        'tfmg:napalm'
    ]);

    // ==================== BIODIESEL ====================
    // Primary: IE
    event.add('forge:biodiesel', [
        'immersiveengineering:biodiesel',      // Primary
        'pneumaticcraft:biodiesel'
    ]);

    // ==================== CREOSOTE ====================
    // Primary: IE
    event.add('forge:creosote', [
        'immersiveengineering:creosote',       // Primary
        'tfmg:creosote'
    ]);

    // ==================== CONCRETE ====================
    // Primary: IE
    event.add('forge:concrete', [
        'immersiveengineering:concrete',       // Primary
        'tfmg:liquid_concrete',
        'blastcraft:fluidconcrete'
    ]);

    // ==================== STEAM ====================
    // Primary: Mekanism (most complete steam system)
    event.add('forge:steam', [
        'mekanism:steam',                      // Primary
        'immersivetechnology:steam',
        'industrialrenewal:steam_still'
    ]);

    // ==================== HYDROGEN ====================
    // Primary: Mekanism (chemical processing)
    event.add('forge:hydrogen', [
        'mekanism:hydrogen',                   // Primary
        'tfmg:hydrogen',
        'electrodynamics:fluidhydrogen'
    ]);

    // ==================== OXYGEN ====================
    // Primary: Mekanism
    event.add('forge:oxygen', [
        'mekanism:oxygen',                     // Primary
        'electrodynamics:fluidoxygen'
    ]);

    // ==================== SULFURIC ACID ====================
    // Primary: Mekanism
    event.add('forge:sulfuric_acid', [
        'mekanism:sulfuric_acid',              // Primary
        'tfmg:sulfuric_acid',
        'electrodynamics:fluidsulfuricacid'
    ]);

    // ==================== HYDROFLUORIC ACID ====================
    // Primary: Mekanism
    event.add('forge:hydrofluoric_acid', [
        'mekanism:hydrofluoric_acid',          // Primary
        'electrodynamics:fluidhydrofluoricacid'
    ]);

    // ==================== CHLORINE ====================
    // Primary: Mekanism
    event.add('forge:chlorine', [
        'mekanism:chlorine',                   // Primary
        'immersivetechnology:chlorine'
    ]);

    // ==================== ETHYLENE / ETHENE ====================
    // Primary: TFMG (Create ecosystem)
    event.add('forge:ethylene', [
        'tfmg:ethylene',                       // Primary
        'mekanism:ethene'
    ]);
    // Alias
    event.add('forge:ethene', [
        'tfmg:ethylene',                       // Primary
        'mekanism:ethene'
    ]);

    // ==================== PLANT OIL / SEED OIL / VEGETABLE OIL ====================
    // Primary: IE
    event.add('forge:plantoil', [
        'immersiveengineering:plantoil',       // Primary
        'forestry:seed_oil',
        'pneumaticcraft:vegetable_oil'
    ]);
    // Alias tags
    event.add('forge:seed_oil', [
        'immersiveengineering:plantoil',       // Primary
        'forestry:seed_oil',
        'pneumaticcraft:vegetable_oil'
    ]);
    event.add('forge:vegetable_oil', [
        'immersiveengineering:plantoil',       // Primary
        'forestry:seed_oil',
        'pneumaticcraft:vegetable_oil'
    ]);

    // ==================== BIOFUEL / BIOMASS ====================
    // Primary: Forestry (biomass) / Industrial Foregoing (biofuel)
    event.add('forge:biomass', [
        'forestry:biomass'                     // Primary
    ]);
    event.add('forge:biofuel', [
        'industrialforegoing:biofuel'          // Primary
    ]);

    // ==================== MOLTEN METALS ====================
    // These are primarily for Tinkers' Construct but we'll tag them for compatibility

    // Molten Steel
    event.add('forge:molten_steel', [
        'tconstruct:molten_steel',
        'createbigcannons:molten_steel',
        'tfmg:molten_steel'
    ]);

    // Molten Bronze
    event.add('forge:molten_bronze', [
        'tconstruct:molten_bronze',
        'createbigcannons:molten_bronze'
    ]);

    // Molten Cast Iron
    event.add('forge:molten_cast_iron', [
        'createbigcannons:molten_cast_iron'
    ]);

    // Molten Lead
    event.add('forge:molten_lead', [
        'tconstruct:molten_lead'
    ]);

    // Molten Silver
    event.add('forge:molten_silver', [
        'tconstruct:molten_silver'
    ]);

    // Molten Tin
    event.add('forge:molten_tin', [
        'tconstruct:molten_tin'
    ]);

    // Molten Nickel
    event.add('forge:molten_nickel', [
        'tconstruct:molten_nickel'
    ]);

    // Molten Aluminum
    event.add('forge:molten_aluminum', [
        'tconstruct:molten_aluminum'
    ]);

    // Molten Uranium
    event.add('forge:molten_uranium', [
        'tconstruct:molten_uranium'
    ]);

    // Molten Zinc
    event.add('forge:molten_zinc', [
        'tconstruct:molten_zinc'
    ]);

    // Molten Brass
    event.add('forge:molten_brass', [
        'tconstruct:molten_brass'
    ]);

    // Molten Osmium
    event.add('forge:molten_osmium', [
        'tconstruct:molten_osmium'
    ]);

    // Molten Constantan
    event.add('forge:molten_constantan', [
        'tconstruct:molten_constantan'
    ]);

    // Molten Electrum
    event.add('forge:molten_electrum', [
        'tconstruct:molten_electrum'
    ]);

    // Molten Copper
    event.add('forge:molten_copper', [
        'tconstruct:molten_copper'
    ]);

    // Molten Iron
    event.add('forge:molten_iron', [
        'tconstruct:molten_iron'
    ]);

    // Molten Gold
    event.add('forge:molten_gold', [
        'tconstruct:molten_gold'
    ]);

    // ==================== LATEX ====================
    event.add('forge:latex', [
        'industrialforegoing:latex'
    ]);

    // ==================== LIQUID PLASTIC ====================
    event.add('forge:molten_plastic', [
        'tfmg:molten_plastic',
        'pneumaticcraft:plastic'
    ]);
    event.add('forge:plastic', [
        'tfmg:molten_plastic',
        'pneumaticcraft:plastic',
        'electrodynamics:fluidpolyethylene'
    ]);

    // ==================== HEAVY OIL ====================
    event.add('forge:heavy_oil', [
        'tfmg:heavy_oil'
    ]);

    // ==================== BRINE ====================
    event.add('forge:brine', [
        'mekanism:brine'
    ]);

    // ==================== LITHIUM (Fluid) ====================
    event.add('forge:lithium', [
        'mekanism:lithium'
    ]);

    console.log('[Unified Fluids] Fluid tag unification complete');
});
