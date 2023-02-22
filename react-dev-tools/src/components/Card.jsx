import React from "react";
import Avtar from "./Avtar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avtar 
          img = {props.img}
        />
      </div>
      <div className="bottom">
       <Detail 
        tel = {props.tel}
       /> 
        <Detail 
        tel = {props.email}
       />
      </div>
    </div>
  );
}

export default Card;
