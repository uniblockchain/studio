var path = require('path');
var bodyParse = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var express = require('express');
var app = express();
var dotenv = require('dotenv').config()
var server = require('http').createServer(app);

require('./db/db.js')

var LessonController = require('./controllers/LessonController');
var StudentController = require('./controllers/StudentController');
var TeacherController = require('./controllers/TeacherController');

var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//cross-origin permissions (to work with react)
app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'ORIGIN, ACCEPT, CONTENT-TYPE, X-REQUESTED-WITH')
})

//express-session
app.use(session({
  secret: "sessionpass12345",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

//url routes
app.use('/lesson', LessonController);
app.use('/student', StudentController);
app.use('/teacher', TeacherController);


// // will sending users to public mess up react?
// app.use(express.static(path.join(__dirname, 'public'))); //

// // tweak below for react or delete
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

server.listen(3001, function(){

  console.log('Listening on port ' + port);
});
