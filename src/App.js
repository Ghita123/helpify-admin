import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register"
import Home from "./Home"
import LoginAdmin from "./components/Loginadmin"
import Dashadmin from "./dashadmin"
function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />
      <LoginAdmin path="/loginadmin" />
      <Dashadmin path="/dashadmin" />

      
    </Router>

  );
}

export default App;
