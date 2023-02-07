import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [input,setInput]=useState('');
  const handleChangeInput=(e)=>
  {
    setInput(e.target.value);
    console.log(input);
  }
  const handleButton=()=>
  {
    window.alert(input);
  }
 return (
  <div style={{marginTop:20,marginLeft:30}}>
      <label for='low'>Type some text in the box </label>
      <input type='text' id='low' placeholder='Please type something' onChange={handleChangeInput}></input><br></br>
      <button type='button' onClick={handleButton}>Click</button>
  </div>
 )
}

export default App;
