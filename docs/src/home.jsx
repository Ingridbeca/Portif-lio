import React, { useEffect } from 'react';
import firstImage from './img/inicio.png';
import './home.css';

function Home() {
  useEffect(() => {
    const slideInElement = document.querySelector('.slide-in');
    slideInElement.classList.add('active');
  }, []);

  return (
    <div className="container-fluid row col-12">
      <div className="col-6">
        <img id='imagem' src={firstImage} style={{ marginBottom: '15px', width: '500px', height: 'auto' }} alt="Início" />
      </div>
      <div className="slide-in col-6 mt-4">
        <div className="row">
          <div>
            <h1 className='texto'>
              Olá, meu nome é <span className="azul">Ingrid Rebeca.</span>
              <br />
              Bem-vindo(a) ao meu <span className='laranja'>portfólio!</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
