const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate: false});
const settings = require('./config/settings.json');

client.on('ready', async () => {
  console.log(`${client.user.username} Is Ready ✅`)
})


client.on("messageCreate", async message => {
  if (message.author.id ==! settings.OwnerId) return;
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`${settings.Prefix}start`))) {
    message.channel.send('Selfbot Started ✅')
    
setInterval(() => {
  message.channel.send(`${settings.cmd1}`)
  console.log(`Successfully Used ${settings.cmd1}`)

  }, 

            40000)

setInterval(() => {
  message.channel.send(`${settings.cmd2}`)
console.log(`Successfully Used ${settings.cmd2}`)
  }, 

            45000)

    setInterval(() => {
  message.channel.send(`${settings.cmd3}`)
console.log(`Successfully Used ${settings.cmd3}`)
  }, 

            50000)

setInterval(() => {
  message.channel.send(`${settings.cmd4}`)
  console.log(`Successfully Used ${settings.cmd4}`)
  }, 

            55000)
      
console.log(`Added Intervals Successfully ✅`)
  }

  
  
});


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Webpage Created')
})

app.listen(port, () => {
  console.log(`Ready To host at : ${port} ✅`)
});


client.login(process.env.TOKEN);