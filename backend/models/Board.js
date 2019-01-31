const mongoose = require("mongoose");
const Schema = mongoose.Schema;



//Create Board Schema
const BoardSchema = new Schema({
  boardName: {
    type: String,
    required: true 
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// eslint-disable-next-line no-undef
module.exports = Board = mongoose.model("board", BoardSchema);