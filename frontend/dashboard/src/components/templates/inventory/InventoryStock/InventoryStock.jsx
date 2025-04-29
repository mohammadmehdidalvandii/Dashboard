import './InventoryStock.css';
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import { useEffect, useState } from 'react';
import { apiRequest } from '../../../../services/axios/config';
import useInventoryStore from '../../../../zustand/useInventoryStore';

function InventoryStock() {
    const {t} = useTranslation();
    const {addInventory} = useInventoryStore()
    const [products, setProducts] = useState();
    const [productID  , setProductID] = useState()
    const [quantity  , setQuantity] = useState()
    const [category  , setCategory] = useState()
    const [status  , setStatus] = useState()

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await apiRequest.get('/product');
            if(res.status === 200){
                setProducts(res.data.data)
            }
        };
        fetchData();
    },[]);

    const handlerAddInventory = (e)=>{
        e.preventDefault();
        addInventory(
            productID,
            quantity,
            category,
            status,
        )
    }


  return (
    <section className="inventoryStock box">
        <div>
            <NavLink to='/Inventory' className='btn link btn_back'>{t("Back to Inventory")}</NavLink>
            <h2 className='title_header'>{t("Add New Stock")}</h2>
            <form action="#" className="inventoryStock_form">
                <div className="form_group">
                    <label>{t("Product Name")}</label>
                    <select defaultValue={productID}  className="form_input"
                    onChange={(event)=>setProductID(event.target.value)}
                    >
                        <option value="">Select Product</option>
                        {products?.map((product) => (
                            <option value={product._id} key={product._id}>{product.name}</option>
                        ))}
                    </select>
                </div>
                <div className="form_group">
                    <label>Status</label>
                    <input type="text" className="form_input" 
                    value={status}
                    onChange={(event)=>setStatus(event.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label>{t("Category")}</label>
                    <select defaultValue={category}  className='form_input'
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
                <button className="btn" onClick={handlerAddInventory}>{t("Save")}</button>
            </form>
        </div>
    </section>
  )
}

export default InventoryStock