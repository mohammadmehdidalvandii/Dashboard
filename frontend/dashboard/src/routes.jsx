import Home from "./page/Home/Home";
import Products from "./page/Products/Products";
import Orders from "./page/Orders/Orders";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/Products" , element:<Products/>},
    {path:"/Orders" , element:<Orders/>},
]

export default routes