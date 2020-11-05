import React from 'react';
import "./Settings.scss";

function DurationControl({ 
  type, 
  duration, 
  updateTimer
}) {
  return (
    <div className={`${type} duration`}>
      <div className="label">{type} Length</div>
      <div className="duration-control">
        <button onClick={() => updateTimer(duration - 1)}>-</button>
        <div>{duration}</div>
        <button onClick={() => updateTimer(duration + 1)}>+</button>
      </div>
    </div>
  );
}
export default function Settings({ 
  breakDuration, 
  sessionDuration, 
  updateSessionDuration, 
  updateBreakDuration,
}) {
  return (
    <div className="settings">
      <DurationControl 
        type="break" 
        duration={breakDuration}
        updateTimer={updateBreakDuration}
        />
      <DurationControl
        type="session" 
        duration={sessionDuration} 
        updateTimer={updateSessionDuration} 
        />
    </div>
  );
}

