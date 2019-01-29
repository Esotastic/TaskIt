const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Task Schema
const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true 
  },
  author: {
    // THIS WILL BE SET UP WHEN USERS CAN FULLY LOG IN
    // id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User"
    // },
    username: String,
  },
  taskBody: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model("task", TaskSchema);