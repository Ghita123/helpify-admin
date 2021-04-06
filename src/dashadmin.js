import { useState } from "react";
import Navbar from "./components/admin/navbar/Navbar";
import Sidebar from "./components/admin/sidebar/Sidebar";
import Main from "./components/admin/main/Main";
import Loginadmin from "./components/Loginadmin";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Loginadmin />
    </div>
  );
};

export default App;
