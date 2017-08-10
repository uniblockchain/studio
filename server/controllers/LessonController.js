var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path')
// var graphqlHTTP = require('express-graphql');

var Lesson = require('../models/Lesson');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/all', function(req, res){
  Lesson.find(function(err, lessons){
    res.json(lessons)
  })
});

router.get('/:id', function(req, req){
  var id = req.params.id;
  Lesson.findById(id, function(err, lesson){
    res.json(lesson);
  })
});

router.post('/', function(req, res){
  var lesson = new Lesson({
    date: req.body.date,
    location: req.body.location,
    price: req.body.price,
    student: req.body.student,
    teacher: req.body.teacher
  })
  lesson.save();
  res.json(lesson);
});

router.patch('/:id', function(req, res){
  var id = req.params.id;
  Lesson.findById(id, function(err, lesson){
    lesson.date = req.body.date,
    lesson.location = req.body.location,
    lesson.price = req.body.price,
    lesson.student = req.body.student,
    lesson.teacher = req.body.teacher
    lesson.save();
    res.json(lesson);
  })
});

router.delete('/:id', function(req, res){
  var id = req.params.id;
  Lesson.findById(id, function(err, lesson){
    lesson.remove();
    res.send('lesson removed');
  })
})

module.exports = router;
