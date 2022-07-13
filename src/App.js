import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [counter, setCounter] = useState(0)
  const handlePlus =()=>{
    setCounter(counter+1)
  }
  const handleMinus =()=>{
    setCounter(counter-1)
  }
  return (
    <div className="App">
      <h1>Git practise lesson</h1>
      <div className="counter">{counter}</div>
      <Button handleClick={handlePlus}>+</Button>
      <Button handleClick={handleMinus}>-</Button>
    </div>
  );
}

export default App;
