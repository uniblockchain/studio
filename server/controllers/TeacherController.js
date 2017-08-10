var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path')
// var graphqlHTTP = require('express-graphql');

var Teacher = require('../models/Teacher');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/all', function(req, res){
  Teacher.find(function(err, teachers){
    res.json(teachers)
  })
})

router.get('/:id', function(req, res){
  var id = req.params.id;
  Teacher.findById(id, function(err, teacher){
    res.json(teacher);
  })
})

router.post('/', function(req, res){
  var teacher = new Teacher({
    name: req.body.name,
    instrument: req.body.instrument,
    student: req.body.student,
    lesson: req.body.lesson
  })
  teacher.save();
  res.json(teacher);
})

router.patch('/:id', function(req, res){
  var id = req.params.id;
  Teacher.findById(id, function(err, teacher){
    teacher.name = req.body.name,
    teacher.instrument = req.body.instrument,
    teacher.student = req.body.student,
    teacher.lesson = req.body.lesson
    teacher.save();
    res.json(teacher);
  })
})

router.delete('/:id', function(req, res){
  var id = req.params.id;
  Teacher.findById(id, function(err, teacher){
    teacher.remove();
    res.send('teacher removed');
  })
})

module.exports = router;
