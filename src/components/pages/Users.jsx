import { useState } from "react";

import MainLayout from "../layout/MainLayout";

import {
  Search,
  Eye,
  Pencil,
  Crown,
} from "lucide-react";

import { Link } from "react-router-dom";

import usersData from "../data/users";

import "./Users.css";

function Users() {

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  // FILTER USERS

  const filteredUsers =
    usersData.filter((user) => {

      const matchesSearch =

        user.name
          .toLowerCase()
          .includes(search.toLowerCase())

        ||

        user.role
          .toLowerCase()
          .includes(search.toLowerCase())

        ||

        user.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =

        status === "All"

          ? true

          : user.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );

    });

  return (

    <MainLayout>

      <div className="users-page">

        {/* HEADER */}

        <div className="users-header">

          <div>

            <h1>User Management</h1>

            <p>
              Manage users and healthcare staff
            </p>

          </div>

         <Link to="/add-user">
              <button className="add-user-btn">
                 + Add User
              </button>
         </Link>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stats-card">

            <h4>Total Users</h4>

            <h2>{usersData.length}</h2>

          </div>

          <div className="stats-card">

            <h4>Prime Users</h4>

            <h2>180</h2>

          </div>

          <div className="stats-card">

            <h4>Non-Prime Users</h4>

            <h2>65</h2>

          </div>

          <div className="stats-card">

            <h4>Total Family Members</h4>

            <h2>520</h2>

          </div>

        </div>

        {/* FILTER */}

        <div className="users-filter">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search by patient, doctor or specialty..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option value="All">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </select>

        </div>

        {/* USER LIST */}

        <div className="users-list">

          {filteredUsers.map((user) => (

            <div
              className="user-card"
              key={user.id}
            >

              {/* LEFT */}

              <div className="user-left">

                <div className="user-avatar">

                  {user.name.charAt(0)}

                </div>

                <div>

                  <h3>{user.name}</h3>

                  <p>{user.role}</p>

                  <span className={
                    user.status === "Active"

                      ? "active-badge"

                      : "inactive-badge"
                  }>

                    {user.status}

                  </span>

                </div>

              </div>

              {/* CONTACT */}

              <div className="user-contact">

                <p>{user.email}</p>

                <p>{user.phone}</p>

              </div>

              {/* JOINED */}

              <div className="user-joined">

                <h4>Joined</h4>

                <p>{user.joined}</p>

              </div>

              {/* APPOINTMENTS */}

              <div className="appointments">

                <h4>Appointments</h4>

                <p>{user.appointments}</p>

              </div>

              {/* ACTIONS */}

              <div className="user-actions">

                <button className="prime-btn">

                  <Crown size={16} />

                  Upgrade

                </button>

                {/* VIEW BUTTON */}

                <Link
                  to={`/users/${user.id}`}
                >

                  <button className="view-btn">

                    <Eye size={16} />

                    View

                  </button>

                </Link>

                <button className="edit-btn">

                  <Pencil size={16} />

                  Edit

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>
  );
}

export default Users;