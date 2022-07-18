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
    }else if(!"balance" in userData[message.author.id]){
        userData[message.author.id]["balance"] = 100;
    }
    if(message.mentions.users.first()){
        if(message.mentions.users.first().bot){
            //validate user not bot
            message.channel.send('You cannot rob bots!');
            return;
        }
        if(!userData[message.mentions.users.first().id]){
            userData[message.mentions.users.first().id] = {"balance":100};
        }else if(!"balance" in userData[message.mentions.users.first().id]){
            userData[message.mentions.users.first().id]["balance"] = 100;
        }
    }
    //if mention is a user, check balance of mentioned user, else check own balance
    if(!message.mentions.users.first()){
        //say user balance
        message.channel.send(`${message.author.username}'s balance: ${userData[message.author.id]["balance"]}`);
    }else{
        message.channel.send(`${message.mentions.users.first()}'s balance: ${userData[message.mentions.users.first().id]["balance"]}`);
    }
}