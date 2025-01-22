import React from "react";
import Preloader from "./component/Preload"; // Path to your Preloader component
import CountDown from "./component/CountDown"; // Path to your CountDown component
import "./App.css"; // Include a global CSS file for additional styling

function App() {
  return (
    <div className="App">
      <Preloader />
      <div className="countdown-wrapper">
        <CountDown />
      </div>
    </div>
  );
}

export default App;
