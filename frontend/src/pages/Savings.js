import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/savings.css";

function Savings() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const balance = 12500;

  return (
    <div className="page-container">
      <Sidebar
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
        handleLogout={handleLogout}
      />

      <main className="main-content">
        <header className="topbar">
          <button className="menu-btn" onClick={toggleDrawer}>☰</button>
          <h2>Savings Account</h2>
        </header>

        {/* CARDS */}
        <div className="savings-cards">
          <div className="card">
            <h4>Current Balance</h4>
            <p>₹ {balance}</p>
          </div>

          <div className="card">
            <h4>Saving Type</h4>
            <p>Monthly</p>
          </div>

          <div className="card">
            <h4>Duration</h4>
            <p>3 Months</p>
          </div>

          <div className="card">
            <h4>Status</h4>
            <p className="status">Active</p>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/saving-payment")}
          >
            Add Savings
          </button>

          <button className="secondary-btn">
            View Transactions
          </button>
        </div>

        {/* APPLY LOAN SECTION */}
        <div className="loan-from-savings">
          <h3>Apply Loan From Savings</h3>
          <p>You can borrow up to your available savings balance.</p>

          <button
            className="loan-btn"
            onClick={() => navigate("/loan-application")}
          >
            Apply Loan
          </button>
        </div>
      </main>
    </div>
  );
}

export default Savings;
