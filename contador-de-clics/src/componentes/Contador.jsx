import React from 'react';
import '../style-sheets/Contador.css';

function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Contador;