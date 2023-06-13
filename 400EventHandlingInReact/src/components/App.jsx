import React, { useState } from "react";

function App() {
  const [headingText, setHeadingTex] = useState("Hello");

  function handleClick() {
    setHeadingTex("Submitted");
  }

  const [backgroundColor, setTheButtonBackground] = useState("White");

  function changeTheButtonBackgroundColor() {
    if (backgroundColor === "White") setTheButtonBackground("Black");
    else if (backgroundColor === "Black") setTheButtonBackground("White");
  }

  /*function changeColor() {
    if (buttonColor.background === "white") {
      buttonColor.background = "black";
    } else if (buttonColor.background === "black") {
      buttonColor.background = "white";
    }
  } */
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ background: backgroundColor }}
        onMouseOver={changeTheButtonBackgroundColor}
        onMouseOut={changeTheButtonBackgroundColor}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
