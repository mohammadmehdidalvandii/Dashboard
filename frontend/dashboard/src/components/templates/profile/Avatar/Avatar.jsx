import './Avatar.css';
import {useTranslation} from 'react-i18next'

function Avatar() {
    const {t} = useTranslation()
  return (
    <section className="avatar box">
        <div>
            <img src="" alt="" />
            <div>
                <h5>John Doe</h5>
                <p>john.doe@example.com</p>
                <span>Super Admin</span>
            </div>
        </div>
        <form action="#" className="avatar_form">
            <div className="avatar_form_wrapper">
                <div className="form_group">
                    <label htmlFor="">{t("First Name")}</label>
                        <input type="text" className='form_input'/>
                </div>
                <div className="form_group">
                    <label htmlFor="">{t("Last Name")}</label>
                        <input type="text" className='form_input'/>
                </div>
            </div>
            <div className="avatar_form_wrapper">
                <div className="form_group">
                    <label htmlFor="">{t("Email")}</label>
                        <input type="text" className='form_input'/>
                </div>
                <div className="form_group">
                    <label htmlFor="">{t("Phone")}</label>
                        <input type="text" className='form_input'/>
                </div>
            </div>
            <div className="form_group">
                    <label htmlFor="">{t("Bio")}</label>
                        <textarea rows={4} type="text" className='form_input' />
                </div>
                <button className="btn">{t("Save Change")}</button>
        </form>
    </section>
  )
}

export default Avatar