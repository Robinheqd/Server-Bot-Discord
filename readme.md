# Botkit Discord Starter App + Google SHeets

Bizbot is a Discord bot that uses Google Sheets as a database. 

- Botkit: a handy bot building framework
- Discord.js: a node module for connecting to the Discord API
- Botkit Discord: A connector that allows you to use Bokit and Discord.js
- Google Sheet JSON API: A JS module that makes it easier to retrieve data from your Google Sheet

*****


## The Code

### assets

This is where you [can add images, sound files, and other media](https://glitch.com/help/how-do-i/).

### public/style.css

This is the styling for the install guide

### skills/hears.js

This is an [Botkit](https://botkit.ai/) skill for your bot allowing it to respond to certain words it "hears" on the server. Head

### .env

This is a file for storing secure info like API keys

### .gitignore

Git is a "version control" system, which is a fancy way of saying it backs up a record of all your code. This file tells git not to back up certain files. For example `.env` we don't want it backing up because it contains secure info.

### bot.js

This is the base code initializing the bot by giving it to the Discord Api key and telling it where the skills files are

### package.json

This is a file that contains info about your project, like what [node modules it should install](https://glitch.com/help/how-do-i-add-an-npm-module-package-to-my-project/)

### readme.md

This is this file! It's full of helpful info.

### server.js

This contains the code that connects all the different pieces of the bot together so it can be started by package.json

### modules/sheet.js

This is based on the Google Sheet JSON API module. It's full of helpful functions that make retreiving Google Sheet data easier

### utils/formatData.js

This does the dirty work of making the returns JSON easier for the bot to consume. 

### utils/generateStartup.js

This contains all the additional text that makes the bot respond in full sentences.
