const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true 
  },
  userName: {
  	type: String,
  	required: true
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

module.exports = User = mongoose.model("user", UserSchema);