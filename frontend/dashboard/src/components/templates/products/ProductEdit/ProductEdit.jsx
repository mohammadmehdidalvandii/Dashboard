import './ProductEdit.css'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'

function ProductEdit() {
    const {t} = useTranslation()
  return (
    <section className="productEdit box">
        <div>
            <NavLink to='/Products' className='btn link btn_back'>Back to Products</NavLink>
            <h2 className="title_header">{t("Edit Product")}</h2>
            <form action="#" className="productEdit_form">
            <div className="form_group">
                    <label >{t("Product Name")}</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label>{t("Category")}</label>
                    <select className='form_input'>
                        <option value="">{t("Select Category")}</option>
                        <option value="">{t("Electronics")}</option>
                        <option value="">{t("Clothing")}</option>
                        <option value="">{t("Books")}</option>
                    </select>
                </div>
                <div className="form_group">
                    <label>{t("Price")}</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label >{t("Stock")}</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label>{t("Description")}</label>
                    <input type="text" className="form_input" />
                </div>
                <div className="form_group">
                    <label >{t("Image")}</label>
                    <input type="file"  className='form_input'/>
                </div>
                <button className="btn">{t("Save Product")}</button>
            </form>
        </div>
    </section>
  )
}

export default ProductEdit