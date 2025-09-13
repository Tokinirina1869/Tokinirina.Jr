import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        welcome: "Bienvenue sur mon Portfolio",
        contact: "Contactez-moi",
        about: "À propos",
        projects: "Projets",
      },
    },
    en: {
      translation: {
        welcome: "Welcome to my Portfolio",
        contact: "Contact me",
        about: "About",
        projects: "Projects",
      },
    },
    mg: {
      translation: {
        welcome: "Tongasoa eto amin'ny Portfolio-ko",
        contact: "Mifandraisa amiko",
        about: "Momba ahy",
        projects: "Tetikasako",
      },
    },
  },
  lng: "fr", // langue par défaut
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
