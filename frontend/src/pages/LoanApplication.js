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

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid loan amount");
      return;
    }

    if (mode === "Online" && !details) {
      alert("Provide bank/UPI details");
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

      {mode === "Cash" && (
        <input
          type="text"
          placeholder="Pickup Branch Location"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      )}

      {mode === "Online" && (
        <input
          type="text"
          placeholder="Bank / UPI Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      )}

      <button onClick={handleSubmit}>
        Submit Loan Application
      </button>
    </div>
  );
}

export default LoanApplication;
