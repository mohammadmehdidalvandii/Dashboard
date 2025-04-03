import AddNewCustomer from '../../components/templates/customers/AddNewCustomer/AddNewCustomer'
import MetaTag from '../../hook/MetaTag/MetaTag'

function AddCustomer() {
  return (
    <>
    <MetaTag title='Dashboard | Add New Customer'/>
    <AddNewCustomer/>
    </>
  )
}

export default AddCustomer