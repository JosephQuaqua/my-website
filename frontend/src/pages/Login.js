import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle visibility
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (email === "student@test.com" && password === "123456") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Student Login</h2>
        <p>Access your student loan account</p>

        {error && <div className="alert alert-error">{error}</div>}

        <input
          className="auth-input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Container */}
        <div className="password-input-wrapper" style={{ position: 'relative', width: '100%' }}>
          <input
            className="auth-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', paddingRight: '60px' }} // Space for the text
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="auth-button" onClick={handleLogin}>
          Login
        </button>

        <div className="auth-links">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <div className="auth-footer">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}