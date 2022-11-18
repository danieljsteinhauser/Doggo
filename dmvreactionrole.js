module.exports= {
///////////////////Scope////////////////////////
     name: 'dmvreactionrole',
     description: "Assigns Roles to Maryland, Virginia, and DC", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
     requiredChannel: 'role-assign',
     async execute(message, args, Discord, client){

//////////////////////Channel and Role Info////////////////////////
          //const channel ='996036666017988708'; // Laika's Bot Testing Channel
           const channel = '871852170188832778' // DMV role-assign
          // const channel = '928335650225270784' // Bot Testing Channel

 //////////////Emojis///////////////// 
          const mdFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'MDFlag'); // pulls image from server's list, works based on name of emoji
          const vaFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'VAFlag');
          const dcFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'DCFlag');
          const nonDMVFlag = message.guild.emojis.cache.find(emoji => emoji.name === "NonDMV");

/////////////////Embed//////////////////////
          let embed = new Discord.MessageEmbed()
            .setColor('#e42643') // white 
            .setTitle('DMV Region Selection')
            .setDescription('Select your region using the following reactions\n\n'
                + `${mdFlag} for Maryland \n`
                + `${vaFlag} for Virginia \n`
                + `${dcFlag} for DC \n`
                + `${nonDMVFlag} for Honorary DMV members\n`)
          
          //Sends Embed and reacts to it
          let messageEmbed = await message.channel.send({embeds: [embed]}) // only accepts arrays, older videos/guides often miss this
          messageEmbed.react(mdFlag)
               .then(() => messageEmbed.react(vaFlag)) // then method ensures bot reacts to the embed in the correct order.
               .then(() => messageEmbed.react(dcFlag))
               .then(() => messageEmbed.react(nonDMVFlag))
}}