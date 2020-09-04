// required for google sheet
var sheets = require("../modules/sheets");

var bizIdea = require("../utils/generateStartup");
var formatData = require("../utils/formatData");

// sheets.SPREADSHEET_KEY = process.env.SPREADSHEET_URL.substr(39, process.env.SPREADSHEET_URL.length).split("/")[0]
// sheets.API_URL = process.env.API_URL;

// Helpers
function soRandom(items) {
  return Math.floor(Math.random() * items.length);
}

// BOT CODE
module.exports = function(controller) {
  controller.hears(
    ["hello", "help"],
    ["direct_mention", "mention"],
    (bot, message) => {
      let sender = message.user.toString();

      bot.reply(
        message,
        "Hi " +
          sender +
          "! I'm Bizbot, and I want to help you make your company great! \n\n* I can tell you a great new startup idea I had: `@bizbot new-startup`. \n* I can also show you all your other business ideas that you have in a Google Sheet: `@bizbot all-ideas`.\n* Feeling stuck? I can tell you an Oblique Strategy to think about: `@bizbot strategy`\n\nI'm excited to work together!"
      );
    }
  );

  //   Come up with a new business idea
  controller.hears(
    ["new-startup", "startup"],
    ["direct_mention", "mention"],
    (bot, message) => {
      let sender = message.user.toString();
      bot.reply(
        message,
        `Hey ${sender}. I have SO MANY good ideas, for example...`
      );

      sheets
        .getData(0)
        .then(function(data) {
          let response = bizIdea.generateStartup(data);
          bot.reply(message, `${response}`);
        })
        .catch(function(error) {
          bot.reply(
            message,
            `Actually, nevermind...the world isn't ready for my ideas.`
          );
        });
    }
  );

  controller.hears(
    ["new-idea", "new idea"],
    ["direct_mention", "mention"],
    (bot, message) => {
      let sender = message.user.toString();
      bot.reply(
        message,
        `Hey${sender}, add it to the list: https://docs.google.com/spreadsheets/d/1gVDy2NwOhZu293QGxcgI7QLLpQGrHRT8mZF5dbsAlsU/edit#gid=1907119618`
      );
    }
  );

  // List out all ideas in the Google Spreadsheet
  // Example of how to return a list in Discord
  controller.hears(
    ["all-ideas", "all ideas"],
    ["direct_mention", "mention"],
    (bot, message) => {
      let sender = message.user.toString();
      let response = "";

      sheets
        .getData(1)
        .then(function(data) {
          console.log(data);
          let dataResponse = formatData.dataFormatter(
            "getAll",
            data.rows,
            "idea"
          );

          dataResponse.forEach(function(idea, index) {
            response += `💡 ${idea} \n`;
          });

          bot.reply(message, `${response}`);
        })
        .catch(function(error) {
          bot.reply(message, `Not right now ${sender}...`);
        });
    }
  );

  //  Tells you an Oblique Strategy
  //  Good example of how to display one random string out of a large array
  controller.hears(
    ["strategy", "new strategy"],
    ["direct_mention", "mention"],
    (bot, message) => {
      let sender = message.user.toString();
      let response = "";

      sheets
        .getData(2)
        .then(function(data) {
          let dataResponse = formatData.dataFormatter(
            "getAll",
            data.rows,
            "strategy"
          );

          let strategy = dataResponse[soRandom(dataResponse)];

          response = `${strategy}`;

          bot.reply(message, `${response}`);
        })
        .catch(function(error) {
          console.log("error inside hearjs:  ", error);
          bot.reply(message, `Not right now ${sender}...`);
        });
    }
  );

  // end module.exports
};
