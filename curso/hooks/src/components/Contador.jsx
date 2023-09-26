import React, { useState } from "react";
import '../styles/contador.css';

export default function Contador(props) {
  // console.log(useState());
  let [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  const reset = () => setContador(contador = 0);


  return (
    <>
      <h2>HOOKS - useState</h2>
      <nav>
        
        <div className="contador-container">
        <h5>{props.titulo}</h5>
          <div className="buttons-contador">
            <button className="button_contador buttons" onClick={sumar}>+</button>
            <button className="button_contador buttons" onClick={restar}>-</button>
            <button className="button_contador buttons" onClick={reset}>reset</button>
          </div>
          <p className="contador">{contador}</p>
        </div>
      </nav>

    </>
  );
};

Contador.defaultProps = {
  titulo: "Clicks",
}