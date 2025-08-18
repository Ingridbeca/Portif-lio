
import './skills.css';
function Skills() {
    return (
        <div className="row col-12 d-flex justify-content-center mt-5">
             <h1 className='mt-5 mb-5 text-center'>Habil<spam className="laranja">idades!</spam></h1>
            <div className="card col-md-4">
            <div className="card-header fw-bold bg-white text-center">
            Ux-Design
            </div>
            <div className="card-body">
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i> Criação de personas</p> 
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i> Desenvolvimento de wireframes</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Testes de usabilidade</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Análise de feedbacks de usuários</p>
            </div> 
        </div>
        <div className="card col-md-4">
            <div className="card-header fw-bold bg-white text-center">
           Web Design
            </div>
            <div className="card-body">
             <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Desenvolvimento de protótipos de alta fidelidade</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Design responsivo e adaptativo</p> 
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Teoria das cores e tipografia</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Criação de elementos visuais e interfaces</p>
            </div> 
        </div>
        <div className="card col-md-4">
            <div className="card-header fw-bold bg-white text-center">
            Front-end
            </div>
            <div className="card-body">
             <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Desenvolvimento com HTML, CSS, JavaScript</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Framework React</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i>  Design reponsivo</p>
                 <p className="card-text"><i className="bi bi-check-circle-fill"></i> Desenvolvimento de interfaces e funcionalidades com Bootstrap</p>
            </div> 
        </div>
    </div>
    );
  }
  
  export default Skills;
  