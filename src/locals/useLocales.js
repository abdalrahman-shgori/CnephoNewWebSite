import { useTranslation } from "react-i18next";
import { useSettingsContext } from "../pagedirection/SettingsContext";
import { allLangs, defaultLang } from "./config";

export default function useLocales() {
    const { i18n, t: translate } = useTranslation();
    const { onChangeDirectionByLang } = useSettingsContext();

    // Always set the language to English during initialization
    if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
        onChangeDirectionByLang('en');
    }

    const langStorage =
        typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : "";

    const currentLang =
        allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

    const handleChangeLanguage = (newlang) => {
        i18n.changeLanguage(newlang);
        onChangeDirectionByLang(newlang);
    };

    return {
        onChangeLang: handleChangeLanguage,
        translate: (text, options) => translate(text, options),
        currentLang,
        allLangs,
    };
}
