const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});

const Message = await mongoose.model("Message", messageSchema);

module.exports = Message;
