//import lint discord js
const {Message} = require('discord.js');
var userData = require('../../json/userData.json');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    var args = message.content.split(" ");
    if(!userData[message.author.id]){
        userData[message.author.id] = {"balance":100};
    }else if(!"balance" in userData[message.author.id]){
        userData[message.author.id]["balance"] = 100;
    }
    if(!args[2] && userData[message.author.id].balance >= 1){
        var roll = Math.round(Math.random())
        if(roll == 0){
            userData[message.author.id].balance += 1;
            message.channel.send(`You rolled a heads! You won! Your balance is: ${userData[message.author.id].balance}`);
        }else{
            userData[message.author.id].balance -= 1;
            message.channel.send(`You rolled a tails! You lost! Your balance is: ${userData[message.author.id].balance}`);
        }
    }else if(args[2] && userData[message.author.id].balance >= parseInt(args[2])){
        var roll = Math.round(Math.random())
        if(roll == 0){
            userData[message.author.id].balance += parseInt(args[2]);
            message.channel.send(`You rolled a heads! You won! Your balance is: ${userData[message.author.id].balance}`);
        }else{
            userData[message.author.id].balance -= parseInt(args[2]);
            message.channel.send(`You rolled a tails! You lost! Your balance is: ${userData[message.author.id].balance}`);
        }
    }else {
        message.channel.send("You don't have enough money!");
    }
}