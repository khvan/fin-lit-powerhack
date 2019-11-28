import React, {useState, useEffect} from 'react';
import Solution from './Solution';

const QuestionPage = props => {
  //const [questionCode, setQuestionCode] = useState('');
  const [question, setQuestion] = useState ('');
  const [nextCode, setNextCode] = useState ('');

  useEffect (() => {
    loadQuestion (props.questionCode);
    console.log (props.questionCode);
  }, []);

  const loadQuestion = code => {
    //setQuestionCode(code);
    console.log ('load question');
    console.log (code);
    fetchData (code);
  };

  const fetchData = async code => {
    await fetch (`http://localhost:3001/question/${code}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then (res => {
        console.log (res);
        if (res.status !== 200) throw new Error (res);
        else return res.json ();
      })
      .then (result => {
        setQuestion (result.body);
        setNextCode (result.nextId);
        console.log (result.nextId);
        console.log ('got the info ');
      })
      .catch (error => {
        console.log ('error: ' + error);
      });
  };

  var temp = props.questionCode;

  const moveToNextPage = () => {
    if (nextCode !== 4) {
      loadQuestion (nextCode);
      console.log ('got the info ');
    } else {
      setQuestion (null);
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="ml-5   mt-2 ">
          <h3>
            <span class="badge badge-danger float-left">Finance Planner</span>
          </h3>
        </div>
      </div>

      <div className="container Que-Container mt-5">

        <div className="row ">
          <div className="container mt-5 col-6 ">
            <br />
            <h4>{question === null ? <Solution /> : question} </h4>
            <br />
          </div>
        </div>
        <div>
          {question === null? <div> nussing</div> : <div className="row ">
            <div className="container mt-5 col-6">
              <div className="form-group">
                <input className="form-control" type="number" />
              </div>
            </div>
          </div> }
        </div>

        <div className="row mt-5 pb-2">
          <div className="col-6">
            <button
              type="button"
              onClick={e => {
                e.preventDefault ();
                props.history.goBack ();
              }}
              className="btn float-left"
            >
              Back
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              onClick={e => {
                e.preventDefault ();
                moveToNextPage ();
              }}
              className="btn float-right"
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default QuestionPage;
