const emoji = require('../../Utils/emoji.json');
const config = require('../../config.json');

module.exports = {
    name: "stopbot",
    description: "Arrête le bot !!",
    category: "Developer",
    example: `${config.Prefix}stopbot`,

    run: async(client, message, args) => {
        
        if (message.author.id !== config.Owner) {
            return;
        }
        
        await message.channel.send(`${emoji.Approved} Le bot est maintenant désactivé !!`)
        process.exit()
    }
}