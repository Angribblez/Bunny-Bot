//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var embed = new MessageEmbed()
    .setDescription(`${message.author} cries!`)
    .setImage('https://c.tenor.com/2ZmcTSx08IIAAAAS/tataru-lalafell.gif')
    message.channel.send({embeds : [embed]});
}