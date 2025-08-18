import healthCare from './img/health_care.jpg';
import gerency from './img/gerency.jpg';
import jogo from './img/jogo.jpg';
import recicla from './img/recicla.png';
import { FaBriefcase } from 'react-icons/fa';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Projects() {
  return (
    <div className="m-5 text-center">
      <h1 className='font mb-5 mt-5'>Meus <span className="laranja">projetos</span> Públicos!</h1>
      <div className="d-flex justify-content-center">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="10000" data-bs-wrap="true" data-bs-pause="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="6000">
              <a href="https://github.com/Ingridbeca/pmv-si-2025-1-pe3-t1-reciclaaqui-reciclagem-local">
                <img src={recicla} className="slide d-block" style={{ width: '900px', height: 'auto' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Recicla Aqui</h5>
                  <p className='text-light'>
                    O ReciclaAqui é uma plataforma que conecta usuários a pontos de coleta de resíduos recicláveis. <br />
                    Este projeto envolve etapas de Design centrado no usuário, testes e é o projeto mais recente que desenvolvi em equipe. <br />
                    Para conhecer o repositório do projeto, clique nesse slide. <br />
                    
                  </p>
                </div>
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <a href="https://github.com/Ingridbeca/pmv-si-2024-1-pe1-t6-si_t6_app_web_1osem2024_gp01.git">
                <img src={gerency} className="slide d-block" style={{ width: '900px', height: 'auto' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Gerency</h5>
                  <p className='text-light'>A Gerency é um sistema de gestão financeira pessoal. <br /> Foi o primeiro projeto que desenvolvi na faculdade com meus colegas. O projeto conta com etapas de UX e Ui design, Web design, Front-end e Testes de Software detalhados. <br />Para conhecer o repositório do projeto, clique nesse slide. <br /></p>
                </div>
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <a href="https://github.com/Ingridbeca/Health-Care.git">
                <img src={healthCare} className=" slide d-block" style={{ width: '900px', height: 'auto' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Health Care</h5>
                  <p className='text-light'>A HealthCare foi um Web Site que desenvolvi para uma Feira de Projetos do curso de Administração que me formei em 2023. <br /> Áreas como "Sobre nós" e "Produtos", apresentam ao cliente os produtos Health Care e seus benefícios. <br />Para conhecer o repositório do projeto, clique nesse slide. <br /></p>
                </div>
              </a>
            </div>
            <div className="carousel-item" data-bs-interval="6000">
              <a href="https://github.com/Ingridbeca/Game-Mata-Mosquito.git">
                <img src={jogo} className="slide d-block" style={{ width: '900px', height: 'auto' }} />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='text-light'>Mata Mosquito</h5>
                  <p className='text-light'>O game Mata Mosquito foi um jogo que desenvolvi com o curso  "Desenvolvimento Web Completo". <br />Para conhecer o repositório do projeto, clique nesse slide. <br /></p>
                </div>
              </a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p className='github mt-3'><a href="https://github.com/Ingridbeca?tab=repositories">
        Veja mais dos meus repositórios públicos  <span className="m-2">
          <FaBriefcase size={25} />
        </span>
      </a></p>
    </div>
  );
}

export default Projects;
