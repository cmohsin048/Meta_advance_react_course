
import { useReducer, useState } from 'react';
import './App.css';
const reducer=(state,action)=>{
  if(action.type==="by the ingredient")return{money:state.money-10}
  if(action.type==="sell_a_meal")return{money:state.money+10}
  if(action.type==="celeb-visit")return{money:state.money+5000}



}
function App() {
  const initialstate={money:100}
  const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div className="App">
       <h1>Wallet : {state.money}</h1>
       <div>
        <button onClick={()=>dispatch({type:"by the ingredient"})}>shopping for veggees!</button>
        <button onClick={()=>dispatch({type:"sell_a_meal"})}>serve a meal to customer</button>
        <button onClick={()=>dispatch({type:"celeb-visit"})}>celebrity</button>


       </div>
    </div>
  );
}

export default App;
