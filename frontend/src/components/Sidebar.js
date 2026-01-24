import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Sidebar({ handleLogout, isOpen, closeDrawer }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeDrawer}></div>}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="logo">Student Finance</h2>

        <ul>
          <li><Link to="/dashboard" onClick={closeDrawer}>Dashboard</Link></li>
          <li><Link to="/savings" onClick={closeDrawer}>Savings</Link></li>
          <li><Link to="/loan" onClick={closeDrawer}>Loan</Link></li>
          <li><Link to="/investment" onClick={closeDrawer}>Investment</Link></li>
          <li><Link to="/exchange" onClick={closeDrawer}>Exchange</Link></li>
         
          
          <li className="logout" onClick={handleLogout}>Logout</li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
