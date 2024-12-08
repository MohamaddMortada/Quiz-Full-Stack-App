const Quiz = require('../models/Quiz'); 

const createQuiz = async (req, res) => {
    const { title, questions } = req.body;
  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = createQuiz;