import React, { useState } from 'react';
import axios from 'axios';

const HospitalSuggestion = () => {
  const [complaint, setComplaint] = useState('');
  const [matchedHospital, setMatchedHospital] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/hospitals?symptom=${complaint}`);
      if (response.data) {
        setMatchedHospital(response.data);
        setError('');
      } else {
        setMatchedHospital(null);
        setError('No matching hospital found');
      }
    } catch (err) {
      setMatchedHospital(null);
      setError('Error fetching hospital suggestion');
    }
  };

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
          <a href="dashboardP">Back</a><br />
          <a href="homePage">Home</a><br />
          <a href="loginPage">Logout</a><br />
        </div>
      </nav>

      <div>
        <h2>Find Hospital Based on Symptom</h2><br />
        Symptoms :
        <input
          type="text"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter your symptom (e.g., cough, headache)"
        />
        <button onClick={handleCheck}>Find Hospital</button>

        {matchedHospital && (
          <div style={{ marginTop: '20px' }}>
            <h3>Suggested Hospital</h3>
            <p><strong>{matchedHospital.name}</strong></p>
            <p>{matchedHospital.location}</p>
          </div>
        )}

        {error && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </div>
    </div>
  );
};

export default HospitalSuggestion;

const styles = {
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};
