// priority: 101
// Unified Materials - Main Configuration
// This file contains the master material unification configuration

/**
 * =============================================================================
 * UNIFIED MATERIALS SYSTEM
 * =============================================================================
 * 
 * This system unifies materials across mods to prevent duplicate items and
 * provide a consistent crafting experience.
 * 
 * PRIORITY ORDER (highest to lowest):
 * 1. Create (create:)
 * 2. Immersive Engineering (immersiveengineering:)
 * 3. Mekanism (mekanism:)
 * 4. Create: The Factory Must Grow (tfmg:)
 * 5. Create: Big Cannons (createbigcannons:)
 * 6. All other mods (electrodynamics:, forestry:, cgs:, etc.)
 * 
 * =============================================================================
 * MATERIAL PRIMARY SOURCES
 * =============================================================================
 * 
 * | Material    | Primary Source         | Notes                              |
 * |-------------|------------------------|------------------------------------|
 * | Zinc        | Create                 | Unique to Create                   |
 * | Brass       | Create                 | Create's signature alloy           |
 * | Lead        | Immersive Engineering  | IE has most complete set           |
 * | Silver      | Immersive Engineering  | IE has most complete set           |
 * | Nickel      | Immersive Engineering  | IE has most complete set           |
 * | Aluminum    | Immersive Engineering  | IE has most complete set           |
 * | Uranium     | Immersive Engineering  | IE has ore gen, plates             |
 * | Electrum    | Immersive Engineering  | Unique to IE                       |
 * | Constantan  | Immersive Engineering  | IE has priority over TFMG          |
 * | Steel       | Immersive Engineering  | IE is the authoritative source     |
 * | Tin         | Mekanism               | Mekanism has most complete set     |
 * | Bronze      | Mekanism               | Mekanism has most complete set     |
 * | Osmium      | Mekanism               | Unique to Mekanism                 |
 * | Lithium     | TFMG                   | TFMG has ore gen                   |
 * | Cast Iron   | Create: Big Cannons    | CBC has priority over TFMG         |
 * | Fluorite    | Mekanism               | Mekanism has ore gen               |
 * | Salt        | Mekanism               | Mekanism has ore gen               |
 * | Sulfur      | Immersive Engineering  | IE has dust_sulfur                 |
 * 
 * =============================================================================
 * FILES IN THIS SYSTEM
 * =============================================================================
 * 
 * Server Scripts:
 * - unified_materials_config.js  (this file) - Configuration and documentation
 * - unified_materials_tags.js    - Tag unification (forge tags)
 * - unified_materials_recipes.js - Recipe output replacement
 * - unified_materials_conversions.js - Item conversion recipes
 * - unified_materials_processing.js - Ore processing recipes
 * 
 * Client Scripts:
 * - unified_materials_jei.js - Hide duplicate items from JEI/REI
 * 
 * =============================================================================
 */

// Export configuration for use by other scripts
global.UNIFIED_MATERIALS = {
    // Priority levels (lower = higher priority)
    PRIORITY: {
        CREATE: 1,
        IMMERSIVE_ENGINEERING: 2,
        MEKANISM: 3,
        TFMG: 4,
        CREATE_BIG_CANNONS: 4, // Same as TFMG
        OTHER: 5
    },

    // Primary items for each material type
    PRIMARY: {
        // Ingots
        LEAD_INGOT: 'immersiveengineering:ingot_lead',
        SILVER_INGOT: 'immersiveengineering:ingot_silver',
        TIN_INGOT: 'mekanism:ingot_tin',
        URANIUM_INGOT: 'immersiveengineering:ingot_uranium',
        NICKEL_INGOT: 'immersiveengineering:ingot_nickel',
        ALUMINUM_INGOT: 'immersiveengineering:ingot_aluminum',
        STEEL_INGOT: 'immersiveengineering:ingot_steel',
        BRONZE_INGOT: 'mekanism:ingot_bronze',
        LITHIUM_INGOT: 'tfmg:lithium_ingot',
        CONSTANTAN_INGOT: 'immersiveengineering:ingot_constantan',
        ELECTRUM_INGOT: 'immersiveengineering:ingot_electrum',
        ZINC_INGOT: 'create:zinc_ingot',
        BRASS_INGOT: 'create:brass_ingot',
        OSMIUM_INGOT: 'mekanism:ingot_osmium',
        CAST_IRON_INGOT: 'createbigcannons:cast_iron_ingot',

        // Nuggets
        LEAD_NUGGET: 'immersiveengineering:nugget_lead',
        SILVER_NUGGET: 'immersiveengineering:nugget_silver',
        TIN_NUGGET: 'mekanism:nugget_tin',
        URANIUM_NUGGET: 'immersiveengineering:nugget_uranium',
        NICKEL_NUGGET: 'immersiveengineering:nugget_nickel',
        ALUMINUM_NUGGET: 'immersiveengineering:nugget_aluminum',
        STEEL_NUGGET: 'immersiveengineering:nugget_steel',
        BRONZE_NUGGET: 'mekanism:nugget_bronze',
        COPPER_NUGGET: 'create:copper_nugget',
        ZINC_NUGGET: 'create:zinc_nugget',
        BRASS_NUGGET: 'create:brass_nugget',
        OSMIUM_NUGGET: 'mekanism:nugget_osmium',
        CONSTANTAN_NUGGET: 'immersiveengineering:nugget_constantan',
        ELECTRUM_NUGGET: 'immersiveengineering:nugget_electrum',

        // Raw Materials
        RAW_LEAD: 'immersiveengineering:raw_lead',
        RAW_SILVER: 'immersiveengineering:raw_silver',
        RAW_TIN: 'mekanism:raw_tin',
        RAW_URANIUM: 'immersiveengineering:raw_uranium',
        RAW_NICKEL: 'immersiveengineering:raw_nickel',
        RAW_ALUMINUM: 'immersiveengineering:raw_aluminum',
        RAW_LITHIUM: 'tfmg:raw_lithium',
        RAW_ZINC: 'create:raw_zinc',
        RAW_OSMIUM: 'mekanism:raw_osmium',

        // Dusts
        LEAD_DUST: 'immersiveengineering:dust_lead',
        SILVER_DUST: 'immersiveengineering:dust_silver',
        TIN_DUST: 'mekanism:dust_tin',
        URANIUM_DUST: 'immersiveengineering:dust_uranium',
        NICKEL_DUST: 'immersiveengineering:dust_nickel',
        ALUMINUM_DUST: 'immersiveengineering:dust_aluminum',
        STEEL_DUST: 'immersiveengineering:dust_steel',
        BRONZE_DUST: 'mekanism:dust_bronze',
        COPPER_DUST: 'immersiveengineering:dust_copper',
        IRON_DUST: 'immersiveengineering:dust_iron',
        GOLD_DUST: 'immersiveengineering:dust_gold',
        SULFUR_DUST: 'immersiveengineering:dust_sulfur',
        LITHIUM_DUST: 'mekanism:dust_lithium',
        OSMIUM_DUST: 'mekanism:dust_osmium',
        ELECTRUM_DUST: 'immersiveengineering:dust_electrum',
        CONSTANTAN_DUST: 'immersiveengineering:dust_constantan',

        // Plates
        LEAD_PLATE: 'immersiveengineering:plate_lead',
        SILVER_PLATE: 'immersiveengineering:plate_silver',
        URANIUM_PLATE: 'immersiveengineering:plate_uranium',
        NICKEL_PLATE: 'immersiveengineering:plate_nickel',
        ALUMINUM_PLATE: 'immersiveengineering:plate_aluminum',
        STEEL_PLATE: 'immersiveengineering:plate_steel',
        COPPER_PLATE: 'immersiveengineering:plate_copper',
        IRON_PLATE: 'immersiveengineering:plate_iron',
        GOLD_PLATE: 'immersiveengineering:plate_gold',
        ELECTRUM_PLATE: 'immersiveengineering:plate_electrum',
        CONSTANTAN_PLATE: 'immersiveengineering:plate_constantan',
    }
};

console.log('[Unified Materials] Configuration loaded');
console.log('[Unified Materials] Priority: Create > IE > Mekanism > TFMG > Others');
