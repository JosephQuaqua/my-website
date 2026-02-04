import { useState } from "react";
import { useNavigate } from "react-router-dom";
import upiScanner from "../assets/upi-scanner.png"; 
import "../styles/payment.css";

function SavingPayment() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  // State Variables
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Cash");
  const [paymentId, setPaymentId] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (method === "Online" && !paymentId) {
      alert("Please enter your Payment ID");
      return;
    }

    alert("Saving submitted. Status: Pending Admin Verification");
    navigate("/savings");
  };

  return (
    <div className="payment-container">
      <h2>Savings Payment Application</h2>

      {/* Date Input */}
      <input type="date" value={today} readOnly />

      {/* Amount Input */}
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Payment Method Selector */}
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
      </select>

      {/* UPI Section (Conditional) */}
      {method === "Online" && (
        <div className="upi-section">
          <h4>Pay via UPI</h4>
          <div className="upi-box">
            <p><strong>UPI ID:</strong> yourname@upi</p>
            
            <img 
              src={upiScanner} 
              alt="UPI QR Code" 
              className="upi-qr" 
            />

            <label className="input-label">Payment ID / Transaction ID</label>
            <input
              type="text"
              placeholder="Enter ID here"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
            />

            <label className="input-label">Upload Payment Screenshot</label>
            <input
              type="file"
              accept="image/*"
              className="file-input"
              onChange={(e) => setScreenshot(e.target.files[0])}
            />

            <p className="note">
              After payment, click Submit Saving. Admin will verify transaction.
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Saving
      </button>

      <button className="back-btn" onClick={() => navigate("/savings")}>
        Back to Savings
      </button>
    </div>
  );
}

export default SavingPayment;