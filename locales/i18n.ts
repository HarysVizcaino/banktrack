import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

// Import translation files
import en from "./en.json";
import es from "./es.json";

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3", // Fixes Expo compatibility issues
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: Localization.locale.startsWith("es") ? "es" : "en", // Auto-detect language
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
