import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [prize, setPrize] = useState(null);

  // Function to handle button click
  const handleClick = () => {
    // Increase the counter by 1
    setCounter(prevCounter => prevCounter + 1);

    // 50% chance to increase 10 points
    const randomChance = Math.random();
    if (randomChance <= 0.5) {
      setCounter(prevCounter => prevCounter + 10);
    }

    // 25% chance to trigger a prize
    if (randomChance <= 0.25) {
      setPrize("Congratulations! You've won a prize!");
    } else {
      setPrize(null); // Reset prize if no prize
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Click Counter Game</h1>
      <p>Current Score: {counter} points</p>
      {prize && <p style={{ color: "green", fontWeight: "bold" }}>{prize}</p>}
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default App;
