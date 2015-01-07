var express = require("express");

var router = new express.Router();

router.get("/", function(req, res, next){
  var post = req.appData.post;
  var author = post.author;

  res.render("post-author", {
    post: post,
    author: author
  }); 
});

module.exports = router;
