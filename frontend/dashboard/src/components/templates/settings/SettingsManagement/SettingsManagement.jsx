import { FaUser } from 'react-icons/fa'
import './SettingsManagement.css'
import {NavLink} from 'react-router-dom'
import  {useTranslation} from 'react-i18next'

function SettingsManagement() {
    const {t} = useTranslation()
  return (
    <section className="settingManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Settings")}</h2>
                    <p>{t("Manage your preferences")}</p>
                </div>
            <NavLink to='/profile' className="btn link">
                <span className="icon"><FaUser/></span>
                <span className="text">{t("Go To Profile")}</span>
            </NavLink>
            </div>
        </div>
    </section>
  )
}

export default SettingsManagement