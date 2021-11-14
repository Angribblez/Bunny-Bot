module.exports = function(message) {
    if(message.content.startsWith("ping")) {
        message.channel.send("Pong!");
    }
}