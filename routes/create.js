const express = require('express');
const db = require('../firebase');
const crypto = require('crypto');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let shasum  = crypto.createHash('sha1');
  shasum.update(req.body.name + Date.now());
  let id  = shasum.digest('hex');
  const tags = req.body.tags;
  const assignment = {
    id: id,
    name: req.body.name,
    title: req.body.title,
    tags: [tags],
    description: req.body.description,
  };

  db.ref('assignments').child(id).set(assignment);

  if (tags.length > 0 && tags[0] != '') {
    tags.forEach(function(tag) {
      db.ref('tags').child(tag).push(id);
    });
  }

  res.redirect('/assignments/' + id);
});

module.exports = router;
