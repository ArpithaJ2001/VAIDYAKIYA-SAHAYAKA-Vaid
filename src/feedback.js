import React, { useState } from 'react';
import axios from 'axios';
import "./feedback.css" 

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:2001/patientDetails/feedback', formData);
      setSubmitted(true);
      setFormData({ name: '', mobileNumber: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Successfully Submited Feedback');
    }
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


    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">We value your feedback</h2>

      {submitted && (
        <div className="bg-green-100 text-green-800 p-3 mb-4 rounded">
          Thank you for your feedback!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        Full Name  : <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        /><br/>
        Mobile Number : <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
        
          required
        /><br/>
       Comment :  <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Feedback"
          className="w-full p-2 border rounded h-32"
          required
        /><br/>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Your Feedback
        </button>
      </form>
    </div></div>
  );
}

export default Feedback;


const styles = {
  image: {
  maxWidth: "800px",
  height: "60px",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  }; 