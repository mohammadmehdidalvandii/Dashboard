import { FaEdit, FaEye, FaSearch } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import './CustomersList.css'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import {apiRequest} from '../../../../services/axios/config'
import useCustomerStore from '../../../../zustand/useCustomerStore';


function CustomersList() {
    const {t} =useTranslation();
    const {deleteCustomer} = useCustomerStore()
    const [customers , setCustomers]= useState();


    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await apiRequest.get('/customers');
            if(res.status === 200){
                setCustomers(res.data.data)
            }
        };
        fetchData()
    },[]);


    const handlerDeleteCustomer = (customerID)=>{
        deleteCustomer(customerID)
    }

  return (
    <section className="customersList box">
            <div className="customersList_management">
                <h2 className="title_header">{t("Customer List")}</h2>
                <div className="customerList_search">
                    <input type="text" className="form_input"  placeholder={t("Search Customers")}/>
                    <button className="btn"><FaSearch/></button>
              </div> 
           </div>
           <table>
                <thead>
                    <tr>
                        <th>{t("Order ID")}</th>
                        <th>{t("Name")}</th>
                        <th>{t("Email")}</th>
                        <th>{t("Membership")}</th>
                        <th>{t("Action")}</th>
                    </tr>
                </thead>
                <tbody>
                    {customers?.length > 0 ? (
                        customers.map((customer)=>(
                            <tr key={customer._id}>
                            <td>#{customer?._id}</td>
                            <td>{customer?.name}</td>
                            <td>{customer?.email}</td>
                            <td>{customer?.membership}</td>
                            <td>
                                <div className="btn_action">
                                   <NavLink to={`/CustomerDetails/${customer._id}`} className='link btn_save '><FaEye/></NavLink>
                                    <NavLink to={`/EditCustomer/${customer._id}`} className="link btn_setting"><FaEdit/></NavLink>
                                    <button className="btn_delete" onClick={()=>handlerDeleteCustomer(customer._id)}><MdDelete/></button>
                                </div>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <span>The Customer is not available</span>
                    )}
                   
                </tbody>
           </table>
    </section>
  )
}

export default CustomersList