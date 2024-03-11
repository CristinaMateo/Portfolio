import React from "react";

const Home = () => {
  return (
    <section>
      
      <h2>¡Hola! Soy Cristina. </h2>
      <p>Junior Full Stack Developer apasionada por la tecnología. Con sólidos conocimientos en desarrollo web y habilidades Full Stack, estoy emocionada por contribuir al mundo tecnológico con soluciones creativas y explorar nuevas oportunidades de aprendizaje y colaboración.</p>

      <div className="links-container">
        <a className="link smallGrid" href="https://linkedin.com/in/mateo-cristina">
          <img src="/assets/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a className="link smallGrid" href="https://github.com/CristinaMateo">
        <img src="/assets/github.png" alt="GitHub" />
          GitHub
        </a>
        <a className="link smallGrid" href="mailto:cris.mateo.99@gmail.com">
        <img src="/assets/mail.png" alt="Mail" />
          cris.mateo.99@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Home;
