const express = require('express');
const router = express.Router();

/* GET Physical_Activities page. */
router.get('/', function(req, res, next) {
  res.render('Physical_Activities', { title: 'Physical log' });
});

module.exports = router;
