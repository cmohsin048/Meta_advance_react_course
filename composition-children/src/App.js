import * as React from 'react'
import './App.css';

const Row=({children})=>{
  return(
    <div>{children}</div>
  )
}


function App() {
  return (
    <div className="App">
     <Row spacing={32}>
      <p>Pizza Margrita</p>
      <p>2</p>
      <p>305</p>
      <p>18:20</p>
      <p>john</p>
     </Row>
    </div>
  );
}

export default App;
