import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locals/en/translation.json";
import ar from "./locals/ar/translation.json";

// const languages = ["en", "ar"];
const storedLang = localStorage.getItem("i18nextLng");
const defaultLanguage = storedLang || 'en';
i18n


    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        resources: {
            en,
            ar,
        },
        lng: defaultLanguage,
        fallbackLng: "en",
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
   

    if (typeof window !== "undefined" && !storedLang) {
        localStorage.setItem("i18nextLng", defaultLanguage);
    }
console.log(storedLang)

export default i18n;
