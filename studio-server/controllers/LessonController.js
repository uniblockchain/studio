var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path')
// var graphqlHTTP = require('express-graphql');

var Lesson = require('../models/Lesson');

router.use(bodyParser.urlencoded({extended: true}));



module.exports = router;
