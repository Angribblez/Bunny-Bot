//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message) {
    if(message.mentions.users.size == 0){
        message.channel.send('You need to mention someone to kiss them!');
    }else {
        var embed = new MessageEmbed()
        .setDescription(`${message.author} kisses ${message.mentions.users.first()}`)
        .setImage('https://c.tenor.com/d39llY4dAIEAAAAS/hien-hien-rijin.gif')
        message.channel.send({embeds : [embed]});
    }        
}