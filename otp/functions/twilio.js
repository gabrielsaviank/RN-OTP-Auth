const twilio = require("twilio");
const secrets = require("./secrets");

const accountSid = secrets.accountSid;
const authToken = secrets.authToken;

module.exports = new twilio.Twilio(accountSid, authToken );
