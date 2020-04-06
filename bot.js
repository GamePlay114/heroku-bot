const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = '!'
 
 client.on('message', message => {
    //if(message.author === client.user) return; // на всякий случай еще и здесь поправлю
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Привет я БОТ!');
     }
 });

client.login('Njk2NDI1ODEzMjQyODA2Mzg2.XoovlQ.bJWfK_stvgOK3JbQqPxcVnKcX44');
