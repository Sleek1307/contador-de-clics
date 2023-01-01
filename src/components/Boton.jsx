import React from 'react'

//Estilos
import '../styles/Boton.css'

export default function Boton({ texto, esBotonDeClic, handleClick }) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={handleClick}
    >
      {texto}
    </button>
  )
};