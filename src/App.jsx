// import React, { useState } from "react";
// import "./app.css"
// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [prize, setPrize] = useState(null);

//   // Function to handle button click
//   const handleClick = () => {
//     // Increase the counter by 1
//     setCounter(prevCounter => prevCounter + 1);

//     // 50% chance to increase 10 points
//     const randomChance = Math.random();
//     if (randomChance <= 0.5) {
//       setCounter(prevCounter => prevCounter + 10);
//     }

//     // 25% chance to trigger a prize
//     if (randomChance <= 0.25) {
//       setPrize("Congratulations! You've won a prize!");
//     } else {
//       setPrize(null); // Reset prize if no prize
//     }
//   };

//   return (
//     <div className="counter" >
//       <h1>Click Counter Game</h1>
//       <p>Current Score: {counter} points</p>
//       {prize && <p style={{ color: "green", fontWeight: "bold" }}>{prize}</p>}
//       <button onClick={handleClick}>Click Me!</button>
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [prize, setPrize] = useState(null);

  // Inline styles
  const counterStyle = {
    backgroundColor: "rgb(44, 35, 53)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "30vw",
    padding: "30px",
    border: "10px solid plum",
    borderRadius: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "18px",
    margin: "10px",
    cursor: "pointer",
  };

  const buttonActiveStyle = {
    transform: "scale(0.95)",
  };

  const h1Style = {
    color: "#f8f7f7",
  };

  const pStyle = {
    fontSize: "16px",
    color: "#f8f7f7",
  };

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
    <div style={counterStyle}>
      <h1 style={h1Style}>Click Counter Game</h1>
      <p style={pStyle}>Current Score: {counter} points</p>
      {prize && <p style={{ color: "green", fontWeight: "bold" }}>{prize}</p>}
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseDown={(e) => e.target.style.transform = "scale(0.95)"} // For active button effect
        onMouseUp={(e) => e.target.style.transform = "scale(1)"} // Reset on mouse release
      >
        Click Me!
      </button>
    </div>
  );
};

export default App;

