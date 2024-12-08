const express = require('express');
const router = express.Router();
const verifyToken = require('./jwtAuth');

router.post('/quizzes', verifyToken, createQuiz);
router.get('/quizzes', verifyToken, getAllQuizzez);

module.exports = router;
