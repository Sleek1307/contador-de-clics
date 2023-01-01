import React from 'react';

//Estilos
import '../styles/Contador.css';

export default function Contador({numClics}) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  )
}; 