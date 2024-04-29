import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  const addValue = ()=> {
    if(counter==20){
      return;
    }
    counter += 1;
    console.log("value Added", counter);
    setCounter(counter);
  }

  const removeValue = () => {
    if(counter==0){
      return;
    }
    setCounter(counter-1);
  }

  return (
    <>
    <h1>Chai aur React || Counter</h1>
    <h2 id="cnt">Counter: {counter}</h2>
    <button onClick={addValue}> Add value {counter} </button>
    <br/>
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
