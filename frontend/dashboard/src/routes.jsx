import Home from "./page/Home/Home";
import Products from "./page/Products/Products";
import Orders from "./page/Orders/Orders";
import OrderView from "./page/OrderView/OrderView";
import Customers from "./page/Customers/Customers";
import AddCustomer from "./page/AddCustomer/AddCustomer";
import CustomerDetails from "./page/CustomerDetails/CustomerDetails";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Products" , element:<Products/>},
    {path:"/Orders" , element:<Orders/>},
    {path:"/OrdersView" , element:<OrderView/>},
    {path:"/Customers" , element:<Customers/>},
    {path:"/AddCustomer" , element:<AddCustomer/>},
    {path:"/CustomerDetails" , element:<CustomerDetails/>},
]

export default routes