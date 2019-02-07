const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Item Model
const User = mongoose.model('users');

module.exports = (app) => {
  // @route GET api/users
// @desc Get All users
// @access Public
  app.get("/register", (req, res) => {
    User.find()
      .sort({ date: -1 })
      .then(users => res.json(users));
  });

// @route POST api/Users
// @desc Create a User
// @access Public
// you have to create a user object with name and username strings
  app.post("/register", (req, res) => {
    const fullname = req.body.fullName;
    const email = req.body.email;
    const username = req.body.userName;
    const password = req.body.password;


    /*
    Form successfully registers a user, but it will send an error:
     ValidationError: users validation failed: fullName: Path `fullName` is required., email: Path `email` is required., userName: Path `userName`
     is required., password: Path `password` is required.

     However, mLab will show that a user has been stored.
    */

    User.findOne({ email: req.body.email})
      .then((err, user) => {
        if (user) {
          console.log(user);
          return res.status(400).json({ email: "Email already exists" });
        } else {

          const newUser = new User ({
            fullName: fullname,
            email: email,
            userName: username,
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
