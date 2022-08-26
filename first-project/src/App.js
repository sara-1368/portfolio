
import './App.scss';
import Navbar from './component/navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Skiils from './containers/skills';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './helper/particlesConfig';



function App() {
  //****particle code */
  const particlesInit = async (main) => {
    await loadFull(main);
  }
  //****end particle code */
  const location = useLocation();
  const locationIsHome = location.pathname === "/";
  return (
    <div className="App">
      {locationIsHome && <Particles id="particles" options={particlesConfig} init={particlesInit} />
      }
      <div className="App__navbar-wraper">
      <Navbar />
      </div>

      <div className="App__main-content-wraper">
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skiils" element={<Skiils />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
