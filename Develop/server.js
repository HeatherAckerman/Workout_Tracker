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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:3000/", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//Create routes
app.use(require("./routes/api"));
app.use(require("./routes/htmlRoutes"));

//Have server listen
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});