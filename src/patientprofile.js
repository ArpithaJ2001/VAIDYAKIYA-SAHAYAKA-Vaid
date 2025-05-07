import React, { useState, useEffect } from "react";
import PatientDService from "./patientDService";

function PatientProfile(props) {
  const patientId = props?.patientId;
  const [data, setData] = useState({});

  useEffect(() => {
    if (patientId) {
      PatientDService.getPatientDetails(patientId)
        .then((res) => setData(res.data))
        .catch((err) => console.error("Failed to fetch patient:", err));
    }
  }, [patientId]);

  return (
    <div>
      <h2>Welcome, {data.firstName || "Patient"}</h2>
    </div>
  );
}

export default PatientProfile;
