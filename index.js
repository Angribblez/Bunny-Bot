//import discord js, import config.json, import commandHandler.js,create client
const {Client, Intents} = require('discord.js');
const {token, owner, prefix} = require('./config.json');
const commandHandler = require('./commandHandler.js');
const client = new Client({
    intents : [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});
//ready event
client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});
//message event
client.on('messageCreate', commandHandler);
client.login(token);