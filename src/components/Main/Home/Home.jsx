import React from "react";
import { useTranslation } from 'react-i18next';


const Home = () => {
  const { t } = useTranslation();

  return (
    <section>
      
      <h2>{t("home.greeting")}</h2>
      <article className="homegrid">
      <img src="/assets/fotoPerfil.png" alt="Foto de perfil" className="fotoPerfil"/>

      <p>{t("home.description")}
        <br /><br />
        {t("home.find")}
      </p>
      </article>

      <article className="links-container">
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
      </article>
    </section>
  );
};

export default Home;
