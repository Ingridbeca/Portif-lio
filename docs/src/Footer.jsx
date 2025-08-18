import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-3 mt-4">
            <h4>Ingrid Rebeca</h4>
            <p className='azul'>Desenvolvedora Front-end</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <a href="https://github.com/Ingridbeca" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} />
              </a>
            </div>
            <div className="text-center">
              <a href="https://www.linkedin.com/in/ingrid-rebeca-b11a00279/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
          <div className="col-md-12 mt-3 text-center">
            <h6>© Ingrid Rebeca 2025 - Todos os direitos reservados.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
