var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("This is server for dynamodb!");
});

app.listen(5000);
console.log("Server is running on port 5000");
