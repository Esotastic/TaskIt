const express = require("express");
const router = express.Router({mergeParams: true});

//Item Model
const User = require("../../models/User");
const Task = require("../../models/Task");

module.exports = router;

// All below routes to be changed to be user-specific after initial testing. // 

// @route GET api/tasks
// @desc Get All tasks 
// @access Public

router.get("/", (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(tasks));
}); 

// @route POST api/tasks
// @desc Create a task
// @access Public
router.post("/", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err) {
      console.log(err);
    } else {
      Task.create( req.body.task, (err, task) => {
        if(err){
          console.log(err);
        } else {
          task.taskName = req.body.taskName;
          task.taskBody: req.body.taskBody;
          author.id: req.user._id,
          task.author.username = req.user.username   
        }
      })
    }
  })

  const newTask = new Task({
    taskName: req.body.taskName,
  });

  newTask.save().then(task => res.json(task));
}); 

// @route DELETE api/tasks/:id
// @desc Delete a user
// @access Public
router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false})); 
});



module.exports = router;