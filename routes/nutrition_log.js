const express = require('express');
const router = express.Router();

/* GET Nutrition_logs page. */
router.get('/', function(req, res, next) {
  res.send('nutrition_logs', { title: 'Nutrition logs' });
});

module.exports = router;
