import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// COMPONENTS
import Nav from "./components/Nav/Nav.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Work from "./components/Work/Work.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from './components/Contact/Contact.jsx';

// ICONS
import { FiCodepen, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import {FaTelegramPlane} from 'react-icons/fa';



function App() {

  function Listen(e) {
    window.addEventListener("mousemove", function (e) {
      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");

      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });

    });
  };

  Listen();


  return (
    <div className="App">
      
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
      {/* LEFT */}
      <div className='left'>
        <a href='https://codepen.io/its_yasi' target='__blank'>
          <FiCodepen />
        </a>
        <a href="https://www.linkedin.com/in/boboyasi-undefined-15a50428b/" target='__blank'>
          <FiLinkedin />
        </a>
        <a href="https://t.me/WhOoIsYasi" target='__blank'>
          <FaTelegramPlane />
        </a>
        <a href="https://www.instagram.com/its._.yassii/" target='__blank'>
          <FiInstagram />
        </a>
        <a href="https://github.com/yasiBobo" target='__blank'>
          <FiGithub />
        </a>
      </div>

      <Nav />

      <main className="main">
        <Header />
        <Projects />
        <About />
        {/* <Work /> */}
        <Portfolio />
        <Contact />
      </main>

      <Footer />

      {/* RIGHT */}
      <div className="right">
        <a href="mailto:yasi00bobo@gmail.com?subject=Website Contact" style={{ rotate: "90deg" }}>
          yasi00bobo@gmail.com
        </a>
      </div>

    </div>
  )
}

export default App
