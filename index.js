console.log(`Starting Bot...`);
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg,reaction,user,quotes ,message) => {
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
    msg.channel.send('本伺服器連結https://discord.gg/eRdMgVhPBq')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
  }
  if (msg.content === '!upload') {
    //msg.channel.send('網站已更新！網址：https://willyhsu.rf.gd/')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
    const channelId = '971756261328683108';
    client.channels.fetch(channelId).then(channel => {
    channel.send("網站已更新！～"); });
    msg.channel.send('成功發送！')
  }
  if (msg.content === '!fupload') {
    //msg.channel.send('')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
    const channelId = '971756261328683108';
    client.channels.fetch(channelId).then(channel => {
    channel.send("新的檔案已上傳至網站嘍！～"); });
    msg.channel.send('成功發送！')
  }
  if (msg.content === '!call') {
    //msg.channel.send('@管理員')
    //msg.channel.setURL('https://discord.gg/8cV7RubA7Y')
   /* const channelId = '971756261328683108';
   client.channels.fetch(channelId).then(channel => {
    channel.send("測試！"); 
    });
    msg.channel.send('成功發送！')
    // Create an invite and send it in the channel
// You can only create an invite from a GuildChannel
// Messages can only be sent to a TextChannel
 msg.createInvite()
  message.channels.fetch(channelId).then(invite =>
    message.channel.send(invite.url)
);*/
  }
  
});
const user = message.mentions.users.first();

if (!/^\d+$/.test(message.content.split(" ")[1])) 
  return message.reply('Please provide a valid number');
// Check if the provided argument is completely a number. We run this because parseInt can parse numbers like this 564gb, leading to some undesirable results

// Parse Amount
const amount = !!parseInt(message.content.split(" ")[1]) ? parseInt(message.content.split(" ")[1]) : parseInt(message.content.split(" ")[2])

if (!amount) return message.reply("Must specify an amount to delete!");
if (!amount && !user) return message.reply("Must specify a user and amount, or just an amount, of messages to purge!");
// Fetch 100 messages (will be filtered and lowered up to max amount requested)
message.channel.messages.fetch({
 limit: 100,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
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