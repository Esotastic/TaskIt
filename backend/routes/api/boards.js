const express = require("express");
const router = express.Router({mergeParams: true});


//Item Model
const User = require("../../models/User");
const Task = require("../../models/Task");
const Board = require("../../models/Board");


module.exports = (app) => {
  // All below routes to be changed to be user-specific after initial testing. // 
  // @route GET api/boards
  // @desc Get All board 
  // @access Public

  app.get("/:id", (req, res) => {
    Board.find(req.params.id)
      .sort({ date: -1 })
      .then(boards => res.json(boards));
  }); 

  // @route POST api/boards
  // @desc Create a board
  // @access Public
  app.post("/:id/newboard", (req, res) => {
      const boardName = req.body.boardName;
      const boardForUser = req.params.id;
      const date = req.body.date;

      User.findById(req.params.id)
      .then(() => {
        const newBoard = new Board ({
          boardName: boardName,
          boardForUser: boardForUser,
          date: date
        });
        newBoard.save().then(board => res.json(board));
      });
    });
  // @route DELETE api/board/:id
  // @desc Delete a user
  // @access Public
  app.delete("/:id", (req, res) => {
    Board.findById(req.params.id)
      .then(board => board.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false})); 
  })
};

// module.exports = router;