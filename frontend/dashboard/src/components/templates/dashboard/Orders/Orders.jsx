import './Orders.css';

function Orders() {
  return (
    <section className="orders box">
        <div className="orders_wrapper">
            <div className="orders_header">
                <h2 className='title_header'>Recent Orders</h2>
            </div>
            <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>John Doe</td>
                                <td>iPhone 13 Pro</td>
                                <td>$999</td>
                                <td><span className="status-badge status-completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>#12346</td>
                                <td>Jane Smith</td>
                                <td>MacBook Air</td>
                                <td>$1,299</td>
                                <td><span className="status-badge status-pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>#12347</td>
                                <td>Mike Johnson</td>
                                <td>AirPods Pro</td>
                                <td>$249</td>
                                <td><span className="status-badge status-completed">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    </section>
  )
}

export default Orders