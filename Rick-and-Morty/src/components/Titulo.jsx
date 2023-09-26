import React from 'react';
import Rick_and_Morty_img from '../assets/Rick_and_Morty_title_card.png';
import '../components/Titulo.css';

export default function titulo() {
  return (
    <>
      <div className="titulo-container">
        <img className='titulo' src={Rick_and_Morty_img} alt="rick-and-morty" />
      </div>
    </>
  );
}