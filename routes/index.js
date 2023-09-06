var express = require("express");
var router = express.Router();

const messages = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// POST for new message
router.post("/new", function (req, res, next) {
  const messageUser = req.body.authorInput;
  const messageText = req.body.messageInput;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

module.exports = router;
