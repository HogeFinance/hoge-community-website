import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { getLocale } from "./utils/cookies";

const locale = getLocale();

const loadI18nConfig = () => {
  i18n
    .use(resourcesToBackend((language, namespace, callback) => {
      import(`./locales/${language}.json`)
        .then((resources) => {
          callback(null, resources)
        })
        .catch((error) => {
          callback(error, null)
        })
    }))
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // detect user language
    .use(LanguageDetector)
    .use(initReactI18next)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: locale,
      // saveMissing: true, // should be used to send the missing translations
      debug: false,
      keySeparator: false,
      detection: {
        order: ["querystring", "cookie", "navigator"],
        lookupCookie: "lang",
        lookupQuerystring: "lang",
      },
      react: {
        useSuspense: true
      },
      interpolation: {
        escapeValue: false,
        prefix: "{",
        suffix: "}"
      }
    });
};

export { loadI18nConfig };
