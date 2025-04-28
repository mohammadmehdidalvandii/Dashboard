import './AddNewCustomer.css'
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import useCustomerStore from '../../../../zustand/useCustomerStore';

function AddNewCustomer() {
    const {t} =useTranslation();
    const {addCustomer} = useCustomerStore()
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
  
    const handlerAddCustomer = (e)=>{
        e.preventDefault()
        addCustomer(  firstName,
            lastName,
            email,
            phone,
            street,
            state,
            city,
            zipCode,
            country,
            membership,
            note,)
    }

  return (
    <section className="addCustomer box">
        <div>
            <NavLink to='/Customers' className="btn link btn_back">{t("Back To Customers")}</NavLink>
            <h2 className='title_header'>{t("Add New Customer")}</h2>
            <form action="#" className="addCustomer_form">
                <div className="form_wrapper">
                    <div className="from_group">
                        <label>{t("First Name")}</label>
                        <input type="text" className="form_input" 
                        value={firstName}
                        onChange={(event)=>setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="from_group">
                        <label>{t("Last Name")}</label>
                        <input type="text" className="form_input" 
                        value={lastName}
                        onChange={(event)=>setLastName(event.target.value)}
                        />
                    </div>
                </div>
                    <div className="from_group">
                        <label>{t("Email")}</label>
                        <input type="text" className="form_input" 
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="from_group">
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
                            <option value="1">{t("select membership")}</option>
                            <option value="Bronze">{t("Bronze")}</option>
                            <option value="Silver">{t("Silver")}</option>
                            <option value="Gold">{t("Gold")}</option>
                            <option value="PLatinum">{t("PLatinum")}</option>
                        </select>
                    </div>
                    <div className="from_group">
                        <label>{t("Note")}</label>
                        <textarea type="text" className="form_input"  rows={4}
                        value={note}
                        onChange={(event)=>setNote(event.target.value)}
                        />
                    </div>
                    <div className="btn_action">
                        <button className="btn" onClick={handlerAddCustomer}>{t("Save Customer")}</button>
                    </div>
            </form>
        </div>
    </section>
  )
}

export default AddNewCustomer