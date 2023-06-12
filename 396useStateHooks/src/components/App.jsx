import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function artir() {
    setcount(count + 1);
  }

  function azalt(params) {
    setcount(count - 1);
  }

  return (
    <div className="container">
      <h1 id="sayi">{count}</h1>
      <button onClick={artir}>+</button>
      <button onClick={azalt}>-</button>
    </div>
  );
}

export default App;
