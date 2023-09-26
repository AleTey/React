import React, { useState, useEffect } from 'react';

export default function ScrollUseEffect() {
  
  const [scrollY, setScrollY] = useState(0);


  //Se activa solo cuando se actualiza lo que se pasa con corchetes
  useEffect(() => {
    // console.log("Se actualiza cuando se mueve el scroll");

    const detectarScroll = ()=> setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return() => window.removeEventListener("scroll", detectarScroll);

  },[scrollY]);

  //CON los corchetes vacios, solo el montaje
  useEffect(()=>{
    // console.log("faseMontaje")
  },[]);


  // se activa cada vez que hay modificacion
  useEffect(()=>{
    // console.log("fase Actualizacion");
  });

  //Desmontaje
  useEffect(()=>{
    // console.log("fase de Desmontaje");

    return() =>{
      <>
      {/* <h2>Hooks - useEffect y el Ciclo de Vida</h2> */}
      {/* <p>Scroll Y del Navegarodr {scrollY}px</p> */}
      </>
    }
  })

  return (
    <>
      {/* <h2>Hooks UseEffect y ciclo de vida</h2>
      <h3>El scroll Y {scrollY} px</h3> */}
    </>
  )
}