import React from "react";

const Proyectos = () => {
  return (
    <section id="proyectos">
      <h1>Proyectos</h1>
      <p>A continuación una muestra de los proyectos realizados del más reciente al más antiguo. Cada uno incluye un resumen y el acceso al códido en GitHub y a la página desplegada.</p>

      <article>
        <h2>Full TuttiFrutti</h2>
        <p>Recreación del proyecto "My TuttiFrutti App" mediante uso de ReactJS y NodeJS, además de una base de datos propia generada con PostgreSQL. El proyecto en el que se basa está incluido más adelante en esta misma página.</p>
        <p>Aplicación web fullstack que muestra datos nutricionales de diferenctes frutas consumidas en España, además de su comparación mediante gráficos creados con <a href="https://react-chartjs-2.js.org/">react-chartjs-2</a> . También incluye un apartado extra que muestra los distintos usos que se le puede dar a diferentes frutas en la alimentación diaria. </p>
        <img src="" alt="" />
        <button><a href="https://tuttifrutti.onrender.com/">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/Full-TuttiFrutti">GitHub</a></button>
      </article>

      <article>
        <h2> Party Pulse</h2>
        <p>Página web de gestión de eventos. Permite visitar los detalles de cada evento. Una vez creado un usuario y loggeado también se pueden crear/ modificar / eliminar los eventos propios. En fase dos se incluirá una opción de confirmar la asistencia a los eventos y ver quién asistirá.</p>
        <p>Proyecto personal final del Bootcamp de Dessarrollo Web FullStack en The Bridge en el que se crea una aplicación web fullstack con ReactJS y NodeJS, además de una base de datos generada con PostgreSQL.</p>
        <img src="" alt="" />
        <button><a href="https://partypulse-ynvm.onrender.com/">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/Batec_de_Festa">GitHub</a></button>
      </article>

      <article>
        <h2>PokeApp</h2>
        <p>Aplicación web creada con React que funciona como Pokédex que interactúa con la PokeApi mostrando así los detalles de cada pokémon. Permite realizar búsquedas mediante el id del pokémon o su nombre, además de crear nuevos pokémon con react-hook-form guardados en el contexto. <br />
        Es un proyecto que forma parte de la evolución del aprendizaje durante el Bootcamp de Dessarrollo Web FullStack en The Bridge y se practica el uso de useDebounce(), useEffect(), useState(), useContext() y useParams().</p>
        <img src="" alt="" />
        <button><a href="https://sweet-kitsune-b9bcb3.netlify.app">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/weatherInfo">GitHub</a></button>
      </article>

      <article>
        <h2>WeatherInfo</h2>
        <p>Aplicación web creada con React que interactúa con <a href="https://openweathermap.org/">OpenWeather</a> para mostrar la predicción del tiempo cada tres horas de los siguientes cinco días según la ciudad que busque el usuario. <br />
        Es un proyecto que forma parte de la evolución del aprendizaje durante el Bootcamp de Dessarrollo Web FullStack en The Bridge y se practica el uso de useDebounce(), useEffect(), useState(), useContext() y useParams().</p>
        <img src="" alt="" />
        <button><a href="https://yourweatherinfobycris.netlify.app/">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/pokeApp">GitHub</a></button>
      </article>

      <article>
        <h2>My TuttiFrutti App</h2>
        <p>Aplicación web creada con Vanilla que interactúa con la api de <a href="https://www.fruityvice.com/">Fruityvice</a> para mostrar datos nutricionales de diferenctes frutas, si son parte de la temporada actual según el momento de consulta y su comparación nutricional mediante gráficos creados con <a href="https://www.chartjs.org/docs/latest/">chartjs</a>.</p>
        <img src="" alt="" />
        <button><a href="https://cristinamateo.github.io/mytuttifruttiApp/">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/mytuttifruttiApp">GitHub</a></button>
      </article>

      <article>
        <h2> Second Quiz</h2>
        <p>Segunda práctica de quiz. Creado con Vanilla hace peticiones a <a href="https://opentdb.com/">Open DB</a> Para crear un quiz con una temática televisiva y preguntas aleatorias que proporciona la API. Estilada como un teletexto para que concuerde con la temática del quiz. Ha sido gestionada con Firebase para los datos del usuario y su progreso en cada realización que haga del quiz.</p>
        <img src="" alt="" />
        <button><a href="https://cristinamateo.github.io/secQuiz/">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/secQuiz">GitHub</a></button>
      </article>

      <article>
        <h2> First quiz</h2>
        <p>Primer proyecto con Vanilla, es el proyecto precursor de Second Quiz. </p>
        <img src="" alt="" />
        <button><a href="https://cristinamateo.github.io/Quiz/">Visitar Web</a></button>
        <button><a href="https://github.com/CristinaMateo/Quiz">GitHub</a></button>
      </article>
    </section>
  );
};

export default Proyectos;
