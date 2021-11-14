const { MessageEmbed } = require("discord.js");
module.exports = function(message){
    if(message.mentions.users.size == 0){
        message.channel.send('You need to mention someone to pat them!');
        }else {
        message.channel.send(new MessageEmbed()
        .setDescription(`${message.author} pats ${message.mentions.users.first()}`)
        .setImage('https://c.tenor.com/DCMl9bvSDSwAAAAd/pat-head-gakuen-babysitters.gif')
        );
    }
}