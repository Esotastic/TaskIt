const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Create Task Schema
const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true 
  },
  board: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board"
    },
    boardName: String,
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

// eslint-disable-next-line no-undef
module.exports = Task = mongoose.model("task", TaskSchema);