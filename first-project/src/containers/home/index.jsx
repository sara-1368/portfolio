import React from "react";
import {Animate} from "react-simple-animate";
import "./style.scss";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Home = () => {
  return (
    <section className="Home" id="Home">
      <div className="Home__text-content">
        <h1>
          Hello ,  I'm Sara .
          <br />
          Front End Developer .
        </h1>
      </div>
      <Animate 
     play 
     duration={1.5}
     delay={1}
     start={{ transform: 'translateY(600px)!important' }}
     end={{ transform: 'translateX(0px)' }}
    
        >
      <div className="Contact-me">
        <div className="Contact-me__buttons-wraper">
          <button>Hire Me</button>
          <a>Download Resume</a>
        </div>
        <div className="Contact-me__icons-wraper">
          <FaLinkedin size={32} />
          <FaInstagram size={32} />
          <FaTelegram size={32} />
        </div>

      </div>
      </Animate>
   

    </section >
  )
}
export default Home;