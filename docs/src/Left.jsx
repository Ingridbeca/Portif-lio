import React, { useState, useEffect } from 'react';
import './Left.css';
import Perfil from './img/perfil.png';  
import Estrela from './img/estrela.png';

function Left() {
  const [displayedText, setDisplayedText] = useState('');

  const items = [
    'Trabalho em equipe, promovendo assertividade;',
    'Design responsivo e intuitivo com Bootstrap;',
    'Desenvolvimento com tecnologias atuais de Front-end.'
  ];

  const fullText = 'Desenvolvedora Front-end !';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [fullText]);

  return (
    <div className='body'>
      <div className="text-center">
        <img id='perfil' className="imagem" src={Perfil} alt="Perfil" style={{ width: '190px', height: '190px' }}/>
        <h2 className="mt-4 mb-0 fs-6 typewriter">{displayedText}</h2>
        <img id='estrela' className="imagem" src={Estrela} alt="Estrela" style={{ width: '191px', height: '107px' }}/>
        <h2><span className="azul">Pontos</span> Fortes!</h2>
        <ul className='lista mt-4'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Left;
