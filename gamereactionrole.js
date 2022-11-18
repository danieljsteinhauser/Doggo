module.exports= {
          //Channel and Role Definitions//
     name: 'gamereactionrole',
     description: "Assigns Roles to GGST, DNF, BBTAG, Blazblue, Granblue, Persona, KOFXV,  Skullgirls, Dengeki and MISC ", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
     requiredChannel: 'roletest',
     async execute(message, args, Discord, client){
          
//////////////////////Channel and Role Info////////////////////////
          //const channel ='996036666017988708' // Laika's Bot Testing Channel
          const channel = '871852170188832778' // DMV role-assign
          // const channel = '928335650225270784' // DMV Bot Testing Channel
          
 //////////////Emojis///////////////// 
          const striveEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Strive') // pulls image from server's list, works based on name of emoji
          const streetfighterEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Ryu')
          const blazblueEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Blazblue')
          const kofEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'KOFXV')
          const meltyEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Melty_Blood') 
          const bbtagEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'BBTag')
          const granblueEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Granblue') 
          const personaEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Persona')
          const dnfEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'DNF_Duel')
          const dengekiEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Dengeki') 
          const skullgirlsEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Skullgirls')
          const uniclrEmoji = message.guild.emojis.cache.find(emoji => emoji.name === "UNICLR")
          const dbfzEmoji= message.guild.emojis.cache.find(emoji => emoji.name === "DBFZ")
          const ggxrdEmoji= message.guild.emojis.cache.find(emoji => emoji.name === "GuiltyGear")
          const miscEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Misc')


/////////////////Embed//////////////////////
          let embed = new Discord.MessageEmbed()
          .setColor('#e42643')
          .setTitle('Games Selection')
          .setDescription('Use the following reactions to select which games you play!\n\n'    // NOTE: when adding new things to this list, use ` ` and NOT ' ' 
               + `${striveEmoji} for Guilty Gear -Strive- \n`    //100+
               + `${streetfighterEmoji} for Street Fighter \n`  //100+                     
               + `${meltyEmoji} for Melty Blood \n`              //40+
               + `${dnfEmoji} for DNF \n`                        //40+
               + `${blazblueEmoji} for Blazblue \n`              //35+
               + `${granblueEmoji} for Granblue \n`              //20+
               + `${skullgirlsEmoji} for Skullgirls \n`          //20+
               + `${dbfzEmoji} for DBZ Fighterz \n`
               + `${kofEmoji} for KOFXV \n`                      //25+ but dead
               + `${personaEmoji} for Persona \n`                //25+ but dead
               + `${bbtagEmoji} for BBTAG \n`                    //15+
               + `${dengekiEmoji} for Dengeki \n`                //15+
               + `${uniclrEmoji} for UNDER NIGHT \n`             
               + `${ggxrdEmoji} for Guilty Gear Xrd and +R\n`
               + `${miscEmoji} for Misc. \n`)

          //Sends Embed and reacts to it
          let messageEmbed = await message.channel.send({embeds: [embed]}) // only accepts arrays, older videos/guides often miss this
          messageEmbed.react(striveEmoji)
               .then(() => messageEmbed.react(streetfighterEmoji)) // then method ensures bot reacts to the embed in the correct order.
               .then(() => messageEmbed.react(meltyEmoji))
               .then(() => messageEmbed.react(dnfEmoji))   
               .then(() => messageEmbed.react(blazblueEmoji))
               .then(() => messageEmbed.react(granblueEmoji))
               .then(() => messageEmbed.react(skullgirlsEmoji))
               .then(() => messageEmbed.react(dbfzEmoji))
               .then(() => messageEmbed.react(kofEmoji))
               .then(() => messageEmbed.react(personaEmoji))
               .then(() => messageEmbed.react(bbtagEmoji))
               .then(() => messageEmbed.react(dengekiEmoji))
               .then(() => messageEmbed.react(uniclrEmoji))
               .then(() => messageEmbed.react(ggxrdEmoji))
               .then(() => messageEmbed.react(miscEmoji))
     }}