import { FaSearch } from 'react-icons/fa';
import './ProductList.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'


function ProductList() {
    const { t } = useTranslation();

    const [modelDelete , SetModelDelete] = useState(false);

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
                                <NavLink to='/EditProduct' className="btn_edit link"  >
                                       {t("Edit")}
                                    </NavLink>
                                <button className="btn_delete" onClick={handlerShowModelDelete} >
                                   {t("Delete")}
                                </button>
                                </div>
                            </td>
                        </tr>
                </tbody>
            </table>
    
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