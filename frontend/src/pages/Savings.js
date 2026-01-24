import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/savings.css";

function Savings() {
  const navigate = useNavigate();

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const fakeData = {
    balance: 12500,
    savingType: "Monthly",
    duration: "3 Months",
    status: "Active",
  };

  const [loanAmount, setLoanAmount] = useState("");

  const handleLoanApply = () => {
    const amount = Number(loanAmount);

    if (fakeData.balance <= 0) {
      alert("You cannot apply for a loan without savings.");
      return;
    }

    if (!amount || amount <= 0) {
      alert("Enter a valid loan amount.");
      return;
    }

    if (amount > fakeData.balance) {
      alert("Loan amount cannot be more than your savings balance.");
      return;
    }

    alert("Loan request submitted successfully!");
    navigate("/loan");
  };

  return (
    <div className="page-container">

      {/* Sidebar */}
      <Sidebar
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
        handleLogout={handleLogout}
      />

      <main className="main-content">

        {/* Topbar with Toggle Button */}
        <header className="topbar">
          <button className="menu-btn" onClick={toggleDrawer}>
            ☰
          </button>
          <h2>Savings Account</h2>
        </header>

        {/* Savings Cards */}
        <div className="savings-cards">
          <div className="card">
            <h4>Current Balance</h4>
            <p>₹ {fakeData.balance}</p>
          </div>

          <div className="card">
            <h4>Saving Type</h4>
            <p>{fakeData.savingType}</p>
          </div>

          <div className="card">
            <h4>Duration</h4>
            <p>{fakeData.duration}</p>
          </div>

          <div className="card">
            <h4>Status</h4>
            <p className="status">{fakeData.status}</p>
          </div>
        </div>

        <div className="actions">
          <button className="primary-btn">Add Savings</button>
          <button className="secondary-btn">View Transactions</button>
        </div>

        <div className="loan-from-savings">
          <h3>Apply Loan From Savings</h3>
          <p>You can borrow up to your available savings balance.</p>

          <input
            type="number"
            placeholder="Enter Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          

          <button className="loan-btn" onClick={handleLoanApply}>
            Apply Loan
          </button>
        </div>

      </main>
    </div>
  );
}

export default Savings;
