import React from "react";

const Proyectos = () => { 
  return (
    <section>
      <h1>Proyectos</h1>

      <article className="project">
        <h3>Full TuttiFrutti</h3>
        <article className="grid">
          <p>Recreación del proyecto "My TuttiFrutti App" mediante uso de ReactJS y NodeJS, además de una base de datos propia generada con PostgreSQL. El proyecto en el que se basa se puede visitar en mi página de GitHub.
            <br />
            Aplicación web fullstack que muestra datos nutricionales de diferenctes frutas consumidas en España, además de su comparación mediante gráficos creados con <a href="https://react-chartjs-2.js.org/">react-chartjs-2</a> . También incluye un apartado extra que muestra los distintos usos que se le puede dar a diferentes frutas en la alimentación diaria. </p>
          <img src="/assets/FullFrutti.png" alt="Screenshot Full TuttiFrutti" />
        </article>
        <span className="enlaces">
        <a className="link" href="https://tuttifrutti.onrender.com/">Visitar Web</a>
        <a className="link" href="https://github.com/CristinaMateo/Full-TuttiFrutti">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3> Party Pulse</h3>
        <article className="grid">
          <p>Página web de gestión de eventos. Permite visitar los detalles de cada evento. Una vez creado un usuario y loggeado también se pueden crear/ modificar / eliminar los eventos propios. En fase dos se incluirá una opción de confirmar la asistencia a los eventos y ver quién asistirá.
            <br />
            Proyecto personal final del Bootcamp de Dessarrollo Web FullStack en The Bridge en el que se crea una aplicación web fullstack con ReactJS y NodeJS, además de una base de datos generada con PostgreSQL.</p>
          <img src="/assets/partyPulse.png" alt="Screenshot Party Pulse" />
        </article>
        <span className="enlaces">
        <a className="link" href="https://partypulse-ynvm.onrender.com/">Visitar Web</a>
        <a className="link" href="https://github.com/CristinaMateo/Batec_de_Festa">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3>PokeApp</h3>
        <article className="grid">
          <p>Aplicación web creada con React que funciona como Pokédex que interactúa con la PokeApi mostrando así los detalles de cada pokémon. Permite realizar búsquedas mediante el id del pokémon o su nombre, además de crear nuevos pokémon con react-hook-form guardados en el contexto. <br />
            Es un proyecto que forma parte de la evolución del aprendizaje durante el Bootcamp de Dessarrollo Web FullStack en The Bridge y se practica el uso de useDebounce(), useEffect(), useState(), useContext() y useParams().</p>
          <img src="/assets/pokeapp.png" alt="Screenshot PokeApp" />
        </article>
        <span className="enlaces">
        <a className="link" href="https://sweet-kitsune-b9bcb3.netlify.app">Visitar Web</a>
        <a className="link" href="https://github.com/CristinaMateo/weatherInfo">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3>WeatherInfo</h3>
        <article className="grid">
          <p>Aplicación web creada con React que interactúa con <a href="https://openweathermap.org/">OpenWeather</a> para mostrar la predicción del tiempo cada tres horas de los siguientes cinco días según la ciudad que busque el usuario. <br />
            Es un proyecto que forma parte de la evolución del aprendizaje durante el Bootcamp de Dessarrollo Web FullStack en The Bridge y se practica el uso de useDebounce(), useEffect(), useState(), useContext() y useParams().</p>
          <img src="/assets/weather.png" alt="screenshot WeatherInfo" />
        </article>
        <span className="enlaces">
        <a className="link" href="https://yourweatherinfobycris.netlify.app/">Visitar Web</a>
        <a className="link" href="https://github.com/CristinaMateo/pokeApp">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3> Second Quiz</h3>
        <article className="grid">
          <p>Segunda práctica de quiz, el primero es visitable en mi GitHub. Creado con Vanilla, hace peticiones a <a  href="https://opentdb.com/">Open DB</a> para crear un quiz con una temática televisiva y preguntas aleatorias que proporciona la API. Estilada como un teletexto para que concuerde con la temática del quiz. Ha sido gestionada con Firebase para los datos del usuario y su progreso en cada realización que haga del quiz.</p>
          <img src="/assets/Telequiz.png" alt="Screenshot Second Quiz" />
        </article>
        <span className="enlaces">
        <a className="link" href="https://cristinamateo.github.io/secQuiz/">Visitar Web</a>
        <a className="link" href="https://github.com/CristinaMateo/secQuiz">GitHub</a>
        </span>
      </article>

    </section>
  );
};

export default Proyectos;
