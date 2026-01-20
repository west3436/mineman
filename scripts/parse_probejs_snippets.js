// Parse ProbeJS snippets file and export clean registry lists
// Run with: node parse_probejs_snippets.js

const fs = require('fs');
const path = require('path');

const snippetsPath = path.join(__dirname, '.vscode', 'probe.code-snippets');
const outputPath = path.join(__dirname, 'exported_registries.json');
const outputMarkdownPath = path.join(__dirname, 'registry_reference.md');

function parseSnippetsFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const snippets = JSON.parse(content);
    
    const registries = {};
    const tags = {};
    
    for (const [key, value] of Object.entries(snippets)) {
        // Skip non-registry snippets
        if (!key.startsWith('probejs$$') && !key.startsWith('probejs_tag$$')) {
            continue;
        }
        
        const isTag = key.startsWith('probejs_tag$$');
        const registryName = key.replace('probejs$$', '').replace('probejs_tag$$', '');
        
        // Extract items from the body
        // Body format: ["\"${1|item1,item2,item3|}\"$0"]
        if (value.body && value.body[0]) {
            const bodyStr = value.body[0];
            // Extract between |...|
            const match = bodyStr.match(/\$\{1\|([^}]+)\|\}/);
            if (match) {
                const items = match[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
                
                if (isTag) {
                    tags[registryName] = items;
                } else {
                    registries[registryName] = items;
                }
            }
        }
    }
    
    return { registries, tags };
}

function generateMarkdown(registries, tags) {
    let md = '# Minecraft Registry Reference\n\n';
    md += `Generated: ${new Date().toISOString()}\n\n`;
    md += '## Table of Contents\n\n';
    
    // TOC
    const sortedRegistries = Object.keys(registries).sort();
    for (const name of sortedRegistries) {
        const anchor = name.replace(/[:/]/g, '').toLowerCase();
        md += `- [${name}](#${anchor}) (${registries[name].length} entries)\n`;
    }
    md += '\n---\n\n';
    
    // Registry sections
    for (const name of sortedRegistries) {
        const items = registries[name];
        const anchor = name.replace(/[:/]/g, '').toLowerCase();
        md += `## ${name}\n\n`;
        md += `**Count:** ${items.length}\n\n`;
        
        // Show tags if available
        if (tags[name]) {
            md += `**Tags:** ${tags[name].length}\n\n`;
        }
        
        // Group by namespace
        const byNamespace = {};
        for (const item of items) {
            const [ns, id] = item.includes(':') ? item.split(':') : ['minecraft', item];
            if (!byNamespace[ns]) byNamespace[ns] = [];
            byNamespace[ns].push(id);
        }
        
        for (const [ns, ids] of Object.entries(byNamespace).sort()) {
            md += `### ${ns}\n\n`;
            md += '```\n';
            md += ids.sort().join('\n');
            md += '\n```\n\n';
        }
    }
    
    return md;
}

function generateSimpleLists(registries) {
    const simplified = {};
    
    for (const [name, items] of Object.entries(registries)) {
        // Create a simple name
        const simpleName = name
            .replace('minecraft:', '')
            .replace('worldgen/', '')
            .replace(/\//g, '_');
        
        simplified[simpleName] = items.sort();
    }
    
    return simplified;
}

// Main execution
try {
    console.log('Parsing ProbeJS snippets file...');
    const { registries, tags } = parseSnippetsFile(snippetsPath);
    
    console.log('\nFound registries:');
    for (const [name, items] of Object.entries(registries).sort()) {
        console.log(`  ${name}: ${items.length} items`);
    }
    
    console.log('\nFound tag registries:');
    for (const [name, items] of Object.entries(tags).sort()) {
        console.log(`  ${name}: ${items.length} tags`);
    }
    
    // Export full data
    const exportData = {
        _meta: {
            generated: new Date().toISOString(),
            source: 'ProbeJS snippets',
            description: 'Minecraft modpack registry data for AI agents'
        },
        registries: registries,
        tags: tags
    };
    
    fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2));
    console.log(`\n✓ Exported to: ${outputPath}`);
    
    // Also export simplified version
    const simplifiedPath = path.join(__dirname, 'registries_simple.json');
    fs.writeFileSync(simplifiedPath, JSON.stringify(generateSimpleLists(registries), null, 2));
    console.log(`✓ Simplified export: ${simplifiedPath}`);
    
    // Generate markdown reference
    const markdown = generateMarkdown(registries, tags);
    fs.writeFileSync(outputMarkdownPath, markdown);
    console.log(`✓ Markdown reference: ${outputMarkdownPath}`);
    
    // Export individual registry files
    const registriesDir = path.join(__dirname, 'registry_exports');
    if (!fs.existsSync(registriesDir)) {
        fs.mkdirSync(registriesDir);
    }
    
    for (const [name, items] of Object.entries(registries)) {
        const filename = name.replace(/[:/]/g, '_') + '.txt';
        fs.writeFileSync(path.join(registriesDir, filename), items.sort().join('\n'));
    }
    console.log(`✓ Individual files: ${registriesDir}/`);
    
    console.log('\n=== Summary ===');
    console.log(`Total registries: ${Object.keys(registries).length}`);
    console.log(`Total tag categories: ${Object.keys(tags).length}`);
    console.log(`Total items: ${Object.values(registries).reduce((a, b) => a + b.length, 0)}`);
    console.log(`Total tags: ${Object.values(tags).reduce((a, b) => a + b.length, 0)}`);
    
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
