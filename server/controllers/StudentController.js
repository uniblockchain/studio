var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path')
// var graphqlHTTP = require('express-graphql');

var Student = require('../models/Student');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/all', function(req, res){
  Student.find(function(err, students){
    res.json(students)
  })
})

router.get('/:id', function(req, res){
  Student.findById(function(err, student){
    res.json(student)
  })
})

router.post('/', function(req, res){
  var student = new Student({
    name: req.body.name,
    instrument: req.body.instrument,
    teacher: req.body.teacher,
    parent: req.body.parent
  })
  student.save()
  res.json(student);
})

router.patch('/:id', function(req, res){
  var id = req.params.id;
  Student.findById(id, function(err, student){
    student.name = req.body.name,
    student.instrument = req.body.instrument,
    student.teacher = req.body.teacher,
    student.parent = req.body.parent
    student.save();
    res.json(student);
  })
})

router.delete('/:id', function(req, res){
  var id = req.params.id;
  Student.findById(id, function(err, student){
    student.remove();
    res.send('student removed')
  })
})

module.exports = router;
