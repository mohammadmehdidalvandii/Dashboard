import CustomersManagement from '../../components/templates/customers/CustomersManagement/CustomersManagement'
import MetaTag from '../../hook/MetaTag/MetaTag'

function Customers() {
  return (
    <>
    <MetaTag  title="Dashboard | Customers" />
    <CustomersManagement/>
    </>
  )
}

export default Customers