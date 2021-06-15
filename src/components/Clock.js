import React, { useState, useEffect } from "react";

function Clock(props) {
  const [date, setDate] = useState(new Date());
  const prevDate = new Date().toLocaleTimeString();

  useEffect(() => {
    let timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>{prevDate}</h2>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
