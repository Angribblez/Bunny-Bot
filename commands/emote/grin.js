//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var embed = new MessageEmbed()
    .setDescription(`${message.author} grins!`)
    .setImage('https://c.tenor.com/HCzayF2lAnMAAAAC/kuroo-tetsurou-kuroo.gif')
    message.channel.send({embeds : [embed]});
}