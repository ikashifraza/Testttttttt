const fs = require("fs");
module.exports.config = {
  name: "zehra",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "zehra",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("zehra")==0 || event.body.indexOf("Zahra")==0 || event.body.indexOf("Wadi_e_zehra")==0 || event.body.indexOf("Wade e zehra")==0) {
    var msg = {
        body: "💞Wadi e Zehra 💞",
        attachment: fs.createReadStream(__dirname + `/noprefix/zehra.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🚩", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
