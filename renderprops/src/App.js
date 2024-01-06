import React, { useEffect, useState } from 'react';
import './App.css';

const Datafetch = ({ render, url }) => {
  const [data, setdata] = useState([]); // Fixed typo: setadata to setdata

  useEffect(() => {
    if (url.includes("desserts")) {
      setdata(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setdata(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
};

const DessertCount = () => {
  return (
    <Datafetch
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinkCount = () => {
  return (
    <Datafetch
      url="https://littlelemon/drinks"
      render={(data) => <p>{data.length} drinks</p>} // Fixed the text to "drinks"
    />
  );
};

function App() {
  return (
    <div className="App">
      <header>little lemon Menu items</header>
      <DessertCount />
      <DrinkCount />
    </div>
  );
}

export default App;
