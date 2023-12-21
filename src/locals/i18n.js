import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { defaultLang } from "./config";
import enLocales from "./en/translation.json";
import arLocales from "./ar/translation.json";

let lng = defaultLang.value;

if (typeof window !== "undefined") {
    lng = localStorage.getItem("i18nextLng") || defaultLang.value;
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            enLocales,
            arLocales,
        },
        lng,
        fallbackLng: "en",  // Set the fallback language to English
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
