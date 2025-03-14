import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const Languages = ["en", "ar"];

// const path = window.location.pathname.split("/")[1];

localStorage.setItem("i18nextLng", localStorage.getItem("i18nextLng") ?? Languages[0])

i18n
    .use(Backend)
    .use(LanguageDetector)
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: Languages,
        debug: false,
        backend: {
            loadPath:
                `/locales/{{lng}}/{{ns}}.json?cb=` + new Date().getTime(),
        },
    });

export default i18n;