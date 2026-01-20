// priority: 97
// Unified Materials - Hide Duplicate Items from JEI/REI
// This hides non-primary variants from recipe viewers to reduce clutter

JEIEvents.hideItems(event => {
    // List of items to hide (non-primary variants)
    const hiddenItems = [
        // ==================== LEAD (Primary: IE) ====================
        'mekanism:ingot_lead',
        'tfmg:lead_ingot',
        'electrodynamics:ingotlead',
        'cgs:lead_ingot',
        'mekanism:nugget_lead',
        'tfmg:lead_nugget',
        'cgs:lead_nugget',
        'mekanism:raw_lead',
        'tfmg:raw_lead',
        'cgs:raw_lead',
        'mekanism:dust_lead',
        'electrodynamics:dustlead',
        'electrodynamics:platelead',
        'mekanism:block_raw_lead',
        'tfmg:raw_lead_block',
        'electrodynamics:raworeblocklead',
        'cgs:raw_lead_block',
        // Lead ores (non-IE)
        'mekanism:lead_ore',
        'mekanism:deepslate_lead_ore',
        'tfmg:lead_ore',
        'tfmg:deepslate_lead_ore',
        'electrodynamics:orelead',
        'electrodynamics:deepslateorelead',
        'cgs:lead_ore',
        'cgs:deepslate_lead_ore',

        // ==================== SILVER (Primary: IE) ====================
        'electrodynamics:ingotsilver',
        'electrodynamics:nuggetsilver',
        'electrodynamics:raworesilver',
        'electrodynamics:dustsilver',
        'electrodynamics:raworeblocksilver',
        'electrodynamics:oresilver',
        'electrodynamics:deepslateoresilver',

        // ==================== TIN (Primary: Mekanism) ====================
        'forestry:ingot_tin',
        'electrodynamics:ingottin',
        'electrodynamics:nuggettin',
        'forestry:raw_tin',
        'electrodynamics:raworetin',
        'electrodynamics:dusttin',
        'forestry:raw_tin_block',
        'electrodynamics:raworeblocktin',
        // Tin ores (non-Mekanism)
        'forestry:tin_ore',
        'forestry:deepslate_tin_ore',
        'electrodynamics:oretin',
        'electrodynamics:deepslateoretin',

        // ==================== URANIUM (Primary: IE) ====================
        'mekanism:ingot_uranium',
        'mekanism:nugget_uranium',
        'mekanism:raw_uranium',
        'mekanism:dust_uranium',
        'electrodynamics:raworeuranium',
        'mekanism:block_raw_uranium',
        'electrodynamics:raworeblockuranium',
        // Uranium ores (non-IE)
        'mekanism:uranium_ore',
        'mekanism:deepslate_uranium_ore',
        'electrodynamics:oreuranium',
        'electrodynamics:deepslateoreuranium',

        // ==================== NICKEL (Primary: IE) ====================
        'tfmg:nickel_ingot',
        'tfmg:nickel_nugget',
        'tfmg:raw_nickel',
        'tfmg:raw_nickel_block',
        // Nickel ores (non-IE)
        'tfmg:nickel_ore',
        'tfmg:deepslate_nickel_ore',

        // ==================== ALUMINUM (Primary: IE) ====================
        'tfmg:aluminum_ingot',
        'electrodynamics:ingotaluminum',
        'tfmg:aluminum_nugget',
        'electrodynamics:platealuminum',
        // Aluminum ores (non-IE)
        'electrodynamics:orealuminum',
        'electrodynamics:deepslateorealuminum',

        // ==================== STEEL (Primary: IE) ====================
        'mekanism:ingot_steel',
        'tfmg:steel_ingot',
        'electrodynamics:ingotsteel',
        'cgs:steel_ingot',
        'industrialrenewal:ingot_steel',
        'mekanism:nugget_steel',
        'tfmg:steel_nugget',
        'electrodynamics:nuggetsteel',
        'cgs:steel_nugget',
        'mekanism:dust_steel',
        'electrodynamics:duststeel',
        'electrodynamics:platesteel',

        // ==================== BRONZE (Primary: Mekanism) ====================
        'forestry:ingot_bronze',
        'electrodynamics:ingotbronze',
        'electrodynamics:dustbronze',

        // ==================== LITHIUM (Primary: TFMG) ====================
        'electrodynamics:ingotlithium',
        'electrodynamics:dustlithium',
        'electrodynamics:raworelepidolite',
        // Lithium ores (non-TFMG)
        'electrodynamics:orelithium',
        'electrodynamics:deepslateorelithium',

        // ==================== CONSTANTAN (Primary: IE) ====================
        'tfmg:constantan_ingot',
        'tfmg:constantan_nugget',

        // ==================== COPPER NUGGETS (Primary: Create) ====================
        'immersiveengineering:nugget_copper',
        'agricraft:copper_nugget',
        'electrodynamics:nuggetcopper',

        // ==================== DUSTS (Primary: IE unless specified) ====================
        'mekanism:dust_copper',
        'electrodynamics:dustcopper',
        'mekanism:dust_iron',
        'electrodynamics:dustiron',
        'mekanism:dust_gold',
        'electrodynamics:dustgold',
        'mekanism:dust_sulfur',
        'tfmg:sulfur_dust',
        'electrodynamics:dustsulfur',

        // ==================== PLATES (Primary: IE) ====================
        'electrodynamics:platecopper',
        'electrodynamics:plateiron',

        // ==================== CAST IRON (Primary: CBC) ====================
        'tfmg:cast_iron_ingot',
        'tfmg:cast_iron_nugget',

        // ==================== FLUORITE (Primary: Mekanism) ====================
        'electrodynamics:orefluorite',
        'electrodynamics:deepslateorefluorite',
        'electrodynamics:raworefluorite',

        // ==================== SALT (Primary: Mekanism) ====================
        'electrodynamics:dustsalt',
        'electrodynamics:oresalt',
        'electrodynamics:deepslateoresalt',
        'growthcraft:salt_ore',

        // ==================== WIRES (Primary: IE) ====================
        'tfmg:aluminum_wire',
        'tfmg:copper_wire',

        // ==================== STORAGE BLOCKS ====================
        // Lead blocks (non-IE)
        'mekanism:block_lead',
        'cgs:lead_block',
        // Uranium blocks (non-IE)
        'mekanism:block_uranium',
        // Steel blocks (non-IE)
        'mekanism:block_steel',
        'cgs:steel_block',
        'industrialrenewal:block_steel',

        // ==================== COAL COKE (Primary: IE) ====================
        'tfmg:coal_coke',
        'electrodynamics:coalcoke',
        'tfmg:coal_coke_dust',
        'tfmg:coal_coke_block',

        // ==================== SAWDUST (Primary: IE) ====================
        'mekanism:sawdust',

        // ==================== WHEAT FLOUR (Primary: Create) ====================
        'pneumaticcraft:wheat_flour',

        // ==================== DOUGH (Primary: Create) ====================
        'farmersdelight:wheat_dough',

        // ==================== SLAG (Primary: IE) ====================
        'electrodynamics:slag',

        // ==================== CHARCOAL DUST (Primary: Mekanism) ====================
        'cgs:charcoal_dust',

        // ==================== SILICON (Primary: AE2) ====================
        'tfmg:silicon_ingot',

        // ==================== OBSIDIAN DUST (Primary: Mekanism) ====================
        'electrodynamics:dustobsidian',

        // ==================== NETHERITE DUST (Primary: Mekanism) ====================
        'electrodynamics:dustnetherite',

        // ==================== IRON STICKS (Primary: IE) ====================
        'industrialrenewal:stick_iron',

        // ==================== STEEL STICKS (Primary: IE) ====================
        'industrialrenewal:stick_steel',

        // ==================== WOOD PULP (Primary: Create) ====================
        'forestry:wood_pulp',

        // ==================== GRAPHITE ELECTRODE (Primary: IE) ====================
        'tfmg:graphite_electrode',
    ];

    hiddenItems.forEach(item => {
        try {
            event.hide(item);
        } catch (e) {
            // Item might not exist, ignore
        }
    });

    console.log('[Unified Materials] Hidden duplicate items from JEI');
});
