var express = require('express');
var Users = require("users");

var router = express.Router();
router.get('/', function(req, res, next) {
  res.render("users");
});

module.exports = router;
