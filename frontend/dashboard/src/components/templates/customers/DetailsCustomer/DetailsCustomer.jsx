import './DetailsCustomer.css';

function DetailsCustomer() {
  return (
    <section className="detailsCustomer box">
        <div>
          <h2 className="title_header">Customer Details</h2>
          <div className="items">
            <ul className="item">
              <li>
                <h6>Personal Information</h6>
              </li>
              <li>
                <span>Customer ID:</span>
                <span>C001</span>
              </li>
              <li>
                <span>Name:</span>
                <span>John Doe</span>
              </li>
              <li>
                <span>Email:</span>
                <span> john@example.com</span>
              </li>
              <li>
                <span>Phone:</span>
                <span>+1 234 567 890</span>
              </li>
              <li>
                <span>Membership:</span>
                <span>gold</span>
              </li>
            </ul>
            <ul className="item">
              <li>
                <h6>Order Statistics</h6>
              </li>
              <li>
                <span>Total Orders:</span>
                <span>15</span>
              </li>
              <li>
                <span>Total Spent: </span>
                <span>$2499.9</span>
              </li>
              <li>
                <span>Average Order Value:</span>
                <span>166.67</span>
              </li>
              <li>
                <span>Last Order:</span>
                <span>4/4/2025</span>
              </li>
            </ul>
          </div>
          <h2 className="title_header">Recent Orders</h2>
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
                  <td>#Coo2</td>
                  <td>4/4/2025</td>
                  <td>Product A</td>
                  <td>$499.9</td>
                  <td>Completed</td>
                </tr>
              </tbody>
          </table>
        </div>
    </section>
  )
}

export default DetailsCustomer