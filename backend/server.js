const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const tasks = require("./routes/api/tasks");
require('./models/User');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys.js").mongoURI;

//Connnect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));

//Use Routes
require('./routes/api/users')(app);
app.use("/api/tasks", tasks);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));