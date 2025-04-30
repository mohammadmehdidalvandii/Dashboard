import './UpdateInventory.css';
import {NavLink, useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import useInventoryStore from '../../../../zustand/useInventoryStore';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiRequest } from '../../../../services/axios/config';

function UpdateInventory() {
    const {t} = useTranslation();
    const {updateInventory} = useInventoryStore();
    const [inventory , setInventory ] = useState();
    const [productID , setProductID] = useState()
    const [category , setCategory] = useState();
    const [quantity, setQuantity] = useState();
    const [status , setStatus] = useState();

    const {id} =useParams();

    console.log("updata=>", id , productID ,category ,quantity ,status)

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await apiRequest.get(`/inventory/details-inventory/${id}`);
            if(res.status === 200){
                setInventory(res.data.data);
                setProductID(res.data.data.productID._id);
                setCategory(res.data.data.category);
                setQuantity(res.data.data.quantity);
                setStatus(res.data.data.status)
            }
        };
        fetchData();
    },[]);

    const handlerUpdateInventory = (e)=>{
        e.preventDefault();
        updateInventory(id , productID ,category , quantity , status )
    }

  return (
    <section className="inventoryUpdate box">
        <div>
            <NavLink to='/Inventory' className="btn link btn_back">{t("Back to Inventory")}</NavLink>
            <h2 className="title_header">{t("Update Stock")}</h2>
            <form action="#" className="inventoryUpdate_form">
                <div className="form_group">
                    <label>{t("Product Name")}</label>
                    <input type="text" className="form_input" placeholder={inventory?.productID?.name} disabled/>
                </div>
                <div className="form_group">
                    <label>{t("Category")}</label>
                    <select defaultValue={category}  className='form_input '
                    onChange={(event)=>setCategory(event.target.value)}
                    >
                        <option value="1">Select Category</option>
                        <option value="Electronics">{t("Electronics")}</option>
                        <option value="Clothing">{t("Clothing")}</option>
                        <option value="Books">{t("Books")}</option>
                    </select>
                </div>
                <div className="form_group">
                    <label>{t("Quantity")}</label>
                    <input type="text" className="form_input"
                    value={quantity}
                    onChange={(event)=>setQuantity(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label>{t("Status")}</label>
                    <input type="text" className="form_input" placeholder=''
                        value={status}
                        onChange={(event)=>setStatus(event.target.value)}
                    />
                </div>
                <button className="btn" onClick={handlerUpdateInventory}>{t("Update Stock")}</button>
            </form>
        </div>
    </section>
  )
}

export default UpdateInventory