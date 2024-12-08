import React,{useState} from 'react';
import './App.css';
import SelectedQuiz from './components/SelectedQuiz';
import DisplayQuiz from './components/DisplayQuiz';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Data from './data/data';
const App = () => {
  const [Quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <Router>
    <div className="App">
      <h1>Quiz App</h1>
      <p>Score: {score}</p> 
      <Switch>
          <Route path="/logIn">
            <LogIn setToken={setToken} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/quiz">
                {!Quiz ? (
                <SelectedQuiz Data={Data} setQuiz={setQuiz} />
                 ):(
                <DisplayQuiz quiz={Quiz} setQuiz={setQuiz} score={score} setScore={setScore} />
                  )}
          </Route>
          <Route path="/">
                <h2>Welcome to the Quiz App</h2>
                <p>Please log in or register to continue.</p>
          </Route>
        </Switch>
    </div>
    </Router>
  );
};
export default App;
