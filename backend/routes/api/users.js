const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

//Item Model
const User = require("../../models/User");

// @route GET api/items
// @desc Get All Items 
// @access Public
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
}); 

// @route POST api/Users
// @desc Create a User
// @access Public
// you have to create a user objct with name and username strings
router.post("/register", (req, res) => {
  const newUser = new User({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });

  newUser.save().then(user => res.json(user))
  .catch(err =>{
    newUser.status(400).send("unable to create new user");
  });
}); 

// @route DELETE api/users/:id
// @desc Delete a user
// @access Public
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false})); 
});



module.exports = router;