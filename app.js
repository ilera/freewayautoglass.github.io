var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;

app.get('/home', function (req, res) {
var html = fs.readFileSync('freewayautoglass.html', 'utf-8');
  res.send(html);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});