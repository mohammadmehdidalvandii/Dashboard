import { FaPlus } from 'react-icons/fa';
import './CustomersManagement.css';

function CustomersManagement() {
  return (
   <section className="customersManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>Customers Management</h2>
                    <p>View and manage customers</p>
                </div>
                <button className="btn">
                                <span className="icon">
                                    <FaPlus/>
                                </span>
                                <span className="text">Add New Customer</span>
                                </button>
            </div>
        </div>
   </section>
  )
}

export default CustomersManagement