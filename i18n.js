import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar los archivos de traducción
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

// Función para detectar el idioma del navegador
function detectarIdiomaNavegador() {
  const idiomaNavegador = navigator.language || navigator.languages[0];
  return idiomaNavegador;
}

// Configuración de traducción
i18n
.use(initReactI18next)
.init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    }
  },
  lng: detectarIdiomaNavegador(), // Establecer el idioma predeterminado como el idioma del navegador
  fallbackLng: 'en', // Idioma de fallback
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;
