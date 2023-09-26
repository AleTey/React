import React from 'react';
import '../components/Producto.css';

export default function Producto(props) {
  return (
    <>
      <div className="producto-container">
        <div className="img-container">
          {/* <img src="foto-producto" alt={props.modelo} /> */}
        </div>
        <div className="descripcion">
          <span className='modelo'></span>
          <span className='estampa'></span>
          <span className='id'></span>
        </div>
      </div>
    </>
  )
}