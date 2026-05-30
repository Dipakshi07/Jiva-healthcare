// src/components/dashboard/RevenueChart.jsx

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "./RevenueChart.css";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 27000 },
  { month: "Jun", revenue: 25000 },
  { month: "Jul", revenue: 32000 },
  { month: "Aug", revenue: 30000 },
  { month: "Sep", revenue: 38000 },
  { month: "Oct", revenue: 42000 },
  { month: "Nov", revenue: 46000 },
  { month: "Dec", revenue: 52000 },
];

function RevenueChart() {
  return (
    <div className="revenue-chart-container">

      {/* HEADER */}

      <div className="chart-header">

        <div>
          <h2>Revenue Overview</h2>
          <p>Monthly healthcare revenue analytics</p>
        </div>

        <button className="report-btn">
          Download Report
        </button>

      </div>

      {/* CHART CARDS */}

      <div className="chart-stats">

        <div className="chart-card">
          <h4>Total Revenue</h4>
          <h2>₹5,20,000</h2>
          <span>+12.5% this month</span>
        </div>

        <div className="chart-card">
          <h4>Total Orders</h4>
          <h2>1,245</h2>
          <span>+8.2% growth</span>
        </div>

        <div className="chart-card">
          <h4>Appointments</h4>
          <h2>856</h2>
          <span>+5.1% growth</span>
        </div>

      </div>

      {/* CHART */}

      <div className="chart-wrapper">

        <ResponsiveContainer width="100%" height={400}>

          <LineChart data={revenueData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;