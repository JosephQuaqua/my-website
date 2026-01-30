import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import "../styles/exchange.css";

function Exchange() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [result, setResult] = useState(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = parseFloat(amount);

    if (!numericAmount || numericAmount <= 0) {
      alert("Enter valid amount");
      return;
    }

    const payable = (numericAmount * 1.02).toFixed(2);

    setResult({
      amount: numericAmount.toFixed(2),
      payable,
      status: "Pending Payment"
    });

    setShowForm(false);
  };

  return (
    <div className="page-container">

      {/* Sidebar */}
      <Sidebar
        handleLogout={handleLogout}
        isOpen={drawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
      />

      <main className="main-content">

        {/* Topbar */}
        <header className="topbar">
          <button className="menu-btn" onClick={toggleDrawer}>
            ☰
          </button>

          <div className="user-profile">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
            />
            <span>Welcome, Student</span>
          </div>
        </header>

        <section className="content-area">
          <h2>Exchange Dashboard</h2>

          <div className="exchange-cards">

            <div className="exchange-card">
              <h4>Total Applied</h4>
              <p>₹ {result ? result.amount : "0.00"}</p>
            </div>

            <div className="exchange-card">
              <h4>Total Payable (+2%)</h4>
              <p>₹ {result ? result.payable : "0.00"}</p>
            </div>

            <div className="exchange-card">
              <h4>Status</h4>
              <p>
                {result ? result.status : "No Application"}
              </p>
            </div>

          </div>

          <button
            className="applyexchange-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Apply for Exchange"}
          </button>

          {showForm && (
            <form className="exchange-form" onSubmit={handleSubmit}>

              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />

              <label className="upload-label">
                Upload Your UPI QR Screenshot
                <input type="file" required />
              </label>

              <button type="submit">Submit Application</button>

            </form>
          )}

        </section>

      </main>
    </div>
  );
}

export default Exchange;
