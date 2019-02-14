const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Item Model
const User = mongoose.model('users');
const Board = mongoose.model("board");

module.exports = (app) => {
  // @route GET api/boards
// @desc Get All boards
// @access Public
  app.get("/allboards", (req, res) => {
    Board.find()
      .sort({ date: -1 })
      .then(boards => res.json(boards));
  });

// @route POST api/boards
// @desc Create a Board
// @access Public
  app.post("/newboard", (req, res) => {
    const boardName = req.body.boardName;
    const newBoard = new Board ({
      boardName: boardName
    });

    // User.findOneAndUpdate({fullName: "Chris Jimenez"}, function(err, user){
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     console.log(user);
    //     user.boards.push(newBoard);
    //     res.json(newBoard);
    //     console.log(user);
    //   }
    // });

    User.findOne({fullName: "Chris Jimenez"})
      .then((user, err) => {
           if(user) {
            console.log(user + "before pushing");
            user.boards.push(newBoard._id);
            user.save().then(savedUser => res.json(savedUser)).catch(err => console.log(err));
            newBoard
              .save()
              .then(board => res.json(board))
              .then(console.log(user + "still working here"))
              .catch(err => console.log(err));
          } else {
            console.log("Somethings wrong");
          }
       });
  });

// @route DELETE api/boards/:id
// @desc Delete a board
// @access Public
  app.delete("/deleteboard/:id", (req, res) => {
    Board.findById(req.params.id)
      .then(board => board.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

};
