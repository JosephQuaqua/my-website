import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/payment.css";

function LoanApplication() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [mode, setMode] = useState("Cash");
  const [details, setDetails] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiImage, setUpiImage] = useState(null);

  const handleSubmit = () => {
    if (!amount || amount <= 0)
      return alert("Enter valid loan amount");

    if (mode === "Online" && (!details || !upiId))
      return alert("Provide bank & UPI details");

    if (mode === "Cash" && !details)
      return alert("Provide pickup branch");

    alert("Loan Application Submitted ✅");
    navigate("/loan");
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        {/* HEADER */}
        <div className="header">
          <h2>Loan Application</h2>
          <p>Apply securely using your savings balance</p>
        </div>

        {/* AMOUNT */}
        <div className="form-group">
          <label>Loan Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* DATE */}
        <div className="form-group">
          <label>Application Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* MODE */}
        <div className="form-group">
          <label>Disbursement Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="Cash">Cash Pickup</option>
            <option value="Online">Online Transfer</option>
          </select>
        </div>

        {/* CASH */}
        {mode === "Cash" && (
          <div className="form-group">
            <label>Pickup Branch</label>
            <input
              type="text"
              placeholder="Enter branch location"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
        )}

        {/* ONLINE */}
        {mode === "Online" && (
          <div className="upi-card">

            <div className="form-group">
              <label>Bank / Account Details</label>
              <input
                type="text"
                placeholder="Bank name or account"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>UPI ID</label>
              <input
                type="text"
                placeholder="example@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Upload UPI QR</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setUpiImage(e.target.files[0])
                }
              />
            </div>

            {upiImage && (
              <div className="preview">
                <img
                  src={URL.createObjectURL(upiImage)}
                  alt="preview"
                />
              </div>
            )}
          </div>
        )}

         <button
          className="back_LA-btn"
          onClick={() => navigate("/savings")}
        >
          Back to Savings
        </button>


        {/* BUTTONS */}
        <button className="submit_LA-btn" onClick={handleSubmit}>
          Submit Loan Application
        </button>

       
      </div>
    </div>
  );
}

export default LoanApplication;