
import './App.css';
import Feedbackform from './Feedbackform';
function App() {
  const handlesubmit=()=>{
    console.log("form submitted")
  }
  return (
    <div className="App">
      <Feedbackform onSubmit={handlesubmit}/>
    </div>
  );
}

export default App;
