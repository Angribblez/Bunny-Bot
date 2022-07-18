//import lint discord js
const {Message} = require('discord.js');
const config = require('../../json/config.json');
var userData = require('../../json/userData.json');
/**
 *
 * @param {Message} message
 */
module.exports = function(message){
    if(!userData[message.author.id]){
        userData[message.author.id] = {"balance":100, "lastWorked":0};
    }else {
        ('e')
        if(!("balance" in userData[message.author.id])){
            userData[message.author.id]["balance"] = 100;
        }
        if(!("lastWorked" in userData[message.author.id])){
            userData[message.author.id]["lastWorked"] = 0;
        }
    }
    if(userData[message.author.id]["lastWorked"] == 0){
        userData[message.author.id]["lastWorked"] = new Date();
        userData[message.author.id]["balance"] += 10000;
        message.channel.send("You worked for 10000 coins!");
    }else if(userData[message.author.id]["lastWorked"] - new Date() > 3600000){
        userData[message.author.id]["lastWorked"] = new Date();
        userData[message.author.id]["balance"] += 10000;
        message.channel.send("You worked for 10000 coins!");
    }else{
        (userData[message.author.id]["lastWorked"]);
        var timeUntilNextWork = (3600000 - (new Date() - userData[message.author.id]["lastWorked"]))/1000;

        message.channel.send("You can only work once an hour!" + " You can work again in " + Math.floor(timeUntilNextWork/60) + " minute(s) and " + Math.floor(timeUntilNextWork%60) + " second(s)");
    }
}