
const express = require('express');
const router = express.Router();


const { User } = require('../models');


/* GET users listing. */
router.get('/', async (req, res)=> {
  const users = await User.findAll();
  res.json(users)
});

module.exports = router;
