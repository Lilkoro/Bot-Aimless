const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#10eee2')
    .setTitle("Kitso le beaugosse du serveur")

    message.channel.send(Embed);

}

module.exports.config = {
    name: 'kitso'
}