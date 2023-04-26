const express = require('express');
const router = express.Router();

/* GET Physical_Activities page. */
router.get('/', function(req, res, next) {
  res.send('physical_activities', { title: 'Physical log' });
});

module.exports = router;
