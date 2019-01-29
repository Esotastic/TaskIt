const express = require("express");
const router = express.Router();

//Item Model
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