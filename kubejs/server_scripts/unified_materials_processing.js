// priority: 96
// Unified Materials - Ore Processing Recipes
// Ensures all mod ores output the unified primary items when processed

ServerEvents.recipes(event => {
    
    // ==================== SMELTING/BLASTING ORE RECIPES ====================
    // These ensure ores from any mod smelt into the primary ingot
    
    const oreSmeltingRecipes = [
        // Lead ores -> IE Lead Ingot
        { ores: ['mekanism:lead_ore', 'mekanism:deepslate_lead_ore', 'tfmg:lead_ore', 'tfmg:deepslate_lead_ore', 'electrodynamics:orelead', 'electrodynamics:deepslateorelead', 'cgs:lead_ore'], output: 'immersiveengineering:ingot_lead', xp: 0.7 },
        
        // Silver ores -> IE Silver Ingot
        { ores: ['electrodynamics:oresilver', 'electrodynamics:deepslateoresilver'], output: 'immersiveengineering:ingot_silver', xp: 1.0 },
        
        // Tin ores -> Mekanism Tin Ingot
        { ores: ['forestry:tin_ore', 'forestry:deepslate_tin_ore', 'electrodynamics:oretin', 'electrodynamics:deepslateoretin'], output: 'mekanism:ingot_tin', xp: 0.7 },
        
        // Uranium ores -> IE Uranium Ingot
        { ores: ['mekanism:uranium_ore', 'mekanism:deepslate_uranium_ore', 'electrodynamics:oreuranium', 'electrodynamics:deepslateoreuranium'], output: 'immersiveengineering:ingot_uranium', xp: 1.0 },
        
        // Nickel ores -> IE Nickel Ingot
        { ores: ['tfmg:nickel_ore', 'tfmg:deepslate_nickel_ore'], output: 'immersiveengineering:ingot_nickel', xp: 0.7 },
        
        // Aluminum ores -> IE Aluminum Ingot
        { ores: ['electrodynamics:orealuminum', 'electrodynamics:deepslateorealuminum'], output: 'immersiveengineering:ingot_aluminum', xp: 0.7 },
        
        // Lithium ores -> TFMG Lithium Ingot
        { ores: ['electrodynamics:orelithium', 'electrodynamics:deepslateorelithium'], output: 'tfmg:lithium_ingot', xp: 1.0 },
        
        // Fluorite ores -> Mekanism Fluorite Gem (note: fluorite is a gem, not ingot)
        { ores: ['electrodynamics:orefluorite', 'electrodynamics:deepslateorefluorite'], output: 'mekanism:fluorite_gem', xp: 0.7 },
    ];
    
    oreSmeltingRecipes.forEach(recipe => {
        recipe.ores.forEach(ore => {
            const oreName = ore.replace(':', '_').replace(/\//g, '_');
            // Smelting
            event.smelting(recipe.output, ore)
                .xp(recipe.xp)
                .id(`kubejs:unified/smelting/${oreName}`);
            // Blasting
            event.blasting(recipe.output, ore)
                .xp(recipe.xp)
                .id(`kubejs:unified/blasting/${oreName}`);
        });
    });

    // ==================== RAW ORE SMELTING RECIPES ====================
    // Ensures raw ores from any mod smelt into the primary ingot
    
    const rawSmeltingRecipes = [
        // Raw Lead -> IE Lead Ingot
        { raws: ['mekanism:raw_lead', 'tfmg:raw_lead', 'cgs:raw_lead'], output: 'immersiveengineering:ingot_lead', xp: 0.7 },
        
        // Raw Silver -> IE Silver Ingot
        { raws: ['electrodynamics:raworesilver'], output: 'immersiveengineering:ingot_silver', xp: 1.0 },
        
        // Raw Tin -> Mekanism Tin Ingot
        { raws: ['forestry:raw_tin', 'electrodynamics:raworetin'], output: 'mekanism:ingot_tin', xp: 0.7 },
        
        // Raw Uranium -> IE Uranium Ingot
        { raws: ['mekanism:raw_uranium', 'electrodynamics:raworeuranium'], output: 'immersiveengineering:ingot_uranium', xp: 1.0 },
        
        // Raw Nickel -> IE Nickel Ingot
        { raws: ['tfmg:raw_nickel'], output: 'immersiveengineering:ingot_nickel', xp: 0.7 },
        
        // Raw Lithium -> TFMG Lithium Ingot
        { raws: ['electrodynamics:raworelepidolite'], output: 'tfmg:lithium_ingot', xp: 1.0 },
    ];
    
    rawSmeltingRecipes.forEach(recipe => {
        recipe.raws.forEach(raw => {
            const rawName = raw.replace(':', '_').replace(/\//g, '_');
            // Smelting
            event.smelting(recipe.output, raw)
                .xp(recipe.xp)
                .id(`kubejs:unified/smelting/${rawName}`);
            // Blasting
            event.blasting(recipe.output, raw)
                .xp(recipe.xp)
                .id(`kubejs:unified/blasting/${rawName}`);
        });
    });

    // ==================== DUST SMELTING RECIPES ====================
    // Ensures dusts from any mod smelt into the primary ingot
    
    const dustSmeltingRecipes = [
        // Lead Dust -> IE Lead Ingot
        { dusts: ['mekanism:dust_lead', 'electrodynamics:dustlead'], output: 'immersiveengineering:ingot_lead' },
        
        // Silver Dust -> IE Silver Ingot
        { dusts: ['electrodynamics:dustsilver'], output: 'immersiveengineering:ingot_silver' },
        
        // Tin Dust -> Mekanism Tin Ingot
        { dusts: ['electrodynamics:dusttin'], output: 'mekanism:ingot_tin' },
        
        // Uranium Dust -> IE Uranium Ingot
        { dusts: ['mekanism:dust_uranium'], output: 'immersiveengineering:ingot_uranium' },
        
        // Steel Dust -> IE Steel Ingot
        { dusts: ['mekanism:dust_steel', 'electrodynamics:duststeel'], output: 'immersiveengineering:ingot_steel' },
        
        // Bronze Dust -> Mekanism Bronze Ingot
        { dusts: ['electrodynamics:dustbronze'], output: 'mekanism:ingot_bronze' },
        
        // Copper Dust -> Copper Ingot
        { dusts: ['mekanism:dust_copper', 'electrodynamics:dustcopper'], output: 'minecraft:copper_ingot' },
        
        // Iron Dust -> Iron Ingot
        { dusts: ['mekanism:dust_iron', 'electrodynamics:dustiron'], output: 'minecraft:iron_ingot' },
        
        // Gold Dust -> Gold Ingot
        { dusts: ['mekanism:dust_gold', 'electrodynamics:dustgold'], output: 'minecraft:gold_ingot' },
        
        // Lithium Dust -> TFMG Lithium Ingot
        { dusts: ['electrodynamics:dustlithium'], output: 'tfmg:lithium_ingot' },
    ];
    
    dustSmeltingRecipes.forEach(recipe => {
        recipe.dusts.forEach(dust => {
            const dustName = dust.replace(':', '_').replace(/\//g, '_');
            // Smelting
            event.smelting(recipe.output, dust)
                .xp(0.35)
                .id(`kubejs:unified/smelting/${dustName}`);
            // Blasting
            event.blasting(recipe.output, dust)
                .xp(0.35)
                .id(`kubejs:unified/blasting/${dustName}`);
        });
    });

    // ==================== NUGGET <-> INGOT RECIPES ====================
    // Ensures consistent packing/unpacking between nuggets and ingots

    const nuggetRecipes = [
        { nugget: 'immersiveengineering:nugget_lead', ingot: 'immersiveengineering:ingot_lead' },
        { nugget: 'immersiveengineering:nugget_silver', ingot: 'immersiveengineering:ingot_silver' },
        { nugget: 'mekanism:nugget_tin', ingot: 'mekanism:ingot_tin' },
        { nugget: 'immersiveengineering:nugget_uranium', ingot: 'immersiveengineering:ingot_uranium' },
        { nugget: 'immersiveengineering:nugget_nickel', ingot: 'immersiveengineering:ingot_nickel' },
        { nugget: 'immersiveengineering:nugget_aluminum', ingot: 'immersiveengineering:ingot_aluminum' },
        { nugget: 'immersiveengineering:nugget_steel', ingot: 'immersiveengineering:ingot_steel' },
        { nugget: 'mekanism:nugget_bronze', ingot: 'mekanism:ingot_bronze' },
        { nugget: 'tfmg:lithium_nugget', ingot: 'tfmg:lithium_ingot' },
        { nugget: 'immersiveengineering:nugget_constantan', ingot: 'immersiveengineering:ingot_constantan' },
        { nugget: 'immersiveengineering:nugget_electrum', ingot: 'immersiveengineering:ingot_electrum' },
    ];

    nuggetRecipes.forEach(recipe => {
        const material = recipe.ingot.split(':')[1].replace('ingot_', '');
        
        // 9 nuggets -> 1 ingot
        event.shaped(recipe.ingot, [
            'NNN',
            'NNN',
            'NNN'
        ], {
            N: recipe.nugget
        }).id(`kubejs:unified/${material}_ingot_from_nuggets`);
        
        // 1 ingot -> 9 nuggets
        event.shapeless(Item.of(recipe.nugget, 9), [recipe.ingot])
            .id(`kubejs:unified/${material}_nuggets_from_ingot`);
    });

    console.log('[Unified Materials] Ore processing recipes added');
});
