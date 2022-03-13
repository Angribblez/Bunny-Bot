//import lint discord js
const {Message} = require('discord.js');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    if(message.mentions.users.size == 0) {message.channel.send(`Please mention a user`)}
    else if(!message.member.hasPermission('KICK_MEMBERS')) {message.channel.send(`You don't have permissions to kick this user`)}
    else if(!message.mentions.members.first().kickable) {message.channel.send(`I don't have permissions to kick this user`)}
    else if(message.mentions.members.first().roles.highest.rawPosition >= message.member.roles.highest.rawPosition) {message.channel.send(`You don't have permissions to kick this user`)}
    else {
        try{
        message.mentions.members.first().send(`You were kicked by ${message.author.tag} for being a bad bunny`).then(
            message.mentions.members.first().kick({reason: `Was kicked by ${message.author.tag} for being a bad bunny`})
        );
        message.channel.send(`${message.mentions.members.first().user.tag} was kicked by ${message.author.tag}`);
        }catch(error){
        throw error;
        }
    }
}