import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/payloan.css";

function PayLoan() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (method === "cash") {
      setStatus("pending");
    }

    if (method === "online") {
      if (!paymentId || !screenshot) {
        alert("Upload screenshot and enter payment ID");
        return;
      }
      setStatus("pending");
    }
  };

  return (
    <div className="pay-container">
      <h2>Loan Payment</h2>

      <form className="pay-form" onSubmit={handleSubmit}>
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
          <>
            <label>UPI ID: studentfinance@upi</label>

            <label>Payment ID</label>
            <input
              type="text"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
            />

            <label>Upload Screenshot</label>
            <input
              type="file"
              onChange={(e) => setScreenshot(e.target.files[0])}
            />
          </>
        )}

        <button type="submit">Submit Payment</button>
      </form>

      {status === "pending" && (
        <div className="payment-status">
          Payment Submitted. Waiting for Admin Approval.
        </div>
      )}

      <button className="back-btn" onClick={() => navigate("/loan")}>
        Back to Loan
      </button>
    </div>
  );
}

export default PayLoan;
