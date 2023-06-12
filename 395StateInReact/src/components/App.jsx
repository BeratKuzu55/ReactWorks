import React from "react";

var isDone = false;

function strike() {
  document.getElementById("paragraf").style.textDecoration = null;
}

function unStrike() {
  document.getElementById("paragraf").style.textDecoration = "line-through";
}

function App() {
  return (
    <div>
      <p
        id="paragraf"
        style={isDone ? { textDecoration: "line-through" } : null}
      >
        Buy milk
      </p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
