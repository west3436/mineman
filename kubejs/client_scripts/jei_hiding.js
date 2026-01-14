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
        'createnuclear:steel_ingot',

        // Duplicate steel blocks (keeping TFMG as primary)
        'immersiveengineering:storage_steel',
        'mekanism:block_steel',
        'tconstruct:steel_block',
        'createnuclear:steel_block',

        // Duplicate steel nuggets (keeping TFMG as primary)
        'immersiveengineering:nugget_steel',
        'mekanism:nugget_steel',
        'createnuclear:steel_nugget',

        // Duplicate lead ingots (keeping TFMG as primary)
        'immersiveengineering:ingot_lead',
        'mekanism:ingot_lead',
        'createnuclear:lead_ingot',

        // Duplicate lead blocks (keeping TFMG as primary)
        'createnuclear:lead_block',
        'createnuclear:raw_lead_block',

        // Duplicate lead plates (keeping TFMG as primary)
        'immersiveengineering:plate_lead',

        // Duplicate lead dusts (keeping Mekanism as primary)
        'immersiveengineering:dust_lead',

        // Duplicate aluminum ingots and related items (keeping TFMG as primary)
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:plate_aluminum',

        // Duplicate constantan ingots (keeping TFMG as primary)
        'immersiveengineering:ingot_constantan',

        // Duplicate nickel ingots (keeping TFMG as primary)
        'immersiveengineering:ingot_nickel',

        // Duplicate plastic items (keeping TFMG plastic_sheet as primary)
        'pneumaticcraft:plastic',
        'industrialforegoing:plastic',

        // ChemLib duplicate dusts (keeping other mod variants as primary)
        // ChemLib vs IE duplicates
        'chemlib:aluminum_dust',
        'chemlib:copper_dust',
        'chemlib:gold_dust',
        'chemlib:iron_dust',
        'chemlib:lead_dust',
        'chemlib:nickel_dust',
        'chemlib:silver_dust',
        'chemlib:sulfur_dust',

        // ChemLib vs Mekanism duplicates
        'chemlib:coal_dust',
        'chemlib:diamond_dust',
        'chemlib:emerald_dust',
        'chemlib:tin_dust',
        'chemlib:uranium_dust',
        // Note: copper, gold, iron, lead, sulfur already listed in the "ChemLib vs IE duplicates" section above

        // Electrum duplicates (keeping IE as primary)
        'createaddition:electrum_ingot',
        'createaddition:electrum_sheet',
        'createaddition:electrum_wire',

        // Silver duplicates (keeping IE as primary)
        'chemlib:silver_ingot',
        'chemlib:silver_plate',
        'chemlib:silver_dust',

        // Duplicate wires (keeping Create Additions as primary for most)
        'immersiveengineering:wire_copper',
        'tfmg:copper_wire',
        'immersiveengineering:wire_electrum',
        // Single-source wires (aluminum, lead, steel, constantan) remain visible as primaries
        // Create Additions wires (gold, iron, electrum) are kept as primary

        // Gears - Currently no duplicates detected, each mod provides unique materials
        // Industrial Foregoing: iron/gold/diamond gears
        // Forestry: copper/bronze/tin gears  
        // PneumaticCraft: compressed_iron_gear (unique material, not included in unification)
        // If future mods add duplicate gears, hide them here
        // Example: 'some_other_mod:iron_gear', // if another mod adds iron gear

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

    // Hide duplicate fluids (keeping TFMG as primary for oil refinery chain)
    const HIDDEN_FLUID_DUPLICATES = [
        // PneumaticCraft LPG (TFMG is primary)
        'pneumaticcraft:lpg',

        // ChemLib gases (TFMG is primary for refinery chain)
        'chemlib:propane',
        'chemlib:butane',

        'forestry:honey',
        'growthcraft_apiary:honey_fluid_source',
        'tconstruct:honey',
        // TFMG molten steel
        'tfmg:molten_steel',
        // PneumaticCraft fluids
        'pneumaticcraft:diesel',
        'pneumaticcraft:gasoline',
        'pneumaticcraft:kerosene',
        'pneumaticcraft:lubricant',
        'pneumaticcraft:oil', // crude oil

        // TFMG fluids
        'tfmg:diesel',
        'tfmg:gasoline',
        'tfmg:kerosene',
        'tfmg:naphtha',
        'tfmg:crude_oil',
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
