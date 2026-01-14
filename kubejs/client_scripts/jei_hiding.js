// kubejs/client_scripts/jei_hiding.js
// Hide duplicate items that have been unified to reduce JEI clutter

JEIEvents.hideItems(event => {
    console.log('Hiding duplicate unified items in JEI...');

    // Hide duplicate plates (keeping Create variants as primary)
    const HIDDEN_DUPLICATES = [
        // IE plates (Create is primary)
        'immersiveengineering:plate_iron',
        'immersiveengineering:plate_copper',
        'immersiveengineering:plate_gold',
        'immersiveengineering:plate_steel',

        // Mekanism plates (Create is primary)
        // Note: Check if these exist in Mekanism for 1.20.1
        // 'mekanism:plate_iron',
        // 'mekanism:plate_copper',
        // 'mekanism:plate_gold',
        // 'mekanism:plate_steel',

        // Duplicate dusts (keeping Mekanism as primary)
        'immersiveengineering:dust_iron',
        'immersiveengineering:dust_copper',
        'immersiveengineering:dust_gold',

        // Duplicate steel ingots (keeping TFMG as primary)
        'immersiveengineering:ingot_steel',
        'mekanism:ingot_steel',

        // Add more duplicates as needed during testing
    ];

    HIDDEN_DUPLICATES.forEach(item => {
        try {
            event.hide(item);
            console.log(`Hidden: ${item}`);
        } catch (e) {
            console.warn(`Could not hide ${item}: ${e}`);
        }
    });

    console.log('JEI hiding complete!');
});

JEIEvents.hideFluids(event => {
    console.log('Hiding duplicate unified fluids in JEI...');

    // Hide duplicate fluids (keeping primary variants visible)
    const HIDDEN_FLUID_DUPLICATES = [
        // Ethanol/Bio-ethanol (keeping IE ethanol as primary)
        'createaddition:bioethanol',
        'forestry:bio_ethanol',
        'mekanismgenerators:bioethanol',
        'pneumaticcraft:ethanol',
        'chemlib:ethanol',

        // Biodiesel (keeping IE biodiesel as primary)
        'pneumaticcraft:biodiesel',

        // Seed Oil (keeping Create Addition seed_oil as primary)
        'forestry:seed_oil',
    ];

    HIDDEN_FLUID_DUPLICATES.forEach(fluid => {
        try {
            event.hide(fluid);
            console.log(`Hidden fluid: ${fluid}`);
        } catch (e) {
            console.warn(`Could not hide fluid ${fluid}: ${e}`);
        }
    });

    console.log('Fluid hiding complete!');
});

JEIEvents.hideCustom(event => {
    // Hide items based on NBT or other criteria if needed
    // Example: event.hide('item', item => item.hasTag('hidden'))
});
