import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <h1>HELPIFY</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Tableau de bord</a>
        </div>
        <h2>GESTION</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <a href="#">Gestion administrative</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Gestion des utilisateurs</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Gestion des publications</a>
        </div>
      
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">QUITTER</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
