import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Sidebar from "./components/modules/Sidebar/Sidebar";
import MenuBar from "./components/modules/MenuBar/MenuBar";
import Header from "./components/modules/Header/Header";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const router = useRoutes(routes);
  return (
    <HelmetProvider>
      <div className="container">
        <div className="container_sidebar">
          <Sidebar/>
        </div>
        <div className="container_content">
          <Header/>
          {router}
          <MenuBar/>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App