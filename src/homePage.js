import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
      <div style={styles.imageContainer}>
          <img 
            src="/vaid_service.jpeg" 
            alt="Vaid Service" 
            style={styles.image}
          />
        </div>
        <div className="nav-links"> 
          <a href="aboutUs">AboutUs</a><br/>
          <a href="loginPage">Login</a><br/>
          <a href="vaidRegistrationPage">New User</a>
        </div>
      </nav>

      <main className="content"> 
        <h1>WELCOME TO VAIDYAKIYA SAHAYAKA</h1>
        <h2>Helping You Find the Right Medical Care, at the Right Time</h2>
        <p className="description">
          CareConnect is a service run by an NGO that helps people get medical help quickly.
          We connect patients with the best doctors and hospitals based on their illness.
          Whether it’s something small or serious, we’re here to guide you to the right care.
          Our goal is to make quality healthcare accessible, affordable, and inclusive for all. 
            Whether you live in a city or a village, trusted medical help is now just a tap away! 
            We’re here to guide patients toward the care they deserve, without confusion or delay. 
            Together, let’s make compassionate healthcare a reality for everyone.
        </p>

        <h3>Highlights</h3>
        <p className="highlights">
          • Simple and quick patient registration<br />
          • Smart matching with doctors and hospitals based on illness<br />
          • Trusted hospital and doctor profiles<br />
          • Help during emergencies<br />
          • Completely free and caring service
        </p>

        <h3>Call to Action</h3>
        <p className="cta">
          If you or someone you know needs medical help, sign up now and let us connect 
          you with the right care.
        </p>
      </main>
    </div>
  );
};

export default HomePage;


const styles = {
 
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
}