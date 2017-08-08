var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path')
// var graphqlHTTP = require('express-graphql');

var Teacher = require('../models/Teacher');

router.use(bodyParser.urlencoded({extended: true}));



module.exports = router;
