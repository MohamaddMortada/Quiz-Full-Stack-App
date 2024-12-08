const Quiz = require('../models/Quiz'); 

const getQuiz = async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  module.exports = getQuiz;