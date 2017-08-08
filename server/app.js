var dotenv = require('dotenv').config()
var express = require('express');
var path = require('path');
var app = express();
var session = require('express-session');
var handlebars = require('hbs');
var server = require('http').createServer(app);

require('.db/db.js')

var LessonController = require('.controllers/LessonController');
var StudentController = require('.controllers/StudentController');
var TeacherController = require('.controllers/TeacherController');

var port = process.env.PORT || 3000;

app.use(session({
  secret: "sessionpass12345",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

app.use('/lesson', ItemController);
app.use('/student', StudentController);
app.use('/teacher', TeacherController);

app.use(express.static(path.join(__dirname, 'public'))); // TODO: customize for use with react

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); // TODO: route this to react as well

server.listen(3000, function(){

  console.log('Listening on port ' + port);
});
