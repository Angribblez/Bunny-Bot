module.exports = function (message) {
    //if user is married display marriage info, if no one mentioned
        //if user is not married try to marry mentioned user
        if(!(message.author.id in data)){
            data[message.author.id] = {
              "partner" : "0"
            }
          }
          if(data[message.author.id]["partner"] == "0") {
            if(message.mentions.users.size > 0) {
              // go through marriage process
              if(data[message.mentions.users.first().id]["partner"] == "0") {
                authorId = message.author.id;
                recipientId = message.mentions.users.first().id;
                // if user is not married
                message.channel.send(`<@${message.mentions.users.first().id}> would you like to marry <@${message.author.id}>?`).then(function (message) {
                  message.react('👍')
                  message.react('👎')
                  reactionMessage[message.id] = [recipientId, authorId]
                })
              }
              else{
                // if user is married
                message.channel.send(`<@${message.mentions.users.first().id}> is already married to <@${data[message.mentions.users.first().id]["partner"]}>`);
              }
            } else {
              message.channel.send("You are not married, and you did not mention a user to marry");
            }
          }else {
            //user is married, display marriage info
            if(message.mentions.users.size > 0) {
              //go through divorce process
              message.channel.send(`You are already married to <@${data[message.author.id]["partner"]}>, try divorcing them first using \`bun divorce\``);
            } else {
              //display marriage info
              message.channel.send(`You are married to <@${data[message.author.id]["partner"]}>`)
            }
          }
}