import { FaSearch } from 'react-icons/fa'
import './InventoryList.css'
import {NavLink } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import { useEffect, useState } from 'react';
import {apiRequest} from '../../../../services/axios/config'
import useInventoryStore from '../../../../zustand/useInventoryStore';


function InventoryList() {
    const {t} = useTranslation();
    const {deleteInventory} = useInventoryStore()
    const [inventories , setInventories] = useState();

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await apiRequest.get('/inventory');
            if(res.status === 200){
               setInventories(res.data.data)
            }
        };
        fetchData()
    },[]);


    const handlerDeleteInventory = (inventoryId)=>{
        deleteInventory(inventoryId)
    }

  return (
   <section className="inventoryList box">
        <div className="inventoryList_management">
            <h2 className="title_header">{t("Stock Levels")}</h2>
            <div className="inventoryList_search">
                <input type="text" className="form_input"  placeholder={t("Search Inventory")}/>
                <button className="btn"><FaSearch/></button>
            </div>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>{t("Product")}</th>
                    <th>{t("Category")}</th>
                    <th>{t("Quantity")}</th>
                    <th>{t("Status")}</th>
                    <th>{t("Actions")}</th>
                </tr>
            </thead>
            <tbody>
                {inventories?.length > 0 ? (
                    inventories.map((inventor)=>(
                        <tr key={inventor._id}>
                        <td>{inventor.sku}</td>
                        <td>{inventor.productID.name}</td>
                        <td>{inventor.quantity}</td>
                        <td>{inventor.category}</td>
                        <td className='inventory_Status status-completed'>{inventor.status}</td>
                        <td>
                            <div className="btn_action">
                                <NavLink to={`/InventoryUpdate/${inventor._id}`} className="btn_save link">{t("Update")}</NavLink>
                                <button className="btn_delete" onClick={()=>handlerDeleteInventory(inventor._id)}>{t("Remove")}</button>
                            </div>
                        </td>
                    </tr>
                    ))
                 ): (
                    <span>The inventory is not available</span>
                 )}
              
            </tbody>
        </table>
        </div>
   </section>
  )
}

export default InventoryList