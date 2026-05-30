import {
  NavLink
} from "react-router-dom";

import {
  LayoutDashboard,
  Building2,
  Users,
  BriefcaseMedical,
  Stethoscope,
  FlaskConical,
  Pill,
  Ambulance,
  Handshake,
  BarChart3,
  ShieldCheck,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {

  return (

    <div className="sidebar">

      {/* LOGO */}

      <div className="sidebar-top">

        <h1>Jiva Health</h1>

      </div>

      {/* MENU */}

      <div className="sidebar-menu">

        <NavLink to="/">

          <LayoutDashboard size={20} />

          <span>Dashboard</span>

        </NavLink>

        <NavLink to="/organization">

          <Building2 size={20} />

          <span>Organization</span>

        </NavLink>

        <NavLink to="/users">

          <Users size={20} />

          <span>User Management</span>

        </NavLink>

        <NavLink to="/services">

          <BriefcaseMedical size={20} />

          <span>Services</span>

        </NavLink>

        <NavLink to="/consultation">

          <Stethoscope size={20} />

          <span>Consultation</span>

        </NavLink>

        <NavLink to="/lab-tests">

          <FlaskConical size={20} />

          <span>Lab Test Booking</span>

        </NavLink>

        <NavLink to="/medicine-orders">

          <Pill size={20} />

          <span>Medicine Orders</span>

        </NavLink>

        <NavLink to="/ambulance">

          <Ambulance size={20} />

          <span>Ambulance Booking</span>

        </NavLink>

        <NavLink to="/vendors">

          <Handshake size={20} />

          <span>Vendor & Partners</span>

        </NavLink>

        <NavLink to="/reports">

          <BarChart3 size={20} />

          <span>Report</span>

        </NavLink>

        <NavLink to="/access">

          <ShieldCheck size={20} />

          <span>User Access</span>

        </NavLink>

        <NavLink to="/settings">

          <Settings size={20} />

          <span>Setting</span>

        </NavLink>

      </div>

      {/* ADMIN */}

      <div className="sidebar-bottom">

        <div className="admin-avatar">
          AD
        </div>

        <div>

          <h4>Admin User</h4>

          <p>admin@email.com</p>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;