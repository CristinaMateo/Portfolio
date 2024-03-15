import React from "react";
import { useTranslation } from 'react-i18next';


const Experiencia = () => {

  const { t } = useTranslation();


  return (
    <section>
      <h1>{t("menu.historial")}</h1>
      <article id="exp">
        <h3>{t("experience.title")}</h3>
        <h5>{t("experience.position")} | {t("experience.company")} | {t("experience.date")} </h5>
        <ul>
          <li>{t("experience.respon1")}</li>
          <li>{t("experience.respon2")}</li>
          <li>{t("experience.respon3")}</li>
        </ul>
        <article>
          <h3>{t('education.title')}</h3>
          {t('education.info', { returnObjects: true }).map((item, index) => (
            <article key={index}>
              <h5>{item.course}</h5>
              <p>{`${item.institution} | ${item.date}`}</p>
              <ul>
                {item.topics && item.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </article>

      </article>
    </section>
  );
};

export default Experiencia;
