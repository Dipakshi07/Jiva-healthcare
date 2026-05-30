import { useState } from "react";

import MainLayout from "../layout/MainLayout";
import OverviewTab from "./OverviewTab";
import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Users,
  IndianRupee,
  ClipboardList,
} from "lucide-react";

import "./UserDetail.css";

function UserDetail() {

  const [activeTab, setActiveTab] =
    useState("overview");

  const [status, setStatus] =
    useState("Active");

  const user = {
    ID: "USR12345",
    name: "Alice Williams",
    role: "Patient",
    joined: "12 Jan 2020",
    UserType: "Normal User",
    LastActive: "2 days ago",
    orders: 12,
    bookings: 8,
    familyMembers: 5,
    spent: "₹24,500",
  };

  const orders = [
  {
    id: 101,
    medicine: "Paracetamol",
    date: "28 May 2026",
    amount: "₹200",
    status: "Delivered",
  },
  {
    id: 102,
    medicine: "Vitamin C",
    date: "30 May 2026",
    amount: "₹500",
    status: "Pending",
  },
];

const payments = [
  {
    id: "PAY001",
    date: "28 May 2026",
    method: "UPI",
    amount: "₹200",
    status: "Success",
  },
  {
    id: "PAY002",
    date: "30 May 2026",
    method: "Credit Card",
    amount: "₹500",
    status: "Pending",
  },
];

const familyMembers = [
  {
    name: "John Williams",
    relation: "Father",
    age: 58,
  },
  {
    name: "Emma Williams",
    relation: "Mother",
    age: 55,
  },
  {
    name: "Chris Williams",
    relation: "Brother",
    age: 24,
  },
];

 return (
  <MainLayout>
    <div className="user-detail-page">

      {/* PROFILE HEADER */}
      <div className="profile-card">

        <div className="profile-left">

          <div className="profile-avatar">
            AW
          </div>

          <div>

            <h2>{user.name}</h2>

            <p>{user.role}</p>

            <span
              className={
                status === "Active"
                  ? "status-badge active"
                  : "status-badge inactive"
              }
            >
              {status}
            </span>

            <span className="user-type">
              {user.UserType}
            </span>

            <span className="user-id">
              ID: {user.ID}
            </span>

            <p className="joined-date">
              Joined: {user.joined}

              <span className="last-active">
                Last Active: {user.LastActive}
              </span>
            </p>

          </div>

        </div>

        <div className="profile-right">

          <select
            className={
              status === "Active"
                ? "status-select active-select"
                : "status-select inactive-select"
            }
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button className="upgrade-btn">
            Upgrade to Premium
          </button>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stats-card">
          <ShoppingBag size={24} />
          <h3>{user.orders}</h3>
          <p>Total Orders</p>
        </div>

        <div className="stats-card">
          <ClipboardList size={24} />
          <h3>{user.bookings}</h3>
          <p>Total Bookings</p>
        </div>

        <div className="stats-card">
          <Users size={24} />
          <h3>{user.familyMembers}</h3>
          <p>Family Members</p>
        </div>

        <div className="stats-card">
          <IndianRupee size={24} />
          <h3>{user.spent}</h3>
          <p>Total Spent</p>
        </div>

      </div>

      {/* TABS */}

      <div className="tabs-container">

        <button
          className={activeTab === "overview" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "orders" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("orders")}
        >
          Orders & Bookings
        </button>

        <button
          className={activeTab === "payments" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("payments")}
        >
          Payments
        </button>

        <button
          className={activeTab === "family" ? "tab active-tab" : "tab"}
          onClick={() => setActiveTab("family")}
        >
          Family Members
        </button>

      </div>

      {/* TAB CONTENT */}

      <div className="tab-content">

        {activeTab === "overview" && (
          <OverviewTab />
        )}

        {activeTab === "orders" && (

          <div className="content-card">

            <h3>Orders & Bookings</h3>

            <table className="detail-table">

              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Medicine</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr key={order.id}>

                    <td>#{order.id}</td>
                    <td>{order.medicine}</td>
                    <td>{order.date}</td>
                    <td>{order.amount}</td>

                    <td>

                      <span
                        className={
                          order.status === "Delivered"
                            ? "table-status delivered"
                            : "table-status pending"
                        }
                      >
                        {order.status}
                      </span>

                    </td>

                    <td>

                      <Link to={`/orders/${order.id}`}>

                        <button className="view-btn">
                          View Details
                        </button>

                      </Link>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

        {activeTab === "payments" && (

          <div className="content-card">

            <h3>Payment History</h3>

            <table className="detail-table">

              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Date</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {payments.map((payment) => (

                  <tr key={payment.id}>

                    <td>{payment.id}</td>
                    <td>{payment.date}</td>
                    <td>{payment.method}</td>
                    <td>{payment.amount}</td>

                    <td>

                      <span
                        className={
                          payment.status === "Success"
                            ? "table-status delivered"
                            : "table-status pending"
                        }
                      >
                        {payment.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

        {activeTab === "family" && (

          <div className="content-card">

            <h3>Family Members</h3>

            <div className="family-grid">

              {familyMembers.map((member, index) => (

                <div
                  key={index}
                  className="family-member-card"
                >

                  <h4>{member.name}</h4>

                  <p>
                    <strong>Relation:</strong> {member.relation}
                  </p>

                  <p>
                    <strong>Age:</strong> {member.age}
                  </p>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  </MainLayout>
)}

export default UserDetail;