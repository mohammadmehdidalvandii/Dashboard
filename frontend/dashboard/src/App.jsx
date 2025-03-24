import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Sidebar from "./components/modules/Sidebar/Sidebar";

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
          </div>
    </div>
  )
}

export default App