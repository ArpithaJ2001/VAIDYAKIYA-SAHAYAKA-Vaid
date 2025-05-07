import React from 'react';
import './dashboardA.css';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <nav className="navbar">
      <div style={styles.imageContainer}>
          <img 
            src="/vaid_service.jpeg" 
            alt="Vaid Service" 
            style={styles.image}
          />
        </div>
        <div className="nav-links">
        <a className="link" href="/homePage">Home</a>
          <a href="/aboutUs">About Us</a><br />
          <a href="/loginPage">Logout</a><br />
          {/* <a href="/newAdmin">New User</a> */}
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="dashboard-main">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <div className="card-container">
    
          <div className="card" onClick={() => navigate('/viewRequests')}>
            <img src="viewRequest.png" alt="Requests" className="card-icon" />
            <p>View Requests</p>
          </div><br />
          <div className="card" onClick={() => navigate('/manageFeedback')}>
            <img src="manageFeedback.png" alt="Feedback" className="card-icon" />
            <p>Managee Patients and their Feedbacks</p>
          </div><br />
          <div className="card" onClick={() => navigate('/manageHospitalRecords')}>
            <img src="manageHospitalRecords.png" alt="Hospital Records" className="card-icon" />
            <p>Manage Hospital Records</p>
          </div><br />
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
const styles = {
 
    image: {
      maxWidth: "800px",
      height: "60px",
      borderRadius: "20px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
  }