const express = require('express');
const router = express.Router();

/* GET Nutrition_logs page. */
router.get('/', function(req, res, next) {
  res.send('nutrition_log', { title: 'Nutrition log' });
});

module.exports = router;

