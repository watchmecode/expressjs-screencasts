var express = require('express');
var router = express.Router();

/* GET home page. */
function addSomething(req, res, next){
  if (req.user.isLoggedIn){
    next();
  } else {
    res.render("error");
  }
}

function renderHome(req, res, next) {
  res.render('index', { title: 'Express' });
}

router.get('/', addSomething, renderHome);

module.exports = router;
