import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './manageFeedback.css'; 
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch patients
    axios.get('http://localhost:5000/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error('Error fetching patients:', err));

    // Fetch appointments
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data))
      .catch(err => console.error('Error fetching appointments:', err));

    // Fetch feedbacks
    axios.get('http://localhost:5000/api/feedbacks')
      .then(res => setFeedbacks(res.data))
      .catch(err => console.error('Error fetching feedbacks:', err));
  }, []);

  const handleFeedbackClick = (id) => {
    navigate(`/feedback/${id}`);
  };

  return (
    <div className="manage-hospital-records">
      <div className="homepage">
        <nav className="navbar">
          <div style={styles.imageContainer}>
            <img src="/vaid_service.jpeg" alt="Vaid Service" style={styles.image} />
          </div>
          <div className="nav-links">
            <a href="dashboardA">Back</a><br />
            <a className="link" href="/homePage">Home</a>
            <a href="loginPage">Logout</a><br />
          </div>
        </nav>

        <main>
          {/* Patient Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2>Patients Overview</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {patients.map((patient) => (
                <div key={patient.id} className="card">
                  <h3>{patient.name}</h3>
                  <p><strong>Phone:</strong> {patient.phone}</p>
                  <p><strong>Email:</strong> {patient.email}</p>
                  <p><strong>Condition:</strong> {patient.condition}</p>
                  <p><strong>Age:</strong> {patient.age}</p>
                  <p><strong>Status:</strong> {patient.status}</p>
                  <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Appointments Section */}
          <section style={{ marginBottom: '50px' }}>
            <h2>Appointments</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {appointments.map((app) => (
                <div key={app.id} className="card">
                  <h4>{app.patientName}</h4>
                  <p><strong>Date:</strong> {app.date}</p>
                  <p><strong>Time:</strong> {app.time}</p>
                  <p><strong>Doctor:</strong> {app.doctor}</p>
                  <p><strong>Status:</strong> {app.status}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feedback Section */}
          <section>
            <h2>Patient Feedback</h2>
            <div>
              {feedbacks.map((fb) => (
                <div
                  key={fb.id}
                  onClick={() => handleFeedbackClick(fb.id)}
                  className="feedback-card"
                >
                  <div className="feedback-header">
                    <div className="initial-circle">{fb.patientName.charAt(0)}</div>
                    <div>
                      <p><strong>{fb.patientName}</strong></p>
                      <small>{fb.date}</small>
                    </div>
                  </div>
                  <p>{fb.message}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const styles = {
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};
