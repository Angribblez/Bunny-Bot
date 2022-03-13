//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    if(message.mentions.users.size == 0){
        message.channel.send('You need to mention someone to kill them!');
    }else {
        var embed = new MessageEmbed()
        .setDescription(`${message.author} kills ${message.mentions.users.first()}`)
        .setImage('https://c.tenor.com/UTSlbHNFpb0AAAAC/prompto-argentum-final-fantasy.gif')
        message.channel.send({embeds : [embed]});
    }
}