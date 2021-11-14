//import commands
var hug = require('./commands/action/hug');
var kiss = require('./commands/action/kiss');
var pat = require('./commands/action/pat');
var ban = require('./commands/admin/ban');
var kick = require('./commands/admin/kick');
var avatar = require('./commands/other/avatar');
var invite = require('./commands/other/invite');
var help = require('./commands/other/help');
//parse commands
var config = require('./json/config.json');
module.exports = function(message) {
    if (message.content.startsWith(`${config.prefix} help`)) help(message);
    if (message.content.startsWith(`${config.prefix} hug`)) hug(message);
    if (message.content.startsWith(`${config.prefix} kiss`)) kiss(message);
    if (message.content.startsWith(`${config.prefix} pat`)) pat(message);
    if (message.content.startsWith(`${config.prefix} ban`)) ban(message);
    if (message.content.startsWith(`${config.prefix} kick`)) kick(message);
    if (message.content.startsWith(`${config.prefix} avatar`)) avatar(message);
    if (message.content.startsWith(`${config.prefix} invite`)) invite(message);
}