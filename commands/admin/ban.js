//import lint discord js
const {Message} = require('discord.js');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    if(message.mentions.users.size == 0) {message.channel.send(`Please mention a user`)}
    else if(!message.member.hasPermission('BAN_MEMBERS')) {message.channel.send(`You don't have permissions to ban this user`)}
    else if(!message.mentions.members.first().bannable) {message.channel.send(`I don't have permissions to ban this user`)}
    else if(message.mentions.members.first().roles.highest.rawPosition > message.member.roles.highest.rawPosition) {message.channel.send(`You don't have permissions to ban this user`)}
    else {
        try{
        message.mentions.members.first().ban({reason: `Was banned by ${message.author.tag} for being a bad bunny`});
        message.channel.send(`${message.mentions.members.first().user.tag} was banned by ${message.author.tag}`);
        }catch(error){
        console.log(`Error: ${error}`)
        throw error;
        }
    }
}