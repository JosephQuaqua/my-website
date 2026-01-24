import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="page-container">

      {/* Navigation Drawer */}
      <Sidebar
        handleLogout={handleLogout}
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
      />

      <main className="main-content">

        {/* Topbar */}
        <header className="topbar">

          {/* Drawer Button */}
          <button className="menu-btn" onClick={toggleDrawer}>
            ☰
          </button>

          <div className="user-profile">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
            />
            <span>Welcome, Student</span>
          </div>

        </header>

        <section className="content-area">
          <h2>Dashboard Overview</h2>

          <div className="dashboard-cards">
            <div className="card savings">
              <h3>Total Savings</h3>
              <p>₹0.000</p>
            </div>

            <div className="card loan">
              <h3>Active Loan</h3>
              <p>₹0.000</p>
            </div>

            <div className="card investment">
              <h3>Total Investment</h3>
              <p>₹0.000</p>
            </div>

            <div className="card exchange">
              <h3>Exchange Balance</h3>
              <p>₹0.000</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;
