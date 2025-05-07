import React, { useState } from 'react';
import './submitRequest.css';
import apiService from './services';

function SubmitRequest() {
  const [formData, setFormData,setSuccessMessage] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    gender: '',
    aadhaarCard: '',
    bplCard: '',
    annualIncome: '',
    bloodType: '',
    illness: '',
    duration: '',
    mobileNumber: '',
    alternateNumber: '',
    emailId: '',
    address1: '',
    address2: '',
    address3: '',
    assistantName: '',
    relationToPatient: '',
    assistantTel: '',
    assistantAddress1: '',
    assistantAddress2: '',
    assistantAddress3: '',
    complaints: {
      bp: false,
      sugar: false,
      kidney: false,
      thyroid: false,
      allergies: false,
    },
    diagnosisFiles: {},
  });

  const [successMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (['bp', 'sugar', 'kidney', 'thyroid', 'allergies'].includes(name)) {
      setFormData(prev => ({
        ...prev,
        complaints: {
          ...prev.complaints,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      diagnosisFiles: {
        ...prev.diagnosisFiles,
        [e.target.name]: e.target.files
      }
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare form data (similar to your existing logic)
    const form = new FormData();
    for (let key in formData) {
      if (key === 'diagnosisFiles') {
        for (let fileType in formData.diagnosisFiles) {
          const files = formData.diagnosisFiles[fileType];
          for (let i = 0; i < files.length; i++) {
            form.append(`${fileType}`, files[i]);
          }
        }
      } else if (key === 'complaints') {
        form.append(key, JSON.stringify(formData.complaints));
      } else {
        form.append(key, formData[key]);
      }
    }
  
    // Send POST request using addUser from services
    try {
      const response = await apiService.addUser(form);
      if (response.status === 201) {
        console.log("Form Submitted", response.data);
        setSuccessMessage("Registration successful!");
       
      } else {
        console.error("Form submission failed with status", response.status);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed", error);
      alert("Form submission failed");
    }
  };
  
  return (
    <div className="homepage"> 
      <nav className="navbar"> 
        <div style={styles.imageContainer}> 
          <img src="/vaid_service.jpeg" alt="Vaid Service" style={styles.image} />
        </div>
        <div className="nav-links"> 
          <a href="dashboardP">Back</a><br/> 
          <a className="link" href="/homePage">Home</a>
          <a href="loginPage">Logout</a><br/>
        </div>
      </nav>

      <div className="registration-form">
        <h1 align="center">PATIENT REGISTRATION - VAIDYAKIYA SAHAYAKA</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit}>

          <h2>PATIENT DETAILS</h2>
          First Name*: <input name="firstName" onChange={handleChange} required />
          Middle Name: <input name="middleName" onChange={handleChange} />
          Last Name*: <input name="lastName" onChange={handleChange} required /><br /><br />

          Age: <input name="age" type="number" onChange={handleChange} required />
          Gender:
          <select name="gender" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option><option>Female</option><option>Other</option>
          </select><br /><br />

          Aadhaar Card No: <input name="aadhaarCard" onChange={handleChange} required />
          BPL Card No: <input name="bplCard" onChange={handleChange} />
          Annual Income: <input name="annualIncome" onChange={handleChange} /><br /><br />

          Blood Type:
          <select name="bloodType" onChange={handleChange} required>
            <option value="">Select</option>
            <option>O+</option><option>O-</option><option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option><option>AB+</option><option>AB-</option>
          </select><br />

          Illness: <input name="illness" onChange={handleChange} />
          Duration: <input name="duration" onChange={handleChange} /><br /><br />

          <h2>ANY DIAGNOSIS DONE BEFORE</h2>
          {["test", "scan", "reports", "previousDoctor", "pastPrescription"].map(name => (
            <div key={name}>
              <label>{name.charAt(0).toUpperCase() + name.slice(1)}:
                <input type="file" name={name} multiple onChange={handleFileChange} />
              </label><br />
            </div>
          ))}

          <h2>OTHER COMPLAINTS</h2>
          {Object.keys(formData.complaints).map(c => (
            <label key={c}>{c.charAt(0).toUpperCase() + c.slice(1)}:
              <input type="checkbox" name={c} checked={formData.complaints[c]} onChange={handleChange} />
            </label>
          ))}<br /><br />

          <h2>CONTACT DETAILS</h2>
          Mobile Number: <input name="mobileNumber" onChange={handleChange} required />
          Alternate Number: <input name="alternateNumber" onChange={handleChange} />
          Email ID: <input name="emailId" onChange={handleChange} required /><br /><br />

          Address1: <input name="address1" onChange={handleChange} />
          Address2: <input name="address2" onChange={handleChange} />
          Address3: <input name="address3" onChange={handleChange} /><br /><br />

          <h2>ASSISTANT DETAILS</h2>
          Name: <input name="assistantName" onChange={handleChange} />
          Relation to Patient: <input name="relationToPatient" onChange={handleChange} />
          Phone: <input name="assistantTel" onChange={handleChange} /><br /><br />

          Address 1: <input name="assistantAddress1" onChange={handleChange} />
          Address 2: <input name="assistantAddress2" onChange={handleChange} />
          Address 3: <input name="assistantAddress3" onChange={handleChange} /><br /><br />

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default SubmitRequest;

const styles = {
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};
