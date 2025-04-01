import CustomerChart from '../../components/templates/customers/CustomerChart/CustomerChart'
import CustomersList from '../../components/templates/customers/CustomersList/CustomersList'
import CustomersManagement from '../../components/templates/customers/CustomersManagement/CustomersManagement'
import MetaTag from '../../hook/MetaTag/MetaTag'

function Customers() {
  return (
    <>
    <MetaTag  title="Dashboard | Customers" />
    <CustomersManagement/>
    <CustomerChart/>
    <CustomersList/>
    </>
  )
}

export default Customers