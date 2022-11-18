module.exports= {
   ///////////////////Scope////////////////////////
        name: 'ReactionRoleHandler',
        description: "Assigns Roles to Maryland, Virginia, and DC", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
        requiredChannel: 'roletest',
        async execute(message, Discord, client){
   
   //////////////////////Channel and Role Info////////////////////////
             // const channel ='996036666017988708'; // Laika's Bot Testing Channel
            const channel = '871852170188832778' // DMV role-assign
            //const modChat = '928335650225270784' // Bot Testing Channel
            const modChat = '985371161032527943' // DMV Mod ChannelID

             const marylandRole = message.guild.roles.cache.find(role => role.name === "MD"); // Use Role's Name
             const virginiaRole = message.guild.roles.cache.find(role => role.name === "VA");
             const dcRole = message.guild.roles.cache.find(role => role.name === "DC");
             const nonDMVRole = message.guild.roles.cache.find(role => role.name === "Non-DMV-Pending") //Emoji Left Non-DMV, Role Changed to Pending
             const dmvRole = message.guild.roles.cache.find(role => role.name === "DMV")

             const striveRole = message.guild.roles.cache.find(role => role.name === "Strive") // Use Role's Name
             const streetfighterRole = message.guild.roles.cache.find(role => role.name === "Street Fighter")
             const blazeblueRole = message.guild.roles.cache.find(role => role.name === "Blazblue")
             const kofRole = message.guild.roles.cache.find(role => role.name === "KOF")
             const meltyRole = message.guild.roles.cache.find(role => role.name === "Melty") 
             const bbtagRole = message.guild.roles.cache.find(role => role.name === "BBTag")
             const granblueRole = message.guild.roles.cache.find(role => role.name === "Granblue")
             const personaRole = message.guild.roles.cache.find(role => role.name === "Persona")
             const dnfRole = message.guild.roles.cache.find(role => role.name === "DNF")  
             const dengekiRole = message.guild.roles.cache.find(role => role.name === "DFCI")
             const skullgirlsRole = message.guild.roles.cache.find(role => role.name === "Skullgirls")
             const uniclrRole = message.guild.roles.cache.find(role => role.name === "UNICLR")
             const dbfzRole = message.guild.roles.cache.find(role => role.name === "DBFZ")
             const ggxrdRole = message.guild.roles.cache.find(role => role.name === "GGXrd/+R")
             const miscRole = message.guild.roles.cache.find(role => role.name === "Miscellaneous")

    //////////////Emojis///////////////// 
             const mdFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'MDFlag'); // pulls image from server's list, works based on name of emoji
             const vaFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'VAFlag');
             const dcFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'DCFlag');
             const nonDMVFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'NonDMV');
   
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

   ///////////////Reaction Add Protocols and Safety Checks ///////////////// 
             client.on('messageReactionAdd', async (reaction, user) => {
                  if (user.bot) return; //skips bot reactions 
                  if (!reaction.message.guild) return; //reaction has to be from server member
                  if (reaction.partial) await reaction.fetch();   
   
   // If Permission Error Happens, Make sure Bot is in Role with Permissions
                  try{                                                  
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === mdFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(marylandRole)
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dmvRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === vaFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(virginiaRole)
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dmvRole)  
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === dcFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dcRole)
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dmvRole)  
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === nonDMVFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(nonDMVRole)
                              client.channels.cache.get(modChat).send("@here" + ' user ' + user.tag + ' has selected a Non-DMV role. Please reach out to this user and determine if they belong.') 
                                    .then(user.send('Hi again! The DMV Homiecord mod-team are dedicated to building a community for DMV fighting game players. To accomplish this, we currently are manually approving and only providing limited channel access to Non-DMV members. A Moderator should contact you shortly to confirm your relationship to the DMV region.'))
                        }}  
                       if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === striveEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(striveRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
                        }}

                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === streetfighterEmoji){
                                 await reaction.message.guild.members.cache.get(user.id).roles.add(streetfighterRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
                           }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === blazblueEmoji){
                                 await reaction.message.guild.members.cache.get(user.id).roles.add(blazeblueRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === kofEmoji){
                                 await reaction.message.guild.members.cache.get(user.id).roles.add(kofRole) 
                        }}     
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === meltyEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(meltyRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === bbtagEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(bbtagRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === granblueEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(granblueRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === personaEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(personaRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === dnfEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dnfRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === dengekiEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dengekiRole)
                        }}
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === skullgirlsEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(skullgirlsRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === dbfzEmoji){
                                 await reaction.message.guild.members.cache.get(user.id).roles.add(dbfzRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === uniclrEmoji){
                                 await reaction.message.guild.members.cache.get(user.id).roles.add(uniclrRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === ggxrdEmoji){
                                 await reaction.message.guild.members.cache.get(user.id).roles.add(ggxrdRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === miscEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(miscRole) 
                        }}   
                       
                       else {
                            return }
                  } catch (error) {
                       console.error('Something went wrong assigning roles:', error)
                       let eCatch = error.stack;
                       const Laika = await client.users.fetch('226563920863690752');
                       Laika.send('Something went wrong assigning roles');  // error catching, sends a message to Laika briefly explaining what happened
                       Laika.send(eCatch);
                       return;
                  }
             })
   
    ///////////////Reaction Remove Protocols and Safety Checks /////////////////     
             client.on('messageReactionRemove', async (reaction, user) => {
                  if (user.bot) return
                  if (!reaction.message.guild) return
                  if (reaction.partial) await reaction.fetch()
   
                  try{
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === mdFlag) {
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(marylandRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dmvRole)
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === vaFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(virginiaRole)
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dmvRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === dcFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dcRole)
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dmvRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === nonDMVFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(nonDMVRole)
                        }}
         ///////////////////////// DMV AND FGC Divide /////////////////////////////

                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === striveEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(striveRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
                        }}

                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === streetfighterEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(streetfighterRole) 
                        }}

                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === blazblueEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(blazeblueRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === kofEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(kofRole) 
                        }}     
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === meltyEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(meltyRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === bbtagEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(bbtagRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === granblueEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(granblueRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === personaEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(personaRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === dnfEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dnfRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === dengekiEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dengekiRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === dbfzEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(dbfzRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === uniclrEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(uniclrRole) 
                        }} 
                        if (reaction.message.channel.id == channel) {
                              if (reaction.emoji === ggxrdEmoji){
                              await reaction.message.guild.members.cache.get(user.id).roles.remove(ggxrdRole) 
                        }}  
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === skullgirlsEmoji){
                           await reaction.message.guild.members.cache.get(user.id).roles.remove(skullgirlsRole) 
                        }}
                        if (reaction.message.channel.id == channel) {
                           if (reaction.emoji === miscEmoji){
                           await reaction.message.guild.members.cache.get(user.id).roles.remove(miscRole)}
                        else {
                              return }}
                  } 
                  catch (error) {
                     console.error('Something went wrong assigning roles:', error)
                     let eCatch = error.stack;
                     const Laika = await client.users.fetch('226563920863690752');
                     Laika.send('Something went wrong assigning roles');  // error catching, sends a message to Laika briefly explaining what happened
                     Laika.send(eCatch);
                     return;
                  }
        })
   }}