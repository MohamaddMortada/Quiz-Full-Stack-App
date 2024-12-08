import React from 'react';
import axios from 'axios';
import '../App.css';

const SelectedQuiz = ({ setQuiz }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/quizzes',{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => setQuizzes(response.data))
      .catch(error => console.error('Error fetching quizzes:', error));
  }, []);

  return (
    <div>
      <h2>Select a Quiz</h2>
      {quizzez.map((quiz) => (
        <button key={quiz.id} onClick={() => setQuiz(quiz)}>
          {quiz.title}
        </button>
      ))}
    </div>
  );
};

export default SelectedQuiz;