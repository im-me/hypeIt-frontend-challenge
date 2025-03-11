import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonDe from './locales/de/common.json';
import festivalsDe from './locales/de/festivals.json';
import commonEn from './locales/en/common.json';
import festivalsEn from './locales/en/festivals.json';

const resources = {
  de: {
    common: commonDe,
    festivals: festivalsDe,
  },
  en: {
    common: commonEn,
    festivals: festivalsEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  ns: ['common', 'festivals'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
