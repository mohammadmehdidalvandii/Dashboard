import { FaEdit, FaEye, FaSearch } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import './CustomersList.css'
import { NavLink } from 'react-router-dom';

function CustomersList() {
  return (
    <section className="customersList box">
            <div className="customersList_management">
                <h2 className="title_header">Customer List</h2>
                <div className="customerList_search">
                    <input type="text" className="form_input"  placeholder='Search Customers'/>
                    <button className="btn"><FaSearch/></button>
              </div> 
           </div>
           <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#c0001</td>
                        <td>John Doe</td>
                        <td>15</td>
                        <td>$2.499</td>
                        <td>
                            <div className="btn_action">
                               <NavLink to='' className='link btn_save '><FaEye/></NavLink>
                                <NavLink to='' className="link btn_setting"><FaEdit/></NavLink>
                                <button className="btn_delete"><MdDelete/></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
           </table>
    </section>
  )
}

export default CustomersList