import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Sidebar from "./components/modules/Sidebar/Sidebar";
import MenuBar from "./components/modules/MenuBar/MenuBar";
import Header from "./components/modules/Header/Header";
import { HelmetProvider } from 'react-helmet-async';
import Cookies from 'js-cookie';

function App() {
  const router = useRoutes(routes);

  const token = Cookies.get("token");
  

  return (
    <HelmetProvider>
      <div className="container">
        {token  &&(
        <div className="container_sidebar">
          <Sidebar/>
        </div>
        )}
        <div className="container_content">
          {token && (
            <Header/>
          )}
          {router}
          {token && (
            <MenuBar/>
          )}
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App