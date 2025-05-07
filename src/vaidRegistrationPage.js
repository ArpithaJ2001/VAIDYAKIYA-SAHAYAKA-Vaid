import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VaidRegistrationPage.css';
import patientDService from './patientDService';


function VaidRegistrationPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
  role : '',
  firstName: '',
  lastName: '',
  emailId: '',
  mobileNumber: '',
  password: '',
  confirmPassword: '',
  gender: '',
  address: '',
  age: '',
  bloodGroup: '',
  });
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev,[name]: value }));
  };
  
  const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match");
  return;
  }
  patientDService.addUser(formData).then((response) => {
    if (response.status === 201) {
   
    console.log("Form Submitted", response.data);
  
    alert("Registration successful!");
  
    if (formData.role === "admin") {
      navigate("/dashboardA");
    } else {
      navigate("/dashboardP");
    }
  } else {
    alert("Login failed. Please try again.");
  }
  }).catch((error) => {
    console.error("Registration failed", error);
    alert("Registration failed" + error);
  });
  
  
  
  };
  
  return ( <div className="homepage"> <nav className="navbar"> <div style={styles.imageContainer}> <img 
           src="/vaid_service.jpeg" 
           alt="Vaid Service" 
           style={styles.image}
         /> </div> <div className="nav-links"> <a href="aboutUs">AboutUs</a><br/> <a href="loginPage">Login</a><br/>
  
      </div>
    </nav>
  
    <div className="registration-form">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
  
      <div className="form-group">
          Login As:<select
            name="role"
            onChange={handleChange}
            required>
            <option value="">-- Select Role --</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
  
  
        First Name :  <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        Last Name : <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        Email ID : <input type="email" name="emailId" placeholder="Email ID" onChange={handleChange} required />
        Mobile Number : <input type="tel" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
        Password : <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        Confirm Password : <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
  
        Gender : <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
  
       Address : <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
         Age : <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
  
        Blood Group :  <select name="bloodGroup" onChange={handleChange} required>
          <option value="">Blood Group</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
   
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  
  );
  }
  
  export default VaidRegistrationPage;
  
  const styles = {
  image: {
  maxWidth: "800px",
  height: "60px",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  }; 
  