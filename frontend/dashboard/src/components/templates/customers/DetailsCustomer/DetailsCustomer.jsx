import './DetailsCustomer.css';
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function DetailsCustomer() {
  const {t} = useTranslation();
  return (
    <section className="detailsCustomer box">
        <div>
          <NavLink to='/Customers' className='btn link btn_back'>{t("Back To Customers")}</NavLink>
          <h2 className="title_header">{t("Customer Details")}</h2>
          <div className="items">
            <ul className="item">
              <li>
                <h6>{t("Personal Information")}</h6>
              </li>
              <li>
                <span>{t("Customer ID")}:</span>
                <span>C001</span>
              </li>
              <li>
                <span>{t("Name")}:</span>
                <span>John Doe</span>
              </li>
              <li>
                <span>{t("Email")}:</span>
                <span> john@example.com</span>
              </li>
              <li>
                <span>{t("Phone")}:</span>
                <span>+1 234 567 890</span>
              </li>
              <li>
                <span>{t("Membership")}:</span>
                <span>gold</span>
              </li>
            </ul>
            <ul className="item">
              <li>
                <h6>{t("Order Statistics")}</h6>
              </li>
              <li>
                <span>{t("Total Orders")}:</span>
                <span>15</span>
              </li>
              <li>
                <span>{t("Total Spent")}: </span>
                <span>$2499.9</span>
              </li>
              <li>
                <span>{t("Average Order Value")}:</span>
                <span>166.67</span>
              </li>
              <li>
                <span>{t("Last Order")}:</span>
                <span>4/4/2025</span>
              </li>
            </ul>
          </div>
          <h2 className="title_header">{t("Recent Orders")}</h2>
          <table>
              <thead>
                <tr>
                  <th>{t("Order ID")}</th>
                  <th>{t("Date")}</th>
                  <th>{t("Items")}</th>
                  <th>{t("Total")}</th>
                  <th>{t("Status")}</th>
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