var express = require('express');
var app = express();
var fs = require('fs');

app.get('/home', function (req, res) {
var html = fs.readFileSync('freewayautoglass.html', 'utf-8');
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});