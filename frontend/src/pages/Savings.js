import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/savings.css";

function Savings() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const balance = 12500;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">

      <Sidebar
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
        handleLogout={handleLogout}
      />

      <main className="dashboard-content">

        {/* TOPBAR */}
        <header className="dashboard-header">
          <button
            className="menu-btn"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            ☰
          </button>

          <div>
            <h2>Savings Dashboard</h2>
            <p>Manage your contributions & loans</p>
          </div>
        </header>

        {/* BALANCE CARD */}
        <div className="balance-card">
          <h4>Total Savings Balance</h4>
          <h1>₹ {balance}</h1>
          <span className="active-badge">Active Account</span>
        </div>

        {/* INFO CARDS */}
        <div className="info-grid">

          <div className="info-card">
            <h5>Saving Type</h5>
            <p>Monthly Plan</p>
          </div>

          <div className="info-card">
            <h5>Duration</h5>
            <p>3 Months</p>
          </div>

          <div className="info-card">
            <h5>Status</h5>
            <p className="status">Running</p>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="action-section">
          <button
            className="primary-btn"
            onClick={() => navigate("/saving-payment")}
          >
            + Add Savings
          </button>

          <button className="secondary-btn">
            View Transactions
          </button>
        </div>

        {/* LOAN SECTION */}
        <div className="loan-card">
          <div>
            <h3>Loan From Savings</h3>
            <p>
              Borrow instantly using your savings balance
              with zero interest charges.
            </p>
          </div>

          <button
            className="loan-btn"
            onClick={() => navigate("/loan-application")}
          >
            Apply Loan →
          </button>
        </div>

      </main>
    </div>
  );
}

export default Savings;