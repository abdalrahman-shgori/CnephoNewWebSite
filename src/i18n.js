import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locals/en/translation.json";
import ar from "./locals/ar/translation.json";

// const languages = ["en", "ar"];

i18n


    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        resources: {
            en,
            ar,
        },
        // lng: languages,
        fallbackLng: "ar",
        // debug: true,

        // whitelist: languages,
        // keySeparator: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        react: {
            useSuspense: false, //   <---- this will do the magic
        },
    });
    const storedLang = localStorage.getItem("i18nextLng");
if (typeof window !== "undefined" && storedLang === 'en-US' && !storedLang) {
  i18n.changeLanguage('en');
}

export default i18n;
