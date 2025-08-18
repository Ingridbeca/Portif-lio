import React, { useEffect } from 'react';
import secondImage from './img/second.png'; 
import thirdImage from './img/third.png'; 
import './about.css';

function About() {
  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(element => {
      element.classList.add('active');
    });
  }, []);

  return (
    <div>
      <div className="container-fluid row col-12">
        <div className="col-6">
          <div className="row slide-in">
            <div>
              <h1 className='text-center m-4 '>Sobre <span className="laranja">mim!</span></h1>
              <h3 className='descricaoEsquerda'>
                <span className="azul">Minha jornada na tecnologia</span> começou no ensino médio, quando <span className="fw-bold">me formei no curso Técnico de Informática para Internet.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img className="img" src={secondImage} style={{ width: '400px', height: 'auto' }} alt="Second" />
        </div>
        <h3 className='center slide-in mt-5 mb-0'>Desde então, tenho me aprofundado em <span className="azul">Front-end e experiência do usuário.</span></h3>
      </div>
      <div className="container-fluid row col-12">
        <div className="col-6">
          <img className="img" src={thirdImage} style={{ width: '350px', height: 'auto' }} alt="Third" />
        </div>
        <div className="col-6">
          <div className="row slide-in">
            <div>
              <h3 className='descricao'>
                Hoje, trabalho em uma empresa de transporte, <span className="azul">desenvolvendo sistemas inovadores</span>, e sou graduanda de <span className="fw-bold">Sistemas de Informação na PUC</span>.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
