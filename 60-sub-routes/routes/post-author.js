var express = require("express");

var router = new express.Router();

router.get("/", function(req, res){
  var author = ???

  res.render("post-author", {
    author: author
  }); 
});

module.exports = router;
