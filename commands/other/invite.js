//import lint discord js
const {Message} = require('discord.js');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    message.channel.send(`We are not a public bot yet`/*`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`*/);
}