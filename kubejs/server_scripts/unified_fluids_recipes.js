// priority: 89
// Unified Fluids - Recipe Input/Output Unification
// This script modifies recipes to:
// - Replace OUTPUTS with the primary mod's fluid
// - Replace INPUTS with the forge tag (so any unified fluid works)
// Priority order: Create > IE > Immersive Petroleum > TFMG > Mekanism > Others

/**
 * Fluid Unification Mapping
 * Each entry contains:
 * - tag: The forge tag to use for inputs
 * - primary: The primary fluid to use for outputs
 * - variants: All fluid variants that should be unified
 */
const FLUID_UNIFICATIONS = [
    // ==================== HONEY ====================
    {
        tag: 'forge:honey',
        primary: 'create:honey',
        variants: ['create:honey', 'forestry:honey', 'tconstruct:honey', 'growthcraft_apiary:honey_fluid_source']
    },

    // ==================== ETHANOL ====================
    {
        tag: 'forge:ethanol',
        primary: 'immersiveengineering:ethanol',
        variants: ['immersiveengineering:ethanol', 'forestry:bio_ethanol', 'pneumaticcraft:ethanol', 'mekanismgenerators:bioethanol', 'electrodynamics:fluidethanol']
    },

    // ==================== CRUDE OIL ====================
    {
        tag: 'forge:crude_oil',
        primary: 'immersivepetroleum:crudeoil',
        variants: ['immersivepetroleum:crudeoil', 'tfmg:crude_oil', 'pneumaticcraft:oil']
    },

    // ==================== DIESEL ====================
    {
        tag: 'forge:diesel',
        primary: 'immersivepetroleum:diesel',
        variants: ['immersivepetroleum:diesel', 'tfmg:diesel', 'pneumaticcraft:diesel']
    },

    // ==================== GASOLINE ====================
    {
        tag: 'forge:gasoline',
        primary: 'immersivepetroleum:gasoline',
        variants: ['immersivepetroleum:gasoline', 'tfmg:gasoline', 'pneumaticcraft:gasoline']
    },

    // ==================== KEROSENE ====================
    {
        tag: 'forge:kerosene',
        primary: 'immersivepetroleum:kerosene',
        variants: ['immersivepetroleum:kerosene', 'tfmg:kerosene', 'pneumaticcraft:kerosene']
    },

    // ==================== NAPHTHA ====================
    {
        tag: 'forge:naphtha',
        primary: 'immersivepetroleum:naphtha',
        variants: ['immersivepetroleum:naphtha', 'tfmg:naphtha']
    },

    // ==================== LPG / PETROLEUM GAS ====================
    {
        tag: 'forge:lpg',
        primary: 'immersivepetroleum:petroleum_gas',
        variants: ['immersivepetroleum:petroleum_gas', 'tfmg:lpg', 'pneumaticcraft:lpg']
    },

    // ==================== LUBRICANT ====================
    {
        tag: 'forge:lubricant',
        primary: 'immersivepetroleum:lubricant',
        variants: ['immersivepetroleum:lubricant', 'tfmg:lubrication_oil', 'pneumaticcraft:lubricant']
    },

    // ==================== NAPALM ====================
    {
        tag: 'forge:napalm',
        primary: 'immersivepetroleum:napalm',
        variants: ['immersivepetroleum:napalm', 'tfmg:napalm']
    },

    // ==================== BIODIESEL ====================
    {
        tag: 'forge:biodiesel',
        primary: 'immersiveengineering:biodiesel',
        variants: ['immersiveengineering:biodiesel', 'pneumaticcraft:biodiesel']
    },

    // ==================== CREOSOTE ====================
    {
        tag: 'forge:creosote',
        primary: 'immersiveengineering:creosote',
        variants: ['immersiveengineering:creosote', 'tfmg:creosote']
    },

    // ==================== CONCRETE ====================
    {
        tag: 'forge:concrete',
        primary: 'immersiveengineering:concrete',
        variants: ['immersiveengineering:concrete', 'tfmg:liquid_concrete', 'blastcraft:fluidconcrete']
    },

    // ==================== STEAM ====================
    {
        tag: 'forge:steam',
        primary: 'mekanism:steam',
        variants: ['mekanism:steam', 'immersivetechnology:steam', 'industrialrenewal:steam_still']
    },

    // ==================== HYDROGEN ====================
    {
        tag: 'forge:hydrogen',
        primary: 'mekanism:hydrogen',
        variants: ['mekanism:hydrogen', 'tfmg:hydrogen', 'electrodynamics:fluidhydrogen']
    },

    // ==================== OXYGEN ====================
    {
        tag: 'forge:oxygen',
        primary: 'mekanism:oxygen',
        variants: ['mekanism:oxygen', 'electrodynamics:fluidoxygen']
    },

    // ==================== SULFURIC ACID ====================
    {
        tag: 'forge:sulfuric_acid',
        primary: 'mekanism:sulfuric_acid',
        variants: ['mekanism:sulfuric_acid', 'tfmg:sulfuric_acid', 'electrodynamics:fluidsulfuricacid']
    },

    // ==================== HYDROFLUORIC ACID ====================
    {
        tag: 'forge:hydrofluoric_acid',
        primary: 'mekanism:hydrofluoric_acid',
        variants: ['mekanism:hydrofluoric_acid', 'electrodynamics:fluidhydrofluoricacid']
    },

    // ==================== CHLORINE ====================
    {
        tag: 'forge:chlorine',
        primary: 'mekanism:chlorine',
        variants: ['mekanism:chlorine', 'immersivetechnology:chlorine']
    },

    // ==================== ETHYLENE ====================
    {
        tag: 'forge:ethylene',
        primary: 'tfmg:ethylene',
        variants: ['tfmg:ethylene', 'mekanism:ethene']
    },

    // ==================== PLANT OIL ====================
    {
        tag: 'forge:plantoil',
        primary: 'immersiveengineering:plantoil',
        variants: ['immersiveengineering:plantoil', 'forestry:seed_oil', 'pneumaticcraft:vegetable_oil']
    },

    // ==================== MOLTEN STEEL ====================
    // Primary: CBC (Tinkers steel is removed)
    {
        tag: 'forge:molten_steel',
        primary: 'createbigcannons:molten_steel',
        variants: ['createbigcannons:molten_steel', 'tfmg:molten_steel']
    },

    // ==================== MOLTEN BRONZE ====================
    {
        tag: 'forge:molten_bronze',
        primary: 'tconstruct:molten_bronze',
        variants: ['tconstruct:molten_bronze', 'createbigcannons:molten_bronze']
    },

    // ==================== MOLTEN PLASTIC ====================
    {
        tag: 'forge:molten_plastic',
        primary: 'tfmg:molten_plastic',
        variants: ['tfmg:molten_plastic', 'pneumaticcraft:plastic', 'electrodynamics:fluidpolyethylene']
    },
];

ServerEvents.recipes(event => {
    FLUID_UNIFICATIONS.forEach(unification => {
        const { tag, primary, variants } = unification;

        // Replace all variant OUTPUTS with the primary fluid
        variants.forEach(variant => {
            if (variant !== primary) {
                try {
                    event.replaceOutput({}, Fluid.of(variant), Fluid.of(primary));
                } catch (e) {
                    // Fluid might not exist, continue
                }
            }
        });

        // Replace all variant INPUTS with the forge tag
        // This allows any unified fluid to be used as input
        variants.forEach(variant => {
            try {
                event.replaceInput({}, Fluid.of(variant), Fluid.tag(tag));
            } catch (e) {
                // Fluid might not exist or tag replacement not supported, continue
            }
        });
    });

    console.log('[Unified Fluids] Recipe fluid unification complete - outputs use primary, inputs use tags');
});
