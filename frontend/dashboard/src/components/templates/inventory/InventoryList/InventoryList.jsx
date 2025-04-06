import { FaSearch } from 'react-icons/fa'
import './InventoryList.css'
import {NavLink } from 'react-router-dom'
import {useTranslation} from 'react-i18next'


function InventoryList() {
    const {t} = useTranslation()
  return (
   <section className="inventoryList box">
        <div className="inventoryList_management">
            <h2 className="title_header">{t("Stock Levels")}</h2>
            <div className="inventoryList_search">
                <input type="text" className="form_input"  placeholder={t("Search Inventory")}/>
                <button className="btn"><FaSearch/></button>
            </div>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>{t("Product")}</th>
                    <th>{t("Category")}</th>
                    <th>{t("In Stock")}</th>
                    <th>{t("Status")}</th>
                    <th>{t("Actions")}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SKU001</td>
                    <td>iphone 13 pro</td>
                    <td>Electronics</td>
                    <td>50</td>
                    <td className='inventory_Status status-completed'>In Stock</td>
                    <td>
                        <div className="btn_action">
                            <NavLink to='/InventoryUpdate' className="btn_save link">{t("Update")}</NavLink>
                            <button className="btn_delete">{t("Remove")}</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
   </section>
  )
}

export default InventoryList