import React, { useState,useMemo } from "react";
import './App.css'
const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function handleHeight(e) {
    setHeight(e.target.value);
  }

  function handleWeight(e) {
    setWeight(e.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height/100; // in meter
    return (weight/(calculateHeight*calculateHeight)).toFixed(1);
  }, [weight,height]);


  const weightStatus = () =>{
     
    if(output < 18.5){
      return "Underweight";
    }
    else if(18.5 <= output && output <= 24.9){
      return "Normal weight";
    }
    else if(25 <= output && output <= 29.9){
       return  "Overweight"
    }
    else if(30 <= output && output <= 35){
      return "Obese"
    }
    else
    {
      return "Morbid obesity";
    }
  }

  return (
    <div className="main">
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight : {weight} Kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={handleWeight}
        />
        <p className="slider-output">Height : {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="140"
          max="220"
          onChange={handleHeight}
        />
      </div>

      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
      </div>
      <div className="status">Status : {weightStatus()}</div>
    </div>
  );
};

export default App;
