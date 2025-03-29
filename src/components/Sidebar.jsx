const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "180px" }}>
      <a href="#" onClick={() => setSelectedTab("Home")} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="./src/assets/logo-light.png" alt="Logo" className="logo" style={{width: "35px" , height: "35px"}} />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Home" ? "active" : ""}`}>
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Create Post" ? "active" : ""}`}>
            Create Post
          </a>
        </li>
        <li onClick={() => setSelectedTab("Features")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Features" ? "active" : ""}`}>
            Features
          </a>
        </li>
        <li onClick={() => setSelectedTab("Pricing")}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Pricing" ? "active" : ""}`}>
            Pricing
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
          <img src="./src/assets/brainwave-symbol.svg" alt="Profile" width="32" height="32" className="rounded-circle me-2" />
          <strong>brain.exe</strong>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
