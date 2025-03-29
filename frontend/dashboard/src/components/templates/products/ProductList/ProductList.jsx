import { FaSearch } from 'react-icons/fa';
import './ProductList.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


function ProductList() {
    const { t } = useTranslation();
    const [editModel , setEditModel] = useState(false);
    const [modelDelete , SetModelDelete] = useState(false);

    const handlerShowEdit = ()=>{
        setEditModel(true);
    }
    const handlerExitEditModel = ()=>{
        setEditModel(false)
    }
    const handlerShowModelDelete = ()=>{
        SetModelDelete(true)
    }
    const handlerShowExit =()=>{
        SetModelDelete(false)
    }




  return (
    <section className="productList box">
        <div className='productList_management'>
            <h2 className="title_header">{t("All Products")}</h2>
            <div className="product_list_search">
                <input type="text" className="form_input"  placeholder={t("Search Products")}/>
                <button className="btn">
                    <FaSearch/>
                </button>
            </div>
        </div>
            <table>
                <thead>
                    <tr>
                        <th>{t("Image")}</th>
                        <th>{t("Product Name")}</th>
                        <th>{t("Category")}</th>
                        <th>{t("Price")}</th>
                        <th>{t("Stock")}</th>
                        <th>{t("Status")}</th>
                        <th>{t("Actions")}</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                            <td>
                                <img src="path/to/product1.jpg" alt="Product 1" />
                            </td>
                            <td>iPhone 13 Pro</td>
                            <td>Electronics</td>
                            <td>$999</td>
                            <td>50</td>
                            <td><span className="status-badge in-stock">{t("In Stock")}</span></td>
                            <td>
                                <div className="btn_action">
                                <button className="btn_edit" onClick={handlerShowEdit} >
                                       {t("Edit")}
                                    </button>
                                <button className="btn_delete" onClick={handlerShowModelDelete} >
                                   {t("Delete")}
                                </button>
                                </div>
                            </td>
                        </tr>
                </tbody>
            </table>
            
            {editModel && (
            <div className={editModel ? "bg_model show" :"bg_model"}>
                <div className="model product_edit">
                    <h5 className="title_header">{t("Edit Product")}</h5>

                    <form action="#" className="edit_form">
                     <div className="form_group">
                              <label className='form_label' style={{display:"block"}}>{t("Product Name")}</label>
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
                              <label className='form_label'>{t("Current Image")}</label>
                              <input type="file" className='form_input' accept='image/*'/>
                          </div>
                          <div className="btn_action">
                              <button className="btn_save">{t("Save Product")}</button>
                              <button className="btn_cancel" onClick={handlerExitEditModel}>{t("Cancel")}</button>
                          </div>
                        
                    </form>

                </div>
            </div>
            )}
            {modelDelete && (
            <div className={modelDelete ? "bg_model show":"bg_model"}>
                 <div className="model delete_model">
        <h6 className="title_header">{t("Delete Product")}</h6>
        <p>{t("Are you sure you want to delete this product? This action cannot be undone.")}</p>
        <div className="btn_action">
            <button className="btn_delete" >{t("Delete")}</button>
            <button className="btn_cancel" onClick={handlerShowExit}>{t("Cancel")}</button>
        </div>
    </div>
            </div>
            )}
    </section>
  )
}

export default ProductList