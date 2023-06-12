import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form
        data={userIsRegistered ? "Login" : "Register"}
        isregistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
