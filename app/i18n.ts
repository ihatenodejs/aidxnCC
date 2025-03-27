import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': {
        translation: require('../public/locales/en-US.json')
      }
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n