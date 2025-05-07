import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import patientDService from './patientDService'; 
import './updateRegistrationDetails.css';


function UpdateRegistrationDetails({ patientId }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    mobileNumber: '',
    address: '',
    age: '',
    bloodGroup: '',
    gender: '',
  });

  useEffect(() => {
    // Fetch data for the given patient ID or use context/session info
    patientDService.validateUser(patientId)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error("Error fetching patient details:", error);
        alert("Failed to load details.");
      });
  }, [patientId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    patientDService.addUser(patientId, formData)
      .then(() => {
        alert("Details updated successfully!");
        navigate('/dashboardP');
      })
      .catch(error => {
        console.error("Update failed:", error);
        alert("Failed to update details.");
      });
  };

  return (
    <div className="homepage"> 
    <nav className="navbar"> <div style={styles.imageContainer}> <img 
    src="/vaid_service.jpeg" 
    alt="Vaid Service" 
    style={styles.image}
  /> </div> <div className="nav-links"> 
 <a href="dashboardP">Back</a><br/> 
<a className="link" href="/homePage">Home</a>
<a href="loginPage">Logout</a><br/>

</div>
</nav>

    <div className="update-form">
      <h2>Update Your Details</h2>
      <form onSubmit={handleUpdate}>
      First Name :  <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <br/>Last Name :  <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <br/>Email ID :  <input name="emailId" type="email" value={formData.emailId} onChange={handleChange} placeholder="Email ID" required />
      <br/>Mobile Number :  <input name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" required />
      <br/>Address :  <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <br/> Age : <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <br/> Geneder :  <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      <br/>BloodGroup :  <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="O+">O+</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O-">O-</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
        </select><br/><br/>
        <button type="submit">Update</button>
      </form>
    </div></div>
  );
}

export default UpdateRegistrationDetails;


const styles = {
  image: {
  maxWidth: "800px",
  height: "60px",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  }; 