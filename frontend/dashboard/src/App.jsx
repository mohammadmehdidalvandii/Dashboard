import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Sidebar from "./components/modules/Sidebar/Sidebar";
import MenuBar from "./components/modules/MenuBar/MenuBar";

function App() {
  const router = useRoutes(routes);
  return (
    <div className="container">
        <div className="container_sidebar">
          <Sidebar/>
        </div>
        <div className="container_content">
          {router}
            this is content page
           <MenuBar/>
          </div>
    </div>
  )
}

export default App