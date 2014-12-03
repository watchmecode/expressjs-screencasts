var express = require('express');
var home = require("./home");
var users = require("./users");
var posts = require("./posts");

var router = express.Router();
router.use("/", home);
router.use("/users", users);
router.use("/posts", posts);

module.exports = router;
