import { useState } from "react";
import { Link } from "react-router-dom";
import "../auth.css";

export default function ForgotPassword() {
  const [otpSent, setOtpSent] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <p>Enter your registered email or WhatsApp number</p>

        {!otpSent && (
          <>
            <input
              type="text"
              placeholder="Email or WhatsApp Number"
              className="auth-input"
            />

            <button
              className="auth-button"
              onClick={() => setOtpSent(true)}
            >
              Send OTP
            </button>
          </>
        )}

        {otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="auth-input"
            />

            <input
              type="password"
              placeholder="New Password"
              className="auth-input"
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="auth-input"
            />

            <button className="auth-button">
              Reset Password
            </button>
          </>
        )}

        <div className="auth-footer">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}
