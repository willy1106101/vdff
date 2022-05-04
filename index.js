console.log(`Starting Bot...`);

const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (add,msg,user) => {
  const ass = add.message.guild.members.cache.get(user.id);
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
  if (ass.content === 'radd') {
    msg.reply('身分組加入中...')
    ass.roles.add('971242040992071690')
    msg.reply('加入成功')
  }
});


client.on('messageReactionAdd', (reaction, user) => {
 const member = reaction.message.guild.members.cache.get(user.id);   
 switch (reaction.emoji.name) {
            case '🎨':
                member.roles.add('971242040992071690')
              
                break;
            case '💫':
                member.roles.add('971242040992071690')
                
                break;
        }
});
client.login(token);