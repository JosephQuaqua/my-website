import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";



function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear stored login data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">Student Finance</h2>
        <ul>
          <li>
  <Link to="/savings">Savings</Link>
</li>
          <li>
  <Link to="/loan">Loan</Link>
</li>
          <li>Investment</li>
          <li>Profile</li>
          <li>Exchange Service (Online for cash)</li>
          <li>Monitors</li>
          <li className="logout" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h3>Welcome, Student</h3>
        </header>

        <section className="content-area">
          <h2>Dashboard Overview</h2>
          <p>Select a service from the sidebar.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
