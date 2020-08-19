require("dotenv").config();
const twilio = require("twilio");

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

module.exports = twilio(accountSid, authToken);
