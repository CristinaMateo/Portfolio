import React from "react";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div id="home"></div>
      <nav>
        <a href="#home">{t("menu.home")}</a>
        <a href="#experiencia">{t("menu.experiencia")}</a>
        <a href="#proyectos">{t("menu.proyectos")}</a>
        <a href="#about">{t("menu.about")}</a>
      </nav>
    </header>
  );
};

export default Header;
