
import ChartBar from '../ChartBar/ChartBar'
import ChartLine from '../ChartLine/ChartLine'
import ChartPie from '../ChartPie/ChartPie'
import './CustomerChart.css'
import { useTranslation } from 'react-i18next';

function CustomerChart() {
    const {t} = useTranslation()
  return (
    <section className="customerChart">
        <div className="customer_container">
            <div className="item box">
                <h6>{t("Customer Growth")}</h6>
                <ChartLine/>
            </div>
            <div className="item box">
                <h6>{t("Customer Growth")}</h6>
                <ChartBar/>
            </div>
            <div className="item box">
                <h6>{t("Customer Retention")}</h6>
                <ChartPie/>
            </div>
        </div>
    </section>
  )
}

export default CustomerChart