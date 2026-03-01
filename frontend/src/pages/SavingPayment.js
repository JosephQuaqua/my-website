import { useState } from "react";
import { useNavigate } from "react-router-dom";
import upiScanner from "../assets/upi-scanner.png";
import "../styles/payment.css";

function SavingPayment() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Cash");
  const [paymentId, setPaymentId] = useState("");
  const [preview, setPreview] = useState(null);
  const [showQR, setShowQR] = useState(false);

  /* DOWNLOAD QR ONLY */
  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = upiScanner;
    link.download = "UPI_QR.png";
    link.click();
  };

  const handleSubmit = () => {
    if (!amount) return alert("Enter amount");

    if (method === "Online" && !paymentId)
      return alert("Enter transaction ID");

    alert("Payment Submitted ✅ Awaiting Verification");
    navigate("/savings");
  };

  return (
    <div className="payment-page">

      <div className="payment-card">

        <div className="header">
          <h2>Savings Payment</h2>
          <p>Secure contribution payment</p>
        </div>

        {/* DATE */}
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={today} readOnly />
        </div>

        {/* AMOUNT */}
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="₹ Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* METHOD */}
        <div className="form-group">
          <label>Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>Cash</option>
            <option>Online</option>
          </select>
        </div>

        {/* ONLINE PAYMENT */}
        {method === "Online" && (
          <div className="upi-card">

            <div className="qr-area">

              {/* CLICK = PREVIEW ONLY */}
              <img
                src={upiScanner}
                alt="QR"
                onClick={() => setShowQR(true)}
              />
              <br />

              {/* DOWNLOAD BUTTON */}
              <button onClick={downloadQR}>
                Download QR
              </button>

            </div>

            <p className="upi-id">
              UPI ID: <strong>josephquaqua2004@oksbi</strong>
            </p>

            {/* TRANSACTION */}
            <div className="form-group">
              <label>Transaction ID</label>
              <input
                type="text"
                placeholder="Enter transaction reference"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
              />
            </div>

            {/* SCREENSHOT */}
            <div className="form-group">
              <label>Upload Screenshot</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setPreview(
                    URL.createObjectURL(e.target.files[0])
                  )
                }
              />
            </div>

            {preview && (
              <div className="preview">
                <img src={preview} alt="preview" />
              </div>
            )}

          </div>
        )}

         <button
          className="back-btn"
          onClick={() => navigate("/savings")}
        >
          Back
        </button>

        {/* BUTTONS */}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Payment
        </button>

       

      </div>

      {/* QR MODAL PREVIEW */}
      {showQR && (
        <div
          className="qr-modal"
          onClick={() => setShowQR(false)}
        >
          <img src={upiScanner} alt="QR Large" />
        </div>
      )}

    </div>
  );
}

export default SavingPayment;