const express = require('express');
const router = express.Router();
const verifyToken = require('./jwtAuth');
const createQuiz = require('../controller/createQuiz');
const getQuiz = require('../controller/getQuiz');
const getAllQuizzes = require('../controller/getAllQuizzes');
const addQuestion = require('../controller/addQuestion');


router.post('/quizzes', verifyToken, createQuiz);
router.get('/quizzes', verifyToken, getAllQuizzes);
router.get('/quizzes/:id', verifyToken, getQuiz);

router.post('/quizzes/:id/questions', addQuestion);

module.exports = router;
