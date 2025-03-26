import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import headerEN from './en/headerEN.json';
import headerFA from './fa/headerFA.json';
import sidebarEN from './en/SidebarEN.json';
import sidebarFA from './fa/SidebarFA.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...headerEN,
          ...sidebarEN,
        }
      },
      fa: {
        translation: {
          ...headerFA,
          ...sidebarFA,
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;