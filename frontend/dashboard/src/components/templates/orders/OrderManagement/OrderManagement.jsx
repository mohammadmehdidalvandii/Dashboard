import { FaDownload } from 'react-icons/fa';
import './OrderManagement.css';
import { useTranslation } from 'react-i18next';

function OrderManagement() {
    const {t}= useTranslation();
  return (
    <section className="orders box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Orders Management")}</h2>
                    <p>{t("View and manage orders")}</p>
                </div>
                <button className="btn">
                <span className="icon">
                    <FaDownload/>
                </span>
                <span className="text">{t("Export Orders")}</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default OrderManagement