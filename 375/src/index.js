import React from "react";
import ReactDOM from "react-dom";

const x = new Date();
const hour = x.getHours();
const y = x.getHours().toString() + "." + x.getMinutes().toString();
var z = "";

const customstyle = {
  color: "red"
};

if (hour < 12) {
  z = "Good morning";
} else if (hour >= 12 && hour < 18) {
  z = "good evening";
  customstyle.color = "green";
} else if (hour >= 18 && hour < 24) {
  z = "good night";
  customstyle.color = "blue";
} else {
  z = "waow you are not in the world";
}
ReactDOM.render(
  <div>
    <h1 style={customstyle}>{z}</h1>
    <p> time is {y} </p>
  </div>,
  document.getElementById("root")
);
