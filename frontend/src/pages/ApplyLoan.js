import { useState } from "react";
import "../styles/applyLoan.css";

function ApplyLoan() {
  const [formData, setFormData] = useState({
    amount: "",
    duration: "",
    collateral: "",
    receiveMode: "",
    upiId: "",
    upiImage: null,
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert("You must accept the agreement before applying.");
      return;
    }

    if (formData.receiveMode === "online") {
      if (!formData.upiId || !formData.upiImage) {
        alert("Please provide UPI ID and upload your UPI QR image.");
        return;
      }
    }

    alert("Loan Application Submitted (Demo Mode)");
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h2>Apply for Loan</h2>

        <form onSubmit={handleSubmit}>

          <label>Loan Amount (₹)</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <label>Duration</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
            <option value="">Select Duration</option>
            <option value="15days">Less than 15 Days</option>
            <option value="1month">1 Month</option>
          </select>

          <label>Collateral</label>
          <input
            type="text"
            name="collateral"
            placeholder="Enter collateral details"
            value={formData.collateral}
            onChange={handleChange}
            required
          />

          <label>Mode of Receiving</label>
          <select
            name="receiveMode"
            value={formData.receiveMode}
            onChange={handleChange}
            required
          >
            <option value="">Select Mode</option>
            <option value="online">Online (UPI)</option>
            <option value="cash">Cash</option>
          </select>

          {/* Show only if online selected */}
          {formData.receiveMode === "online" && (
            <div className="upi-section">
              <label>UPI ID</label>
              <input
                type="text"
                name="upiId"
                placeholder="example@upi"
                value={formData.upiId}
                onChange={handleChange}
              />

              <label>Upload UPI QR Image</label>
              <input
                type="file"
                name="upiImage"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
          )}

          <div className="agreement">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            <span>I agree to the loan terms and conditions</span>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}

export default ApplyLoan;
