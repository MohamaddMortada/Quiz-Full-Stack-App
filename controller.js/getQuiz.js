const Quiz = require('../models/Quiz'); 

async function getQuiz(params) {
    try {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }