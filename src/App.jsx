import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {

const actors =['shakib', 'sumon', 'mehedi', 'emon'];

const singer= [
  { id: 1, name: 'Dr Mahfuzur Rahman', age: 68},
  {id: 2, name: 'Eva Rahman', age: 38},
  {id: 3, name: 'minar', age: 30},
  {id:4, name: 'Oysh', age: 28},
  {id: 5, name: 'Shuvro', age: 32},
  { id: 6, name: 'redoy khan', age: 25}
]
  return (
    <>

{
  singer.map(singrs => <Singers singrs={singrs}></Singers>)
}
<Actor name="Bappa Raz"></Actor>
{
  actors.map(actor => <Actor name={actor}></Actor>)
}




      {/* <>kazi mehedi</>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={true}></Todo>
      <Todo task="Try JSx" isDone={false}></Todo> */}
      {/* <Device></Device>
    <Device name="Laptop" price="55"></Device>
    <Device name="name" price="14"></Device>
      <Person></Person>
      <Student  grade="7" score="99" ></Student>
      <Student grade="7" score="99" ></Student>
      <Student></Student>
      <Developer></Developer>
       */}
    </>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h1>
      this device: {props.name} price{props.price}
    </h1>
  );
}

function Person() {
  const age = 24;
  const money = 22;
  const person = { name: "mehedi", age: 24 };
  return (
    <h1>
      I am {person.name} with age: {age + money}
    </h1>
  );
}
const { grade, score } = { grade: "7", score: "99" };
function Student({ grade = 0, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h1>This is a student</h1>
      <p>Class: {grade} </p>
      <p> Score: {score}</p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>I am a developer</p>
    </div>
  );
}

export default App;
