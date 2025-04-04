import './AddNewCustomer.css'
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function AddNewCustomer() {
    const {t} =useTranslation();
  return (
    <section className="addCustomer box">
        <div>
            <NavLink to='/Customers' className="btn link btn_back">{t("Back To Customers")}</NavLink>
            <h2 className='title_header'>{t("Add New Customer")}</h2>
            <form action="#" className="addCustomer_form">
                <div className="form_wrapper">
                    <div className="from_group">
                        <label>{t("First Name")}</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="from_group">
                        <label>{t("Last Name")}</label>
                        <input type="text" className="form_input" />
                    </div>
                </div>
                    <div className="from_group">
                        <label>{t("Email")}</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="from_group">
                        <label>{t("Phone")}</label>
                        <input type="text" className="form_input" />
                    </div>
                    <div className="from_group">
                        <label>{t("Address")}</label>
                        <textarea type="text" className="form_input"  rows={4}/>
                    </div>
                    <div className="form_group">
                        <select className='form_input'>
                            <option value="">{t("Bronze")}</option>
                            <option value="">{t("Silver")}</option>
                            <option value="">{t("Gold")}</option>
                            <option value="">{t("PLatinum")}</option>
                        </select>
                    </div>
                    <div className="from_group">
                        <label>{t("Note")}</label>
                        <textarea type="text" className="form_input"  rows={4}/>
                    </div>
                    <div className="btn_action">
                        <button className="btn">{t("Save Customer")}</button>
                    </div>
            </form>
        </div>
    </section>
  )
}

export default AddNewCustomer