import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import { useState } from 'react';


function App() {
  // 1
//   const state = useState();
// // console.log(state);
// const [count, setCount] = useState(0);
// const IncNum = () =>{
//   setCount(count + 1);
  // console.log("Clicked " + count++);
// };
 
// 2
// let newTime = new Date().toLocaleTimeString();
//   const[Ctime, setCtime] = useState(newTime);

//   const IncTime = () =>{
//   newTime = new Date().toLocaleTimeString();
//    setCtime(newTime);
//   };

// 3
//  let time = new Date().toLocaleTimeString();
//  const [ctime, setCtime] = useState(time);

//  const UpdateTime = ()=>{
//   time = new Date().toLocaleTimeString();
//   setCtime(time);
//  }

//  setInterval(UpdateTime,1000);

const purple = "#8e44ad";
const [bg, setBg] = useState(purple); //Array destructoring
const [name, setName] = useState('Click Me');

const bgChange = () =>{
  // console.log("color change");
  let newBg = '#34495e';
  setBg(newBg);
  setName("Ouch!! 😦 " );
 
}
const bChange = () =>{
  setBg(purple);
    setName("Arey Yar 😃 ");
}
  return (

    <>
    {/* 0 */}
  {/* //  <Navbar title = "TextUtils"/> 
  //  <div className='container my-3'>
  // <Textform heading="Enter the text to analyze below"/>
 //  </div> */}

 {/* 1 */}
    {/* <h1> {count} </h1>
    <button onClick={IncNum}> Click Me </button> */}
    {/* 2 */}
 {/* <h1> {Ctime} </h1>
 <button onClick={IncTime}>Get Time</button> */}
{/* 
// 3
<h1> {ctime} </h1> */}


{/* changing background and state */}
   <div style= { { backgroundColor : bg } }>
  <button class = "btn" onClick={bgChange} onDoubleClick={bChange}> {name} </button>
   </div>


    </>

  );

}

export default App;
