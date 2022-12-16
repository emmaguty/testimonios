import React from 'react';

//Componente testimonio
function Testimonio() {
  return(
    <div className='contenedor-testimonio'>
      {/* /* Imagen */}
      <img 
      className='imagen-testimonio'
      src={require('../images/testimonio-1.jpg')}
      alt='Primer testimonio'
      />
      {/* Texto del testimonio: nombre, cargo y breve desc. */}
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Elon Musk en EUA</p>
        <p className='cargo-testimonio'>CEO de Tesla</p>
        <p className='texto-testimonio'>Elon Reeve Musk, conocido como Elon Musk, es un empresario, inversionista y magnate sudafricano, canadiense y estadounidense</p>
      </div>
    </div>
  );
}

//Exportacion con defecto: unico componente que se exportara
//Exportacion nombrada importar varios componentes de un mismo archivo
export default Testimonio;

