import { FaPlus } from 'react-icons/fa6';
import  './InventoryManagement.css';
import {useTranslation} from 'react-i18next'


function InventoryManagement() {
    const {t}=useTranslation()
  return (
    <section className="inventoryManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>{t("Inventory Management")}</h2>
                    <p>{t("Track and manage inventory")}</p>
                </div>
                <div>
                    <button className="btn">
                        <span className="icon"><FaPlus/></span>
                        <span className="text">{t("Add Stock")}</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InventoryManagement