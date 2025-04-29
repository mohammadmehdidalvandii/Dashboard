import './SecurityProfile.css'
import {useTranslation} from 'react-i18next'
import showAlert from '../../../../utils/showAlert'

function SecurityProfile() {
    const {t} = useTranslation();
    const handlerChangePassword = (e)=>{
        e.preventDefault()
        showAlert("This feature is not enabled","warning","ok")
    }
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
                <button className="btn" onClick={handlerChangePassword}>{t("Update Password")}</button>
            </form>
        </div>
    </section>
  )
}

export default SecurityProfile