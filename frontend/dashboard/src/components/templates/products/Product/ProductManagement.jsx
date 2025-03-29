import { useState } from 'react';
import './ProductManagement.css';
import { FaPlus } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Product() {
    const {t} =useTranslation()
    const [addProduct , setAddProduct] = useState(false);

    const handlerShowModelAddProduct = ()=>{
        setAddProduct(true);
    }

    const handlerExitModelAddProduct = ()=>{
        setAddProduct(false);
    }
  return (
    <section className="product box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Products Management")}</h2>
                    <p>{t("View and manage products")}</p>
                </div>
                <button className='btn' onClick={handlerShowModelAddProduct}>
                    <span className="icon">
                        <FaPlus/>
                    </span>
                    <span className="text">{t("Add Product")}</span>
                </button>
            </div>
            {/* AddProduct Model */}
            {addProduct && (
                  <div className={addProduct ? "bg_model show " : "bg_model"} >
                  <div className="model addProduct_model">
                      <h5 className="title_header">{t("Add New Product")}</h5>
                      <form action="#" className="product_form">
                          <div className="form_group">
                              <label className='form_label'>{t("Product Name")}</label>
                              <input type="text" className='form_input'/>
                          </div>
                          <div className="from_group">
                              <label className='form_label'>{t("Category")}</label>
                              <select className='form_input'>
                                  <option value="">{t("Select Category")}</option>
                                  <option value="">{t("Electronics")}</option>
                                  <option value="">{t("Clothing")}</option>
                                  <option value="">{t("Books")}</option>
                              </select>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>{t("Price")}</label>
                              <input type="text" className='form_input'/>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>{t("Stock")}</label>
                              <input type="text" className='form_input'/>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>{t("Description")}</label>
                              <textarea className="form_input" rows="4"></textarea>
                          </div>
                          <div className="form_group">
                              <label className='form_label'>{t("Product Image")}</label>
                              <input type="file" className='form_input' accept='image/*'/>
                          </div>
                          <div className="btn_action">
                              <button className="btn_save">{t("Save Product")}</button>
                              <button className="btn_cancel" onClick={handlerExitModelAddProduct}>{t("Cancel")}</button>
                          </div>
                      </form>
                  </div>
              </div>
            )}
        </div>
    </section>
  )
}

export default Product