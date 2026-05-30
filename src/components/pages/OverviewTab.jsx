import { Edit, Mail, Phone, User, MapPin } from "lucide-react";
import "./OverviewTab.css";

function OverviewTab() {

  const user = {
    fullName: "Alice Williams",
    email: "alice@example.com",
    phone: "+91 9876543210",
    gender: "Female",
    dob: "12 Jan 1998",

    address: "221B Baker Street",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226001",
    country: "India",
  };

  return (

    <div className="overview-container">

      {/* PERSONAL INFO */}

      <div className="info-card">

        <div className="card-header">

          <h3>Personal Information</h3>

          <button className="edit-btn">

            <Edit size={16} />

            Edit

          </button>

        </div>

        <div className="info-list">

          <div className="info-row">
            <span>Full Name</span>
            <p>{user.fullName}</p>
          </div>

          <div className="info-row">
            <span>Email</span>
            <p>{user.email}</p>
          </div>

          <div className="info-row">
            <span>Phone</span>
            <p>{user.phone}</p>
          </div>

          <div className="info-row">
            <span>Gender</span>
            <p>{user.gender}</p>
          </div>

          <div className="info-row">
            <span>Date of Birth</span>
            <p>{user.dob}</p>
          </div>

        </div>

      </div>

      {/* ADDRESS INFO */}

      <div className="info-card">

        <div className="card-header">

          <h3>Address Information</h3>

        </div>

        <div className="info-list">

          <div className="info-row">
            <span>Address</span>
            <p>{user.address}</p>
          </div>

          <div className="info-row">
            <span>City</span>
            <p>{user.city}</p>
          </div>

          <div className="info-row">
            <span>State</span>
            <p>{user.state}</p>
          </div>

          <div className="info-row">
            <span>Pincode</span>
            <p>{user.pincode}</p>
          </div>

          <div className="info-row">
            <span>Country</span>
            <p>{user.country}</p>
          </div>

        </div>

      </div>

    </div>

  );
}

export default OverviewTab;