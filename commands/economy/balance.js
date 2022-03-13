//import lint discord js
const {Message} = require('discord.js');
var userData = require('../../json/userData.json');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    if(!userData[message.author.id]){
        userData[message.author.id] = {"balance":100};
    }else if(!userData[message.author.id].balance){
        userData[message.author.id]["balance"] = 100;
    }
    message.channel.send(`Your balance is: ${userData[message.author.id].balance}`);
}