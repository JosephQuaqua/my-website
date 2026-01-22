import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loan.css";

function Loan() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [interest, setInterest] = useState(0);
  const [total, setTotal] = useState(0);

  const [loanStatus, setLoanStatus] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  // 🔹 Interest Calculation
  useEffect(() => {
    if (!amount || !duration) {
      setInterest(0);
      setTotal(0);
      return;
    }

    let rate = 0;

    if (amount >= 500 && amount <= 10000) {
      rate = duration <= 15 ? 0.08 : 0.15;
    } else if (amount >= 11000 && amount <= 250000) {
      rate = duration <= 15 ? 0.06 : 0.13;
    }

    const calculatedInterest = amount * rate;
    setInterest(calculatedInterest);
    setTotal(amount + calculatedInterest);
  }, [amount, duration]);

  // 🔹 Countdown Timer
  useEffect(() => {
    if (!dueDate) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const distance = dueDate - now;

      if (distance <= 0) {
        setLoanStatus("overdue");
        setTimeLeft("0d 0h");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setTimeLeft(`${days}d ${hours}h`);
    }, 1000);

    return () => clearInterval(interval);
  }, [dueDate]);

  const handleApply = (e) => {
    e.preventDefault();

    if (loanStatus === "active") {
      alert("You already have an active loan.");
      return;
    }

    setLoanStatus("pending");

    // Simulate admin approval
    setTimeout(() => {
      setLoanStatus("active");
      setDueDate(Date.now() + duration * 24 * 60 * 60 * 1000);
    }, 3000);
  };

  // 🔹 Progress %
  const getProgress = () => {
    if (!dueDate) return 0;

    const totalDuration = duration * 24 * 60 * 60 * 1000;
    const elapsed = Date.now() - (dueDate - totalDuration);

    return Math.min((elapsed / totalDuration) * 100, 100);
  };

  return (
    <div className="loan-container">
      <h2>Student Loan Service</h2>

      {loanStatus !== "active" && (
        <form className="loan-form" onSubmit={handleApply}>
          <label>Loan Amount</label>
          <input
            type="number"
            min="500"
            value={amount || ""}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />

          <label>Duration</label>
          <select
            value={duration || ""}
            onChange={(e) => setDuration(Number(e.target.value))}
            required
          >
            <option value="">Select</option>
            <option value={15}>Less than 15 days</option>
            <option value={30}>1 Month</option>
          </select>

          <button type="submit">Apply Loan</button>
        </form>
      )}

      {loanStatus === "pending" && (
        <div className="loan-status pending">
          Loan Pending Approval...
        </div>
      )}

      {loanStatus === "active" && (
        <div className="loan-dashboard">
          <h3>Active Loan</h3>

          <div className="loan-summary">
            <p><strong>Amount:</strong> ₹ {amount}</p>
            <p><strong>Interest:</strong> ₹ {interest.toFixed(2)}</p>
            <p><strong>Total Payable:</strong> ₹ {total.toFixed(2)}</p>
            <p><strong>Time Left:</strong> {timeLeft}</p>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${getProgress()}%` }}
            />
          </div>

          <button
            className="pay-btn"
            onClick={() => navigate("/pay-loan")}
          >
            Pay Loan
          </button>
        </div>
      )}

      {loanStatus === "overdue" && (
        <div className="loan-status overdue">
          Loan Overdue! Extra interest may apply.
        </div>
      )}
    </div>
  );
}

export default Loan;
