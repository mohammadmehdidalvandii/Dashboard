import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';
import {IoSettings} from 'react-icons/io5' 
import './OrderList.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


function OrderList() {
    const { t } = useTranslation();

    const [processModel , setProcessModel] = useState(false);

    const showModelProcess = ()=>{
        setProcessModel(true);
    }

    const removeModelProcess =()=>{
        setProcessModel(false);
    }

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
                            <td><span className="status-badge status-pending ">Processing</span></td>
                            <td>
                                <div className="btn_action">
                                <NavLink to='/OrdersView' className='link btn_save'>
                                    <FaEye/>
                                </NavLink>
                                <button className='btn_setting'
                                onClick={showModelProcess}
                                >
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
                {processModel &&(
                <div className={processModel ? "bg_model show" : "'bg_model"}>
                    <div className="processOrder model">
                        <h5 className="title_header">{t("Process Order")}</h5>
                        <form action="" className="processOrder_form">
                            <div className="form_group">
                                <label className='form_label'>{t("Update Status")}</label>
                                <select className='form_input'>
                                    <option value="">{t("Select Status")}</option>
                                    <option value="processing">{t("Processing")}</option>
                                    <option value="shipped">{t("Shipped")}</option>
                                    <option value="delivered">{t("Delivered")}</option>
                                    <option value="completed">{t("Completed")}</option>
                                </select>
                            </div>
                            <div className="form_group">
                                <label className="form_label">{t("Tracking Number")}</label>
                                <input type="text" className="form_input" />
                            </div>
                            <div className="btn_action">
                                <button className="btn_cancel"
                                onClick={removeModelProcess}
                                >{t("Cancel")}</button>
                                <button className="btn_save">{t("Update Order")}</button>
                            </div>
                        </form>
                    </div>
                </div>
                )}
            </div>
    </section>
  )
}

export default OrderList