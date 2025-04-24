import { useNavigate, useRoutes } from "react-router-dom"
import routes from "./routes"
import Sidebar from "./components/modules/Sidebar/Sidebar";
import MenuBar from "./components/modules/MenuBar/MenuBar";
import Header from "./components/modules/Header/Header";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from "react";
import { apiRequest } from "./services/axios/config";

function App() {
  const router = useRoutes(routes);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authUser = async () => {
      try {
        const response = await apiRequest.get('/auth/me');  
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication error:", error.response?.data || error.message);
        setIsAuthenticated(false);
        navigate('/Login');
      }
    };
    
    authUser();
  }, [navigate]);


  return (
    <HelmetProvider>
      {isAuthenticated ? (
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
      ) : (
        router
      )}
    </HelmetProvider>
  );
}

export default App;