const express = require('express');
const db = require('../firebase');

const router = express.Router();

router.get('/', function(req, res, next) {
  db.ref('assignments').on("value", function(snapshot) {
    res.render('index', { assignments: snapshot.val()});
  });
});

module.exports = router;
