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
          imagen='1'
          cargo='CEO'
          empresa='TESLA'
          testimonio='Elon Reeve Musk, conocido como Elon Musk, es un empresario, inversionista y magnate sudafricano, canadiense y estadounidense'
          />
          <Testimonio 
          nombre='Winter Spicy'
          pais='EUA'
          imagen='2'
          cargo='Licenciada'
          empresa='Psicologia'
          testimonio='Psicologa estadounidense, Wnna centró su investigación en la psicología infantil y en terapia de parejas.'
          />
          <Testimonio
          nombre='Adam Sandler'
          pais='EUA'
          imagen='3'
          cargo='Actor'
          empresa='Hollywood'
          testimonio='Adam Richard Sandler es un comediante, actor, guionista y productor estadounidense. Fue miembro del elenco de Saturday Night Live de 1990 a 1995, antes de protagonizar numerosas películas de Hollywood, las cuales acumularon más de $ 2 mil millones en taquilla en todo el mundo.'
          />
      </div>
    </div>
  );
}

export default App;
