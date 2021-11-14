module.exports = function(message){
    if(message.mentions.users.size == 0) {
        message.channel.send("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg");
    }else{
        message.channel.send("https://cdn.discordapp.com/avatars/"+message.mentions.members.first().id+"/"+message.mentions.users.first().avatar+".jpeg");
    }
}