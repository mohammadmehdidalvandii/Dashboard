import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import headerEN from './en/headerEN.json';
import headerFA from './fa/headerFA.json';
import sidebarEN from './en/SidebarEN.json';
import sidebarFA from './fa/SidebarFA.json'
import statEN from './en/statEN.json'
import statFa from './fa/statFA.json'
import orderEN from './en/orderEN.json'
import orderFA from './fa/orderFA.json'
import productsFA from './fa/productsFA.json' 
import productsEN from './en/productsEN.json' 
import ordersEN from './en/ordersEN.json'
import ordersFA from './fa/ordersFA.json'
import viewEN from './en/viewEN.json'
import viewFA from './fa/viewFA.json'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...headerEN,
          ...sidebarEN,
          ...statEN,
          ...orderEN,
          ...productsEN,
          ...ordersEN,
          ...viewEN,
        }
      },
      fa: {
        translation: {
          ...headerFA,
          ...sidebarFA,
          ...statFa,
          ...orderFA,
          ...productsFA,
          ...ordersFA,
          ...viewFA,
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