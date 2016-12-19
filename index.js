var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
// var io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'f u'});
})

app.post('/', function (req, res) {
  var name = req.body.name;
  res.render('index', { title: 'f', message: 'my name is '+name});
})

server.listen(3000);
