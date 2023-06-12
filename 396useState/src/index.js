import React from "react";
import ReactDOM from "react-dom";

var ilksayi = 0;
function artir() {
  ilksayi++;
  document.getElementById("sayi").innerHTML = ilksayi;
}

function azalt() {
  ilksayi--;
  document.getElementById("sayi").innerHTML = ilksayi;
}

ReactDOM.render(
  <div className="container">
    <h1 id="sayi">0</h1>
    <button onClick={artir}>+</button>
    <button onClick={azalt}>-</button>
  </div>,
  document.getElementById("root")
);
