import React from "react";
import ReactDOM from "react-dom";

const name = "Berat";
const surname = "Kuzu";

ReactDOM.render(
  <div>
    <h1> hello {name + " " + surname} </h1>
    <p> your lucy number is {Math.floor(Math.random() * 20)} </p>
  </div>,
  document.getElementById("root")
);
