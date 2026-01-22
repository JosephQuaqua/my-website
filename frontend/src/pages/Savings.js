import "../styles/savings.css";

function Savings() {
  const fakeData = {
    balance: 12500,
    savingType: "Monthly",
    duration: "3 Months",
    status: "Active",
  };

  return (
    <div className="savings-container">
      <h2>Savings Account</h2>

      <div className="savings-cards">
        <div className="card">
          <h4>Current Balance</h4>
          <p>₹ {fakeData.balance}</p>
        </div>

        <div className="card">
          <h4>Saving Type</h4>
          <p>{fakeData.savingType}</p>
        </div>

        <div className="card">
          <h4>Duration</h4>
          <p>{fakeData.duration}</p>
        </div>

        <div className="card">
          <h4>Status</h4>
          <p className="status">{fakeData.status}</p>
        </div>
      </div>

      <div className="actions">
        <button className="primary-btn">Add Savings</button>
        <button className="secondary-btn">View Transactions</button>
      </div>
    </div>
  );
}

export default Savings;
