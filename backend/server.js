const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const tasks = require("./routes/api/tasks");
const boards = require("./routes/api/boards");



const app = express();

//Bodyparser middleware 
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys.js").mongoURI;

//Connnect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));


//Use Routes
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/boards", boards);


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`));