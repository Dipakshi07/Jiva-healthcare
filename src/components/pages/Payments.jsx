// src/pages/Payments.jsx

import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import "./Payment.css";

const paymentData = [
  {
    id: "PAY101",
    user: "Rahul Sharma",
    method: "UPI",
    amount: 1200,
    status: "Success",
    date: "28 May 2026",
  },

  {
    id: "PAY102",
    user: "Priya Singh",
    method: "Credit Card",
    amount: 850,
    status: "Pending",
    date: "27 May 2026",
  },

  {
    id: "PAY103",
    user: "Amit Verma",
    method: "Net Banking",
    amount: 2500,
    status: "Failed",
    date: "26 May 2026",
  },

  {
    id: "PAY104",
    user: "Neha Gupta",
    method: "Cash",
    amount: 600,
    status: "Success",
    date: "25 May 2026",
  },
];

function Payments() {
  const [search, setSearch] = useState("");

  const filteredPayments = paymentData.filter((payment) =>
    payment.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="payments-container">

        {/* HEADER */}

        <div className="payments-header">
          <div>
            <h1>Payment History</h1>
            <p>Manage all healthcare payment transactions</p>
          </div>

          <button className="export-btn">
            Export Report
          </button>
        </div>

        {/* TOP CARDS */}

        <div className="payment-stats">

          <div className="payment-card">
            <h3>Total Revenue</h3>
            <h2>₹5,15,000</h2>
          </div>

          <div className="payment-card">
            <h3>Successful Payments</h3>
            <h2>1,245</h2>
          </div>

          <div className="payment-card">
            <h3>Pending Payments</h3>
            <h2>56</h2>
          </div>

          <div className="payment-card">
            <h3>Failed Payments</h3>
            <h2>18</h2>
          </div>

        </div>

        {/* SEARCH */}

        <div className="search-section">
          <input
            type="text"
            placeholder="Search by patient name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE */}

        <div className="table-container">

          <table className="payment-table">

            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Patient Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredPayments.map((payment) => (
                <tr key={payment.id}>

                  <td>{payment.id}</td>

                  <td>{payment.user}</td>

                  <td>{payment.method}</td>

                  <td>₹{payment.amount}</td>

                  <td>{payment.date}</td>

                  <td>
                    <span
                      className={`status-badge ${payment.status.toLowerCase()}`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  <td>
                    <button className="view-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </MainLayout>
  );
}

export default Payments;