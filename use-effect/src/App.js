import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  //   const[toggle,setToggle]=useState(false)
  //   const clickhandler=()=>{
  //     setToggle(!toggle)
  //   }
  // useEffect(()=>{
  //   document.title=toggle ?"welcome to little lemon":'using use effect'
  // },[toggle])
  // const [btcdata, setBtcData] = useState({});

  // const fetchData = () => {
  //   fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => response.json())
  //     .then(data => setBtcData(data.bpi.USD))
  //     .catch(error => console.log(error)); // Use 'catch' instead of 'Catch'
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  const [user, setUser] = useState([])
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data))
  }
  useEffect(() => {
    fetchData();
  }, []);
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last Name: {user.results[0].name.last}</h2>
      <img src={user.results[0].picture.large}/>
    </div>
    //   <div>
    //   <h1>Coins Data</h1>
    //   <p>Code: {btcdata.code}</p>
    //   <p>Symbol: {btcdata.symbol}</p>
    //   <p>Rate: {btcdata.rate}</p>
    //   <p>Description: {btcdata.description}</p>
    //   <p>Rate Float: {btcdata.rate_float}</p>
    // </div>
    //   <div className="App">
    //    <h1>Using the use effect</h1>
    //    <button onClick={clickhandler}>Toggle Message</button>
    //    {toggle && <h2>welcome to little lemon</h2>}
    //   </div>
  ) : (
    <div>
      <h1>Data pending.....</h1>
    </div>
  )
}

export default App;
