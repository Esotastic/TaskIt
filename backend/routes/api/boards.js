const express = require("express");
const mongoose = require('mongoose');
const router = express.Router({mergeParams: true});


//Item Model
const User = require("../../models/User");
const Task = require("../../models/Task");
const Board = require("../../models/Board");

module.exports = router;


  // All below routes to be changed to be user-specific after initial testing. // 
  // @route GET api/boards
  // @desc Get All board 
  // @access Public
  router.get("/", (req, res) => {
    Board.find(req.params.id)
      .sort({ date: -1 })
      .then(boards => res.json(boards));
  }); 

  // @route POST api/boards
  // @desc Create a board
  // @access Public
  router.post("/newboard", (req, res) => {
    const boardName = req.body.boardName;
    const date = req.body.date; 
    const newBoard = new Board ({
      boardName: boardName,
      date: date
    });
  }, function(err, newBoard) {  
    User.findOne({ fullName: "Chris Jimenez" }, function(err, foundUser){
      if(err){
        console.log(err);
      } else {
        foundUser.boards.push(newBoard);
        foundUser.save().then(board => res.json(board));
      }
    });
  });


  // @route DELETE api/board/:id
  // @desc Delete a user
  // @access Public
  router.delete("/:id", (req, res) => {
    Board.findById(req.params.id)
      .then(board => board.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false})); 
  });

module.exports = router;