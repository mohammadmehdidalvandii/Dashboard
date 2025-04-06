import './NotificationSettings.css';
import {useTranslation} from 'react-i18next'

function NotificationSettings() {
  const {t} =useTranslation()
  return (
    <section className="notificationSettings box">
        <div>
            <h2 className="title_header">{t("Notification Settings")}</h2>
            <h5>{t("Email Notifications")}</h5>
            <p>{t("Receive notifications via email")}</p>
            <form action="#">
            <div className="form_group">
                <label >{t("Email")}</label>
                <input type="text"className='form_input' />
            </div>
            <button className="btn">{t("Save Email")}</button>
            </form>
        </div>
    </section>
  )
}

export default NotificationSettings