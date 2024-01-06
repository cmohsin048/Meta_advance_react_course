
import { React,useRef } from 'react';
import './App.css';

function App() {
  const formInputRef=useRef(null)
  const focusInput=()=>{
    formInputRef.current.focus()
  }
  return (
    <div className="App">
      <h1>using useref to acces the underlying dom</h1>
      <input ref={formInputRef} type="text"/>
      <button onClick={focusInput}>focus input</button>
    </div>
  );
}

export default App;
