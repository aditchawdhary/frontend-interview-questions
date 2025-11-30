import React, {useEffect, useState, useRef} from "react";

export default Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isOn, setOn] = useState(false);
    const intervalRef = useRef(null);
  
    const handleOn = () => {
        setOn(!isOn);
    };
    
    const handleReset = () => {
        setOn(false);
        setTime(0);
    };
  
    const setIntervalfn = () => {
        setTime((prevTime) => prevTime+30);  
    };
  
    const clearIntervalfn = () => {
        if (intervalRef.current != null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
  
    const useEffectCallback = () => {
        if (isOn) {
            intervalRef.current = setInterval(setIntervalfn, 30);
        } else {
            if (intervalRef.current != null) {
                clearIntervalfn();  
            }
        }
        return clearIntervalfn;
    };
    
    useEffect(useEffectCallback, [isOn]);
    
    return (
      <div>
          <p>{Math.floor(time/1000)}s {time%1000}ms</p>
          <div>
              <button style={{"width": "70px"}} onClick={handleOn}>      {isOn ? "Pause" : "Start"}  </button> 
              <button style={{"width": "70px"}} onClick={handleReset}>   {"Reset"}                   </button>
          </div>
      </div>
    );
}

/*
– useRef to store the interval ID persistently, line 30, intervalRef.current = setInterval(setIntervalfn, 30), is for setting setInterval id in a useRef.current variable.
– Updater function setTime((prevTime) => prevTime + 30) to avoid stale closures, we must use a function inside setTime, to avoid always reading the value 0 and updating it to 30, eg setTime(time+30), would be wrong
– Proper cleanup - returns clearIntervalfn (not calling it)
– Actually clears the interval with clearInterval(intervalRef.current)
– Sets to null after clearing for good practice
– Start/Pause toggle working correctly
– Reset functionality

React Hooks - useState, useEffect, useRef
Closures - Understanding stale closures and how to avoid them
Timers - setInterval and clearInterval
Cleanup - Proper useEffect cleanup functions
State Updates - When to use updater functions vs direct values
*/
