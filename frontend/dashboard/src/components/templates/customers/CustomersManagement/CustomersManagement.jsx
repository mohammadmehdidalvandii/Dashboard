import { FaPlus } from 'react-icons/fa';
import './CustomersManagement.css';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function CustomersManagement() {
    const {t} = useTranslation();
  return (
   <section className="customersManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Customers Management")}</h2>
                    <p>{t("View and manage customers")}</p>
                </div>
                <NavLink to='/AddCustomer' className="btn link">
                                <span className="icon">
                                    <FaPlus/>
                                </span>
                                <span className="text">{t("Add New Customer")}</span>
                                </NavLink>
            </div>
        </div>
   </section>
  )
}

export default CustomersManagement