import React from "react";
import Home from './Home';
import Experiencia from './Experiencia';
import Proyectos from './Proyectos';



const Main = () => {
  return (
    <main>
      <Home/>
      <div id="experiencia"></div>
      <Experiencia/>
      <div id="proyectos"></div>
      <Proyectos/>
    </main>
  );
};

export default Main;
