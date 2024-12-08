const Quiz = require('../../models/Quiz'); 

const deleteQuestion = async (req, res) => {
    const { quizId, questionId } = req.params;
  
    try {
      const quiz = await Quiz.findById(quizId);
      if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
  
      quiz.questions.id(questionId).remove();
      await quiz.save();
  
      res.json({ message: 'Question deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports = deleteQuestion;