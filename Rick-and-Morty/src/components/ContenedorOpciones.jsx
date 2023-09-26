import React from 'react';
import '../components/ContenedorOpciones.css';
import BotonConsulta from '../components/BotonConsulta';

export default function ContenedorOpciones(props) {
  return (
    <>
      <div className="opciones-container">
        <div className="opciones">
          <BotonConsulta
            text="Personajes"
            isActiveIndex={props.isActiveIndex}
            handdleClick={props.handdleClick}
            setActiveIndex={props.setActiveIndex}
          />
        </div>
      </div>
    </>
  )
}