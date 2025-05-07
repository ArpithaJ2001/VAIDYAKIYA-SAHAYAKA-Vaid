import React, { useState } from 'react';
import axios from 'axios';

function ViewSupport() {
  const [aadhaar, setAadhaar] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      const res = await axios.get(`http://localhost:5000/patientDetails/${aadhaar}`);
      if (res.data) {
        setResult(res.data);
      } else {
        setError('No request found for this Aadhaar number.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Check Your Medical Help Request</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 mb-4">
      Aadhaar Number :  <input
          type="text"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
          placeholder="Enter Aadhaar Number"
          className="flex-1 p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {result && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Request ID:</strong> {result.requestId}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Hospital:</strong> {result.hospital}</p>
          <p><strong>Submitted on:</strong> {new Date(result.createdAt).toLocaleString()}</p>
          <p className="mt-2 text-sm text-gray-600">For support, contact: 1800-XXX-XXX</p>
        </div>
      )}
    </div>
  );
}

export default ViewSupport;
