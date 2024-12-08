const Quiz = require('../models/Quiz'); 

async function getAllQuizzez(req,res){
    try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
