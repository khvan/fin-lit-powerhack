import React, {useState,useEffect}  from 'react';

class AboutPage extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/question")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log(items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}


















//  fetchData = async () => {
//     await fetch(`http://localhost:3001/question`,{
//         method: 'get',
//         headers: {
//           'Content-Type': 'application/json',
//         }
  
//     })
//     .then(res => {
//         return res.json();
  

//       })

//   }


//   render(){
// return (
//   <div>
//     Hello
//     <h4>{this.fetchData()}</h4>
//   </div>
// )
//   }
// }

  











  
//   const [questionCode, setQuestionCode] = useState('');
//   const [question, setQuestion] = useState('');
//   // loadQuestion(props.questionCode)
//   const loadQuestion = (code)=>{
//   setQuestionCode(code);

//   const fetchData = async () => {
//     await fetch(`http://localhost:3001/question`,{
//         method: 'get',
//         headers: {
//           'Content-Type': 'application/json',
//         }
  
//     })
//     .then(res => {
//       console.log("this is our data >>>>>>>>>>>", res.json())
//       if( res.status ===200 ) 
//         throw new Error(res);
//       else 
//         return res.json();
//       })
//     .then(
//       (result) => {
//         setQuestion(result.body);
//           console.log('got the info ');
//       })
//       .catch((error) => {
//         console.log('error: ' + error);
//       });

//   }

// };

//   return (
//   <React.Fragment>
//   <div className="container">

//     <div className="row" >
//         <div className="container col-6 ">
//             <br/>
//         <h4>{fetchData()}</h4>
//         <br/>
//         </div>
//     </div>

//     <div className="row ">
//       <div className="container col-6">
//         <h4 >About this App</h4>
//       </div>
//     </div>


//     <div className="row ">
//       <div className="col-6">
//         <button  type="button" onClick={(e) => {e.preventDefault();props.history.goBack();}} className="btn float-left" >Back</button>
//       </div>
//       <div className="col-6">
//         <button  type="button" onClick={(e) => {e.preventDefault();props.history.goBack();}} className="btn float-right" >Next</button>
//       </div>
//     </div>

//  </div>
//   </React.Fragment>
//   )}
  
export default AboutPage; 


