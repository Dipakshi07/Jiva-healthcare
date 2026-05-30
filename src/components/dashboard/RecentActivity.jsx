// src/components/dashboard/RecentActivity.jsx

import React from "react";
import "./RecentActivity.css";

const activities = [
  {
    id: 1,
    user: "Rahul Sharma",
    activity: "Placed a medicine order",
    time: "2 mins ago",
    status: "Completed",
  },

  {
    id: 2,
    user: "Priya Singh",
    activity: "Booked an appointment",
    time: "15 mins ago",
    status: "Pending",
  },

  {
    id: 3,
    user: "Amit Verma",
    activity: "Payment completed",
    time: "30 mins ago",
    status: "Success",
  },

  {
    id: 4,
    user: "Neha Gupta",
    activity: "Added family member",
    time: "1 hour ago",
    status: "Completed",
  },

  {
    id: 5,
    user: "Rohit Yadav",
    activity: "Order cancelled",
    time: "2 hours ago",
    status: "Cancelled",
  },
];

function RecentActivity() {
  return (
    <div className="recent-activity">

      <div className="activity-header">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest healthcare dashboard updates</p>
        </div>

        <button className="view-all-btn">
          View All
        </button>
      </div>

      <div className="activity-list">

        {activities.map((item) => (
          <div className="activity-card" key={item.id}>

            <div className="activity-left">

              <div className="activity-avatar">
                {item.user.charAt(0)}
              </div>

              <div className="activity-info">
                <h4>{item.user}</h4>
                <p>{item.activity}</p>
              </div>

            </div>

            <div className="activity-right">

              <span
                className={`activity-status ${item.status.toLowerCase()}`}
              >
                {item.status}
              </span>

              <small>{item.time}</small>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;