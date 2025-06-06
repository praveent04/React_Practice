import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
   

   const addValue = () => {
      counter = counter + 1
      setCounter(counter)
      console.log(counter)
   }

  const removeValue = () => {
    counter = counter -1;
    setCounter(counter)
    console.log(counter)
  }
  return (
    <>
     <h1>Praveen React Counter</h1>
     <h2> Counter value: {counter}</h2>
     <button
     onClick={addValue}>Add Value</button>
     <br />
     <button
     onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
