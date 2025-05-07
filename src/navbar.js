import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div style={styles.imageContainer}>
          <img 
            src="/vaid_service.jpeg" 
            alt="Vaid Service" 
            style={styles.image}
          />
        </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {/* <Link to="/login">Login</Link> */}
      </div>
    </div>
  );
}

export default Navbar;

const styles = {
 
    image: {
      maxWidth: "800px",
      height: "60px",
      borderRadius: "20px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
  }