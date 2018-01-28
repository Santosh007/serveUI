var express = require("express");
var path = require('path');
var app = express();


app.set('port', process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 9000);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost');


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'), app.get('ip'), function(){
  console.log("Express server listening on " + app.get('ip') + ":" + app.get('port'));
});

module.exports = app;
