import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default MainLayout;