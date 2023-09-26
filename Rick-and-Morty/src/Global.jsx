import React, {useState,useEffect} from "react";
import Resultados from './components/Resultados';
import Titulo from './components/Titulo';
import ContenedorOpciones from './components/ContenedorOpciones';

export default function Global() {
  const[isActiveIndex, setActiveIndex] = useState(0);
  const handdleClick = () =>{
    isActiveIndex != 0 ? setActiveIndex(1) : setActiveIndex(0);
    if (isActiveIndex !== 1) {
      setActiveIndex(1);
    }else {
      setActiveIndex(0);
    }
    console.log(isActiveIndex);
  };
  return (
    <>
      <Titulo />
      <ContenedorOpciones isActiveIndex={isActiveIndex} handdleClick={handdleClick} setActiveIndex={setActiveIndex} />
      <Resultados index={isActiveIndex} />
    </>
  );
};