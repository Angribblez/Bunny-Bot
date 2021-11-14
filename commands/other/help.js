const {MessageEmbed} = require('discord.js');
module.exports = function(message){
    message.channel.send(new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Help')
    .setDescription('Help command(not yet complete)')
    .addField('Commands', '`help` - Shows this message\n`kick` - Kicks the mentioned user\n`ban` - Bans the mentioned user\n`invite` - Sends a invite for the bot to the channel')
    .addField('Prefix', '`bun`')
    .addField('Actions', '`pat` - Pats the mentioned user\n`hug` - Hugs the mentioned user\n`kiss` - Kisses the mentioned user')
    );
}