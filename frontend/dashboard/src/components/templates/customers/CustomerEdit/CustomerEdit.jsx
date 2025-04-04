import './CustomerEdit.css';
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function CustomerEdit() {
        const {t} =useTranslation();
  return (
    <section className="customerEdit box">
        <div>
            <NavLink to='/Customers' className='btn link btn_back'>{t("Bact To Customers")}</NavLink>
            <h2 className="title_header">{t("Edit Customer")}</h2>
            <form action="#" className="customerEdit_form">
                <div className="customerEdit_wrapper">
                    <div className="form_group">
                        <label>{t("First Name")}</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="form_group">
                        <label>{t("Last Name")}</label>
                        <input type="text" className="form_input" />
                    </div>
                </div>
                <div className="form_group">
                        <label>{t("Phone")}</label>
                        <input type="text" className="form_input" />
                    </div>
                 <div className="form_group">
                        <label>{t("Address")}</label>
                        <textarea rows={4} className='form_input'></textarea>
                    </div>
                    <div className="form_group">
                         <label>{t("Membership")}</label>
                        <select className='form_input'>
                            <option value="">{t("Bronze")}</option>
                            <option value="">{t("Silver")}</option>
                            <option value="">{t("Gold")}</option>
                            <option value="">{t("PLatinum")}</option>
                        </select>
                    </div>
                    <div className="form_group">
                        <label>Note</label>
                        <textarea rows={4} className='form_input'></textarea>
                    </div>
                    <button className="btn">{t("Save Change")}</button>
            </form>
        </div>
    </section>
  )
}

export default CustomerEdit