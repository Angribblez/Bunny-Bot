//import lint discord js
const {Message} = require('discord.js');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var args = message.content.split(" ");
    if(message.mentions.users.size == 0) {message.channel.send(`Please mention a user`)}
    else if(!message.member.permissions.has('KICK_MEMBERS')) {message.channel.send(`You don't have permissions to timeout this user(You need to be able to kick members)`)}
    else if(!message.mentions.members.first().kickable) {message.channel.send(`I don't have permissions to timeout this user(I need to be able to kick members)`)}
    else if(message.mentions.members.first().roles.highest.rawPosition > message.member.roles.highest.rawPosition) {message.channel.send(`You don't have permissions to timeout this user`)}
    else {
        try{
            if (args[4] != undefined && args[4] != "") {
                message.mentions.members.first().timeout(parseInt(args[3]*1000), `${message.author.tag} timed out for "${args[4]}"`);
                message.channel.send('User timed out');
            }else {
                message.mentions.members.first().timeout(parseInt(args[3])*1000, `You were timed out by ${message.author.tag} for being a bad bunny`)
                message.channel.send('User timed out');
            }
        }catch(error){
            (`Error: ${error}`)
            throw error;
        }
    }
}