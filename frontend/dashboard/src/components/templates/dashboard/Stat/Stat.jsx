import './Stat.css';
import { FaBox, FaChartLine, FaShoppingCart, FaUsers } from "react-icons/fa";


function Stat() {
  return (
    <section className="stat">
        <div className="stat_container">
            <div className="stat_card">
                <div className="stat_header">
                    <h3>Total Sales</h3>
                    <span>
                        <FaChartLine/>
                    </span>
                </div>
                <p className="stat_value">$24,780</p>
                <p className="stat_change positive">+12.5 <span>vs last month</span> </p>
            </div>
            <div className="stat_card">
                <div className="stat_header">
                    <h3>Orders</h3>
                    <span>
                        <FaShoppingCart/>
                    </span>
                </div>
                <p className="stat_value">1,245</p>
                <p className="stat_change positive">+8.3 <span>vs last month</span></p>
            </div>
            <div className="stat_card">
                <div className="stat_header">
                    <h3>Products</h3>
                    <span>
                        <FaBox/>
                    </span>
                </div>
                <p className="stat_value">892</p>
                <p className="stat_change positive">+15 <span>new Products</span></p>
            </div>
            <div className="stat_card">
                <div className="stat_header">
                    <h3>Customers</h3>
                    <span>
                        <FaUsers/>
                    </span>
                </div>
                <p className="stat_value">15,743</p>
                <p className="stat_change positive">+23.5 <span>vs last month</span></p>
            </div>
        </div>
    </section>
  )
}

export default Stat