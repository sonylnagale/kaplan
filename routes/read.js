const express = require('express');
const db = require('../firebase');

const router = express.Router();

router.get('/:id', function(req, res, next) {
  db.ref('assignments/' + req.params.id).on("value", function(snapshot) {
    res.render('read', { id: req.params.id, assignment: snapshot.val()});
  });
});

module.exports = router;
