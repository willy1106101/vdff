console.log(`Starting Bot...`);

const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'hi') {
    msg.reply('Hi!');
  }
  if (msg.content === 'web') {
    msg.reply('我的網站連結: https://willyhsu.rf.gd/');
  }
  if (msg.content === 'blink') {
    msg.reply('機器邀請連結: https://discord.com/api/oauth2/authorize?client_id=904281957289054218&permissions=8&scope=bot');
  }
  
});

client.login(token);