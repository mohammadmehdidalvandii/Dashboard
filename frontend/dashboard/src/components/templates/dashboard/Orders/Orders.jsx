import './Orders.css';
import { useTranslation } from 'react-i18next';

function Orders() {
    const {t} = useTranslation();
  return (
    <section className="orders box">
        <div className="orders_wrapper">
            <div className="orders_header">
                <h2 className='title_header'>{t("Recent Orders")}</h2>
            </div>
            <table>
                        <thead>
                            <tr>
                                <th>{t("Order ID")}</th>
                                <th>{t("Customer")}</th>
                                <th>{t("Product")}</th>
                                <th>{t("Amount")}</th>
                                <th>{t("Status")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                <td>John Doe</td>
                                <td>iPhone 13 Pro</td>
                                <td>$999</td>
                                <td><span className="status-badge status-completed">{t("Completed")}</span></td>
                            </tr>
                            <tr>
                                <td>#12346</td>
                                <td>Jane Smith</td>
                                <td>MacBook Air</td>
                                <td>$1,299</td>
                                <td><span className="status-badge status-pending">{t("Pending")}</span></td>
                            </tr>
                            <tr>
                                <td>#12347</td>
                                <td>Mike Johnson</td>
                                <td>AirPods Pro</td>
                                <td>$249</td>
                                <td><span className="status-badge status-completed">{t("Completed")}</span></td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    </section>
  )
}

export default Orders