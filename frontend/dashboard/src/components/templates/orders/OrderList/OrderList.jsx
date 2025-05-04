import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';
import {IoSettings} from 'react-icons/io5' 
import './OrderList.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { apiRequest } from '../../../../services/axios/config';
import showAlert from '../../../../utils/showAlert';


function OrderList() {
    const { t } = useTranslation();
    const [processModel , setProcessModel] = useState(false);
    const [orders , setOrders] = useState();
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await apiRequest.get('/orders');
            if(res.status === 200){
                setOrders(res.data.data);
            }
        };
        fetchData();
    },[])

    const handlerDeleteOrder = (e)=>{
        e.preventDefault();
        showAlert("This feature is not enabled","warning","ok")
    }
    const handlerUpdateOrder = (e)=>{
        e.preventDefault();
        showAlert("This feature is not enabled","warning","ok")
    }
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
                {/* <div className="orderList_search">
                    <input type="text" className="form_input"  placeholder={t("Search Orders...")}/>
                    <button className='btn'><FaSearch/></button>
                </div> */}
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
                        {orders?.length >0 ? (
                            orders.map((order)=>(
                                <tr key={order._id}>
                                <td>#{order._id}</td>
                                <td>{order.customerID.firstName}-{order.customerID.lastName}</td>
                                <td>{order.products[0].productID.name}</td>
                                <td>$999.99</td>
                                <td><span className="status-badge status-pending ">{order.status}</span></td>
                                <td>
                                    <div className="btn_action">
                                    <NavLink to={`/OrdersView/${order._id}`} className='link btn_save'>
                                        <FaEye/>
                                    </NavLink>
                                    <button className='btn_setting'
                                    onClick={showModelProcess}
                                    >
                                        <IoSettings/>
                                    </button>
                                    <button className='btn_delete'
                                    onClick={handlerDeleteOrder}
                                    >
                                        <FaTimes/>
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            ))

                        ) :(
                                    <span className='error_table'>The product is not available</span>
                        )}
                     
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
                                <button className="btn_save" 
                                onClick={handlerUpdateOrder}
                                >{t("Update Order")}</button>
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