// kubejs/server_scripts/dump_registry.js
// Dumps all Minecraft registry entries to a file for CI comparison
// Only runs when the DUMP_REGISTRY environment variable is set

ServerEvents.loaded(event => {
    // Check if we should dump registry (set by CI)
    let shouldDump = java('java.lang.System').getenv('DUMP_REGISTRY');
    if (!shouldDump) {
        console.log('[Registry Dump] DUMP_REGISTRY not set, skipping registry dump');
        return;
    }

    console.log('[Registry Dump] Starting registry dump...');

    let registries = {};
    
    // Use Forge's registry system to access built-in registries
    let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
    let BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');

    // Define registries to dump with their accessor
    let registryDefs = [
        { name: 'minecraft:item', registry: ForgeRegistries.ITEMS },
        { name: 'minecraft:block', registry: ForgeRegistries.BLOCKS },
        { name: 'minecraft:entity_type', registry: ForgeRegistries.ENTITY_TYPES },
        { name: 'minecraft:fluid', registry: ForgeRegistries.FLUIDS },
        { name: 'minecraft:potion', registry: ForgeRegistries.POTIONS },
        { name: 'minecraft:enchantment', registry: ForgeRegistries.ENCHANTMENTS },
        { name: 'minecraft:mob_effect', registry: ForgeRegistries.MOB_EFFECTS },
        { name: 'minecraft:block_entity_type', registry: ForgeRegistries.BLOCK_ENTITY_TYPES },
        { name: 'minecraft:recipe_type', registry: ForgeRegistries.RECIPE_TYPES },
        { name: 'minecraft:recipe_serializer', registry: ForgeRegistries.RECIPE_SERIALIZERS },
        { name: 'minecraft:sound_event', registry: ForgeRegistries.SOUND_EVENTS },
        { name: 'minecraft:particle_type', registry: ForgeRegistries.PARTICLE_TYPES },
        { name: 'minecraft:menu', registry: ForgeRegistries.MENU_TYPES },
        { name: 'minecraft:attribute', registry: ForgeRegistries.ATTRIBUTES }
    ];

    registryDefs.forEach(def => {
        try {
            let entries = [];
            let registry = def.registry;
            
            if (registry) {
                registry.getKeys().forEach(location => {
                    entries.push(location.toString());
                });
            }
            
            entries.sort();
            registries[def.name] = entries;
            console.log('[Registry Dump] Dumped ' + entries.length + ' entries from ' + def.name);
        } catch (e) {
            console.log('[Registry Dump] Could not dump ' + def.name + ': ' + e);
        }
    });

    // Also try to dump biomes from the server's registry access
    try {
        let server = event.getServer();
        let Registries = Java.loadClass('net.minecraft.core.registries.Registries');
        let biomeRegistry = server.registryAccess().registryOrThrow(Registries.BIOME);
        let biomeEntries = [];
        
        biomeRegistry.keySet().forEach(location => {
            biomeEntries.push(location.toString());
        });
        
        biomeEntries.sort();
        registries['minecraft:biome'] = biomeEntries;
        console.log('[Registry Dump] Dumped ' + biomeEntries.length + ' entries from minecraft:biome');
    } catch (e) {
        console.log('[Registry Dump] Could not dump minecraft:biome: ' + e);
    }

    // Write to file
    let outputPath = 'registry_dump.txt';
    let lines = [];
    
    Object.keys(registries).sort().forEach(registryName => {
        lines.push('=== ' + registryName + ' ===');
        registries[registryName].forEach(entry => {
            lines.push(entry);
        });
        lines.push('');
    });

    // Use Java file writing
    let Files = Java.loadClass('java.nio.file.Files');
    let Paths = Java.loadClass('java.nio.file.Paths');
    let StandardCharsets = Java.loadClass('java.nio.charset.StandardCharsets');
    let path = Paths.get(outputPath);
    
    // Convert JavaScript array to Java List for Files.write
    let ArrayList = Java.loadClass('java.util.ArrayList');
    let javaLines = new ArrayList();
    lines.forEach(line => javaLines.add(line));
    
    Files.write(path, javaLines, StandardCharsets.UTF_8);

    console.log('[Registry Dump] Registry dump complete! Written to ' + outputPath);
});
