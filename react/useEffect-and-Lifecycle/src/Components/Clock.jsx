import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup function to clear the interval
    return () => {
      clearInterval(timer); // prevents memory leaks
    };
  }, []); // empty dependency array -> run once on mount

  return (
    <div>
      <h2>Current time: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;