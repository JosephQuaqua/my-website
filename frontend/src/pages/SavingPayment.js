import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/payment.css";

function SavingPayment() {
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Cash");

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid amount");
      return;
    }

    alert("Saving submitted. Status: Pending Admin Verification");
    navigate("/savings");
  };

  return (
    <div className="payment-container">
      <h2>Savings Payment Application</h2>

      {/* Date */}
      <input type="date" value={today} readOnly />

      {/* Amount */}
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Payment Method */}
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
      </select>

      {/* Conditional Section */}
      {method === "Online" && (
        <div className="upi-section">
          <h4>Pay via UPI</h4>

          <div className="upi-box">
            <p><strong>UPI ID:</strong> yourname@upi</p>

            <img
              src="../assets/upi-qr.png"
              alt="UPI QR Code"
              className="upi-qr"
            />

            <p className="note">
              After payment, click Submit Saving. Admin will verify transaction.
            </p>
          </div>
        </div>
      )}

      <button onClick={handleSubmit}>
        Submit Saving
      </button>
    </div>
  );
}

export default SavingPayment;
