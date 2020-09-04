const discordBotkit = require('botkit-discord');

const configuration = {
	token: process.env.DISCORD_TOKEN
};

const discordBot = discordBotkit(configuration);
console.log(discordBot)
  var normalizedPath = require("path").join(__dirname, "skills");

  require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./skills/" + file)(discordBot);
  });


module.exports = discordBot;

const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
