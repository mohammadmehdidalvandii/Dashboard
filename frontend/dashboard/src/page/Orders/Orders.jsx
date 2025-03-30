import OrderList from "../../components/templates/orders/OrderList/OrderList"
import OrderManagement from "../../components/templates/orders/OrderManagement/OrderManagement"
import MetaTag from "../../hook/MetaTag/MetaTag"


function Orders() {
  return (
    <>
    <MetaTag title="Dashboard | Orders " />
    <OrderManagement/>
    <OrderList/>
    </>
  )
}

export default Orders