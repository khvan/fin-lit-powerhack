import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { createBrowserHistory } from 'history';
import {Router,Route} from 'react-router-dom';
import QuestionPage from './QuestionPage'


function App() {

  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router  history={history} > 
          <Route path="/"  render={(props) => 
              <QuestionPage {...props} questionCode="First_Ques"  />} />

      </Router> 
    </div>
  );
}

export default App;
