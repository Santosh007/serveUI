var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
console.log("Express app running on port 9000");
module.exports = app;
