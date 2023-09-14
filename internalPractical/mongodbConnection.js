const mongoose = require("mongoose");
require("dotenv").config();
url = "mongodb://localhost:27017/test";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "hii"));
db.once("open", () => {
  console.log("open");
});