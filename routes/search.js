const express = require('express');
const db = require('../firebase');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('search');
});

router.post('/', function(req, res, next) {
  db.ref('tags/' + req.body.search).on("value", function(snapshot) {
    res.render('search', { tag: req.body.search, data: snapshot.val()});
  });
});

module.exports = router;
