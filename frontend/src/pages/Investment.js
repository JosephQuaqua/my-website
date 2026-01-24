import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/investment.css";

function Investment() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock Data
  const portfolio = {
    totalInvested: "₹50,000",
    currentValue: "₹55,200",
    returns: "+10.4%",
    status: "Active", // Active, Pending, Needs Attention
  };

  const notifications = [
    { id: 1, type: "success", message: "Interest of ₹500 credited to your account", time: "2 hours ago" },
    { id: 2, type: "info", message: "New Gold Plan available! Check it out.", time: "1 day ago" },
    { id: 3, type: "warning", message: "KYC update required for seamless withdrawals", time: "3 days ago" },
  ];

  const investmentPlans = [
    { id: 1, name: "Gold Growth", min: "₹5,000", return: "12% p.a.", risk: "Low" },
    { id: 2, name: "Crypto Index", min: "₹10,000", return: "25% p.a.", risk: "High" },
    { id: 3, name: "Real Estate Bond", min: "₹50,000", return: "9% p.a.", risk: "Medium" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="page-container">
      <Sidebar handleLogout={handleLogout} />

      <main className="main-content investment-page">
        <header className="topbar">
          <div className="page-title">
            <h1>Investment Portfolio</h1>
            <p>Track and manage your wealth</p>
          </div>
          <div className="user-profile">
             <div className="notification-bell">
                <span className="bell-icon">🔔</span>
                <span className="badge">3</span>
             </div>
            <img src="https://i.pravatar.cc/150?img=12" alt="User" />
            <span>Alex Doe</span>
          </div>
        </header>

        <div className="investment-content">
            {/* Status Section */}
            <section className="status-banner">
                <div className={`status-indicator ${portfolio.status.toLowerCase()}`}>
                    <span className="dot"></span>
                    Status: <strong>{portfolio.status}</strong>
                </div>
                <div className="quick-stats">
                    <div className="stat-item">
                        <span className="label">Total Invested</span>
                        <span className="value">{portfolio.totalInvested}</span>
                    </div>
                     <div className="stat-item">
                        <span className="label">Current Value</span>
                        <span className="value highlight">{portfolio.currentValue}</span>
                    </div>
                     <div className="stat-item">
                        <span className="label">Returns</span>
                        <span className="value positive">{portfolio.returns}</span>
                    </div>
                </div>
            </section>

            <div className="dashboard-grid">
                {/* Notifications Panel */}
                <div className="panel notifications-panel">
                    <h3>Recent Notifications</h3>
                    <div className="notification-list">
                        {notifications.map(notif => (
                            <div key={notif.id} className={`notification-item ${notif.type}`}>
                                <div className="notif-icon">
                                    {notif.type === 'success' && '💰'}
                                    {notif.type === 'info' && '📢'}
                                    {notif.type === 'warning' && '⚠️'}
                                </div>
                                <div className="notif-content">
                                    <p>{notif.message}</p>
                                    <span className="time">{notif.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Investment Opportunities */}
                <div className="panel plans-panel">
                    <h3>Recommended Plans</h3>
                    <div className="plans-list">
                        {investmentPlans.map(plan => (
                            <div key={plan.id} className="plan-card">
                                <div className="plan-header">
                                    <h4>{plan.name}</h4>
                                    <span className={`risk-tag ${plan.risk.toLowerCase()}`}>{plan.risk} Risk</span>
                                </div>
                                <div className="plan-details">
                                    <div><small>Min Inv.</small> <strong>{plan.min}</strong></div>
                                    <div><small>Returns</small> <strong className="positive">{plan.return}</strong></div>
                                </div>
                                <button className="btn-invest">View Details</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Investment;
