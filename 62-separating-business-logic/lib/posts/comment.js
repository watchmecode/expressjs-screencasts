var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
  date: {type: Date, required: true, default: Date.now},
  content: {type: String, required: true},
  author: {
    name: {type: String, required: true},
    email: {type: String}
  }
});

module.exports = CommentSchema;
