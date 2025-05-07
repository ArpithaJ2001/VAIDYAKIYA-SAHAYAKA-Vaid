import React, { useState } from 'react';
import axios from 'axios';

function UploadFiles() {
  const [file, setFile] = useState(null);
  const [mobileNumber, setmobileNumber] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !mobileNumber) {
      alert("Please enter Patient ID and choose a file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/patient/${mobileNumber}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className="homepage"> <nav className="navbar"> <div style={styles.imageContainer}> <img 
    src="/vaid_service.jpeg" 
    alt="Vaid Service" 
    style={styles.image}
  /> </div> <div className="nav-links"> 
 <a href="dashboardP">Back</a><br/> 
<a className="link" href="/homePage">Home</a>
<a href="loginPage">Logout</a><br/>

</div>
</nav>

    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Upload Patient File</h2>
      <form onSubmit={handleSubmit}>
       Mobile Number : <input
          type="text"
          placeholder="Enter Mobile Number  "
          value={mobileNumber}
          onChange={(e) => setmobileNumber(e.target.value)}
          required
        /><br/><br/>
        <input type="file" onChange={handleFileChange} required /><br/><br/>
        <button type="submit">Upload</button>
      </form>
    </div></div>
  );
}

export default UploadFiles;


const styles = {
  image: {
  maxWidth: "800px",
  height: "60px",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  }; 