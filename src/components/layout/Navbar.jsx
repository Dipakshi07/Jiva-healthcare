import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <h3>Healthcare Dashboard</h3>

      <div className="navbar-search">

        <input
          type="text"
          placeholder="Search..."
        />

      </div>

    </div>
  );
}

export default Navbar;