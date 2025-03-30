import './View.css';
import {NavLink} from 'react-router-dom'

function View() {
  return (
    <section className="view box">
        <div>
            <NavLink to='/Orders' className="btn">Back to Orders</NavLink>
            <h5 className="title_header">Order Details</h5>
            <div className="items">
                <div className="item">
                    <h4>Order Information</h4>
                    <p>
                      <span>Order ID:</span>
                      <span>#12345</span>
                    </p>
                    <p>
                      <span>Date :</span>
                      <span>March 20 , 2024</span>
                    </p>
                    <p>
                      <span>Status :</span>
                      <span>Completed</span>
                    </p>
                    <p>
                      <span>Total :</span>
                      <span>$999</span>
                    </p>
                </div>
                <div className="item">
                    <h4>Customer Information</h4>
                    <p>
                      <span>Name :</span>
                      <span>John Doe</span>
                    </p>
                    <p>
                      <span>Email :</span>
                      <span>John@example.com</span>
                    </p>
                    <p>
                      <span>Phone :</span>
                      <span>+1 234 576 890</span>
                    </p>
                </div>
            <div className="address">
                <h6>Shipping Address</h6>
                <p>123 Main St, Apt 4B, New York, NY 10001, USA</p>
            </div>
            </div>
        </div>
        <div>
          <h5 className="title_header title_order">Orders Items</h5>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>Product 1</td>
                <td>1</td>
                <td>$9</td>
                <td>$9</td>
              </tr>
          </tbody>
        </table>
        </div>
    </section>
  )
}

export default View