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

    User.findOne({fullName: "Chris Jimenez"})
      .then((user, err) => {
           if(user) {
            const newBoard = new Board ({
              boardName: boardName
            });
            newBoard
              .save()
              .then(board => res.json(board))
              .catch(err => console.log(err));
            user.boards.push(newBoard);
          } else {
            console.log("Somethings wrong");
          }
       });
  });

// @route DELETE api/boards/:id
// @desc Delete a board
// @access Public
  // app.delete("/deleteboard/:id", (req, res) => {
  //   Board.findById(req.params.id)
  //     .then(user => board.remove().then(() => res.json({success: true})))
  //     .catch(err => res.status(404).json({success: false}));
  // });

};
