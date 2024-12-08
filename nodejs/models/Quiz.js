const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: String,
  question: String,
  options: [String],
  answer: String,
});

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [QuestionSchema],
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
