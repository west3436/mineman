// kubejs/client_scripts/item_tooltips.js
// Add tier indicators to progression items

ItemEvents.tooltip(event => {
    console.log('Adding tier tooltips to items...');

    // Tier progression items with tooltips
    const TIER_ITEMS = {
        2: [ // Steel & Electricity
            'tfmg:steel_ingot',
            'tfmg:steel_sheet',
            'immersiveengineering:ingot_steel',
            'storagedrawers:oak_full_drawers_1',
        ],
        3: [ // Oil & Plastic
            'tfmg:plastic_sheet',
            'buildinggadgets2:gadget_building',
            'sophisticatedstorage:barrel',
            'sophisticatedbackpacks:backpack',
        ],
        4: [ // Chemistry
            'pneumaticcraft:plastic',
            'pneumaticcraft:pressure_tube',
            'mekanism:alloy_infused',
            'mekanism:basic_chemical_tank',
            'rftoolsbase:machine_frame',
            'rftoolsbuilder:builder',
            'alchemistry:dissolver',
            'alchemistry:combiner',
            'destroy:vat_controller',
            'destroy:centrifuge',
            'destroy:bubble_cap',
            'destroy:redox_electrolyzer',
            'modularrouters:modular_router',
            'compactmachines:machine_tiny',
        ],
        5: [ // Electronics
            'pneumaticcraft:printed_circuit_board',
            'mineman:advanced_circuit',
            'industrialforegoing:machine_frame_pity',
            'computercraft:computer_normal',
            'hostilenetworks:sim_chamber',
            'hostilenetworks:deep_learner',
        ],
        6: [ // Future Tech
            'ae2:controller',
            'ae2:drive',
            'xnet:controller',
        ],
    };

    Object.entries(TIER_ITEMS).forEach(([tier, items]) => {
        items.forEach(item => {
            try {
                event.add(item, [
                    Text.gray(`Tech Tier ${tier}`),
                    Text.darkGray(`Progression gate item`)
                ]);
            } catch (e) {
                console.warn(`Could not add tooltip to ${item}: ${e}`);
            }
        });
    });

    // Add tooltips for unified items explaining the unification
    const UNIFIED_TOOLTIP_ITEMS = [
        'create:iron_sheet',
        'create:copper_sheet',
        'create:golden_sheet',
        'tfmg:steel_sheet',
        'tfmg:plastic_sheet',
    ];

    UNIFIED_TOOLTIP_ITEMS.forEach(item => {
        try {
            event.add(item, Text.aqua('✓ Cross-mod compatible'));
        } catch (e) {
            console.warn(`Could not add unification tooltip to ${item}: ${e}`);
        }
    });

    // Add tooltips for alternative chemistry paths
    const ALCHEMISTRY_MACHINES = [
        'alchemistry:dissolver',
        'alchemistry:combiner',
        'alchemistry:atomizer',
        'alchemistry:liquifier',
        'alchemistry:evaporator',
        'alchemistry:fission_controller',
        'alchemistry:fusion_controller'
    ];

    const DESTROY_MACHINES = [
        'destroy:vat_controller',
        'destroy:centrifuge',
        'destroy:bubble_cap',
        'destroy:redox_electrolyzer',
        'destroy:mechanical_mixer'
    ];

    ALCHEMISTRY_MACHINES.forEach(item => {
        try {
            event.add(item, [
                Text.yellow('⚗ Alchemistry Path'),
                Text.gray('Alternative: Create: Destroy machines')
            ]);
        } catch (e) {
            console.warn(`Could not add path tooltip to ${item}: ${e}`);
        }
    });

    DESTROY_MACHINES.forEach(item => {
        try {
            event.add(item, [
                Text.yellow('⚙ Create: Destroy Path'),
                Text.gray('Alternative: Alchemistry machines')
            ]);
        } catch (e) {
            console.warn(`Could not add path tooltip to ${item}: ${e}`);
        }
    });

    console.log('Tier tooltips complete!');
});
