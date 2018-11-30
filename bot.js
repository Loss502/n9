const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "510077438458462250"; // ايدي السررفر
var channel = "510077438458462254";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
