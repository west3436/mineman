// Tech Progression - Fluid Unification
// Unifies fluids across mods using tags

ServerEvents.tags('fluid', event => {
    console.log('[Tech Progression] Applying fluid tag unification...');

    // ============================================
    // MOLTEN METAL UNIFICATION
    // ============================================

    // Molten Iron
    event.add('forge:molten_iron', [
        'tconstruct:molten_iron',
        'mekanism:liquid_iron'
    ]);

    // Molten Gold
    event.add('forge:molten_gold', [
        'tconstruct:molten_gold',
        'mekanism:liquid_gold'
    ]);

    // Molten Copper
    event.add('forge:molten_copper', [
        'tconstruct:molten_copper',
        'mekanism:liquid_copper'
    ]);

    // Molten Tin
    event.add('forge:molten_tin', [
        'tconstruct:molten_tin',
        'mekanism:liquid_tin'
    ]);

    // Molten Lead
    event.add('forge:molten_lead', [
        'tconstruct:molten_lead',
        'mekanism:liquid_lead'
    ]);

    // Molten Silver
    event.add('forge:molten_silver', [
        'tconstruct:molten_silver',
        'mekanism:liquid_silver'
    ]);

    // Molten Osmium
    event.add('forge:molten_osmium', [
        'tconstruct:molten_osmium',
        'mekanism:liquid_osmium'
    ]);

    // Molten Uranium
    event.add('forge:molten_uranium', [
        'tconstruct:molten_uranium',
        'mekanism:liquid_uranium'
    ]);

    // Molten Steel
    event.add('forge:molten_steel', [
        'tconstruct:molten_steel',
        'mekanism:liquid_steel'
    ]);

    // Molten Bronze
    event.add('forge:molten_bronze', [
        'tconstruct:molten_bronze',
        'mekanism:liquid_bronze'
    ]);

    // Molten Nickel
    event.add('forge:molten_nickel', [
        'tconstruct:molten_nickel'
    ]);

    // Molten Zinc
    event.add('forge:molten_zinc', [
        'tconstruct:molten_zinc'
    ]);

    // Molten Aluminum
    event.add('forge:molten_aluminum', [
        'tconstruct:molten_aluminum'
    ]);

    // Molten Brass
    event.add('forge:molten_brass', [
        'tconstruct:molten_brass'
    ]);

    // Molten Electrum
    event.add('forge:molten_electrum', [
        'tconstruct:molten_electrum'
    ]);

    // Molten Invar
    event.add('forge:molten_invar', [
        'tconstruct:molten_invar'
    ]);

    // Molten Constantan
    event.add('forge:molten_constantan', [
        'tconstruct:molten_constantan'
    ]);

    // ============================================
    // FUEL UNIFICATION
    // ============================================

    // Diesel
    event.add('forge:diesel', [
        'immersivepetroleum:diesel'
    ]);

    // Biodiesel
    event.add('forge:biodiesel', [
        'immersiveengineering:biodiesel'
    ]);

    // Gasoline
    event.add('forge:gasoline', [
        'immersivepetroleum:gasoline'
    ]);

    // Ethanol / Bioethanol
    event.add('forge:ethanol', [
        'immersiveengineering:ethanol'
    ]);

    // ============================================
    // OIL UNIFICATION
    // ============================================

    // Crude Oil
    event.add('forge:crude_oil', [
        'immersivepetroleum:crude_oil'
    ]);

    // Lubricant
    event.add('forge:lubricant', [
        'immersivepetroleum:lubricant'
    ]);

    // Plant Oil
    event.add('forge:plant_oil', [
        'immersiveengineering:plantoil'
    ]);

    // ============================================
    // EXPERIENCE FLUID UNIFICATION
    // ============================================

    event.add('forge:experience', [
        'mob_grinding_utils:fluid_xp'
    ]);

    // ============================================
    // CREOSOTE UNIFICATION
    // ============================================

    event.add('forge:creosote', [
        'immersiveengineering:creosote'
    ]);

    console.log('[Tech Progression] Fluid tag unification complete');
});
