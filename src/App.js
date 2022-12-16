import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos son algunos testimonios: </h1>
        <Testimonio 
          nombre='Elon Musk'
          pais='EUA'
          imagen=''
          cargo='CEO'
          empresa='TESLA'
          testimonio='Elon Reeve Musk, conocido como Elon Musk, es un empresario, inversionista y magnate sudafricano, canadiense y estadounidense'
          />
      </div>
    </div>
  );
}

export default App;
