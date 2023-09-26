import React from 'react';
import '../components/ContenedorOpciones.css';
import BotonConsulta from '../components/BotonConsulta';

export default function ContenedorOpciones() {
  return (
    <>
      <div className="opciones-container">
        <div className="opciones">
          <BotonConsulta text="Personajes" />
        </div>
      </div>
    </>
  )
}