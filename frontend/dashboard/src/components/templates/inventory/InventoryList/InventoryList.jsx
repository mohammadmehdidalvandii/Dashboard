import { FaSearch } from 'react-icons/fa'
import './InventoryList.css'
import {NavLink } from 'react-router-dom'


function InventoryList() {
  return (
   <section className="inventoryList box">
        <div className="inventoryList_management">
            <h2 className="title_header">Stock Levels</h2>
            <div className="inventoryList_search">
                <input type="text" className="form_input"  placeholder='Search Inventory...'/>
                <button className="btn"><FaSearch/></button>
            </div>
        </div>
        <div>
        <table>
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>In Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SKU001</td>
                    <td>iphone 13 pro</td>
                    <td>Electronics</td>
                    <td>50</td>
                    <td className='inventory_Status status-completed'>In Stock</td>
                    <td>
                        <div className="btn_action">
                            <NavLink to='' className="btn_save link">Update</NavLink>
                            <button className="btn_delete">Remove</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
   </section>
  )
}

export default InventoryList