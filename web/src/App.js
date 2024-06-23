import './App.css'; 
import {ReactKeycloakProvider} from "@react-keycloak/web"
import keycloak from "./Keycloak"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav"
import WelcomePage from "./pages/Homepage" 
import LoginPage from './pages/LoginPage'; 
import LoggedPage from "./pages/LoggedPage";
// import SecuredPage from "./pages/SecuredPage"
// import PrivateRoute from "./helpers/PrivateRoute"
function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        {/* <Nav /> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginPage />} /> 
            <Route path='/logged' element={<LoggedPage />} />
            {/* <Route
              path="/secured"
              element={Oto
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute> 
              }
            /> */}
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}
export default App;
