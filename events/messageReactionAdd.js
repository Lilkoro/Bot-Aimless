const Discord = require('discord.js')

module.exports = async(client, reaction, user) => {

    const channel = reaction.mesage.guild.channels.cache.find(c => c.id === '834720471793795133');
    const Peuple = reaction.message.guild.roles.cache.get("832335337518792755");

    if (member.user.bot) return;

    if (reaction.emoji.name === '✅' && reaction.message.channel.id === channel.id){ 
         user.roles.add(Peuple)
        reaction.message.channel.send(`Le rôle ${Peuple.name} a été ajouté avec succès !`)

    }
}
