import './InventoryStock.css';
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

function InventoryStock() {
    const {t} = useTranslation()
  return (
    <section className="inventoryStock box">
        <div>
            <NavLink to='/Inventory' className='btn link btn_back'>{t("Back to Inventory")}</NavLink>
            <h2 className='title_header'>{t("Add New Stock")}</h2>
            <form action="#" className="inventoryStock_form">
                <div className="form_group">
                    <label>{t("Product Name")}</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label>SKU</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label>{t("Category")}</label>
                    <select className='form_input'>
                        <option value="">Select Category</option>
                        <option value="">abc</option>
                        <option value="">dsc</option>
                        <option value="">asd</option>
                        <option value="">ase</option>
                    </select>
                </div>
                <div className="form_group">
                    <label>{t("Quantity")}</label>
                    <input type="text" className="form_input" />
                </div>
                <button className="btn">{t("Save")}</button>
            </form>
        </div>
    </section>
  )
}

export default InventoryStock