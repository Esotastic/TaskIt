const mongoose = require("mongoose");
const { Schema } = mongoose;

// ensure unique index for entries,
// removes deprecation warning
mongoose.set('useCreateIndex', true);
//Create Board Schema
const boardSchema = new Schema({
  boardName: {
    type: String,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Board = mongoose.model("board", boardSchema);

module.exports = Board;