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

mongoose.model("board", boardSchema);