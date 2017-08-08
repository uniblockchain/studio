var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  name: String,
  instrument: String,
  teacher: [{type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}],
  parent: String
});

var studentModel = mongoose.model('Student', StudentSchema);

module.exports = studentModel;
