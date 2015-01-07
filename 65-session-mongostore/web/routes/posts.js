var express = require("express");
var author = require("./post-author");
var Posts = require("posts");

var router = new express.Router();

router.get("/", list);
router.get("/:id", view);
router.get("/:id/edit", edit);

router.use("/:id/author", author);

router.param(":id", function(req, res, next, id){
  Posts.loadById(id, function(err, post){
    if (err) { return next(err); }

    req.appData = {
      post: post
    };

    next();
  });
});

function list(req, res, next){
  Posts.find(function(err, posts){
    if (err) { return next(err); }

    res.render("posts", {
      posts: posts
    });
  });
}

function view(req, res, next){
  var post = req.appData.post;

  if (!req.session.viewedPosts){
    req.session.viewedPosts = [];
  }
  req.session.viewedPosts.push({
    id: post.id,
    title: post.title
  });

  res.render("post", {
    post: post
  });
}

function edit(req, res, next){
  var post = req.appData.post;
  res.render("post-edit", {
    post: post
  });
}

module.exports = router;
