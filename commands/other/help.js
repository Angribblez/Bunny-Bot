const {MessageEmbed} = require('discord.js');
module.exports = function(message){
    messageContent = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Help')
    .addField('Action', '`bun hug` - hugs the mentioned user\n`bun kiss` - kisses the mentioned user\n`bun pat` - pats the mentioned user')
    .addField('Admin', '`bun ban` - bans the mentioned user\n`bun kick` - kicks the mentioned user')
    .addField('Other', '`bun avatar` - views the mentioned users avatar\n`bun invite` - sends a invite for the bot')
    message.channel.send({ embeds: [messageContent]});
}