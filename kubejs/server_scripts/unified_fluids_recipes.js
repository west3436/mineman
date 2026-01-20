// priority: 89
// Unified Fluids - Recipe Output Unification
// This script modifies recipes to output/use the primary mod's fluids
// Priority order: Create > IE > Immersive Petroleum > TFMG > Mekanism > Others

/**
 * Primary Fluid Mapping:
 * These are the "canonical" fluids that recipes should prefer
 */
const UNIFIED_FLUID_OUTPUTS = {
    // Honey (Primary: Create)
    'forge:honey': 'create:honey',

    // Ethanol (Primary: IE)
    'forge:ethanol': 'immersiveengineering:ethanol',
    'forge:bioethanol': 'immersiveengineering:ethanol',

    // Crude Oil (Primary: IP)
    'forge:crude_oil': 'immersivepetroleum:crudeoil',
    'forge:oil': 'immersivepetroleum:crudeoil',

    // Diesel (Primary: IP)
    'forge:diesel': 'immersivepetroleum:diesel',

    // Gasoline (Primary: IP)
    'forge:gasoline': 'immersivepetroleum:gasoline',

    // Kerosene (Primary: IP)
    'forge:kerosene': 'immersivepetroleum:kerosene',

    // Naphtha (Primary: IP)
    'forge:naphtha': 'immersivepetroleum:naphtha',

    // LPG (Primary: IP)
    'forge:lpg': 'immersivepetroleum:petroleum_gas',

    // Lubricant (Primary: IP)
    'forge:lubricant': 'immersivepetroleum:lubricant',

    // Napalm (Primary: IP)
    'forge:napalm': 'immersivepetroleum:napalm',

    // Biodiesel (Primary: IE)
    'forge:biodiesel': 'immersiveengineering:biodiesel',

    // Creosote (Primary: IE)
    'forge:creosote': 'immersiveengineering:creosote',

    // Concrete (Primary: IE)
    'forge:concrete': 'immersiveengineering:concrete',

    // Steam (Primary: Mekanism)
    'forge:steam': 'mekanism:steam',

    // Hydrogen (Primary: Mekanism)
    'forge:hydrogen': 'mekanism:hydrogen',

    // Oxygen (Primary: Mekanism)
    'forge:oxygen': 'mekanism:oxygen',

    // Sulfuric Acid (Primary: Mekanism)
    'forge:sulfuric_acid': 'mekanism:sulfuric_acid',

    // Hydrofluoric Acid (Primary: Mekanism)
    'forge:hydrofluoric_acid': 'mekanism:hydrofluoric_acid',

    // Chlorine (Primary: Mekanism)
    'forge:chlorine': 'mekanism:chlorine',

    // Ethylene (Primary: TFMG)
    'forge:ethylene': 'tfmg:ethylene',
    'forge:ethene': 'tfmg:ethylene',

    // Plant Oil (Primary: IE)
    'forge:plantoil': 'immersiveengineering:plantoil',
    'forge:seed_oil': 'immersiveengineering:plantoil',
    'forge:vegetable_oil': 'immersiveengineering:plantoil',
};

// Fluid replacements: old -> new
const FLUID_REPLACEMENTS = {
    // ==================== HONEY ====================
    // Primary: Create
    'forestry:honey': 'create:honey',
    'tconstruct:honey': 'create:honey',
    'growthcraft_apiary:honey_fluid_source': 'create:honey',

    // ==================== ETHANOL ====================
    // Primary: IE
    'forestry:bio_ethanol': 'immersiveengineering:ethanol',
    'pneumaticcraft:ethanol': 'immersiveengineering:ethanol',
    'mekanismgenerators:bioethanol': 'immersiveengineering:ethanol',
    'electrodynamics:fluidethanol': 'immersiveengineering:ethanol',

    // ==================== CRUDE OIL ====================
    // Primary: Immersive Petroleum
    'tfmg:crude_oil': 'immersivepetroleum:crudeoil',
    'pneumaticcraft:oil': 'immersivepetroleum:crudeoil',

    // ==================== DIESEL ====================
    // Primary: Immersive Petroleum
    'tfmg:diesel': 'immersivepetroleum:diesel',
    'pneumaticcraft:diesel': 'immersivepetroleum:diesel',

    // ==================== GASOLINE ====================
    // Primary: Immersive Petroleum
    'tfmg:gasoline': 'immersivepetroleum:gasoline',
    'pneumaticcraft:gasoline': 'immersivepetroleum:gasoline',

    // ==================== KEROSENE ====================
    // Primary: Immersive Petroleum
    'tfmg:kerosene': 'immersivepetroleum:kerosene',
    'pneumaticcraft:kerosene': 'immersivepetroleum:kerosene',

    // ==================== NAPHTHA ====================
    // Primary: Immersive Petroleum
    'tfmg:naphtha': 'immersivepetroleum:naphtha',

    // ==================== LPG ====================
    // Primary: Immersive Petroleum (petroleum_gas)
    'tfmg:lpg': 'immersivepetroleum:petroleum_gas',
    'pneumaticcraft:lpg': 'immersivepetroleum:petroleum_gas',

    // ==================== LUBRICANT ====================
    // Primary: Immersive Petroleum
    'tfmg:lubrication_oil': 'immersivepetroleum:lubricant',
    'pneumaticcraft:lubricant': 'immersivepetroleum:lubricant',

    // ==================== NAPALM ====================
    // Primary: Immersive Petroleum
    'tfmg:napalm': 'immersivepetroleum:napalm',

    // ==================== BIODIESEL ====================
    // Primary: IE
    'pneumaticcraft:biodiesel': 'immersiveengineering:biodiesel',

    // ==================== CREOSOTE ====================
    // Primary: IE
    'tfmg:creosote': 'immersiveengineering:creosote',

    // ==================== CONCRETE ====================
    // Primary: IE
    'tfmg:liquid_concrete': 'immersiveengineering:concrete',
    'blastcraft:fluidconcrete': 'immersiveengineering:concrete',

    // ==================== STEAM ====================
    // Primary: Mekanism
    'immersivetechnology:steam': 'mekanism:steam',
    'industrialrenewal:steam_still': 'mekanism:steam',

    // ==================== HYDROGEN ====================
    // Primary: Mekanism
    'tfmg:hydrogen': 'mekanism:hydrogen',
    'electrodynamics:fluidhydrogen': 'mekanism:hydrogen',

    // ==================== OXYGEN ====================
    // Primary: Mekanism
    'electrodynamics:fluidoxygen': 'mekanism:oxygen',

    // ==================== SULFURIC ACID ====================
    // Primary: Mekanism
    'tfmg:sulfuric_acid': 'mekanism:sulfuric_acid',
    'electrodynamics:fluidsulfuricacid': 'mekanism:sulfuric_acid',

    // ==================== HYDROFLUORIC ACID ====================
    // Primary: Mekanism
    'electrodynamics:fluidhydrofluoricacid': 'mekanism:hydrofluoric_acid',

    // ==================== CHLORINE ====================
    // Primary: Mekanism
    'immersivetechnology:chlorine': 'mekanism:chlorine',

    // ==================== ETHYLENE ====================
    // Primary: TFMG
    'mekanism:ethene': 'tfmg:ethylene',

    // ==================== PLANT OIL ====================
    // Primary: IE
    'forestry:seed_oil': 'immersiveengineering:plantoil',
    'pneumaticcraft:vegetable_oil': 'immersiveengineering:plantoil',

    // ==================== MOLTEN STEEL ====================
    // Primary: Tinkers' Construct (most complete molten metal system)
    'createbigcannons:molten_steel': 'tconstruct:molten_steel',
    'tfmg:molten_steel': 'tconstruct:molten_steel',

    // ==================== MOLTEN BRONZE ====================
    'createbigcannons:molten_bronze': 'tconstruct:molten_bronze',

    // ==================== PLASTIC ====================
    // Primary: TFMG
    'pneumaticcraft:plastic': 'tfmg:molten_plastic',
    'electrodynamics:fluidpolyethylene': 'tfmg:molten_plastic',
};

ServerEvents.recipes(event => {
    // Replace fluid outputs in recipes
    for (const [oldFluid, newFluid] of Object.entries(FLUID_REPLACEMENTS)) {
        try {
            event.replaceOutput({}, Fluid.of(oldFluid), Fluid.of(newFluid));
        } catch (e) {
            // Fluid might not exist or replacement might fail, continue
        }
        try {
            event.replaceInput({}, Fluid.of(oldFluid), Fluid.of(newFluid));
        } catch (e) {
            // Fluid might not exist or replacement might fail, continue
        }
    }

    console.log('[Unified Fluids] Recipe fluid replacement complete');
});
