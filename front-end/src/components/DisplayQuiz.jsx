import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import jwtDecode from 'jwt-decode';

const DisplayQuiz = ({ quiz, setQuiz, score, setScore}) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/quizzes/${quiz._id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => setQuestions(response.data.questions))
      .catch(error => console.error('Error fetching quiz:', error));
  }, [quiz]);
  const handleAnswer = (answer) => {

    const question = quiz.questions[currentQuestionIndex];
    const isCorrect = answer === question.answer;
    if (isCorrect) {
      setScore((prev) => prev + 10);
    }

    if (currentQuestionIndex + 1 < questions.length) {
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