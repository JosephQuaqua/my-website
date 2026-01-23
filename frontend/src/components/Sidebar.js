import { Link } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar({ handleLogout }) {
  return (
    <aside className="sidebar">
      <h2 className="logo">Student Finance</h2>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/savings">Savings</Link>
        </li>
        <li>
          <Link to="/loan">Loan</Link>
        </li>
        <li>
          <Link to="/investment">Investment</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/exchange">Exchange Service</Link>
        </li>
        <li>
          <Link to="/monitors">Monitors</Link>
        </li>

        <li className="logout" onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
