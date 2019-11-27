import React, {useState,useEffect}  from 'react';

const AboutPage = (props) => {
  const [questionCode, setQuestionCode] = useState('');
  const [question, setQuestion] = useState('');

  useEffect(() => {
    setQuestionCode(props.questionCode);
    const fetchData = async () => {
      await fetch(`get questionCode`,{
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          }
    
      })
      .then(res => {
        if( res.status ===200 ) 
          throw new Error(res);
        else 
          return res.json();
        })
      .then(
        (result) => {
          setQuestion(result.body);
            console.log('got the info ');
        })
        .catch((error) => {
          console.log('error: ' + error);
        });
  
    }

  
  }, []);

const loadQuestion = (code)=>{
  setQuestionCode(code);
  const fetchData = async () => {
    await fetch(`get questionCode`,{
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        }
  
    })
    .then(res => {
      if( res.status ===200 ) 
        throw new Error(res);
      else 
        return res.json();
      })
    .then(
      (result) => {
        setQuestion(result.body);
          console.log('got the info ');
      })
      .catch((error) => {
        console.log('error: ' + error);
      });

  }

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
        <button  type="button" onClick={(e) => {e.preventDefault();props.history.goBack();}} className="btn float-right" >Next</button>
      </div>
    </div>

 </div>
  </React.Fragment>
  )}
  
export default AboutPage; 


