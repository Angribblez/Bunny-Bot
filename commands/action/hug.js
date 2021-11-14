const { MessageEmbed } = require("discord.js");

module.exports = function(message){
    if(message.mentions.users.size == 0){
        message.channel.send('You need to mention someone to hug them!');
        }else {
        message.channel.send(new MessageEmbed()
        .setDescription(`${message.author} hugs ${message.mentions.users.first()}`)
        .setImage('https://c.tenor.com/6p_PsbiBLLoAAAAd/ffxiv-ffxivhug.gif')
        );
    }
}