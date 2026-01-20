// Tech Progression - Fluid Unification
// Unifies fluids across mods using tags
//
// IMPORTANT: This file implements Phase 1.2 of the Tech Progression plan.
// All fluid tags here must match the definitions in constants/fluids.js
//
// Mod Priority Order (per Phase 1.2):
// 1. Create - Core Create fluids (chocolate, honey, tea)
// 2. Immersive Engineering - Industrial chemicals and fuels
// 3. Create: The Factory Must Grow (TFMG) - Industrial fluids
// 4. Immersive Petroleum - Petroleum products
// 5. Mekanism - Chemicals and liquid metals
// 6. Tinkers Construct - Molten metals (canonical)
// 7. PneumaticCraft - Plastic and industrial fluids
//
// Usage in recipes:
// - Use forge tags (e.g., 'forge:diesel') instead of specific mod fluids
// - This allows recipes to accept any fluid in the tag
// - Ensures cross-mod compatibility

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
        'tconstruct:molten_brass',
        'create:molten_brass'
    ]);

    // ============================================
    // FUEL UNIFICATION
    // ============================================

    // Diesel
    event.add('forge:diesel', [
        'immersivepetroleum:diesel',
        'pneumaticcraft:diesel',
        'tfmg:diesel'
    ]);

    // Biodiesel
    event.add('forge:biodiesel', [
        'immersiveengineering:biodiesel'
    ]);

    // Gasoline
    event.add('forge:gasoline', [
        'immersivepetroleum:gasoline',
        'tfmg:gasoline'
    ]);

    // Kerosene
    event.add('forge:kerosene', [
        'immersivepetroleum:kerosene',
        'tfmg:kerosene'
    ]);

    // Ethanol / Bioethanol
    event.add('forge:ethanol', [
        'immersiveengineering:ethanol',
        'createaddition:bioethanol'
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
    // OIL UNIFICATION
    // ============================================

    // Crude Oil
    event.add('forge:crude_oil', [
        'immersivepetroleum:crude_oil',
        'pneumaticcraft:oil',
        'tfmg:crude_oil'
    ]);

    // Heavy Oil
    event.add('forge:heavy_oil', [
        'tfmg:heavy_oil'
    ]);

    // Light Oil
    event.add('forge:light_oil', [
        'tfmg:light_oil'
    ]);

    // Naphtha
    event.add('forge:naphtha', [
        'immersivepetroleum:naphtha',
        'tfmg:naphtha'
    ]);

    // Lubricant
    event.add('forge:lubricant', [
        'immersivepetroleum:lubricant',
        'pneumaticcraft:lubricant',
        'tfmg:lubrication_oil'
    ]);

    // Plant Oil
    event.add('forge:plant_oil', [
        'immersiveengineering:plantoil'
    ]);

    // ============================================
    // CHEMICAL UNIFICATION
    // ============================================

    // Sulfuric Acid
    event.add('forge:sulfuric_acid', [
        'mekanism:sulfuric_acid',
        'tfmg:sulfuric_acid'
    ]);

    // Nitric Acid
    event.add('forge:nitric_acid', [
        'tfmg:nitric_acid'
    ]);

    // Hydrochloric Acid
    event.add('forge:hydrochloric_acid', [
        'mekanism:hydrogen_chloride',
        'tfmg:hydrochloric_acid'
    ]);

    // ============================================
    // PLASTIC UNIFICATION
    // ============================================

    // Plastic (Liquid/Molten)
    event.add('forge:plastic', [
        'pneumaticcraft:plastic',
        'tfmg:liquid_plastic'
    ]);

    // ============================================
    // CONCRETE UNIFICATION
    // ============================================

    // Concrete
    event.add('forge:concrete', [
        'immersiveengineering:concrete',
        'create:flowing_concrete'
    ]);

    // ============================================
    // EXPERIENCE FLUID UNIFICATION
    // ============================================

    event.add('forge:experience', [
        'mob_grinding_utils:fluid_xp',
        'sophisticatedbackpacks:xp_still'
    ]);

    // ============================================
    // CREOSOTE UNIFICATION
    // ============================================

    event.add('forge:creosote', [
        'immersiveengineering:creosote'
    ]);

    // ============================================
    // TFMG-SPECIFIC FLUIDS
    // ============================================

    // Liquid Soap
    event.add('forge:liquid_soap', [
        'tfmg:liquid_soap'
    ]);

    // ============================================
    // CREATE FLUIDS (NO DUPLICATES)
    // ============================================

    // Chocolate
    event.add('forge:chocolate', [
        'create:chocolate'
    ]);

    // Honey
    event.add('forge:honey', [
        'create:honey'
    ]);

    // Tea
    event.add('forge:tea', [
        'create:tea'
    ]);

    console.log('[Tech Progression] Fluid tag unification complete');
});
