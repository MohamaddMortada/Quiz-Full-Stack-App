const Quiz = require('../models/Quiz'); 

const addQuestion = async (req, res) => {
    const { quizId } = req.params;
    const { questionText, options, answer, type } = req.body;
  
    try {
      const quiz = await Quiz.findById(quizId);
      if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
  
      const newQuestion = { questionText, options, answer, type };
      quiz.questions.push(newQuestion);
      await quiz.save();
  
      res.status(201).json({ message: 'Question added successfully', quiz });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports = addQuestion;