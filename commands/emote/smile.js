//import lint discord js
const {Message} = require('discord.js');
const { MessageEmbed } = require("discord.js");
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var embed = new MessageEmbed()
    .setDescription(`${message.author} smiles!`)
    .setImage('https://c.tenor.com/BA2eLg42RbEAAAAC/isitwrongtotryandpickupgirlsinadungeon-bellcranel.gif')
    message.channel.send({embeds : [embed]});
}