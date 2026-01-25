import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import "../styles/investment.css";

function Investment() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Forms State
  const [investAmount, setInvestAmount] = useState("");
  const [investDuration, setInvestDuration] = useState("3");
  const [investRefCode, setInvestRefCode] = useState("");
  const [investScreenshot, setInvestScreenshot] = useState(null);
  
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawUpi, setWithdrawUpi] = useState("");
  const [withdrawQr, setWithdrawQr] = useState(null);
  const [withdrawMode, setWithdrawMode] = useState("online"); // 'online' or 'cash'

  // Modal States
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [showChartModal, setShowChartModal] = useState(false);
  const [showNotifModal, setShowNotifModal] = useState(false);
  const [showInterestModal, setShowInterestModal] = useState(false); // New State

  // Mock Notifications Data
  const [notifications, setNotifications] = useState([
    { id: 1, type: "success", title: "Interest Credited", msg: "You received ₹250 interest.", time: "2 hrs ago" },
    { id: 2, type: "alert", title: "New Feature", msg: "Withdrawal options are now live.", time: "1 day ago" },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleInvest = (e) => {
    e.preventDefault();
    if (!investAmount || !investRefCode || !investScreenshot) {
        return alert("Please complete all payment details.");
    }
    
    // Simulate API Call
    const newNotif = {
        id: Date.now(),
        type: "success",
        title: "Investment Initiated",
        msg: `Investment of ₹${investAmount} (Ref: ${investRefCode}) submitted for verification.`,
        time: "Just now"
    };
    
    setNotifications([newNotif, ...notifications]);
    alert(`Success: Investment submitted for verification!`);
    setInvestAmount("");
    setInvestRefCode("");
    setInvestScreenshot(null);
  };

  const handleWithdraw = (e) => {
      e.preventDefault();
      
      if (!withdrawAmount) return alert("Please enter withdrawal amount.");
      
      if (withdrawMode === 'online' && !withdrawUpi && !withdrawQr) {
          return alert("Please provide valid UPI ID or upload QR Code.");
      }
      
      const newNotif = {
          id: Date.now(),
          type: "alert",
          title: "Withdrawal Request",
          msg: `Request to withdraw ₹${withdrawAmount} via ${withdrawMode === 'online' ? 'Online Transfer' : 'Cash Payout'} is pending approval.`,
          time: "Just now"
      };

      setNotifications([newNotif, ...notifications]);
      alert(`Request Submitted: Withdrawal of ₹${withdrawAmount} via ${withdrawMode} is pending.`);
      setWithdrawAmount("");
      setWithdrawUpi("");
      setWithdrawQr(null);
  };

  return (
    <div className="page-container">
      {/* Navigation Drawer */}
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
          
          <div style={{display: "flex", alignItems: "center"}}>

            {/* Notification Bell */}
            <div className="notification-container" onClick={() => setShowNotifModal(true)}>
                <span className="notification-bell">🔔</span>
                {notifications.length > 0 && <span className="notification-badge">{notifications.length}</span>}
            </div>

            <div className="user-profile">
                <img src="https://i.pravatar.cc/150?img=3" alt="User" />
                <span>Welcome, Investor</span>
            </div>
          </div>
        </header>

        <section className="content-area">
          <div className="investment-header">
            <h2>Investment Management</h2>
            <p>Track, Invest, and Withdraw your earnings efficiently.</p>
          </div>

          {/* Investment Statistics */}
          <div className="investment-stats">
            {/* Total Invested - Clickable */}
            <div 
                className="stat-card clickable" 
                onClick={() => setShowHistoryModal(true)}
            >
              <div className="stat-icon bg-blue">💰</div>
              <div className="stat-info">
                <h3>Total Invested</h3>
                <p>₹50,000</p>
              </div>
            </div>
            
            {/* Current Value - Clickable */}
            <div 
                className="stat-card clickable" 
                onClick={() => setShowChartModal(true)}
            >
              <div className="stat-icon bg-green">📈</div>
              <div className="stat-info">
                <h3>Current Value</h3>
                <p>₹54,230</p>
              </div>
            </div>

            {/* Interest Rate - Clickable */}
            <div 
                className="stat-card clickable"
                onClick={() => setShowInterestModal(true)}
            >
              <div className="stat-icon bg-purple">💎</div>
              <div className="stat-info">
                <h3>Interest Rate</h3>
                <p>15% / 3 months</p>
              </div>
            </div>
          </div>

          {/* Investment Actions Grid */}
          <h3 className="section-title">Actions & Status</h3>
          <div className="plans-grid">
            
            {/* Invest Money Form */}
            <div className="plan-card silver">
              <div className="plan-header">
                <h3>Invest New Funds</h3>
                <span className="roi">Fast & Secure</span>
              </div>
              
              <form onSubmit={handleInvest}>
                <div className="invest-input-group">
                    <label className="invest-input-label">Investment Amount (₹)</label>
                    <input 
                        type="number" 
                        className="invest-input" 
                        placeholder="Min ₹500"
                        value={investAmount}
                        onChange={(e) => setInvestAmount(e.target.value)}
                        required
                    />
                </div>

                <div className="invest-input-group">
                    <label className="invest-input-label">Duration</label>
                    <select 
                        className="invest-select"
                        value={investDuration}
                        onChange={(e) => setInvestDuration(e.target.value)}
                    >
                        <option value="3">3 Months (15% Returns)</option>
                        <option value="6">6 Months (35% Returns)</option>
                        <option value="12">1 Year (80% Returns)</option>
                    </select>
                </div>
                
                <div className="invest-input-group">
                    <label className="invest-input-label">Payment Reference Code (12 Digits)</label>
                    <input 
                        type="text" 
                        className="invest-input" 
                        placeholder="Enter 12-digit UTR/Ref Code"
                        maxLength="12"
                        value={investRefCode}
                        onChange={(e) => setInvestRefCode(e.target.value)}
                        required
                    />
                </div>

                <div className="invest-input-group">
                    <label className="invest-input-label">Upload Payment Screenshot</label>
                    <input 
                        type="file" 
                        className="invest-input" 
                        accept="image/*"
                        onChange={(e) => setInvestScreenshot(e.target.files[0])}
                        required
                    />
                </div>
                
                <button type="submit" className="invest-btn">Confirm Investment</button>
              </form>
            </div>

            {/* Withdraw Money Form */}
            <div className="plan-card withdraw">
                <div className="plan-header">
                    <h3>Withdraw Funds</h3>
                    <span className="roi">Payout Request</span>
                </div>

                <form onSubmit={handleWithdraw}>
                    <div className="invest-input-group">
                         <label className="invest-input-label">Select Withdrawal Mode</label>
                         <div className="toggle-container">
                             <button 
                                type="button" 
                                className={`toggle-btn ${withdrawMode === 'online' ? 'active' : ''}`}
                                onClick={() => setWithdrawMode('online')}
                             >
                                 Online Transfer
                             </button>
                             <button 
                                type="button" 
                                className={`toggle-btn ${withdrawMode === 'cash' ? 'active' : ''}`}
                                onClick={() => setWithdrawMode('cash')}
                             >
                                 Cash Payout
                             </button>
                         </div>
                    </div>

                    <div className="invest-input-group">
                        <label className="invest-input-label">Withdrawal Amount (₹)</label>
                        <input 
                            type="number" 
                            className="invest-input" 
                            placeholder="Available: ₹4,230"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            required
                        />
                    </div>

                    {withdrawMode === 'online' && (
                        <>
                            <div className="invest-input-group">
                                <label className="invest-input-label">UPI ID (e.g., user@okhdfcbank)</label>
                                <input 
                                    type="text" 
                                    className="invest-input" 
                                    placeholder="Enter UPI ID"
                                    value={withdrawUpi}
                                    onChange={(e) => setWithdrawUpi(e.target.value)}
                                />
                            </div>

                            <div className="invest-input-group" style={{textAlign: "center", margin: "10px 0"}}>
                                <span style={{color: "#64748b", fontSize: "14px"}}>— OR —</span>
                            </div>

                            <div className="invest-input-group">
                                <label className="invest-input-label">Upload QR Code</label>
                                <input 
                                    type="file" 
                                    className="invest-input" 
                                    accept="image/*"
                                    onChange={(e) => setWithdrawQr(e.target.files[0])}
                                />
                            </div>
                        </>
                    )}
                    
                    {withdrawMode === 'cash' && (
                        <div className="invest-input-group" style={{padding: "15px", background: "#fef2f2", borderRadius: "12px", border: "1px dashed #ef4444"}}>
                            <p style={{fontSize: "13px", color: "#b91c1c", margin: 0}}>
                                ⚠ <strong>Cash Withdrawal:</strong> Please visit our nearest branch office with your ID proof to collect your cash after approval.
                            </p>
                        </div>
                    )}

                    <button type="submit" className="invest-btn">Request {withdrawMode === 'online' ? 'Transfer' : 'Cash'}</button>
                </form>
            </div>

            {/* Investment Status Section */}
            <div className="plan-card gold">
              <div className="plan-header">
                <h3>Live Status</h3>
                <span className="roi">Real-time Updates</span>
              </div>
              
              <ul className="status-list">
                  <li className="status-item">
                      <span className="status-label">Last Activity</span>
                      <span className="status-value">Interest Credited</span>
                  </li>
                  <li className="status-item">
                      <span className="status-label">Next Payout</span>
                      <span className="status-value">15 Nov, 2024</span>
                  </li>
                  <li className="status-item">
                      <span className="status-label">Active Plan</span>
                      <span className="status-value">Compound Growth</span>
                  </li>
                  <li className="status-item">
                      <span className="status-label">Account Status</span>
                      <span className="status-badge active">Verified</span>
                  </li>
              </ul>

              <button className="invest-btn" style={{marginTop: "auto"}} onClick={() => setShowNotifModal(true)}>View All Activity</button>
            </div>

          </div>
        </section>

        {/* Investment History Modal */}
        {showHistoryModal && (
            <div className="modal-overlay" onClick={() => setShowHistoryModal(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Investment History</h3>
                        <button className="close-modal" onClick={() => setShowHistoryModal(false)}>×</button>
                    </div>
                    <div className="history-list">
                        <div className="history-item">
                            <div>
                                <div className="history-date">25 Oct, 2024</div>
                                <div className="history-time">10:45 AM</div>
                            </div>
                            <div className="history-amount">+ ₹10,000</div>
                        </div>
                        <div className="history-item">
                            <div>
                                <div className="history-date">10 Sep, 2024</div>
                                <div className="history-time">02:30 PM</div>
                            </div>
                            <div className="history-amount">+ ₹25,000</div>
                        </div>
                         <div className="history-item">
                            <div>
                                <div className="history-date">01 Aug, 2024</div>
                                <div className="history-time">09:00 AM</div>
                            </div>
                            <div className="history-amount">+ ₹15,000</div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Growth Chart Modal */}
        {showChartModal && (
            <div className="modal-overlay" onClick={() => setShowChartModal(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Portfolio Growth</h3>
                        <button className="close-modal" onClick={() => setShowChartModal(false)}>×</button>
                    </div>
                    <div className="chart-container">
                        <div className="growth-chart">
                            <svg viewBox="0 0 300 150">
                                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2"/>
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                                </linearGradient>
                                <polyline 
                                    fill="url(#gradient)" 
                                    stroke="#10b981" 
                                    strokeWidth="3" 
                                    points="0,140 50,120 100,100 150,110 200,60 250,50 300,20" 
                                />
                                <circle cx="300" cy="20" r="5" fill="#10b981" />
                            </svg>
                        </div>
                        <div className="chart-legend">
                            <span>Aug</span>
                            <span>Sep</span>
                            <span>Oct</span>
                            <span>Nov</span>
                        </div>
                        <p style={{marginTop: "15px", color: "#64748b", fontSize: "14px"}}>
                            Your portfolio has grown by <strong>8.4%</strong> in the last 3 months.
                        </p>
                    </div>
                </div>
            </div>
        )}
        
        {/* Interest Rate Modal */}
        {showInterestModal && (
            <div className="modal-overlay" onClick={() => setShowInterestModal(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Interest Accumulation</h3>
                        <button className="close-modal" onClick={() => setShowInterestModal(false)}>×</button>
                    </div>
                    <div className="chart-container">
                        <div style={{textAlign: "left", padding: "10px"}}>
                            <h4 style={{color: "#475569", marginBottom: "15px"}}>Projected Growth (3 Month Plan)</h4>
                            
                            {/* Visual Timeline */}
                            <div style={{position: "relative", paddingLeft: "20px", borderLeft: "2px solid #e2e8f0"}}>
                                
                                <div style={{marginBottom: "25px", position: "relative"}}>
                                    <div style={{position: "absolute", left: "-26px", top: "0", width: "12px", height: "12px", borderRadius: "50%", background: "#3b82f6"}}></div>
                                    <h5 style={{margin: "0 0 5px 0", color: "#0f172a"}}>Month 1</h5>
                                    <p style={{margin: 0, fontSize: "13px", color: "#64748b"}}>+5% Interest Accumulated</p>
                                </div>

                                <div style={{marginBottom: "25px", position: "relative"}}>
                                    <div style={{position: "absolute", left: "-26px", top: "0", width: "12px", height: "12px", borderRadius: "50%", background: "#3b82f6"}}></div>
                                    <h5 style={{margin: "0 0 5px 0", color: "#0f172a"}}>Month 2</h5>
                                    <p style={{margin: 0, fontSize: "13px", color: "#64748b"}}>+5% Interest Accumulated (Compounding)</p>
                                </div>

                                <div style={{marginBottom: "0", position: "relative"}}>
                                    <div style={{position: "absolute", left: "-26px", top: "0", width: "12px", height: "12px", borderRadius: "50%", background: "#10b981"}}></div>
                                    <h5 style={{margin: "0 0 5px 0", color: "#166534"}}>Month 3 (Maturity)</h5>
                                    <p style={{margin: 0, fontSize: "13px", color: "#166534", fontWeight: "600"}}>+5% + Bonus = 15% Total Payout</p>
                                </div>

                            </div>

                            <div style={{marginTop: "20px", padding: "15px", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0"}}>
                                <p style={{fontSize: "14px", color: "#166534", textAlign: "center", margin: 0}}>
                                    Your interest rates climb steadily and compound monthly! 🚀
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Notifications Modal */}
        {showNotifModal && (
            <div className="modal-overlay" onClick={() => setShowNotifModal(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3>Notifications & Activity</h3>
                        <button className="close-modal" onClick={() => setShowNotifModal(false)}>×</button>
                    </div>
                    <div className="notification-list">
                        {notifications.length === 0 ? (
                            <p style={{textAlign: "center", color: "#94a3b8"}}>No new notifications.</p>
                        ) : (
                            notifications.map((notif) => (
                                <div key={notif.id} className={`notification-item ${notif.type}`}>
                                    <div className="notif-title">{notif.title}</div>
                                    <div className="notif-msg">{notif.msg}</div>
                                    <div className="notif-time">{notif.time}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        )}

      </main>
    </div>
  );
}

export default Investment;
