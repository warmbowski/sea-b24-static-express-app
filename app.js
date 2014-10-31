// Based on exercises from Introduction to Express
// http://code.tutsplus.com/tutorials/introduction-to-express--net-33367

var express = require('express');
var app = express();
var port = 3000;

app.use('/styles', express.static(__dirname + '/styles'));

app.get('/', function(req, res) {
  res.sendfile("./index.html");
});

app.get('/about', function(req, res) {
  res.sendfile("./about.html");
});

app.get('/api', function(req, res) {
  res.send({screenName:"Warmbowski",age:46});
});

app.listen(port);
console.log("Server running on port " + port);