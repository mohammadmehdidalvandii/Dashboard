import { useEffect } from 'react';
import './BtnChangeLang.css'
import { useTranslation } from 'react-i18next';


function BtnChangeLang() {
    const {t, i18n} = useTranslation()
    useEffect(() => {
        document.documentElement.classList.toggle('rtl', i18n.language === 'fa');
    }, []);

    // const toggleLanguage = () => {
    //     const newLang = i18n.language === 'en' ? 'fa' : 'en';
    //     i18n.changeLanguage(newLang);
    //     document.documentElement.lang = newLang;
    //     document.documentElement.classList.toggle('rtl', newLang === 'fa');
    // }
   
    const handleLanguageChange = (event) => {
        const newLang = event.target.value;
        i18n.changeLanguage(newLang);
        document.dir = newLang === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
        document.documentElement.classList.toggle('rtl', newLang === 'fa');
    }

  return (
        <select name="" id="" className='btn btn_change'
        style={{outline:"none"}}
        value={i18n.language}
        onChange={handleLanguageChange}
        >
            <option value="en">{t('English')}</option>
            <option value="fa">{t('فارسی')}</option>
        </select>
  )
}

export default BtnChangeLang