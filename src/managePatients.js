import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './managePatients.css'; 
import { useNavigate } from 'react-router-dom';

function ManagePatients() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/patients'); // Adjust the API endpoint as needed
        setPatients(response.data);
      } catch (err) {
        setError('Failed to fetch patients.');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const handleViewPatient = (id) => {
    navigate(`/patientDetails/${id}`); // Navigate to a page with more patient details
  };

  const handleEditPatient = (id) => {
    navigate(`/editPatient/${id}`); // Navigate to a page for editing patient details
  };

  const handleDeletePatient = async (id) => {
    try {
      await axios.delete(`/api/patients/${id}`); // Adjust the API endpoint as needed
      setPatients(patients.filter((patient) => patient.id !== id)); // Remove patient from the list
    } catch (err) {
      setError('Failed to delete patient.');
    }
  };

  return (
    <div className="manage-patients">
     

      <main className="dashboard-main">
        <h1 className="dashboard-title">Manage Patients</h1>

        {loading && <div>Loading patients...</div>}
        {error && <div className="error-message">{error}</div>}

        <div className="patients-table">
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.firstName} {patient.lastName}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td>
                    <button onClick={() => handleViewPatient(patient.id)}>View</button>
                    <button onClick={() => handleEditPatient(patient.id)}>Edit</button>
                    <button onClick={() => handleDeletePatient(patient.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default ManagePatients;
