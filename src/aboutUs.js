import React from "react";
import './aboutStyles.css'; 

function AboutPage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="styles.image">
          <img 
            src="/vaid_service.jpeg" 
            alt="Vaid Service" 
            className="image"
          />
        </div>
        <div className="nav-links">
        <a href="homePage">Back</a><br/>
        <a href="homePage">Home</a><br/>
        <a href="loginPage">Login</a><br/>
        <a href="vaidRegistrationPage">New User</a> 
        </div>
      </nav>

      <div className="content">
        <h1>About Us</h1>

        <section className="section">
          <h2 className="subheading">Who We Are</h2>
          <p className="text">
            Vaidyakiya Sahayaka is a not-for-profit initiative dedicated to helping underprivileged individuals get access to quality healthcare.
            We aim to guide patients, especially those from rural and economically weaker sections, toward government medical services that are often
            available at low or no cost — but are underutilized due to lack of awareness, documentation barriers, or bureaucratic hurdles.
          </p>
        </section>

        <section className="section">
          <h2 className="subheading">Our Mission</h2>
          <p className="text">
            Our mission is to ensure that no individual suffers due to lack of access to basic healthcare. 
            By acting as a bridge between patients and hospitals, we provide clarity, direction, and hope to people in need of medical care.
          </p>
        </section>

        <section className="section">
          <h2 className="subheading">What We Do</h2>
          <ul className="list">
            <li>Provide an easy-to-use online platform for patient registration and support.</li>
            <li>Match patients with appropriate government hospitals based on illness and availability.</li>
            <li>Guide patients through necessary documentation such as Aadhaar and BPL cards.</li>
            <li>Offer assistance with diagnosis records, prescriptions, and specialist requirements.</li>
            <li>Coordinate with hospital staff to schedule visits and minimize delays.</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="subheading">Why It Matters</h2>
          <p className="text">
            Government hospitals are capable of offering quality healthcare, but many citizens don't benefit from them due to misinformation or
            the complicated processes involved. Vaidyakiya Sahayaka simplifies this journey — making healthcare approachable, affordable, and most importantly, accessible.
          </p>
        </section>

        <section className="section">
          <h2 className="subheading">Join Us</h2>
          <p className="text">
            Whether you're a patient, healthcare worker, social worker, or volunteer — your support can make a difference. 
            Let's work together to ensure that no one is left behind when it comes to their health.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;


const styles = {
 
  image: {
    maxWidth: "800px",
    height: "60px",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
}