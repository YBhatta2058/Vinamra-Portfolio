import "./app.scss";
import Landing from "./Components/Main/Landing";
import Navbar from "./Components/Navbar/navbar";
import React from "react";
import Contact from "./Components/contact/contact";
import Event2 from "./Components/Event2/Event2";
import About from "./Components/AboutMe/About";
import Projects from "./Components/Projects/Projects";
import bg1 from  '../public/bg.jpg'
import bg2 from  '../public/bg2.png'

 const App = () => {
  return (
    <>
      <section className="minorSection" style = {{backgroundImage:bg1}}>
        <section className="majorSection">
          <Navbar />
          <Landing />
        </section>
      </section>
      <section className = "majorSection">
        <Projects />
      </section>
      <Event2 />
      <section className = "majorSection">
        <About />
      </section>
      <section className="secondMinorSection" style = {{backgroundImage:bg2}}>
        <section className="majorSection">
          <Contact />
        </section>
      </section>
    </>
  );
};

export default App;
