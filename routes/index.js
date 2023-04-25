const express = require('express');
const router = express.Router();

// const fitnessUsers = require('../models').user

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', )

module.exports = router;
