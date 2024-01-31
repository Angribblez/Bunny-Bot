//import lint discord js
const {Message} = require('discord.js');
/**
 *
 *@param {Message} message
 */
module.exports = function(message){
	var members = message.guild.members.cache;
	message.channel.send("Test message");
}

