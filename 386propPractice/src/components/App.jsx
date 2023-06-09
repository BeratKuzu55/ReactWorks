import React from "react";
import Contacts from "../contacts";

const contactslist = Contacts();
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.imgURL} alt={""} />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contactslist[0].name}
        imgURL={contactslist[0].imgURL}
        phone={contactslist[0].phone}
        email={contactslist[0].email}
      />
      <Card
        name={contactslist[1].name}
        imgURL={contactslist[1].imgURL}
        phone={contactslist[1].phone}
        email={contactslist[1].email}
      />
      <Card
        name={contactslist[2].name}
        imgURL={contactslist[2].imgURL}
        phone={contactslist[2].phone}
        email={contactslist[2].email}
      />
    </div>
  );
}

export default App;
