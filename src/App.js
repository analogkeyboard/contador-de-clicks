import './App.css';
import freecodecamp_logo from './imagenes/freecodecamp_logo.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
    console.log("click");
  };

  const reiniciarContador = () => {
    setNumClicks(0);
    console.log("reiniciar");
  };
  return (
    <div className="App">
      <div className='freecodecamp_logo_contenedor'>
        <img
          className='freecodecamp_logo'
          src={freecodecamp_logo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor_principal'>
        <Contador
          numClicks={numClicks}
        />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>

    </div>
  );
}

export default App;
