import React from "react";
import ReactDOM from "react-dom";

const style = {
  width: "500px",
  color: "red"
};

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img style={style} src={props.link} alt={props.altbilgi} />
      <p>{props.telefon}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="Polat Alemdar"
      link="https://i.scdn.co/image/ab67616d0000b273813b39ef7b45c4cc3e476c65"
      altbilgi="Baron"
      telefon="0503 342 0000"
      email="elifdedimbededim@mail.com"
    />
    <Card
      name="Süleyman Çakır"
      link="https://i.haberglobal.com.tr/storage/files/images/2022/04/08/oppo-Ft40.jpg"
      altbilgi="İstanbul Sefiri"
      telefon="0503 344 2342"
      email="hekimogluderler@mail.com"
    />
    <Card />
  </div>,
  document.getElementById("root")
);
