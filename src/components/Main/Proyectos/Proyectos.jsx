import React from "react";
import { useTranslation } from 'react-i18next';


const Proyectos = () => {
  const { t } = useTranslation();


  return (
    <section>
      <h1>{t("menu.proyectos")}</h1>

      <article className="project">
        <h3>Full TuttiFrutti</h3>
        <article className="grid">
          <p>{t("projects.TF.p1")}<br />{t("projects.TF.p2")} <a href="https://react-chartjs-2.js.org/">react-chartjs-2</a>. {t("projects.TF.p3")}. </p>
          <img src="/assets/FullFrutti.png" alt="Screenshot Full TuttiFrutti" />
        </article>
        <span className="enlaces">
          <a className="link" href="https://tuttifrutti.onrender.com/">Web</a>
          <a className="link" href="https://github.com/CristinaMateo/Full-TuttiFrutti">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3> Party Pulse</h3>
        <article className="grid">
          <p>{t("projects.PaPu.p1")}<br />{t("projects.PaPu.p2")}</p>
          <img src="/assets/partyPulse.png" alt="Screenshot Party Pulse" />
        </article>
        <span className="enlaces">
          <a className="link" href="https://partypulse-ynvm.onrender.com/">Web</a>
          <a className="link" href="https://github.com/CristinaMateo/Batec_de_Festa">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3>PokeApp</h3>
        <article className="grid">
          <p>{t("projects.Poke.p1")}<a href="https://pokeapi.co/">PokeApi</a>{t("projects.Poke.p2")}<br />{t("projects.Poke.p3")}
          </p>
          <img src="/assets/pokeapp.png" alt="Screenshot PokeApp" />
        </article>
        <span className="enlaces">
          <a className="link" href="https://sweet-kitsune-b9bcb3.netlify.app">Web</a>
          <a className="link" href="https://github.com/CristinaMateo/weatherInfo">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3>WeatherInfo</h3>
        <article className="grid">
          <p>{t("projects.WA.p1")}<a href="https://openweathermap.org/">OpenWeather</a>{t("projects.WA.p2")}<br />{t("projects.WA.p3 ")}</p>
          <img src="/assets/weather.png" alt="screenshot WeatherInfo" />
        </article>
        <span className="enlaces">
          <a className="link" href="https://yourweatherinfobycris.netlify.app/">Web</a>
          <a className="link" href="https://github.com/CristinaMateo/pokeApp">GitHub</a>
        </span>
      </article>

      <article className="project">
        <h3> Second Quiz</h3>
        <article className="grid">
          <p>{t("projects.SeQ.p1")}<a href="https://opentdb.com/">Open DB</a>{t("projects.SeQ.p2")}</p>
          <img src="/assets/Telequiz.png" alt="Screenshot Second Quiz" />
        </article>
        <span className="enlaces">
          <a className="link" href="https://cristinamateo.github.io/secQuiz/">Web</a>
          <a className="link" href="https://github.com/CristinaMateo/secQuiz">GitHub</a>
        </span>
      </article>

    </section>
  );
};

export default Proyectos;
