console.log(`Starting Bot...`);

const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg,reaction,user,quotes) => {
  if (msg.content === '!ping') {
    msg.channel.send('webbot Pong!');
  }
  if (msg.content === '!hi') {
    msg.channel.send('Hi!');
  }
  if (msg.content === '!web') {
    msg.channel.send('我的網站連結: https://willyhsu.rf.gd/');
  }
  if (msg.content === '!blink') {
    msg.channel.send('機器邀請連結: https://discord.com/api/oauth2/authorize?client_id=904281957289054218&permissions=8&scope=bot');
  }
  if (msg.content === '!invite') {
    msg.channel.send('本伺服器連結https://discord.gg/8cV7RubA7Y')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
  }
  if (msg.content === '!upload') {
    msg.channel.send('網站已更新！網址：https://willyhsu.rf.gd/')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
  }
  if (msg.content === '!fupload') {
    msg.channel.send('@everyone新檔案已上傳至網站了！')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
  }
  
});

/*client.on('guildMemberAdd', (member) => {
    const channelId = 'CHANNEL_ID'; // The Channel ID you just copied
    const welcomeMessage = `Hey <@${member.id}>! Welcome to my server!`;
    member.guild.channels.fetch(channelId).then(channel => {
        channel.send(welcomeMessage)
    });
});*/

/*client.on('messageReactionAdd', (reaction, user) => {
 const member = reaction.message.guild.members.cache.get(user.id);   
 switch (reaction.emoji.name) {
            case '🎨':
                member.roles.add('971242040992071690')
              
                break;
            case '💫':
                member.roles.add('971242040992071690')
                
                break;
        }
});*/
client.login(token);