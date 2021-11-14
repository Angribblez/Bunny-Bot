const { MessageEmbed } = require("discord.js");

module.exports = function(message) {
    if(message.mentions.users.size == 0){
        message.channel.send('You need to mention someone to kiss them!');
    }else {
        message.channel.send(new MessageEmbed()
        .setDescription(`${message.author} kisses ${message.mentions.users.first()}`)
        .setImage('https://c.tenor.com/d39llY4dAIEAAAAS/hien-hien-rijin.gif')
        );
    }        
}