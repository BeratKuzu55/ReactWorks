import React from "react";
import ReactDOM from "react-dom";

const customstyle = { 
  color : "red" , 
  fontSize : "20px" , 
  border : "1px solid black"
}

customstyle.color = "blue";
ReactDOM.render(
  <div>
    <h1 style={customstyle}>My Favourite Foods</h1>
    <ul>
      <li>köfte</li>
      <li>cola</li>
      <li>sütlaç</li>
    </ul>
    <div>
      <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-koftesi-yemekcom.jpg" />
      <img src="https://cdn.penceretv.com/news/253796.jpg" />
      <img src="https://cdn.yemek.com/mnresize/940/940/uploads/2019/04/lokanta-usulu-sutlac-tarifi.jpg" />
    </div>
  </div>,
  document.getElementById("root")
);
