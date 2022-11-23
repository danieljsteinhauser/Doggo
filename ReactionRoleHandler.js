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
             const blazblueRole = message.guild.roles.cache.find(role => role.name === "Blazblue")
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
							//evaluate region reactions
							switch (reaction.emoji){
								case mdFlag:
									await reaction.message.guild.members.cache.get(user.id).roles.add(marylandRole)
									await reaction.message.guild.members.cache.get(user.id).roles.add(dmvRole) 
									break
								case vaFlag:
								    await reaction.message.guild.members.cache.get(user.id).roles.add(virginiaRole)
									await reaction.message.guild.members.cache.get(user.id).roles.add(dmvRole)  
									break
								case dcFlag:
								    await reaction.message.guild.members.cache.get(user.id).roles.add(dcRole)
									await reaction.message.guild.members.cache.get(user.id).roles.add(dmvRole)  
									break
								case nonDMVFlag:
								    await reaction.message.guild.members.cache.get(user.id).roles.add(nonDMVRole)
									client.channels.cache.get(modChat).send("@here" + ' user ' + user.tag + ' has selected a Non-DMV role. Please reach out to this user and determine if they belong.') 
                                    .then(user.send('Hi again! The DMV Homiecord mod-team are dedicated to building a community for DMV fighting game players. To accomplish this, we currently are manually approving and only providing limited channel access to Non-DMV members. A Moderator should contact you shortly to confirm your relationship to the DMV region.'))                        
							
							}
							//evaluate game reactions
							switch (reaction.emoji){
								case striveEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(striveRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
									break
								case streetfighterEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(streetfighterRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
									break
								case blazblueEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(blazblueRole) 
									break
								case kofEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(kofRole) 
									break
								case meltyEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(meltyRole) 
									break		
								case bbtagEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(bbtagRole) 
									break		
								case granblueEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(granblueRole) 
									break	
								case personaEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(personaRole) 
									break		
								case dnfEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(dnfRole) 
									break	
								case dengekiRole:
									await reaction.message.guild.members.cache.get(user.id).roles.add(dengekiRole) 
									break		
								case skullgirlsEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(skullgirlsRole) 
									break						
								case dbfzEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(dbfzRole) 
									break		
								case uniclrEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(uniclrRole) 
									break	
								case ggxrdEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(ggxrdRole) 
									break									
								case miscEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.add(miscRole) 
									break									
								default:
									break
							}
						}
						return;
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
							//evaluate region reactions
							switch (reaction.emoji){
								case mdFlag:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(marylandRole)
									await reaction.message.guild.members.cache.get(user.id).roles.remove(dmvRole) 
									break
								case vaFlag:
								    await reaction.message.guild.members.cache.get(user.id).roles.remove(virginiaRole)
									await reaction.message.guild.members.cache.get(user.id).roles.remove(dmvRole)  
									break
								case dcFlag:
								    await reaction.message.guild.members.cache.get(user.id).roles.remove(dcRole)
									await reaction.message.guild.members.cache.get(user.id).roles.remove(dmvRole)  
									break
								case nonDMVFlag:
								    await reaction.message.guild.members.cache.get(user.id).roles.remove(nonDMVRole)
							}
							//evaluate game reactions
							switch (reaction.emoji){
								case striveEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(striveRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
									break
								case streetfighterEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(streetfighterRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
									break
								case blazblueEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(blazblueRole) 
									break
								case kofEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(kofRole) 
									break
								case meltyEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(meltyRole) 
									break		
								case bbtagEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(bbtagRole) 
									break		
								case granblueEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(granblueRole) 
									break	
								case personaEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(personaRole) 
									break		
								case dnfEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(dnfRole) 
									break	
								case dengekiRole:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(dengekiRole) 
									break		
								case skullgirlsEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(skullgirlsRole) 
									break						
								case dbfzEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(dbfzRole) 
									break		
								case uniclrEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(uniclrRole) 
									break	
								case ggxrdEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(ggxrdRole) 
									break									
								case miscEmoji:
									await reaction.message.guild.members.cache.get(user.id).roles.remove(miscRole) 
									break									
								default:
									break
							}
						} 
						return
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