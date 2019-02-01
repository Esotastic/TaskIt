const express = require("express");
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
  Board.find()
    .sort({ date: -1 })
    .then(boards => res.json(boards));
}); 

// @route POST api/boards
// @desc Create a board
// @access Public
router.post("/", (req, res) => {
  // User.findById(req.params.id, (err, user) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     Task.create( req.body.task, (err, task) => {
  //       if(err){
  //         console.log(err);
  //       } else {
  //         task.taskName = req.body.taskName;
  //         task.taskBody: req.body.taskBody;
  //         author.id: req.user._id,
  //         task.author.username = req.user.username   
  //       }
  //     })
  //   }
  // })
  Board.findOne({_id: "5c4522ea9063ce2458e71647"})
    .populate('boardForUser')
    .exec(function(err, board) {
      const newBoard = new Board({
        boardName: req.body.boardName,
      });
    
    
      newBoard.save().then(board => res.json(board));
    });
  // const newBoard = new Board({
  //   boardName: req.body.boardName,
  // });


  // newBoard.save(function(err) {
  //   const user = User.find({_id: });

  //   user.boards.userBoard.push(newBoard);
  //   user.save(function(err){

  //   });
  // }).then(board => res.json(board));
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