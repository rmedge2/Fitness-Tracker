
const express = require('express');
const router = express.Router();


const { Users } = require('../models');


// Creating a new user
router.post('/', async(req, res) => {
  const { firstName, lastName, email, age, weight } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email, age, weight })
    res.status(201).json(user);
  }
  catch (error){
    res.status(500).json({ message: "Error creating new user", error})
  }
});

/* GET a list of the users */
router.get('/', async (req, res)=> {
  try{
    const users = await Users.findAll(); 
    res.json(users)
  } catch(error) {
    console.error(error)
    res.status(500).json({ message: "Error retrieving users", error})
  }
});

// Find a user by a specific id
router.get('/:id', async(req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if(!user){
      res.status(404).json({ message: "User not found" })
    }else {
      res.json(user)
    }
  } catch(error){
    res.status(500).json({ message: "Error retrieving user"})
  }
})

// Update a specific user (by id)
router.put('/:id', async(req, res) => {
  const { firstName, lastName, email, age, weight } = req.body;
  try {
    const newUser = {};
    if (firstName !== undefined) {
      newUser.firstName = firstName;
    }
    if (lastName !== undefined){
      newUser.lastName = lastName;
    }
    if (email !== undefined){
      newUser.email = email;
    }
    if (age !== undefined){
      newUser.age = age;
    }
    if (weight !== undefined){
      newUser.weight = weight;
    }
    const [updated] = await User.update(newUser, {
      where: { id: req.params.id },
    });
    
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating the user" })
  }
})

module.exports = router;
