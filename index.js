const client = require("./client");
const from = process.env.TWILIO_FORM;
const to = process.env.TWILIO_TO;

client.messages
  .create({ body: "Hi there!", from, to })
  .then((message) => console.log(message.sid));
