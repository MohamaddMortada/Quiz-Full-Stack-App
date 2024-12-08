const Quiz = require('../models/Quiz'); 

async function createQuiz(req,res){
    const { title, questions } = req.body;
  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
