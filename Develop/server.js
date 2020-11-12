//Require express and mongoose
const express = require("express");
const mongoose = require("mongoose");

//Create port
const PORT = process.env.PORT || 3000;

//Use express/urlencoded/json/static
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Use mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutSchema", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let path = require("path");
//Create routes
app.use(require("./routes/apiRoutes"));
app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.get("/stats", (req,res) => {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
});

//Have server listen
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});