
function Read_Script(event)
{

    Utils.server.runCommand(`say Hello! I am the developer of this pack..`);

    Utils.server.schedule(3 * SECOND, callback=>{
            Utils.server.runCommand(`say Yes, if you played an earlier version of this pack, you may remember a different ending, but...`);
    })

    Utils.server.schedule(6 * SECOND, callback=>{
            Utils.server.runCommand(`say I changed it because that could have been confusing for people not in the gregtech circle.`);
    })

     Utils.server.schedule(9 * SECOND, callback=>{
            Utils.server.runCommand(`say Anyways, you reading this means you probably finished the pack.`);

    })

    Utils.server.schedule(12 * SECOND, callback=>{
            Utils.server.runCommand(`say (Or, you just built one in creative, in which case, disregard this message.)`);
    })

    Utils.server.schedule(15 * SECOND, callback=>{
            Utils.server.runCommand(`say Congratulations on finishing the pack!`);
    })

    Utils.server.schedule(18 * SECOND, callback=>{
            Utils.server.runCommand(`say I hope you enjoyed it as much as I did developing this pack.`);
    })

    Utils.server.schedule(21 * SECOND, callback=>{
            Utils.server.runCommand(`say if you have any extra feedback, feel free to tell me.`);
    })

    Utils.server.schedule(24 * SECOND, callback=>{
            Utils.server.runCommand(`say Thank you for playing the pack!.`);
    })

    Utils.server.schedule(27 * SECOND, callback=>{
            Utils.server.runCommand(`say I'll hopefully return with something more next time.`);
    })

    Utils.server.schedule(30 * SECOND, callback=>{
        Utils.server.runCommand(`say Bye!`);
         Utils.server.runCommand(`give @a kubejs:certificate_treggeck 1`);
         Utils.server.players.forEach(player => {
             let playerName = player.getName().getString();
             Utils.server.runCommand(`give ${playerName} minecraft:paper{display:{Name:'{\"text\":\"TREGGECK certification of ${playerName}\"}'}} 1`);

        });
    })

    
}



MBDMachineEvents.onBeforeRecipeWorking("mbd2:spacedoor", e => {
    let event = e.event;
    Read_Script(event);
})

MBDMachineEvents.onStructureFormed("mbd2:spacedoor", e => {
    let event = e.event;
    Utils.server.schedule(1 * SECOND, callback=>{
            Utils.server.runCommand(`say `);
    })
})

