import { useEffect, useState } from 'react';
import './Orders.css';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../../../../services/axios/config';

function Orders() {
    const {t} = useTranslation();
    const [orders , setOrders] = useState();
    console.log("orders" , orders)
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await apiRequest.get('/orders');
            if(res.status === 200){
                setOrders(res.data.data);
            }
        };
        fetchData();
    },[])
  return (
    <section className="orders box">
        <div className="orders_wrapper">
            <div className="orders_header">
                <h2 className='title_header'>{t("Recent Orders")}</h2>
            </div>
            <table>
                        <thead>
                            <tr>
                                <th>{t("Order ID")}</th>
                                <th>{t("Customer")}</th>
                                <th>{t("Product")}</th>
                                <th>{t("Amount")}</th>
                                <th>{t("Status")}</th>
                            </tr>
                        </thead>
                        <tbody>
                               {orders?.length >0 ? (
                                                        orders.map((order)=>(
                                                            <tr key={order?._id}>
                                                            <td>#{order?._id}</td>
                                                            <td>{order?.customerID?.firstName}-{order?.customerID?.lastName}</td>
                                                            <td>
                                                            {order?.products[0]?.productID?.name}
                                                            </td>
                                                            <td>$999</td>
                                                            <td><span className="status-badge status-pending">{order.status}</span></td>
                                                        </tr>
                                                        ))
                            
                                                    ) :(
                                                                <span className='error_table'>The product is not available</span>
                                                    )}
                        </tbody>
                    </table>
        </div>
    </section>
  )
}

export default Orders