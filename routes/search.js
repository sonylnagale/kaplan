const express = require('express');
const db = require('../firebase');

const router = express.Router();

router.get('/', function(req, res, next) {
  // db.ref('assignments/' + req.params.id).on("value", function(snapshot) {
  //   res.render('read', { id: req.params.id, assignment: snapshot.val()});
  // });
  res.render('search');
});

router.post('/', function(req, res, next) {
  res.render('search', {tag: req.body.search});
});

module.exports = router;
