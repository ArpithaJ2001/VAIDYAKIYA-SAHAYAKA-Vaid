import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise'; 
import axios from 'axios';

// Initialize the express app
const vaidApp = express();
vaidApp.use(express.json());
vaidApp.use(express.urlencoded({ extended: true }));
vaidApp.use(cors());

// MySQL database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'itbridge',
};

// Endpoint to validate a user (login validation)
vaidApp.get('/patientDetails/:role/:mobileNumber/:password', async (req, res) => {
  const { role, mobileNumber, password } = req.params;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      'SELECT * FROM patientDetails WHERE role = ? AND mobileNumber = ? AND password = ?',
      [role, mobileNumber, password]
    );
    
    if (result.length === 0) {
      return res.status(204).json({ message: 'User not found' });
    } else {
      return res.status(200).json(result);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ message: 'Error validating user' });
  }
});

// Endpoint to save user details (patient registration)
vaidApp.post('/patientDetails', async (req, res) => {
  const { role, firstName, lastName, emailId, mobileNumber, password, gender, address, age, bloodGroup } = req.body;
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Insert new patient into the database
    const [result] = await connection.execute(
      'INSERT INTO patientDetails (role, firstName, lastName, emailId, mobileNumber, password, gender, address, age, bloodGroup) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [role, firstName, lastName, emailId, mobileNumber, password, gender, address, age, bloodGroup]
    );
    
    await connection.close();
    res.status(201).json({ message: 'Patient registered successfully', patientId: result.insertId });
  } catch (error) {
    console.error('Error inserting patient data:', error);
    res.status(500).json({ message: 'Failed to register patient' });
  }
});

// Endpoint to fetch all patient requests
vaidApp.get('/patientRequests', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute('SELECT * FROM patient_requests');
    await connection.close();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching patient requests:', error);
    res.status(500).json({ message: 'Error fetching patient requests' });
  }
});

// Endpoint to fetch all hospital details
vaidApp.get('/hospitals', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute('SELECT * FROM hospitals');
    await connection.close();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching hospital details:', error);
    res.status(500).json({ message: 'Error fetching hospital details' });
  }
});

// Base URL for all API requests
const BASE_URL = "http://localhost:2001";

// Axios service for frontend calls
const patientDService = {
  addUser: (data) => axios.post(`${BASE_URL}/patientDetails`, data),
  validateUser: (role, mobile, password) =>
    axios.get(`${BASE_URL}/patientDetails/${role}/${mobile}/${password}`),
  getPatients: () => axios.get(`${BASE_URL}/patientRequests`),
  getHospitals: () => axios.get(`${BASE_URL}/hospitals`)
};

// Start the server
vaidApp.listen(2001, () => {
  console.log("User details API is running on http://localhost:2001");
});
