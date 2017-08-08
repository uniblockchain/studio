var mongoose = require('mongoose');

var LessonSchema = new mongoose.Schema({
  date: Date,
  location: String,
  price: Number,
  student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
  teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}
});

var lessonModel = mongoose.model('Lesson', LessonSchema);

module.exports = itemModel;
