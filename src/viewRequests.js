import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './manageHospitalRecords.css';

function ShowPatientRequests() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2001/patientRequests')
      .then(res => {
        setPatients(res.data);
      })
      .catch(err => {
        console.error('Failed to fetch data from backend:', err);
      });
  }, []);

  const handleApprove = (id) => {
    axios.post('http://localhost:2001/approvePatient', { id })
      .then(res => {
        alert(`Patient request with ID ${id} approved successfully.`);
        // Update the patient list or refresh it if necessary
      })
      .catch(err => {
        console.error('Failed to approve patient:', err);
        alert('Failed to approve the patient. Please try again.');
      });
  };

  const handleReject = (id) => {
    const reason = prompt(`Why are you rejecting patient ID ${id}?`);
    if (reason) {
      axios.post('http://localhost:2001/rejectPatient', { id, reason })
        .then(res => {
          alert(`Rejected patient ID ${id} for reason: ${reason}`);
          // Update the patient list or refresh it if necessary
        })
        .catch(err => {
          console.error('Failed to reject patient:', err);
          alert('Failed to reject the patient. Please try again.');
        });
    }
  };

  return (
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

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">All Patient Requests</h2>
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100 text-successful">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Gender</th>
              <th className="border px-2 py-1">Age</th>
              <th className="border px-2 py-1">Illness</th>
              <th className="border px-2 py-1">Mobile</th>
              <th className="border px-2 py-1">Approve</th>
              <th className="border px-2 py-1">Reject</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id}>
                <td className="border px-2 py-1">{patient.id}</td>
                <td className="border px-2 py-1">{patient.firstName} {patient.lastName}</td>
                <td className="border px-2 py-1">{patient.gender}</td>
                <td className="border px-2 py-1">{patient.age}</td>
                <td className="border px-2 py-1">{patient.illness}</td>
                <td className="border px-2 py-1">{patient.mobileNumber}</td>
                <td className="border px-2 py-1">
                  <button onClick={() => handleApprove(patient.id)} className="btn-approve">Approve</button>
                </td>
                <td className="border px-2 py-1">
                  <button onClick={() => handleReject(patient.id)} className="btn-reject">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowPatientRequests;

const styles = {
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};
