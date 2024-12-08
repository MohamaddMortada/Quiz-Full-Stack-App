import React, { useState } from 'react';
import '../App.css';

const DisplayQuiz = ({ quiz, setQuiz, score, setScore}) => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const handleAnswer = (answer) => {

    const question = quiz.questions[currentQuestionIndex];
    const isCorrect = answer === question.answer;
    if (isCorrect) {
      setScore((prev) => prev + 10);
    }

    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
};

  const renderQuestion = () => {
  const question = quiz.questions[currentQuestionIndex];

    if (question.type === "mcq") {
      return (
        <div>
          <p>{question.question}</p>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      );
    } else if (question.type === "input") {
        let userInput = "";
        return (
          <div>
            <p>{question.question}</p>
            <input type="text" onChange={(e) => (userInput = e.target.value)}
            />
            <button onClick={() => handleAnswer(userInput)}>Submit</button>
          </div>
        );
      }
    }
      return (
        <div>
          <h2>{quiz.title}</h2>
          {quizCompleted ? (
            <div>
              <h2>Quiz Completed!</h2>
              <p>Your Score: {score}</p>
            </div>
          ) : (
            renderQuestion()
          )}
        <button onClick={() => setQuiz(null)}>Back to Quizzes</button>
        </div>
      );
    }


export default DisplayQuiz;