import React from 'react';
import '../styles/Testimonio.css';

//Componente testimonio
function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      {/* /* Imagen */}
      <img 
      className='imagen-testimonio'
      src={require(`../images/testimonio-${props.imagen}.jpg`)}
      alt='Primer testimonio'
      />
      {/* Texto del testimonio: nombre, cargo y breve desc. */}
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

//Exportacion con defecto: unico componente que se exportara
//Exportacion nombrada importar varios componentes de un mismo archivo
export default Testimonio;

