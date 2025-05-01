import './DetailsCustomer.css';
import {NavLink, useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import {apiRequest} from '../../../../services/axios/config'

function DetailsCustomer() {
  const {t} = useTranslation();
  const [customer , setCustomer] = useState();
  const {id} = useParams();

  console.log("customer =>" ,customer)

  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await apiRequest.get(`/customers/details-customer/${id}`);
      if(res.status === 200){
        setCustomer( res.data.data)
      }
    };
    fetchData()
  },[])

  console.log("id=>" , id)
  return (
    <section className="detailsCustomer box">
        <div>
          <NavLink to='/Customers' className='btn link btn_back'>{t("Back To Customers")}</NavLink>
          <h2 className="title_header">{t("Customer Details")}</h2>
          <div className="items">
            <ul className="item">
              <li>
                <h6>{t("Personal Information")}</h6>
              </li>
              <li>
                <span>{t("Customer ID")}:</span>
                <span>{customer?._id}</span>
              </li>
              <li>
                <span>{t("Name")}:</span>
                <span>{customer?.name}</span>
              </li>
              <li>
                <span>{t("Email")}:</span>
                <span>{customer?.email}</span>
              </li>
              <li>
                <span>{t("Phone")}:</span>
                <span>{customer?.phone}</span>
              </li>
              <li>
                <span>{t("Membership")}:</span>
                <span>{customer?.membership}</span>
              </li>
            </ul>
            <ul className="item">
              <li>
                <h6>{t("Order Statistics")}</h6>
              </li>
              <li>
                <span>{t("Total Orders")}:</span>
                <span>15</span>
              </li>
              <li>
                <span>{t("Total Spent")}: </span>
                <span>$2499.9</span>
              </li>
              <li>
                <span>{t("Average Order Value")}:</span>
                <span>166.67</span>
              </li>
              <li>
                <span>{t("Last Order")}:</span>
                <span>4/4/2025</span>
              </li>
            </ul>
          </div>
          <h2 className="title_header">{t("Recent Orders")}</h2>
          <table>
              <thead>
                <tr>
                  <th>{t("Order ID")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Items")}</th>
                  <th>{t("Total")}</th>
                  <th>{t("Status")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#Coo2</td>
                  <td>4/4/2025</td>
                  <td>Product A</td>
                  <td>$499.9</td>
                  <td>Completed</td>
                </tr>
              </tbody>
          </table>
        </div>
    </section>
  )
}

export default DetailsCustomer