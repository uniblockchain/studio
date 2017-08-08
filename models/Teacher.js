var mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
  name: String,
  instrument: String,
  student: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}],
  lesson: [{type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'}]
});

var teacherModel = mongoose.model('Teacher', TeacherSchema);

module.exports = teacherModel;
