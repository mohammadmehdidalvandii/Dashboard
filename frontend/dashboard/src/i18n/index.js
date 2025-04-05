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
import processOrderEN from './en/processOrderEN.json'
import processOrderFA from './fa/processOrderFA.json'
import customersManageEN from './en/customersManageEN.json'
import customersManageFA from './fa/customersManageFA.json'
import customerChartEN from './en/customerChartEN.json'
import customerChartFA from './fa/customerChartFA.json'
import customerListEN from './en/customerListEN.json'
import customerListFA from './fa/customerListFA.json'
import commentEN from './en/commentEN.json'
import commentFA from './fa/commentFA.json'
import InventoryEN from './en/inventoryEN.json'
import InventoryFA from './fa/inventoryFA.json'

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
          ...processOrderEN,
          ...customersManageEN,
          ...customerChartEN,
          ...customerListEN,
          ...commentEN,
          ...InventoryEN,
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
          ...processOrderFA,
          ...customersManageFA,
          ...customerChartFA,
          ...customerListFA,
          ...commentFA,
          ...InventoryFA
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