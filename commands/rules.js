const Discord = require('discord.js')

module.exports.run = async (client, message, user) => {
    const Peuple = message.guild.roles.cache.get("832335337518792755");
    const yesEmoji = message.guild.emojis.cache.get('✅');
    const Embed = new Discord.MessageEmbed()
    
	.setColor('#fd0000')
	.setTitle('*Règlements*')
	.setAuthor('Staff Aimless Crew', 'https://cdn.discordapp.com/attachments/834720471793795133/863565046893248542/a_5578055cacc05498daac49be54e1be27.jpg')
	.setDescription('**a lire et à accepter avec la réaction :white_check_mark:**')
	.addFields(
		{ name: 'I – Comportement', value: '-Restez courtois, poli. Vous pouvez être familier mais pas insultant. \n  -Pas de violence verbale gratuite. Vous pouvez taquiner gentiment sans aller dans l’extrême. Si cela reste dans la bonne humeur et le second degré nous le tolérons. Si le staff estime que cela ne respecte plus la règle, vous risquez un avertissement ou un ban.', outline: true },
		{ name: 'II – Chat écrit/ vocal', value: '  -Pas de spam, sous peine de bannissement. \n -Pas de pub sur les différents chats, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte.', outline: true },
		{ name: 'III – Profil/Pseudo', value: '- Ne doit pas être ressemblant/confondu avec celui d’un membre du staff, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte. \n - Ne doit pas contenir de propos racistes, homophobes, sexistes … (par exemple la pp Hitler c\'est non) sous peine d\’avertissement puis ban si l’avertissement n’est pas pris en compte. \n  -Ne doit pas avoir de caractère pornographique, sous peine d’avertissement puis ban si l’avertissement n’est pas pris en compte. ', outline: true },
        { name: 'IV - Contacter le staff', value: ' - Si pour une quelconque raison, vous voulez contacter un membre du staff (modo ou admin), mentionner <@&812628898977284097> sur le <#832337556514799616>'},
        { name: 'V - A propos du staff', value: '- Le staff a toujours raison, pas de contestations, si nous remarquons que le comportement d\'un membre du staff n\'est pas décent, nous le lui ferons remarquer.'}
        )
	.setTimestamp()
	.setFooter('Le Staff d\'Aimless Crew !', 'https://cdn.discordapp.com/attachments/834720471793795133/863565046893248542/a_5578055cacc05498daac49be54e1be27.jpg');

    message.delete()
    message.channel.send(Embed).then(async message => {
        await message.react('✅');
    });

}

module.exports.config = {
    name: 'rules'
}