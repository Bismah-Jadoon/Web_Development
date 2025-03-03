import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(5)
  
  

    const addvalue =() =>{
      console.log("clicked",counter)
     // counter = counter + 1;
     
     if (counter >= 20) {
      exit;
     } else {
      setcounter(counter+1);
     }
    }
  
    const removevalue = () =>{
     
      
      if (counter <= 0) {
        exit;
      } else {
        setcounter(counter-1);
      }
    }

  return (
    <>
      <h1>chai r react</h1>
      <h2>counter value: {counter}</h2>

 {/* UI updation ko react control krta hai */}
      <button
      onClick={addvalue}
      >Add Value {counter}</button>
      <br/>
      <button onClick={removevalue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
