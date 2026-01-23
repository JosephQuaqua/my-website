import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import "../styles/loan.css";

function Loan() {
  const navigate = useNavigate();

  // Dummy Loan Data (You will connect backend later)
  const loanAmount = 50000;
  const amountPaid = 20000;
  const interestRate = 5;
  const dueDate = "2026-02-15";

  const remainingBalance = loanAmount - amountPaid;

  const today = new Date();
  const due = new Date(dueDate);
  const timeDiff = due - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  const loanStatus = daysLeft < 0 ? "overdue" : "active";

  return (
    <div className="loan-container">
      <div className="loan-header">
        <h2>
          Loan Dashboard
          <span className={`status-badge ${loanStatus}`}>
            {loanStatus === "active" ? "Active Loan" : "Overdue"}
          </span>
        </h2>
        <p>Manage your student loan and track repayments.</p>
      </div>

      {/* Loan Cards */}
      <div className="loan-cards">
        <div className="loan-card">
          <h4>Total Loan Amount</h4>
          <h2>₹{loanAmount.toLocaleString()}</h2>
        </div>

        <div className="loan-card">
          <h4>Amount Paid</h4>
          <h2>₹{amountPaid.toLocaleString()}</h2>
        </div>

        <div className="loan-card">
          <h4>Remaining Balance</h4>
          <h2 className="danger">₹{remainingBalance.toLocaleString()}</h2>
        </div>

        <div className="loan-card">
          <h4>Interest Rate</h4>
          <h2>{interestRate}%</h2>
        </div>
      </div>

      {/* Countdown */}
      <div className={`countdown ${loanStatus}`}>
        {loanStatus === "active"
          ? `Due in ${daysLeft} days`
          : `Loan Overdue by ${Math.abs(daysLeft)} days`}
      </div>

      {/* Actions */}
      <div className="loan-actions">
        <button
          className="apply-btn"
          onClick={() => navigate("/apply-loan")}
        >
          Apply New Loan
        </button>

        <button
          className="pay-btn"
          onClick={() => navigate("/pay-loan")}
        >
          Pay Loan
        </button>
      </div>

      {/* Info Section */}
      <div className="loan-info">
        <h3>Loan Information</h3>
        <ul>
          <li>Interest Rate: {interestRate}%</li>
          <li>Due Date: {dueDate}</li>
          <li>Minimum Payment required before due date.</li>
          <li>Late payment may attract penalty charges.</li>
        </ul>
      </div>
    </div>
  );
}

export default Loan;
