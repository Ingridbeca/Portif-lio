import './NavBar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function NavBar() {

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <ul className='nav-list'>
            <li className="nav-item">
                {/*<i id='mode' className="bi bi-cloudy-fill" style={{fontSize: '30px'}}></i>*/}
        <div className="text-center">
          <div className="links">
            <a href="https://github.com/Ingridbeca" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/ingrid-rebeca-b11a00279/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;