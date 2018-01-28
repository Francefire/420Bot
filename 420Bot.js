//4704 --
//Change test
    const Discord = require("discord.js");
    const log4js = require('log4js');
    const logger = log4js.getLogger();
    log4js.configure({
        appenders: { log: { type: 'file', filename: 'logBot1.log' } },
        categories: { default: { appenders: ['log'], level: 'info' } }
    });
    const bot = new Discord.Client();
    const token = "NDA1OTA3Nzk5MDEzNDU3OTIx.DUrzNg.wGJI3uV2zo-GHUSQ2jrD9CZZpuo";  // Token for Francefire's BOT
 //   const token = "NDA1ODQxMjg5NzU0NTc0ODQ5.DU1L8Q.YQpeUqH5IIUlB0zdjbcyJasAKzo" // Token for 420Bot
    


bot.login(token);
console.log("The bot is ready"); //Outputs to the console that the bot is ready 
bot.on('message', message =>
{
   var messageInput = message.content.toLowerCase(); //Puts the message received to lower case and stores it as "messageInput"
   var botId = bot.user.discriminator; // Read IDs of both the bot and the user who sent the message
   var userId = message.author.discriminator;
   var userUsername = message.author.username; // Read the username of the person you posted the message



    console.log(Date()); //outputs current time to the console
    console.log("Bot's id = " + botId)   //Outputs bot's id  
    logger.info("Bot's id = " + botId)    
    console.log("User's id = " + userId) //Outputs the id of the user who posted the message
    logger.info("User's id = " + userId)
    console.log("Username : " + userUsername) // Outputs the username of who posted the message
    logger.info("Username : " + userUsername)
    console.log("Message : " + messageInput) //Outputs the message
    logger.info("Message : " + messageInput)
    console.log("--------------------------------------") // spacer
    logger.info("--------------------------------------")
    if((userId !== botId))
    {    
        if(messageInput.includes("join") && messageInput.includes("server")) //Check if the message contains "server" and "join"
        {
            message.channel.send(" I'm a bot I trigger when I detect a frequently asked question. \n ```Markdown\n<¿ Q: How to join the servers ?>\n#A: read #how-to-join-servers (join the goddamn Teamspeak)``` ");
        } 
        if(messageInput.includes("link") && messageInput.includes("download")) //You got it now right ?
        {
            message.channel.send(" I'm a bot I trigger when I detect a frequently asked question. \n ```Markdown\n<¿ Q: Where can I download the files ?>\n#A: You don't need any files to play on 420 servers, just open dayz and join the server by using the ip``` ");
        }
        if(messageInput.includes("crack") && messageInput.includes("download"))
        {
            message.channel.send(" I'm a bot I trigger when I detect a frequently asked question. \n ```Markdown\n<¿ Q: Where can I download the cracked version of Dayz ?>\n#A: 420Gaming is running of steam version, you don't need to download any files\n \n<¿ Q: Where can I download the files ?>\n#A: You don't need any files to play on 420 servers, just open dayz and join the server by using the ip``` ");if(messageInput.includes("thank"));
        }
        if(messageInput.includes("!faq")) //Check if the message contains "server" and "join"
        {
            message.channel.send("Beep beep :robot: I'm a bot I trigger when I detect a frequently asked question. :robot: \n ```Markdown\n<¿ Q: Wipe ?>\n#A: Yes every 2nd Wednesday at 4:20pm CST\n\n<¿ Q: What is affected by wipe ?>\n#A: All item on the ground, all cars, and persitante objects pretty much everything exept your character and his gear\n\n<¿ Q: How to join the servers ?>\n#A: <#342180445741383691> (join the goddamn Teamspeak)\n\n<¿ Q: How can I build my own base ?>\n#A: Read <#399023820461047820> all information on how to build a base is located there\n\n<¿ Q: What items can I sell to the traders ?>\n#A: Read <#400184693330280449>  \n\n<¿ Q: How can I get vip ?>\n#A: Follow the directions written in #donation\n\n<¿ Q: How can I report a glitcher\cheater ?>\n#A: Every glitching\cheating accusation needs VIDEO evidence otherwise your report will be ignored\n\n<¿ Q: Why can't I stack fire wood ?>\n#A: You first have to take them out of the barrel then stack them and put them back in the barrel\n``` ");
        }
        if(((messageInput.includes("hi") || messageInput.includes("hello"))) && ((messageInput.includes("bot") || messageInput.includes("robot") )))
        {
            message.channel.send(" Hi human! Beep.. Beep :robot: ");
        }
        if(messageInput.includes("good") && messageInput.includes("bot"))
        {
            message.channel.send(" Thanks <@" + message.author.id + "> ! Beep.. beep:robot: ");
        }
//        console.log("Last message = " + lastMessage);
        
}})