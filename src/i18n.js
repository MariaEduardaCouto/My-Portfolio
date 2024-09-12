import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationPT from "./translations/pt/translation.json";
import translationES from "./translations/es/translation.json";
import translationEN from "./translations/en/translation.json"


const fallbackLng = localStorage.getItem("i18nextLng")
const availableLanguages = ["en", "es", "pt"];

const resources = {
  pt: {
    translation: translationPT
  },
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: fallbackLng || "en",
    fallbackLng: fallbackLng || "pt",

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
