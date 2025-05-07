import React, { useEffect, useState } from 'react';
import './manageHospitalRecords.css';

function ShowHospitalRecords() {
  const [hospitalRecords, setHospitalRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHospitalRecords = async () => {
      try {
        const response = await fetch('http://localhost:2001/api/hospitals'); // Update with your backend URL
        const data = await response.json();
        setHospitalRecords(data);
      } catch (err) {
        setError('Failed to fetch hospital records.');
      } finally {
        setLoading(false);
      }
    };

    fetchHospitalRecords();
  }, []);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div>
          <img src="/vaid_service.jpeg" alt="Vaid Service" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="/dashboardA">Back</a>
          <a href="/homePage">Home</a>
          <a href="/loginPage">Logout</a>
        </div>
      </nav>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Registered Hospital Records</h2>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && (
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100 text-successful">
                <th className="border px-2 py-1">ID</th>
                <th className="border px-2 py-1">Hospital Name</th>
                <th className="border px-2 py-1">Address</th>
                <th className="border px-2 py-1">Contact</th>
              </tr>
            </thead>
            <tbody>
              {hospitalRecords.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="border px-2 py-1">{hospital.id}</td>
                  <td className="border px-2 py-1">{hospital.hospitalName}</td>
                  <td className="border px-2 py-1">{hospital.address}</td>
                  <td className="border px-2 py-1">{hospital.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button>Add Hospital</button>
    </div>
  );
}

export default ShowHospitalRecords;
