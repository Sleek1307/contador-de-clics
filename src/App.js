import { useState } from 'react';

//Estilos
import './App.css';

//Assets
import freeCodeCampLogo from './assets/images/freecodecamp-logo.png';

//Componentes personalizados
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

  const [clicks, setClicks] = useState(0)

  const handleClick = () => {

    setClicks(clicks + 1);
  };

  const handleReset = () => {

    setClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={clicks} />
        <Boton
          texto={'Click'}
          esBotonDeClic={true}
          handleClick={handleClick}
        />
        <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          handleClick={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
