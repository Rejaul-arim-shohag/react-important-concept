import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  // const users=[
  //   {name : "karim", email : "karim@gmail.com"},
  //   {name : "amir", email : "amir@gmail.com"},
  //   {name : "shohag", email : "shohag@gmail.com"},
  //   {name : "babul", email : "babul@gmail.com"},
  //   {name : "abul", email : "abul@gmail.com"},
  //   {name : "rejaul karim", email : "rejaulkarim4740@gmail.com"}
  // ]
  const [comments, setComment] = useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => setComment(data))
  })
 const [users, setUser] = useState([])
 useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(data => setUser(data))
 }, [])
  return (
    <div className="App">
      <header className="App-header">
        {
          comments.map(comment=> <Comments comment={comment}></Comments>)
        }
        {
          users.map(user => <Users user={user}></Users>)
        }
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://rejaul-karim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Comments(props){
  const commentStyle={
    width : "600px",
    margin : "15px 0px",
    padding : "10px",
    border : "1px solid #4cd137",
    borderRadius : "5px"
  }
  return(
    <div style={commentStyle}>
      <p>ID : {props.comment.id}</p>
      <p>Name : {props.comment.name}</p>
      <p>Email : {props.comment.email}</p>
      <p>Body : {props.comment.body}</p>
    </div>
  )
}
function Users(props){
  const userStyle = {
    width : "500px",
    margin : "10px 15px",
    padding : "5px",
    border : "1px solid #fbc531",
    borderRadius : "5px"
  }
  return(
    <div style={userStyle}>
      <h1>Name : {props.user.name}</h1>
      <p>Email : {props.user.email}</p>
      <p>City : {props.user.address.city}</p>
      <p>website : {props.user.website}</p>
    </div>
  )
}
export default App;
