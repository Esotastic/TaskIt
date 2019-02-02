const mongoose = require("mongoose");
const { Schema } = mongoose;

//Create Schema
const userSchema = new Schema({
  fullName: {
    type: String,
    require: true
  },
  userName: {
  	type: String,
  	require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  boards: {
    name: String,
    userBoards: [{type: Schema.Types.ObjectId, ref: "Board"}]
  }
});

mongoose.model("users", userSchema);