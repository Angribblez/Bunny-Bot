//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var embed = new MessageEmbed()
    .setDescription(`${message.author} laughs!`)
    .setImage('https://c.tenor.com/oBpIJQKgCCQAAAAS/ffxiv-wolfram-heart-ffxiv-hunklander.gif')
    message.channel.send({embeds : [embed]});
}