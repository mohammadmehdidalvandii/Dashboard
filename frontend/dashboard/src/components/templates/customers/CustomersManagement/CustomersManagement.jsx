import { FaPlus } from 'react-icons/fa';
import './CustomersManagement.css';
import { useTranslation } from 'react-i18next';

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
                <button className="btn">
                                <span className="icon">
                                    <FaPlus/>
                                </span>
                                <span className="text">{t("Add New Customer")}</span>
                                </button>
            </div>
        </div>
   </section>
  )
}

export default CustomersManagement