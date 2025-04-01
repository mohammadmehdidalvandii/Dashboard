
import ChartBar from '../ChartBar/ChartBar'
import ChartLine from '../ChartLine/ChartLine'
import './CustomerChart.css'

function CustomerChart() {
  return (
    <section className="customerChart">
        <div className="customer_container">
            <div className="item box">
                <h6>Customer Growth</h6>
                <ChartLine/>
            </div>
            <div className="item box">
                <h6>Average Purchase</h6>
                <ChartBar/>
            </div>
            <div className="item box">
                <h6>Customer Retention</h6>
            </div>
        </div>
    </section>
  )
}

export default CustomerChart