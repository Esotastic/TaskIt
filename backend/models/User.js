const mongoose = require("mongoose");
const { Schema } = mongoose;

// ensure unique index for entries,
// removes deprecation warning
mongoose.set('useCreateIndex', true);

//Create Schema
const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  boards: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Board"
    }
  ]
});

mongoose.model("users", userSchema);