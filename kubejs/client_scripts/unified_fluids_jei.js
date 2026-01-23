// priority: 88
// Unified Fluids - Hide Duplicate Fluids and Buckets from JEI/REI
// This hides non-primary fluid variants and their buckets from recipe viewers

JEIEvents.hideItems(event => {
    // List of fluid buckets to hide (non-primary variants)
    // Format: mod:fluid_bucket or mod:fluid_name_bucket
    const hiddenBuckets = [
        // ==================== HONEY (Primary: Create) ====================
        'forestry:honey_bucket',
        'tconstruct:honey_bucket',
        'growthcraft_apiary:honey_fluid_bucket',

        // ==================== ETHANOL (Primary: IE) ====================
        'forestry:bio_ethanol_bucket',
        'pneumaticcraft:ethanol_bucket',
        'mekanismgenerators:bioethanol_bucket',
        // electrodynamics uses different bucket naming

        // ==================== CRUDE OIL (Primary: IP) ====================
        'tfmg:crude_oil_bucket',
        'pneumaticcraft:oil_bucket',

        // ==================== DIESEL (Primary: IP) ====================
        'tfmg:diesel_bucket',
        'pneumaticcraft:diesel_bucket',

        // ==================== GASOLINE (Primary: IP) ====================
        'tfmg:gasoline_bucket',
        'pneumaticcraft:gasoline_bucket',

        // ==================== KEROSENE (Primary: IP) ====================
        'tfmg:kerosene_bucket',
        'pneumaticcraft:kerosene_bucket',

        // ==================== NAPHTHA (Primary: IP) ====================
        'tfmg:naphtha_bucket',

        // ==================== LPG (Primary: IP) ====================
        'tfmg:lpg_bucket',
        'pneumaticcraft:lpg_bucket',

        // ==================== LUBRICANT (Primary: IP) ====================
        'tfmg:lubrication_oil_bucket',
        'pneumaticcraft:lubricant_bucket',

        // ==================== NAPALM (Primary: IP) ====================
        'tfmg:napalm_bucket',

        // ==================== BIODIESEL (Primary: IE) ====================
        'pneumaticcraft:biodiesel_bucket',

        // ==================== CREOSOTE (Primary: IE) ====================
        'tfmg:creosote_bucket',

        // ==================== CONCRETE (Primary: IE) ====================
        'tfmg:liquid_concrete_bucket',
        // blastcraft might use different naming

        // ==================== STEAM (Primary: Mekanism) ====================
        'immersivetechnology:steam_bucket',
        'industrialrenewal:steam_bucket',

        // ==================== HYDROGEN (Primary: Mekanism) ====================
        'tfmg:hydrogen_bucket',

        // ==================== SULFURIC ACID (Primary: Mekanism) ====================
        'tfmg:sulfuric_acid_bucket',

        // ==================== CHLORINE (Primary: Mekanism) ====================
        'immersivetechnology:chlorine_bucket',

        // ==================== ETHYLENE (Primary: TFMG) ====================
        'mekanism:ethene_bucket',

        // ==================== PLANT OIL (Primary: IE) ====================
        'forestry:seed_oil_bucket',
        'pneumaticcraft:vegetable_oil_bucket',

        // ==================== MOLTEN STEEL (Primary: CBC) ====================
        // Tinkers steel is removed, CBC is now primary
        'tfmg:molten_steel_bucket',
        'tconstruct:molten_steel_bucket',

        // ==================== MOLTEN BRONZE (Primary: Tinkers) ====================
        'createbigcannons:molten_bronze_bucket',

        // ==================== PLASTIC (Primary: TFMG) ====================
        'pneumaticcraft:plastic_bucket',
    ];

    hiddenBuckets.forEach(item => {
        try {
            event.hide(item);
        } catch (e) {
            // Item might not exist, ignore
        }
    });

    console.log('[Unified Fluids] Hidden duplicate fluid buckets from JEI');
});

JEIEvents.hideFluids(event => {
    // List of fluids to hide (non-primary variants)
    const hiddenFluids = [
        // ==================== HONEY (Primary: Create) ====================
        'forestry:honey',
        'tconstruct:honey',
        'growthcraft_apiary:honey_fluid_source',

        // ==================== ETHANOL (Primary: IE) ====================
        'forestry:bio_ethanol',
        'pneumaticcraft:ethanol',
        'mekanismgenerators:bioethanol',
        'electrodynamics:fluidethanol',

        // ==================== CRUDE OIL (Primary: IP) ====================
        'tfmg:crude_oil',
        'pneumaticcraft:oil',

        // ==================== DIESEL (Primary: IP) ====================
        'tfmg:diesel',
        'pneumaticcraft:diesel',

        // ==================== GASOLINE (Primary: IP) ====================
        'tfmg:gasoline',
        'pneumaticcraft:gasoline',

        // ==================== KEROSENE (Primary: IP) ====================
        'tfmg:kerosene',
        'pneumaticcraft:kerosene',

        // ==================== NAPHTHA (Primary: IP) ====================
        'tfmg:naphtha',

        // ==================== LPG (Primary: IP) ====================
        'tfmg:lpg',
        'pneumaticcraft:lpg',

        // ==================== LUBRICANT (Primary: IP) ====================
        'tfmg:lubrication_oil',
        'pneumaticcraft:lubricant',

        // ==================== NAPALM (Primary: IP) ====================
        'tfmg:napalm',

        // ==================== BIODIESEL (Primary: IE) ====================
        'pneumaticcraft:biodiesel',

        // ==================== CREOSOTE (Primary: IE) ====================
        'tfmg:creosote',

        // ==================== CONCRETE (Primary: IE) ====================
        'tfmg:liquid_concrete',
        'blastcraft:fluidconcrete',

        // ==================== STEAM (Primary: Mekanism) ====================
        'immersivetechnology:steam',
        'industrialrenewal:steam_still',

        // ==================== HYDROGEN (Primary: Mekanism) ====================
        'tfmg:hydrogen',
        'electrodynamics:fluidhydrogen',

        // ==================== OXYGEN (Primary: Mekanism) ====================
        'electrodynamics:fluidoxygen',

        // ==================== SULFURIC ACID (Primary: Mekanism) ====================
        'tfmg:sulfuric_acid',
        'electrodynamics:fluidsulfuricacid',

        // ==================== HYDROFLUORIC ACID (Primary: Mekanism) ====================
        'electrodynamics:fluidhydrofluoricacid',

        // ==================== CHLORINE (Primary: Mekanism) ====================
        'immersivetechnology:chlorine',

        // ==================== ETHYLENE (Primary: TFMG) ====================
        'mekanism:ethene',

        // ==================== PLANT OIL (Primary: IE) ====================
        'forestry:seed_oil',
        'pneumaticcraft:vegetable_oil',

        // ==================== MOLTEN STEEL (Primary: CBC) ====================
        // Tinkers steel is removed, CBC is now primary
        'tfmg:molten_steel',
        'tconstruct:molten_steel',

        // ==================== MOLTEN BRONZE (non-Tinkers) ====================
        'createbigcannons:molten_bronze',

        // ==================== PLASTIC (Primary: TFMG) ====================
        'pneumaticcraft:plastic',
        'electrodynamics:fluidpolyethylene',
    ];

    hiddenFluids.forEach(fluid => {
        try {
            event.hide(fluid);
        } catch (e) {
            // Fluid might not exist, ignore
        }
    });

    console.log('[Unified Fluids] Hidden duplicate fluids from JEI');
});
