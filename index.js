console.log(`Starting Bot...`);
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const { prefix } = require('./infig.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message',  (msg,bmsg) => {

  if(msg.content === `${prefix}sever`){
    msg.delete()
   msg.channel.send(`伺服器名稱: ${msg.guild.name},人數: ${msg.guild.memberCount}
   ,ID: ${msg.guild.id}`)
  }
  
  
  if(msg.content === `${prefix}binfo`){
    msg.delete()
   msg.channel.send(`
   機器人名稱: ${client.user.tag},
   ID: ${client.user.id}`
  )}
  
  /*if(msg.content === `${prefix}info`){}*/
  if (msg.content === `${prefix}hi`) {
    msg.delete()
    msg.channel.send('Hi!');
  }
  
  if (msg.content === `${prefix}web`) {
    msg.delete()
    msg.channel.send('我的網站連結: https://willyhsu.rf.gd/');
  }
  
  if (msg.content === `${prefix}blink`) {
    msg.delete()
    msg.channel.send('機器邀請連結: https://discord.com/api/oauth2/authorize?client_id=904281957289054218&permissions=8&scope=bot');
  }
  
  if (msg.content === `${prefix}oldinvite`) {
    msg.delete()
    msg.channel.send('伺服器連結https://discord.gg/eRdMgVhPBq')
    //msg.channel.send('https://discord.gg/8cV7RubA7Y')
    msg.channel.send('https://discord.gg/u6KxtbrMvr')
    
  }
  
  if (msg.content === `${prefix}invite`) {
    msg.delete()
    //msg.channel.send('本伺服器連結https://discord.gg/u6KxtbrMvr')
    //msg.channel.send('本伺服器連結https://discord.gg/u6KxtbrMvr')
    msg.channel.send('hi').then(msg => msg.delete({timeout:500}))
  }
  
  if (msg.content === `${prefix}upload`) {
    msg.delete()
    const channelId = '971756261328683108';
    client.channels.fetch(channelId).then(channel => {
    channel.send("@here網站已更新！～"); });
    msg.channel.send('成功發送！').then(msg => msg.delete({timeout:200}))
  }
  
  if (msg.content === `${prefix}fupload`) {
    msg.delete()
    const channelId = '971756261328683108';
    client.channels.fetch(channelId).then(channel => {
    channel.send("@here新的檔案已上傳至網站嘍！～"); });
    msg.channel.send('成功發送！').then(msg => msg.delete({timeout:200}))
  }
  
  if (msg.content === `${prefix}logstop`) {
    msg.delete()
    const channelId = '971756261328683108';
    client.channels.fetch(channelId).then(channel => {
    channel.send("@here網站目前禁止登入！～"); });
    msg.channel.send('成功發送！').then(msg => msg.delete({timeout:200}))
  }
    
  if (msg.content === `${prefix}logopen`) {
    const channelId = '971756261328683108';
    client.channels.fetch(channelId).then(channel => {
    channel.send("@here網站目前開放登入！～"); })
    msg.channel.send('成功發送！').then(msg => msg.delete({timeout:200}))
  }
  if (msg.content=== `${prefix}webpass`) {
  //  var pass= [msg.member.id / (msg.member.id * 1234) ]*500
   // var user = pass
 // msg.reply('你的帳號為:'+ user +'你的密碼為:'+ pass)
    msg.delete()
    var aa='帳號為que123'+'密碼為que1234567890'
    msg.channel.send(aa).then(msg => msg.delete({timeout: 10000}));   
  }
  /*if (msg.content === `${prefix}a`) {
    var pass= [(msg.member.id / msg.member.id) * 1234]*500
    var user = msg.author.tag
     msg.reply('你的帳號為:'+user +'你的密碼為:'+ pass)`))
  msg.channel.fetchMessage(lastmsg).then(msg => {
  if (msg) msg.delete();

});
  }*/

  
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