const twilio = require("twilio");
const accountSid = require("./secrets");
const authToken = require("./secrets");

module.exports = new twilio.Twilio(accountSid, authToken );
