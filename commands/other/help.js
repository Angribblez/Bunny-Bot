//import lint discord js
const {Message} = require('discord.js');
const {MessageEmbed} = require('discord.js');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var messageContent = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Help')
    .addField('\:hugging:Action', '`bun kiss` - kisses mentioned user\n`bun hug` - hugs mentioned user\n`bun pat` - pats mentioned user\n`bun punch` - punches mentioned user\n`bun kill` - kills mentioned user')
    .addField('\:slight_smile:Emote', '`bun penguin` - sends a penguin\n`bun cry` - sends a crying gif\n`bun laugh` - sends a laughing gif\n`bun smile` - sends a smiling gif\n`bun grin` - sends a grinning gif')
    .addField('\:tools:Admin', '`bun ban` - bans the mentioned user\n`bun kick` - kicks the mentioned user')
    .addField('\:moneybag:Economy', '`bun balance` - shows your balance\n`bun roll` - rolls a dice for money')
    .addField('\:paperclip:Other', '`bun avatar` - views the mentioned users avatar\n`bun invite` - sends a invite for the bot\n`bun help` - displays this message');
    message.channel.send({embeds: [messageContent]});
}