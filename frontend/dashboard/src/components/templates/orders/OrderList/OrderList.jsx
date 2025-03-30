import { FaEye, FaSearch, FaTimes } from 'react-icons/fa';
import {IoSettings} from 'react-icons/io5' 
import './OrderList.css';
import { NavLink } from 'react-router-dom';


function OrderList() {
  return ( 
    <section className="orderList box">
            <div className="orderList_management">
                <h2 className="title_header">Recent Orders</h2>
                <div className="orderList_search">
                    <input type="text" className="form_input"  placeholder='Search Orders...'/>
                    <button className='btn'><FaSearch/></button>
                </div>
            </div>
            <div>
            <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Products</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12345</td>
                            <td>John Doe</td>
                            <td>Product A, Product B</td>
                            <td>$999.99</td>
                            <td><span className="status-badge processing">Processing</span></td>
                            <td>
                                <div className="btn_action">
                                <NavLink to='/OrderView/:2' className='btn_save'>
                                    <FaEye/>
                                </NavLink>
                                <button className='btn_setting'>
                                    <IoSettings/>
                                </button>
                                <button className='btn_delete'>
                                    <FaTimes/>
                                </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </section>
  )
}

export default OrderList