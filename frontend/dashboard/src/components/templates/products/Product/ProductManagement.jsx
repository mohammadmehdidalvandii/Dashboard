import './ProductManagement.css';
import { FaPlus } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'

function Product() {
    const {t} =useTranslation()
  
  return (
    <section className="product box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Products Management")}</h2>
                    <p>{t("View and manage products")}</p>
                </div>
                <NavLink to='/AddProduct' className='btn link'>
                    <span className="icon">
                        <FaPlus/>
                    </span>
                    <span className="text">{t("Add Product")}</span>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Product