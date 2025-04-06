import Home from "./page/Home/Home";
import Products from "./page/Products/Products";
import Orders from "./page/Orders/Orders";
import OrderView from "./page/OrderView/OrderView";
import Customers from "./page/Customers/Customers";
import AddCustomer from "./page/AddCustomer/AddCustomer";
import CustomerDetails from "./page/CustomerDetails/CustomerDetails";
import EditCustomer from "./page/EditCustomer/EditCustomer";
import Comments from "./page/Comments/Comments";
import Inventory from "./page/Inventory/Inventory";
import AddStock from "./page/AddStock/AddStock";
import InventoryUpdate from "./page/InventoryUpdate/InventoryUpdate";
import Settings from "./page/Settings/Settings";
import Profile from "./page/Profile/Profile";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Products" , element:<Products/>},
    {path:"/Orders" , element:<Orders/>},
    {path:"/OrdersView" , element:<OrderView/>},
    {path:"/Customers" , element:<Customers/>},
    {path:"/AddCustomer" , element:<AddCustomer/>},
    {path:"/CustomerDetails" , element:<CustomerDetails/>},
    {path:"/EditCustomer" , element:<EditCustomer/>},
    {path:"/Comments" , element:<Comments/>},
    {path:"/Inventory" , element:<Inventory/>},
    {path:"/AddStock" , element:<AddStock/>},
    {path:"/InventoryUpdate" , element:<InventoryUpdate/>},
    {path:"/Settings" , element:<Settings/>},
    {path:"/Profile" , element:<Profile/>},
]

export default routes