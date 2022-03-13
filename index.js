//import discord js, import config.json, import commandHandler.js,create client
const {Client, Intents} = require('discord.js');
const {token} = require('./json/config.json');
const commandHandler = require('./commandHandler.js');
const client = new Client({
    intents : [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});
const autoSave = require('./commands/economy/autoSave.js');
//ready event
client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
    setInterval(autoSave, 60000);
});
//message event
client.on('messageCreate', message => commandHandler(message));
client.login(token);