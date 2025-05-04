import './View.css';
import {NavLink, useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { apiRequest } from '../../../../services/axios/config';

function View() {
  const {t} = useTranslation()
  const [order , setOrder] = useState()
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await apiRequest.get(`/orders/${id}`)
      if(res.status === 200){
        setOrder(res.data.data)
      }
    };
    fetchData()
  },[])

  console.log("order id" , id)
  
  return (
    <section className="view box">
        <div>
            <NavLink to='/Orders' className="btn link btn_back">{t("Back to Orders")}</NavLink>
            <h5 className="title_header">{t("Order Details")}</h5>
            <div className="items">
                <div className="item">
                    <h4>{t("Order Information")}</h4>
                    <p>
                      <span>{t("Order ID")}:</span>
                      <span>#{order?._id}</span>
                    </p>
                    <p>
                      <span>{t("Date")} :</span>
                      <span>{order?.createdAt}</span>
                    </p>
                    <p>
                      <span>{t("Status")} :</span>
                      <span>{order?.status}</span>
                    </p>
                    <p>
                      <span>{t("Total")} :</span>
                      <span>$999</span>
                    </p>
                </div>
                <div className="item">
                    <h4>Customer Information</h4>
                    <p>
                      <span>Name :</span>
                      <span>{order?.customerID?.firstName}-{order?.customerID?.lastName}</span>
                    </p>
                    <p>
                      <span>Email :</span>
                      <span>{order?.customerID?.email}</span>
                    </p>
                    <p>
                      <span>Phone :</span>
                      <span>{order?.customerID?.phone}</span>
                    </p>
                </div>
            <div className="address">
                <h6>{t("Shipping Address")}</h6>
                <p>{order?.shippingAddress[0]?.country}, {order?.shippingAddress[0]?.city}, {order?.shippingAddress[0]?.street}, {order?.shippingAddress[0]?.zipCode}</p>
            </div>
            </div>
        </div>
        <div>
          <h5 className="title_header title_order">{t("Orders Items")}</h5>
        <table>
          <thead>
            <tr>
              <th>{t("Products")}</th>
              <th>{t("Quantity")}</th>
              <th>{t("Price")}</th>
              <th>{t("Total")}</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{order?.products[0]?.productID?.name}</td>
                <td>1</td>
                <td>$9</td>
                <td>$9</td>
              </tr>
          </tbody>
        </table>
        </div>
    </section>
  )
}

export default View