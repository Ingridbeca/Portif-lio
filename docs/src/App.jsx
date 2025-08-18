
import NavBar from './NavBar.jsx';
import Home from './home.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import Technology from './Technology.jsx'
import Left from './Left.jsx'
import LottieBackground from './LottieBackground.jsx'

function App() {
  return (
    <div>
      <LottieBackground/>
      <NavBar/>
      <Left/>
      <Home />
      <About />
      <Skills />
      <Technology/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
