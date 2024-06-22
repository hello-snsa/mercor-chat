import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEN from './languages/en.json'
import translationHI from './languages/hi.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    lng: 'en',
    resources: {
      en: {
        translations: translationEN,
      },
      hindi: {
        translations: translationHI,
      },
    },
    fallbackLng: 'en',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys
    returnObjects: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      useSuspense: true,
    },
  })

export default i18n
