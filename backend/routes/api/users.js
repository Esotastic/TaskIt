const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Item Model
const User = mongoose.model('users');

module.exports = (app) => {
  // @route GET api/items
// @desc Get All Items
// @access Public
  app.get("/", (req, res) => {
    User.find()
      .sort({ date: -1 })
      .then(users => res.json(users));
  });

// @route POST api/Users
// @desc Create a User
// @access Public
// you have to create a user object with name and username strings
  app.post("/", (req, res) => {
    const { body } = req;
    const {
      fullName,
      email,
      userName,
      password
    } = body;

    User.findOne({ email: email})
      .then(user => {
        if (user) {
          return res.status(400).json({ email: "Email already exists" });
        } else {

          const newUser = new User ({
            fullName: fullName,
            email: email,
            userName: userName,
            password: password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
      });


  });

// @route DELETE api/users/:id
// @desc Delete a user
// @access Public
  app.delete("/:id", (req, res) => {
    User.findById(req.params.id)
      .then(user => user.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

};
