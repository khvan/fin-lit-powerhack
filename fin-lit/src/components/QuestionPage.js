import React, {useState,useEffect}  from 'react';

const QuestionPage = (props) => {
  const [questionCode, setQuestionCode] = useState('');
  const [question, setQuestion] = useState('');  
  
  
  useEffect(() => {
    loadQuestion(props.questionCode);
    console.log(props.questionCode);
  }, []);

const loadQuestion = (code)=>{
  setQuestionCode(code);
  console.log('load question');
  console.log(code);
  fetchData(code);
};

  const fetchData = async (code) => {
    await fetch(`http://localhost:3001/question/${code}`,{
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
  
    })
    .then(res => {
        console.log(res);
      if( res.status !==200 ) 
        throw new Error(res);
      else 
        return res.json();
      })
    .then(
      (result) => {
        setQuestion(result.body);
        console.log(result);
        console.log('got the info ');
    })
      .catch((error) => {
        console.log('error: ' + error);
      });

  };



var temp = props.questionCode;


const moveToNextPage = () =>{
    //loadQuestion();
};

  return (
  <React.Fragment>
  <div className="container">

    <div className="row" >
        <div className="container col-6 ">
            <br/>
        <h4>{question}</h4>
        <br/>
        </div>
    </div>

    <div className="row ">
      <div className="container col-6">
        <h4 >About this App</h4>
      </div>
    </div>


    <div className="row ">
      <div className="col-6">
        <button  type="button" onClick={(e) => {e.preventDefault();props.history.goBack();}} className="btn float-left" >Back</button>
      </div>
      <div className="col-6">
        <button  type="button" onClick={(e) => {e.preventDefault();moveToNextPage();}} className="btn float-right" >Next</button>
      </div>
    </div>

 </div>
  </React.Fragment>
  )}
  
export default QuestionPage; 
