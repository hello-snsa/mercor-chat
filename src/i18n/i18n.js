import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from './languages/en.json'
import translationHI from './languages/hi.json'

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'hi', 'ur'],
    lng: 'en',
    // lng: 'hindi',
    detection: {
      order: ['path', 'cookie', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/internationalization/locales/{{lng}}/translation.json'
    },
    resources: {
      en: {
        translations: translationEN,
      },
      hi: {
        translations: translationHI,
      },
    },
    fallbackLng: 'en',
    debug: false,

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,
    returnObjects: true,

    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },

    react: {
      useSuspense: true,
    },
  })

export default i18n
