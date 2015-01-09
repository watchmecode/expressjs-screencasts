var mongoose = require("mongoose");
var SchemaTypes = mongoose.Schema.Types;
var StatusPlugin = require("status");
var CommentSchema = require("./comment");

var Status = {
  draft: 0,
  published: 1,
  flagged: 2
};

var PostSchema = new mongoose.Schema({
  date: {type: Date, required: true, default: Date.now},
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {
    type: SchemaTypes.ObjectId,
    ref: "user"
  },
  comments: [CommentSchema]
});

PostSchema.plugin(StatusPlugin, {
  defaultStatus: Status.draft
});

PostSchema.static("loadById", function(id, cb){
  Post.findById(id)
    .populate("author")
    .exec(cb);
});

PostSchema.static("findByAuthor", function(authorId, cb){
  var postsByAuthor = {
    author: authorId
  };

  this.find(postsByAuthor, cb);
});

var Post = mongoose.model("post", PostSchema);
module.exports = Post;
