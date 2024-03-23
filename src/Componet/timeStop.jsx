import React, { useState, useEffect } from 'react';

const TimeStop = () => {

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);


  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);


  function startTimer() {
    setTimerRunning(true);
  }

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerSeconds(0);
    setTimerRunning(false);
  };

 

  return (
    <div>
      

      <div className='time'>
        <h2>Stopwatch/Timer</h2>
        <p>Seconds: {timerSeconds}</p>
        <div className="btn2">

        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        </div>
      </div>

      
    </div>
  );
};

export default TimeStop;
