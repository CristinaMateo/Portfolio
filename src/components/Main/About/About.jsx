import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about">
      <h1>{t("menu.about")}</h1>
      <p>{t("about.aboutp1")}</p>
      <p>{t("about.aboutp2")}<br /><br />
      {t("about.aboutp3")}
      </p>
      <ul className="habilidades">
          <li>{t("skills.frontend")}</li>
          <li>{t("skills.javascript")}</li>
          <li>{t("skills.databases")}</li>
          <li>{t("skills.backend")}</li>
          <li>{t("skills.spa")}</li>
          <li>{t("skills.testing")}</li>
          <li>{t("skills.agile")}</li>
          <li>{t("skills.devops")}</li>
        </ul>
      
      <p>{t("about.aboutp4")}</p>
    </section >
  );
};

export default About;
