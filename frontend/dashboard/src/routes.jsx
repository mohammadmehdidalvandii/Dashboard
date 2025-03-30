import Home from "./page/Home/Home";
import Products from "./page/Products/Products";
import Orders from "./page/Orders/Orders";
import OrderView from "./page/OrderView/OrderView";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Products" , element:<Products/>},
    {path:"/Orders" , element:<Orders/>},
    {path:"/OrdersView" , element:<OrderView/>},
]

export default routes