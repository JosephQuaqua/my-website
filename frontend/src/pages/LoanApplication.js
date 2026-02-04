import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/payment.css";

function LoanApplication() {
  const navigate = useNavigate();

  // State Variables
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [mode, setMode] = useState("Cash");
  const [details, setDetails] = useState("");
  const [upiId, setUpiId] = useState(""); // Unified state
  const [upiImage, setUpiImage] = useState(null); // Unified state

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid loan amount");
      return;
    }

    if (mode === "Online" && (!details || !upiId)) {
      alert("Provide bank/UPI details and UPI ID");
      return;
    }

    if (mode === "Cash" && !details) {
      alert("Provide pickup branch");
      return;
    }

    alert("Loan Application Submitted (Pending Approval)");
    navigate("/loan");
  };

  return (
    <div className="payment-container">
      <h2>Loan Application Form</h2>

      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="Cash">Cash</option>
        <option value="Online">Online</option>
      </select>

      {/* Cash Section */}
      {mode === "Cash" && (
        <input
          type="text"
          placeholder="Pickup Branch Location"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      )}

      {/* Online Section */}
      {mode === "Online" && (
        <div className="upi-section">
          <input
            type="text"
            placeholder="Bank Name / Account Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <div className="upi-box">
            <label className="input-label">UPI ID</label>
            <input
              type="text"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />

            <label className="input-label">Upload your UPI QR Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setUpiImage(e.target.files[0])}
            />
          </div>
        </div>
      )}

      <button className="submit-btn" onClick={handleSubmit}>
        Submit Loan Application
      </button>

      {/* Back Button with the Gray Style */}
      <button className="back-btn" onClick={() => navigate("/savings")}>
        Back to Savings
      </button>
    </div>
  );
}

export default LoanApplication;