import React from 'react';
import './Timer.scss'


export default function Timer({
  timerActive,
  togglePlay, 
  timerDisplay, 
  isBreak, 
  reset
}) {
  return (
    <div className="timer">
      <div id="timer-label">
        { isBreak ? 'Break' : 'Session' }
      </div>
        <div id="time-left">
          { timerDisplay }
        </div>
      <div className="timer-control">
        <button onClick={() => togglePlay()}>
            {timerActive ? 'Pause' : 'Play'}
          </button>
        <button onClick={() => reset()}>
            Reset
          </button>
      </div>
    </div>
  )
}
