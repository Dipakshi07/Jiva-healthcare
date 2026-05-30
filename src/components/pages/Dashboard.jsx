import MainLayout from "../layout/MainLayout";
import StatsCard from "../dashboard/StatsCard";

import "./Dashboard.css";

function Dashboard() {
  return (
    <MainLayout>

      <div className="dashboard">

        <h1>Dashboard</h1>

        <div className="stats-grid">

          <StatsCard title="Total Users" value="1,245" />

          <StatsCard title="Orders" value="856" />

          <StatsCard title="Revenue" value="₹5,45,000" />

          <StatsCard title="Appointments" value="312" />

        </div>

      </div>

    </MainLayout>
  );
}

export default Dashboard;