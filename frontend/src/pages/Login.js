import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [error,setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if(!email || !password){
      setError("Please enter email and password");
      return;
    }

    if(email==="student@test.com" && password==="123456"){
      localStorage.setItem("token","studentToken123");
      localStorage.setItem("user","Student");
      navigate("/dashboard");
    }else{
      setError("Invalid login credentials");
    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h2>Student Finance</h2>
          <p>Secure account login</p>
        </div>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="student@email.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group password-group">
            <label>Password</label>

            <input
              type={showPassword ? "text":"password"}
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <span
              className="toggle-pass"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>

          </div>

          <button className="login-btn">
            Login Securely
          </button>

        </form>

        <div className="login-links">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <div className="login-footer">
          Don’t have account?
          <Link to="/register"> Register</Link>
        </div>

      </div>

    </div>
  );
}