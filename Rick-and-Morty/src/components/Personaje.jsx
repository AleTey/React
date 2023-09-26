import React from "react";
import '../components/Personaje.css';

export default function Personaje(props) {
  return (
    <>
      <div className="personaje-container">
        <div className="img">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="inf">
          <div className="item">
            <p><span>Nombre: </span>{props.name}</p>
          </div>
          <div className="item">
            <p><span>Id: </span>{props.id}</p>
          </div>
          <div className="item">
            <p><span>Species: </span>{props.species}</p>
          </div>
          <div className="item">
            <p><span>Gender: </span>{props.gender}</p>
          </div>
          <div className="item">
            <p><span>Status: </span>{props.status}</p>
          </div>
          <div className="item">
            <p><span>Location: </span>{props.location}</p>
          </div>

        </div>
      </div>
    </>
  );
}