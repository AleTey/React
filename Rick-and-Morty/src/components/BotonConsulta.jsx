import React from 'react';
import '../components/BotonConsulta.css';
import { useState, useEffect } from 'react';

export default function BotonConsulta(props) {
  const [consulta, setConsulta] = useState([]);

  

  return (
    <>
      <button className=''>{props.text}</button>
     

    </>
  );
};