import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/payloan.css";
import upiQR from "../assets/upi-qr.png";

function PayLoan() {
  const navigate = useNavigate();

  // Simulated loan data (later from backend)
  const totalLoan = 10000;
  const [paidAmount, setPaidAmount] = useState(2000); // already paid
  const remainingBalance = totalLoan - paidAmount;

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [status, setStatus] = useState(null);
  const [history, setHistory] = useState([
    { id: 1, amount: 2000, method: "Online", status: "Approved" }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (amount > remainingBalance) {
      alert("You cannot pay more than your remaining balance.");
      return;
    }

    if (method === "online" && (!paymentId || !screenshot)) {
      alert("Upload screenshot and enter payment ID");
      return;
    }

    // Add to history
    const newPayment = {
      id: history.length + 1,
      amount: Number(amount),
      method: method === "cash" ? "Cash" : "Online",
      status: "Pending"
    };

    setHistory([...history, newPayment]);
    setStatus("pending");
    setAmount("");
  };

  return (
    <div className="pay-container">
      <div className="pay-card">
        <h2>Loan Repayment</h2>

        <div className="loan-summary">
          <p><strong>Total Loan:</strong> ₹{totalLoan}</p>
          <p><strong>Already Paid:</strong> ₹{paidAmount}</p>
          <p className="remaining"><strong>Remaining:</strong> ₹{remainingBalance}</p>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Enter Amount to Pay (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />

          <label>Select Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="cash">Cash (Offline)</option>
            <option value="online">Online (UPI)</option>
          </select>

          {method === "online" && (
            <div className="upi-section">
              <h4>Scan & Pay</h4>
              <img src={upiQR} alt="UPI QR" className="upi-qr" />
              <p><strong>UPI ID:</strong> studentfinance@upi</p>

              <label>Payment ID</label>
              <input
                type="text"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
              />

              <label>Upload Screenshot</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setScreenshot(e.target.files[0])}
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            Submit Payment
          </button>
        </form>

        {status === "pending" && (
          <div className="payment-status">
            Payment Submitted. Waiting for Admin Approval.
          </div>
        )}

        {/* PAYMENT HISTORY */}
        <div className="payment-history">
          <h3>Payment History</h3>

          {history.length === 0 ? (
            <p>No payments yet.</p>
          ) : (
            history.map((item) => (
              <div key={item.id} className="history-item">
                <span>₹{item.amount}</span>
                <span>{item.method}</span>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </div>
            ))
          )}
        </div>

        <button className="back-btn" onClick={() => navigate("/loan")}>
          Back to Loan
        </button>
      </div>
    </div>
  );
}

export default PayLoan;
