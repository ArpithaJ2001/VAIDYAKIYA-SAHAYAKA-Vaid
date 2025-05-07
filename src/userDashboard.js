import React from 'react';
import './dashboardP.css';
import { useNavigate } from 'react-router-dom';

function DashboardP() {
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
        <a href="loginPage">Back</a><br/>
          <a href="aboutUs">AboutUs</a><br/>
          <a className="link" href="/homePage">Home</a>
          <a href="loginPage">Logout</a><br/>
        </div>
      </nav>

      <main className="dashboard-main">
        <h1 className="dashboard-title">User Dashboard</h1>
        <div className="card-container">
        <div className="card" onClick={() => navigate('/hospitalList')}>
            <img src="HospitalList.png" alt="HospitalList" className="card-icon" />
            <p>Take The hospital Suggetion</p>
          </div><br/><br/>
          <div className="card" onClick={() => navigate('/submitRequest')}>
            <img src="help.jpg" alt="Help" className="card-icon" />
            <p>Submit Medical Help Request</p>
          </div><br/><br/><br/>
          <div className="card" onClick={() => navigate('/updateRegistrationDetails')}>
            <img src="update.png" alt="Update Details" className="card-icon" />
            <p>Update Registration Details</p>
          </div><br/><br/>
          <div className="card" onClick={() => navigate('/uploadFiles')}>
            <img src="uploadfile.jpg" alt="Upload Files" className="card-icon" />
            <p>Upload Files</p>
          </div>
          <div className="card" onClick={() => navigate('/feedback')}>
            <img src="feedback.png" alt="Feedback" className="card-icon" />
            <p>Provide Feedback</p>
          </div>
          <div className="card" onClick={() => navigate('/emergency')}>
            <img src="emergency.png" alt="Feedback" className="card-icon" />
            <p>Emergency</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardP;

const styles = {
 
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
}