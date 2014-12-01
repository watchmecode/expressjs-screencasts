var express = require("express");
var Lib = require("../lib");

var router = new express.Router();

router.get("/", list);
router.get("/:id", view);

function list(req, res){
  List.Posts.find(function(err, posts){
    if (err) { throw err; }

    res.render("posts", {
      posts: posts
    });
  });
}

function view(req, res){
  var postId = req.params.id;
  List.Posts.loadById(postId, function(err, post){
    if (err) { throw err; }

    res.render("post", {
      post: post
    });

  });
}

module.exports = router;
