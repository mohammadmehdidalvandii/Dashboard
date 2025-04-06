import './UpdateInventory.css';
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

function UpdateInventory() {
    const {t} = useTranslation()
  return (
    <section className="inventoryUpdate box">
        <div>
            <NavLink to='/Inventory' className="btn link btn_back">{t("Back to Inventory")}</NavLink>
            <h2 className="title_header">{t("Update Stock")}</h2>
            <form action="#" className="inventoryUpdate_form">
                <div className="form_group">
                    <label>{t("Product Name")}</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>SKU</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>{t("Current Stock")}</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>{t("Add/Remove Stock")}</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>{t("New Stock Level")}</label>
                    <input type="text" className="form_input" placeholder=''/>
                </div>
                <div className="form_group">
                    <label>{t("Note")}</label>
                    <textarea type="text" rows={4} className="form_input" placeholder=''/>
                </div>
                <button className="btn">{t("Update Stock")}</button>
            </form>
        </div>
    </section>
  )
}

export default UpdateInventory