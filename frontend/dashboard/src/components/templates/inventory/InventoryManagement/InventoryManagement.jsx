import { FaPlus } from 'react-icons/fa6';
import  './InventoryManagement.css';


function InventoryManagement() {
  return (
    <section className="inventoryManagement box">
        <div>
            <div className="management">
                <div>
                    <h2>Inventory Management</h2>
                    <p>Track and manage inventory</p>
                </div>
                <div>
                    <button className="btn">
                        <span className="icon"><FaPlus/></span>
                        <span className="text">Add Stock</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InventoryManagement