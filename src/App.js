import axios from 'axios';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import GetUser from "./Pages/GetUser/Getuser";
import Main from './Pages/Main/Main';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';


function App() {


  const history = useHistory();

  
  const userName = localStorage.getItem('userName');

  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questionsData, setQuestionsData] = useState();

  const getDataAndStartQuiz = async () => 
  {
    let request = await axios.get(`https://opentdb.com/api.php?amount=${numberOfQuestions}`)
    .then((data)=>
    {
      setQuestionsData(data.data.results);
    });
   

  }


  


  return (
    <div className="App">

      <Sidebar />


      <BrowserRouter>

        {!userName && <GetUser />}

        {userName &&
          <Switch>
            <Route path='/' exact>
              <Main userName={userName} numberOfQuestions={numberOfQuestions} setNumberOfQuestions={setNumberOfQuestions}
                getDataAndStartQuiz={getDataAndStartQuiz} />
            </Route>
            <Route path='/quiz' exact>
              <Quiz numberOfQuestions={numberOfQuestions} setNumberOfQuestions={setNumberOfQuestions} questionsData={questionsData}/>
            </Route><Route path='/results' exact>
              <Result />
            </Route>

          </Switch>
        }

      </BrowserRouter>

    </div>
  );
}

export default App;
