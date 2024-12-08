const express = require('express');
const router = express.Router();

router.post('/quizzes', verifyToken, async (req, res) => {createQuiz});

module.exports = router;
