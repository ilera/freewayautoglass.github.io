var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser')
var email 	= require("emailjs");
var server 	= email.server.connect({
   user:    "freewayautoglassserver@gmail.com", 
   password:"smileanddial", 
   host:    "smtp.gmail.com", 
   ssl:     true
});


app.use(bodyParser.json())


app.get('/freewayautoglass.html', function (req, res) {
var html = fs.readFileSync('freewayautoglass.html', 'utf-8');
  res.send(html);
});

app.get('/freewayautoglass.css', function (req, res) {
var html = fs.readFileSync('freewayautoglass.css', 'utf-8');
	res.setHeader('Content-Type', 'text/css');
 	res.send(html);
});

app.get('/', function (req, res) {
var html = fs.readFileSync('freewayautoglass.html', 'utf-8');
  res.send(html);
});

app.get('/freewayautoglassservices.html', function (req, res) {
var html = fs.readFileSync('freewayautoglassservices.html', 'utf-8');
  res.send(html);
});

app.get('/freewayautoglassaboutus.html', function (req, res) {
var html = fs.readFileSync('freewayautoglassaboutus.html', 'utf-8');
  res.send(html);
});

app.get('/freewayautoglasscontactus.html', function (req, res) {
var html = fs.readFileSync('freewayautoglasscontactus.html', 'utf-8');
  res.send(html);
});

app.get('/contact-form-thank-you.html', function (req, res) {
var html = fs.readFileSync('contact-form-thank-you.html', 'utf-8');
  res.send(html);
});

app.post('/endpoint', function(req, res){
    var obj = {};
    console.log('body: ' + JSON.stringify(req.body));
    
    server.send({
   		text:    req.body.title, 
   		from:    "freewayautoglassserver@gmail.com", 
   		to:      "izadorhojoonlera@gmail.com",
   		subject: "testing emailjs"
	}, function(err, message) { 
		console.log(err || message); 
		res.send(req.body);
	});
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

