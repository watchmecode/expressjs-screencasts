var express = require('express');
var router = express.Router();

router.get('/', renderHome);

function renderHome(req, res, next) {
  res.render('index', { title: 'Express' });
}

module.exports = router;
