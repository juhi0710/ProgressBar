import React, { useState } from 'react';
import './index.css';


function App() {
  const [state, setState] = useState({
    value: 0,
    status: 0 // 0 for paused and 1 for running
  });


  const incrementValue = () =>{
    console.log(state);
    if(state.value > 99) {
      stopBar();
      return;
    }
    state.value++;
    let circularProgress = document.querySelector(".circular-progress");
    let progressValue = document.querySelector(".progress-value");
    progressValue.textContent = `${state.value}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${state.value * 3.6}deg, #ededed 0deg)`

    setState(state);
  }

  const startBar = () => 
  {
    if(state.status == 0) {
      state.status = 1;
      state.interval = setInterval(incrementValue, 120);
      setState(state);
    }
  }

  const stopBar = () =>{
    if(state.status == 1) {
      state.status = 0;
      clearInterval(state.interval);
      state.interval = 0;
      setState(state);
    }
  }

  return (
    <>
      <div className='body'>
        <div className="container">
          <div className="circular-progress">
            <span className="progress-value">0%</span>
          </div>
          <span className="text"></span>
          <div className="btn">
            <button onClick={startBar}>START</button>
            <button onClick={stopBar}>PAUSE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;