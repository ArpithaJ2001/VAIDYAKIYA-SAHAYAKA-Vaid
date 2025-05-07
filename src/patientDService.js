import axios from "axios";

// Base URL for all API requests
const BASE_URL = "http://localhost:2001";

const patientDService = {
  // For adding a new patient
  addUser: (data) => {
    return axios.post(`${BASE_URL}/patientDetails`, data); 
  },

  // For validating user
  validateUser: (role, mobileNumber, password) => {
    return axios.get(`${BASE_URL}/patientDetails/${role}/${mobileNumber}/${password}`); 
  },

  // For validating patient
  validatePatient: (username, password) => {
    return axios.get(`${BASE_URL}/patientDetails/${username}/${password}`);
  },

  // Fetch all patient records
  getPatients: () => {
    return axios.get(`${BASE_URL}/patientDetails`); 
  },

  // Saving hospital details
  saveHospitalDetails: (hospital) => {
    return axios.post(`${BASE_URL}/hospitalDetails`, hospital); 
  },

  // Display all hospital details
  displayHospitalDetails: () => {
    return axios.get('http://localhost:9090/hospitals'); 
  },

  // Saving patient details
  savePatientDetails: (patient) => {
    return axios.post(`${BASE_URL}/patientDetails`, patient); 
  },

  // For validating an admin login
  validateAdmin: (username, password, admincode) => {
    return axios.get(`${BASE_URL}/adminDetails/${username}/${password}/${admincode}`); 
  },

  // Saving admin details
  saveAdminDetails: (admin) => {
    return axios.post(`${BASE_URL}/adminDetails`, admin); 
  }
};

export default patientDService;
