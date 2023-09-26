import React from 'react';
import '../components/BotonConsulta.css';
import { useState, useEffect } from 'react';

export default function BotonConsulta(props) {
  

  function logs(){
    console.log("HOla");
    console.log(props.isActiveIndex);
  }

  return (
    <>
      <button onClick={props.handdleClick} >{props.text}</button>
    </>
  );
};