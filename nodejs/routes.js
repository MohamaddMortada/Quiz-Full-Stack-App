const express = require('express');
const router = express.Router();
const verifyToken = require('./jwtAuth');
const createQuiz = require('../controller/createQuiz');
const getQuiz = require('../controller/getQuiz');
const getAllQuizzes = require('../controller/getAllQuizzes');
const addQuestion = require('../controller/addQuestion');
const addQuestion = require('../controller/deleteQuestion');
const { registerUser, loginUser } = require('../controller/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/quizzes', verifyToken, createQuiz);
router.get('/quizzes', verifyToken, getAllQuizzes);
router.get('/quizzes/:id', verifyToken, getQuiz);

router.post('/quizzes/:id/questions', addQuestion);
router.delete('/quizzes/:id/questions/:questionId', deleteQuestion);


module.exports = router;
