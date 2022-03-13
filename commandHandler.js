//import lint discord js
const {Message} = require('discord.js');
//import commands
var hug = require('./commands/action/hug');
var kiss = require('./commands/action/kiss');
var pat = require('./commands/action/pat');
var ban = require('./commands/admin/ban');
var kick = require('./commands/admin/kick');
var avatar = require('./commands/other/avatar');
var invite = require('./commands/other/invite');
var help = require('./commands/other/help');
var punch = require('./commands/action/punch');
var kill = require('./commands/action/kill');
var penguin = require('./commands/emote/penguin');
var cry = require('./commands/emote/cry');
var laugh = require('./commands/emote/laugh');
var timeout = require('./commands/admin/timeout');
var smile = require('./commands/emote/smile');
var grin = require('./commands/emote/grin');
var balance = require('./commands/economy/balance');
var roll = require('./commands/economy/roll');
var zoo = require('./commands/battle/zoo');
//parse commands
var {prefix} = require('./json/config.json');
/**
 *
 * @param {Message} message
 */
module.exports = function(message) {
    if (message.author.bot) return;
    else if (message.content.startsWith(`${prefix} help`)) help(message);
    else if (message.content.startsWith(`${prefix} hug`)) hug(message);
    else if (message.content.startsWith(`${prefix} kiss`)) kiss(message);
    else if (message.content.startsWith(`${prefix} pat`)) pat(message);
    else if (message.content.startsWith(`${prefix} ban`)) ban(message);
    else if (message.content.startsWith(`${prefix} kick`)) kick(message);
    else if (message.content.startsWith(`${prefix} avatar`)) avatar(message);
    else if (message.content.startsWith(`${prefix} invite`)) invite(message);
    else if (message.content.startsWith(`${prefix} punch`)) punch(message);
    else if (message.content.startsWith(`${prefix} kill`)) kill(message)
    else if (message.content.startsWith(`${prefix} penguin`)) penguin(message)
    else if (message.content.startsWith(`${prefix} cry`)) cry(message)
    else if (message.content.startsWith(`${prefix} laugh`)) laugh(message)
    else if (message.content.startsWith(`${prefix} timeout`)) timeout(message)
    else if (message.content.startsWith(`${prefix} smile`)) smile(message)
    else if (message.content.startsWith(`${prefix} grin`)) grin(message)
    else if (message.content.startsWith(`${prefix} balance`)) balance(message)
    else if (message.content.startsWith(`${prefix} roll`)) roll(message)
    else if (message.content.startsWith(`${prefix} zoo`)) zoo(message)
}