const Discord = require('discord.js');
const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');
const log = require('../../Utils/channels.json');

module.exports = {
    name: "suggest",
    aliases: ["suggestion"],
    description: "Pour nous donner une suggestion !!",
    category: "Misc",
    example: `${config.Prefix}suggest Add more commands`,

    run: async(client, message, args) => {

        const Channel = client.channels.cache.get(log.Suggestion);
        
        if(!args[0])
        return message.reply(`${emoji.Error} Veuillez fournir un commentaire à envoyer afin que nous puissions examiner **\`${config.Prefix}suggest [Your Suggestion]\`**`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });

        let suggestion = message.content.slice(message.content.indexOf(args[0]), message.content.length)

        const embed = new Discord.MessageEmbed()
        .setTitle('__Suggestion__')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setDescription(suggestion)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
        Channel.send(embed)

        
        await message.channel.send(`${emoji.Approved} Votre suggestion a été envoyée à mon développeur !!`)
        .then(msg => {
            msg.delete({ timeout: 20000 })
        });
    }
}