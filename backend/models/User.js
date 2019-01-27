const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
<<<<<<< HEAD
    required: true
  },
  userName: {
    type: String,
    required: true
=======
    required: true 
  },
  userName: {
  	type: String,
  	required: true
>>>>>>> f0fc7f180f2fdb6cb043707ae1ff7a26130bafd5
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
  }
});

module.exports = User = mongoose.model("user", UserSchema);