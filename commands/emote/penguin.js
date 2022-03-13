//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var embed = new MessageEmbed()
    .setDescription(`${message.author} becomes a penguin!`)
    .setImage('https://c.tenor.com/KFjnOE_mjBYAAAAS/pingu-penguin.gif')
    message.channel.send({embeds : [embed]});
}