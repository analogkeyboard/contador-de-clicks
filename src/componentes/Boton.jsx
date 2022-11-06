import React from 'react';
import '../hojas_de_estilo/Boton.css';
function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button
      className={esBotonDeClick ? 'boton_click' : 'boton_reiniciar'}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;