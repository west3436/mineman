// priority: 92
// Unified Steel - Recipe Removal Script
// This script removes duplicate steel production methods and hides Tinker's Construct steel
// The primary steel source is Immersive Engineering - all other methods are removed

ServerEvents.recipes(event => {
    // ==================== ELECTRODYNAMICS STEEL ====================
    // Remove the Electrodynamics iron blasting recipe that produces steel
    // This is typically a blasting recipe that converts iron to steel
    event.remove({ type: 'electrodynamics:mineral_crusher_recipe', output: 'electrodynamics:ingotsteel' });
    event.remove({ type: 'electrodynamics:mineral_grinder_recipe', output: 'electrodynamics:ingotsteel' });
    event.remove({ type: 'minecraft:blasting', output: 'electrodynamics:ingotsteel' });
    event.remove({ type: 'minecraft:smelting', output: 'electrodynamics:ingotsteel' });
    // Remove any other Electrodynamics steel recipes
    event.remove({ mod: 'electrodynamics', output: 'electrodynamics:ingotsteel' });
    event.remove({ mod: 'electrodynamics', output: 'electrodynamics:nuggetsteel' });
    event.remove({ mod: 'electrodynamics', output: 'electrodynamics:duststeel' });
    event.remove({ mod: 'electrodynamics', output: 'electrodynamics:platesteel' });

    // ==================== CREATE: GUNSMITHING (CGS) STEEL ====================
    // Remove the CGS superheated mixer recipe that produces steel from iron and coal dust
    event.remove({ type: 'create:mixing', output: 'cgs:steel_ingot' });
    // Remove any other CGS steel recipes
    event.remove({ mod: 'cgs', output: 'cgs:steel_ingot' });
    event.remove({ mod: 'cgs', output: 'cgs:steel_nugget' });
    event.remove({ mod: 'cgs', output: 'cgs:steel_block' });
    event.remove({ mod: 'cgs', output: 'cgs:steel_sheet' });

    // ==================== TINKERS CONSTRUCT STEEL ====================
    // Remove all Tinker's Construct steel recipes
    // This includes crafting recipes, foundry recipes, and alloying recipes
    
    // Remove crafting recipes for Tinkers steel items
    event.remove({ output: 'tconstruct:steel_ingot' });
    event.remove({ output: 'tconstruct:steel_nugget' });
    event.remove({ output: 'tconstruct:steel_block' });
    event.remove({ output: 'tconstruct:steel_cluster' });
    event.remove({ output: 'tconstruct:steel_shard' });
    
    // Remove foundry/smeltery recipes that produce molten steel (Tinkers)
    // These are casting/solidifying recipes that produce steel items
    event.remove({ type: 'tconstruct:casting_table', output: 'tconstruct:steel_ingot' });
    event.remove({ type: 'tconstruct:casting_table', output: 'tconstruct:steel_nugget' });
    event.remove({ type: 'tconstruct:casting_basin', output: 'tconstruct:steel_block' });
    
    // Remove alloying recipes that create molten steel in Tinkers
    event.remove({ type: 'tconstruct:alloy', output: 'tconstruct:molten_steel' });
    
    // Remove melting recipes for steel (so items don't melt into Tinkers steel)
    event.remove({ type: 'tconstruct:melting', id: /tconstruct:.*steel.*/ });
    
    // Remove any other foundry recipes with steel as product
    event.remove({ type: 'tconstruct:casting_table', result: { item: 'tconstruct:steel_ingot' } });
    event.remove({ type: 'tconstruct:casting_basin', result: { item: 'tconstruct:steel_block' } });

    console.log('[Unified Steel] Removed duplicate steel production recipes from Electrodynamics, CGS, and Tinkers Construct');
});
