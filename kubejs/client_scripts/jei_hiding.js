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

        // Duplicate aluminum ingots and related items (keeping TFMG as primary)
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:plate_aluminum',

        // Duplicate constantan ingots (keeping TFMG as primary)
        'immersiveengineering:ingot_constantan',

        // Duplicate nickel ingots (keeping TFMG as primary)
        'immersiveengineering:ingot_nickel',

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

JEIEvents.hideCustom(event => {
    // Hide items based on NBT or other criteria if needed
    // Example: event.hide('item', item => item.hasTag('hidden'))
});
