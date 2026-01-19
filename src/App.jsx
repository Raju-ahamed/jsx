import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './todo';
import Singers from './singer';

function App() {

  const singers = [
    { id: 1, name: "mahfuj", age: 20 },
    { id: 2, name: "Tahsan", age: 45 },
    { id: 3, name: "Nobel Man", age: 30 },
    { id: 4, name: "mama", age: 20 },
  ]
  return (
    <>


      <h1>Vite + React</h1>
      {
        singers.map(singer=><Singers singer = {singer}></Singers>)
      }

      {/* <ToDo task="java script" duration="20min"></ToDo>
      <ToDo task="Gusol" duration="60min"></ToDo>
      <ToDo task="java script" duration="20min"></ToDo>
      <ToDo task="java script" duration="20min"></ToDo> */}



      {/* <Developer name="Raju" tech="JavaScript"></Developer>
      <Developer name="Tamim" tech="python"></Developer>
      <Developer name="sagor" tech="djenogo"></Developer>
      <Developer name="Himel" tech="Seo"> </Developer>
      <Player name="Tanzid Tamim" run="1000"></Player> */}




    </>
  )
}
const Player = ({ name, run }) => {
  return (
    <div className='student'>
      <h1>Name:{name}</h1>
      <p>Run:{run}</p>
    </div>
  )
}
function Person() {
  const age = 24;
  const name = `raju`;
  return (
    <p className='person'>I am {name}.My age is {age}</p>
  )
}
function Developer(props) {
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
      gap: '20px',
      margin: `20px`
    }}>


      <h1> I am {props.name} </h1>
      <p>I am a {props.tech} Expart</p>
    </div>
  )
}
export default App
//  npm create vite @latest explore-core-react -- --tamplate react
