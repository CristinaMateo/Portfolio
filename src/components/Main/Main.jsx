import React from "react";
import Home from './Home';
import Experiencia from './Experiencia';
import Proyectos from './Proyectos';
import About from './About';



const Main = () => {
  return (
    <main>
      <Home />
      <div id="experiencia"></div>
      <Experiencia />
      <div id="proyectos"></div>
      <Proyectos />
      <div id="about"></div>
      <About />
    </main>
  );
};

export default Main;
