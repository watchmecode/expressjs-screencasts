var express = require('express');
var router = express.Router();

router.get('/', renderHome);

function renderHome(req, res, next) {
  var viewedPosts = req.session.viewedPosts;
  res.render('index', { 
    title: 'Express',
    viewedPosts: viewedPosts
  });
}

module.exports = router;
