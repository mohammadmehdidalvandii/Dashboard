import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';
import {IoSettings} from 'react-icons/io5' 
import './OrderList.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function OrderList() {
    const { t } = useTranslation();
  return ( 
    <section className="orderList box">
            <div className="orderList_management">
                <h2 className="title_header">{t("Recent Orders")}</h2>
                <div className="orderList_search">
                    <input type="text" className="form_input"  placeholder={t("Search Orders...")}/>
                    <button className='btn'><FaSearch/></button>
                </div>
            </div>
            <div>
            <table>
                    <thead>
                        <tr>
                            <th>{t("Order ID")}</th>
                            <th>{t("Customer")}</th>
                            <th>{t("Products")}</th>
                            <th>{t("Total")}</th>
                            <th>{t("Status")}</th>
                            <th>{t("Actions")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12345</td>
                            <td>John Doe</td>
                            <td>Product A, Product B</td>
                            <td>$999.99</td>
                            <td><span className="status-badge processing">Processing</span></td>
                            <td>
                                <div className="btn_action">
                                <NavLink to='/OrdersView' className='link btn_save'>
                                    <FaEye/>
                                </NavLink>
                                <button className='btn_setting'>
                                    <IoSettings/>
                                </button>
                                <button className='btn_delete'>
                                    <FaTimes/>
                                </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </section>
  )
}

export default OrderList