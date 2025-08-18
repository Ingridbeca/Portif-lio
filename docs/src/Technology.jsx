import './Technology.css';
import HtmlLogo from "./img/html.png";
import CssLogo from "./img/css.png";
import JsLogo from "./img/js.png";
import ReactLogo from "./img/react.png";
import BootstrapLogo from "./img/bootstrap.png";
import GitLogo from "./img/git.png";
import FigmaLogo from "./img/figma.png";
import TypescriptLogo from "./img/ts.png";

function Technology() {
  return (
    <div id='tech' className="container">
      <h1 className='font mb-5 mt-5 text-center'>Conhec<span className="laranja">imento!</span></h1>
      <div className='row justify-content-center m-5'>
        <div className="col-md-3 m-2 text-center">
          <img id='html' src={HtmlLogo} style={{ width: '120px', height: 'auto' }} alt='html 5'/>
          <p>HTML</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='css' src={CssLogo} style={{ width: '120px', height: 'auto' }} alt='css'/>
          <p>CSS</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='js' src={JsLogo} style={{ width: '120px', height: 'auto' }} alt='javascript'/>
          <p>JavaScript</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='react' src={ReactLogo} style={{ width: '120px', height: 'auto' }} alt='react'/>
          <p>React</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='bootstrap' src={BootstrapLogo} style={{ width: '120px', height: 'auto' }} alt='bootstrap'/>
          <p>Bootstrap</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='git' src={GitLogo} style={{ width: '120px', height: 'auto' }} alt='git'/>
          <p>Git</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='ts' src={TypescriptLogo} style={{ width: '120px', height: 'auto' }} alt='typescript'/>
          <p>TypeScript</p>
        </div>
        <div className="col-md-3 m-2 text-center">
          <img id='figma' src={FigmaLogo} style={{ width: '120px', height: 'auto' }} alt='figma'/>
          <p>Figma</p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
