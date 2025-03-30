import { FaDownload } from 'react-icons/fa';
import './OrderManagement.css';

function OrderManagement() {
  return (
    <section className="orders box">
        <div>
            <div className="management">
                <div>
                    <h2>Orders Management</h2>
                    <p>View and manage orders</p>
                </div>
                <button className="btn">
                <span className="icon">
                    <FaDownload/>
                </span>
                <span className="text">Export Orders</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default OrderManagement