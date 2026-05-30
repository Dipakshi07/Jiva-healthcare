import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      ...formData,
      role: "Patient",
      status: "Active",
      joined: new Date().toLocaleDateString(),
      appointments: 0,
    };

    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, newUser])
    );

    alert("User Added Successfully");

    navigate("/users");
  };

  return (
    <div className="add-user-page">

      <div className="form-card">

        <h2>Add New User</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="dob"
              onChange={handleChange}
              required
            />

            <select
              name="gender"
              onChange={handleChange}
              required
            >
              <option value="">
                Select Gender
              </option>

              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select
              name="bloodGroup"
              onChange={handleChange}
              required
            >
              <option value="">
                Blood Group
              </option>

              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={() =>
                navigate("/users")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Add User
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddUser;