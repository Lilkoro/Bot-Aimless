const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#291b8b')
    .setTitle(message.author.username)
    .setDescription("Vous souhaite une bonne nuit !")

    if(message.author.bot) return
    message.delete()
    message.channel.send(Embed);

}

module.exports.config = {
    name: 'BonneNuit'
}