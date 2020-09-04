const fs = require("fs");
const discordBotkit = require("botkit-discord");
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const discordBot = require("./bot");

var sheets = require('./modules/sheets');
var bizIdea = require('./utils/generateStartup');

// sheets.SPREADSHEET_KEY = process.env.SPREADSHEET_URL.substr(39, process.env.SPREADSHEET_URL.length).split("/")[0]
// sheets.API_URL = process.env.API_URL;

app.get("/", function(req, res, next) {
  sheets.getData(0)
  .then(function(data){
    res.render('index', { idea:bizIdea.generateStartup(data) })
  })
  .catch(function(error) {
    res.render('index', { idea:"I don't have any. Try again later." })
  });  
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
