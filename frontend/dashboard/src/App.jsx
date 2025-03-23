import { useRoutes } from "react-router-dom"
import routes from "./routes"

function App() {
  const router = useRoutes(routes);
  return (
    <div className="container">
        <div className="container_sidebar">this is sidebar</div>
        <div className="container_content">
          {router}
          this is content page
          </div>
    </div>
  )
}

export default App