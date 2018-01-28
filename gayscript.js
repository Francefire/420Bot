const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NDA1OTA3Nzk5MDEzNDUrD9CZZpuo";

bot.login(token);
console.log("The bot is ready")
bot.on('message', message => 
{
   messageInput = message.content.toLowerCase();
   botId = bot.user.discriminator
   userId = message.author.discriminator
   console.log("Bot's id = " + botId)
   console.log("User's id = " + userId)
   console.log("Message = " + messageInput)
    if(userId !== botId)
    {
        if(messageInput.includes("join") && messageInput.includes("server"))
        {
            message.channel.send(" I'm a bot I trigger when I detect a frequently asked question. \n ```Markdown\n<¿ Q: How to join the servers ?>\n#A: read #how-to-join-servers (join the goddamn Teamspeak)``` ");
        }
    }
})