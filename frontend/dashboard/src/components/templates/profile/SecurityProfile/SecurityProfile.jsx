import './SecurityProfile.css'
import {useTranslation} from 'react-i18next'

function SecurityProfile() {
    const {t} = useTranslation()
  return (
    <section className="securityProfile box">
        <div>
            <h2 className="title_header">{t("Security Settings")}</h2>
            <form action="#">
                <div className="form_group">
                    <label htmlFor="">{t("Current Password")}</label>
                    <input type="text" className="form_input" placeholder={t("Enter current password")}/>
                </div>
                <div className="form_group">
                    <label htmlFor="">{t("New Password")}</label>
                    <input type="text" className="form_input" placeholder={t("Enter new password")}/>
                </div>
                <div className="form_group">
                    <label htmlFor="">{t("Confirm New Password")}</label>
                    <input type="text" className="form_input" placeholder={t("Confirm new password")}/>
                </div>
                <button className="btn">{t("Update Password")}</button>
            </form>
        </div>
    </section>
  )
}

export default SecurityProfile