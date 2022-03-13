//import lint discord js
const {Message} = require('discord.js');
var userData = require('../../json/userData.json');
/**
 *
 * @param {Message} message
 */
var animals = require('../../json/config.json').animals;
module.exports = function(message){
    if(!userData[message.author.id]){
        userData[message.author.id] = {"zoo":new Array(animals.length).fill(0)};
    }else if(!userData[message.author.id].zoo){
        userData[message.author.id]["zoo"] = new Array(animals.length).fill(0);
    }
    var messageString = "";
    var count = 0;
    for (var i = 0; i < animals.length; i++) {
        messageString += userData[message.author.id]["zoo"][i] + "x" + animals[i] + " ";
        count += 1;
        if(count == 8){
            messageString += "\n";
            count = 0;
        }
    }
    message.channel.send(`Your zoo is:\n${messageString}`);
}