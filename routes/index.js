const Message = require("../models/Message");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const messages = await Message.find().sort({ added: -1 }).exec();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (error) {
    next(error);
  }
});

// POST for new message
router.post("/new", async function (req, res, next) {
  const messageUser = req.body.authorInput;
  const messageText = req.body.messageInput;

  try {
    const newMessage = new Message({
      text: messageText,
      user: messageUser,
      added: new Date(),
    });

    await newMessage.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
