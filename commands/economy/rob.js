//import lint discord js
const {Message} = require('discord.js');
var userData = require('../../json/userData.json');
/**
 *
 * @param {Message} message
 */
//key equals odds of happening - previous odds to make easy selection, value equals the amount of money you get * 100
module.exports = function(message){
    //validate user pinged first
    if(!message.mentions.users.first()){
        message.channel.send('You must ping a user to rob!');
        return;
    }else if(message.mentions.users.first().bot){
        //validate user not bot
        message.channel.send('You cannot rob bots!');
        return;
    }
    //validate user data first
    if(!userData[message.author.id]){
        userData[message.author.id] = {"balance":100};
    }else if(!"balance" in userData[message.author.id]){
        userData[message.author.id]["balance"] = 100;
    }
    if(!userData[message.mentions.users.first().id]){
        userData[message.mentions.users.first().id] = {"balance":100};
    }else if(!"balance" in userData[message.mentions.users.first().id]){
        userData[message.mentions.users.first().id]["balance"] = 100;
    }
    //rob user balance 50% chance of happening
    var willRob = Math.random() < 0.5;
    if(willRob){
        //rob successful
        var amount = Math.floor(Math.random() * 100) + 1;
        switch(true){
            case amount <= 5:
                message.channel.send(`${message.author} has successfully robbed ${message.mentions.users.first()} of ${Math.floor(1 * parseInt(userData[message.mentions.users.first().id]["balance"]))} coins!`);
                userData[message.author.id]["balance"] += Math.floor(1 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                userData[message.mentions.users.first().id]["balance"] = 0;
                break;
            case amount <= 15:
                message.channel.send(`${message.author} has successfully robbed ${message.mentions.users.first()} of ${Math.floor(0.75 * parseInt(userData[message.mentions.users.first().id]["balance"]))} coins!`);
                userData[message.author.id]["balance"] += Math.floor(0.75 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                userData[message.mentions.users.first().id]["balance"] -= Math.floor(0.75 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                break;
            case amount <= 30:
                message.channel.send(`${message.author} has successfully robbed ${message.mentions.users.first()} of ${Math.floor(0.5 * parseInt(userData[message.mentions.users.first().id]["balance"]))} coins!`);
                userData[message.author.id]["balance"] += Math.floor(0.5 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                userData[message.mentions.users.first().id]["balance"] -= Math.floor(0.5 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                break;
            case amount <= 50:
                message.channel.send(`${message.author} has successfully robbed ${message.mentions.users.first()} of ${Math.floor(0.3 * parseInt(userData[message.mentions.users.first().id]["balance"]))} coins!`);
                userData[message.author.id]["balance"] += Math.floor(0.3 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                userData[message.mentions.users.first().id]["balance"] -= Math.floor(0.3 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                break;
            case amount <= 75:
                message.channel.send(`${message.author} has successfully robbed ${message.mentions.users.first()} of ${Math.floor(0.25 * parseInt(userData[message.mentions.users.first().id]["balance"]))} coins!`);
                userData[message.author.id]["balance"] += Math.floor(0.25 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                userData[message.mentions.users.first().id]["balance"] -= Math.floor(0.25 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                break;
            case amount <= 100:
                message.channel.send(`${message.author} has successfully robbed ${message.mentions.users.first()} of ${Math.floor(0.1 * parseInt(userData[message.mentions.users.first().id]["balance"]))} coins!`);
                userData[message.author.id]["balance"] += Math.floor(0.1 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                userData[message.mentions.users.first().id]["balance"] -= Math.floor(0.1 * parseInt(userData[message.mentions.users.first().id]["balance"]));
                break;
        }
    
    }else{
        //rob failed
        //5% of money is taken
        var amountLost = 0.05 * parseInt(userData[message.author.id]["balance"]);
        userData[message.author.id]["balance"] -= Math.floor(amountLost);
        userData[message.mentions.users.first().id]["balance"] += Math.floor(amountLost);
        message.channel.send('You failed to rob ' + message.mentions.users.first().username + '! You gave them ' + Math.floor(amountLost) + ' coins!');
    }
}