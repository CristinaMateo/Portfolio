import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar los archivos de traducción
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de fallback
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
