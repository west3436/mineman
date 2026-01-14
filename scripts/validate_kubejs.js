#!/usr/bin/env node
/**
 * Validate KubeJS script files.
 * 
 * This script checks all JavaScript files in the kubejs directory
 * to ensure they are properly formatted and have valid syntax.
 */

const fs = require('fs');
const path = require('path');
const { parse } = require('acorn');

/**
 * Find all JavaScript files in the kubejs directory.
 * @param {string} baseDir - Base directory to search from
 * @returns {string[]} Array of file paths
 */
function findKubeJSFiles(baseDir) {
    const kubeJSPath = path.join(baseDir, 'kubejs');
    
    if (!fs.existsSync(kubeJSPath)) {
        console.log(`Info: KubeJS directory not found at ${kubeJSPath}`);
        console.log('This is expected if no KubeJS scripts have been added yet.');
        return [];
    }
    
    const files = [];
    
    function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                walk(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.js')) {
                files.push(fullPath);
            }
        }
    }
    
    walk(kubeJSPath);
    return files;
}

/**
 * Validate a single JavaScript file.
 * @param {string} filePath - Path to the file to validate
 * @returns {{success: boolean, error: string}} Validation result
 */
function validateJSFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        
        // Parse the JavaScript file using acorn
        parse(content, {
            ecmaVersion: 2020,
            sourceType: 'script',
            locations: true
        });
        
        return { success: true, error: '' };
    } catch (error) {
        return { 
            success: false, 
            error: `${error.message} (line ${error.loc?.line || 'unknown'})` 
        };
    }
}

/**
 * Main validation function.
 */
function main() {
    const repoRoot = path.resolve(__dirname, '..');
    const jsFiles = findKubeJSFiles(repoRoot);
    
    if (jsFiles.length === 0) {
        console.log('✓ No KubeJS files found to validate. Skipping check.');
        process.exit(0);
    }
    
    console.log(`Found ${jsFiles.length} KubeJS file(s) to validate...`);
    console.log();
    
    const failedFiles = [];
    
    for (const jsFile of jsFiles.sort()) {
        const relativePath = path.relative(repoRoot, jsFile);
        const result = validateJSFile(jsFile);
        
        if (result.success) {
            console.log(`✓ ${relativePath}`);
        } else {
            console.log(`✗ ${relativePath}`);
            console.log(`  Error: ${result.error}`);
            failedFiles.push({ path: relativePath, error: result.error });
        }
    }
    
    console.log();
    
    if (failedFiles.length > 0) {
        console.log(`❌ Validation failed for ${failedFiles.length} file(s):`);
        for (const { path, error } of failedFiles) {
            console.log(`  - ${path}: ${error}`);
        }
        console.log();
        console.log('Please fix the syntax errors in the above files.');
        process.exit(1);
    } else {
        console.log(`✅ All ${jsFiles.length} KubeJS file(s) have valid syntax!`);
        process.exit(0);
    }
}

main();
