import './CustomerEdit.css';
import {NavLink, useParams} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import useCustomerStore from '../../../../zustand/useCustomerStore';
import { apiRequest } from '../../../../services/axios/config';

function CustomerEdit() {
        const {t} =useTranslation();
        const {editCustomer} = useCustomerStore()
        const [customer , setCustomer]= useState()
           const [firstName , setFirstName] = useState('')
            const [lastName , setLastName] = useState('')
            const [email , setEmail] = useState('')
            const [phone , setPhone] = useState('')
            const [street , SetStreet] = useState('')
            const [state , setState] = useState('')
            const [city , setCity] = useState('')
            const [zipCode , setZipCode] = useState('')
            const [country , setCountry] = useState('')
            const [membership , setMembership] = useState('')
            const [note , setNote] = useState('') 

            const {id} = useParams();

            useEffect(()=>{
                const fetchData = async ()=>{
                    const res = await apiRequest.get(`/customers/details-customer/${id}`);
                    if(res.status === 200){
                        setCustomer(res.data.data)
                        setFirstName(res.data.data?.firstName)
                        setLastName(res.data.data.lastName)
                        setEmail(res.data.data.email)
                        setPhone(res.data.data.phone)
                        SetStreet(res.data.data.address.street)
                        setState(res.data.data.address.state)
                        setCity(res.data.data.address.city)
                        setZipCode(res.data.data.address.zipCode)
                        setCountry(res.data.data.address.country)
                        setMembership(res.data.data.membership)
                        setNote(res.data.data.note)
                    }
                };
                fetchData()
            },[]);

            const handlerEditCustomer = (e)=>{
                e.preventDefault();
                editCustomer(id , firstName , lastName , email , phone , street , state , city , zipCode , country , membership , note)
            }

  return (
    <section className="customerEdit box">
        <div>
            <NavLink to='/Customers' className='btn link btn_back'>{t("Bact To Customers")}</NavLink>
            <h2 className="title_header">{t("Edit Customer")}</h2>
            <form action="#" className="customerEdit_form">
                <div className="customerEdit_wrapper">
                    <div className="form_group">
                        <label>{t("First Name")}</label>
                        <input type="text" className="form_input" 
                        value={firstName}
                        onChange={(event)=>setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="form_group">
                        <label>{t("Last Name")}</label>
                        <input type="text" className="form_input" 
                        value={lastName}
                        onChange={(event)=>setLastName(event.target.value)}
                        />
                    </div>
                </div>
                <div className="form_group">
                        <label>{t("Phone")}</label>
                        <input type="text" className="form_input" 
                        value={phone}
                        onChange={(event)=>setPhone(event.target.value)}
                        />
                    </div>
                     <div className="form_wrapper">
                    <div className="from_group">
                        <label>{t("Street")}</label>
                        <input type="text" className="form_input" 
                        value={street}
                        onChange={(event)=>SetStreet(event.target.value)}
                        />
                    </div>
                    <div className="from_group">
                        <label>{t("State")}</label>
                        <input type="text" className="form_input" 
                        value={state}
                        onChange={(event)=>setState(event.target.value)}
                        />
                    </div>
                    <div className="from_group">
                        <label>{t("City")}</label>
                        <input type="text" className="form_input" 
                        value={city}
                        onChange={(event)=>setCity(event.target.value)}
                        />
                    </div>
                </div>
                    <div className="form_wrapper">
                    <div className="from_group">
                        <label>{t("ZipCode")}</label>
                        <input type="text" className="form_input" 
                        value={zipCode}
                        onChange={(event)=>setZipCode(event.target.value)}
                        />
                    </div>
                    <div className="from_group">
                        <label>{t("Country")}</label>
                        <input type="text" className="form_input" 
                        value={country}
                        onChange={(event)=>setCountry(event.target.value)}
                        />
                    </div>
                </div>
                    <div className="form_group">
                         <label>{t("Membership")}</label>
                        <select defaultValue={membership} className='form_input'
                        onChange={(event)=>setMembership(event.target.value)}
                        >
                            <option value="Bronze">{t("Bronze")}</option>
                            <option value="Silver">{t("Silver")}</option>
                            <option value="Gold">{t("Gold")}</option>
                            <option value="Platinum">{t("Platinum")}</option>
                        </select>
                    </div>
                    <div className="form_group">
                        <label>Note</label>
                        <textarea rows={4} className='form_input'
                        value={note}
                        onChange={(event)=>setNote(event.target.value)}
                        ></textarea>
                    </div>
                    <button className="btn" onClick={handlerEditCustomer}>{t("Save Change")}</button>
            </form>
        </div>
    </section>
  )
}

export default CustomerEdit