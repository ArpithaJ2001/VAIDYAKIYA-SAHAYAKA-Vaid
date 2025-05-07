import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import patientDService from "./patientDService";
import './loginPage.css';



export default function LoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    role: '',  
    mobileNumber: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    patientDService.validateUser(login.role, login.mobileNumber, login.password)
      .then((response) => {
        if (response.status === 200) {
          const user = response.data[0]; // since response.data is an array
          const { firstName, role } = user;

          // const { firstName, role } = response.data;
          alert("Welcome: " + firstName);

          if (role === "admin") {
            navigate("/dashboardA");
          } else {
            navigate("/dashboardP");
          }
        } else {
          alert("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        alert("Login failed. Please check credentials.");
        console.error(error);
      });
  };

  return (
    <div className="homepage">
      <Navbar /> {/* Consistent header at the top */}
      
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login Form</h1>

          <div className="form-group">
            <label>Login As:</label>
            <select
              name="role"
              value={login.role}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Role --</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
              value={login.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={login.password}
              onChange={handleChange}
              required
            />
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="btn-login">Submit</button>
            <button type="button" className="btn-cancel" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




























// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState({
//     role: '',
//     mobileNumber: '',
//     password: '',
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLogin(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     patientDService.validateUser(login.role, login.mobileNumber, login.password)
//       .then((response) => {
//         if (response.status === 200) {
//           const { role, firstName } = response.data;

//           // ✅ Save role to localStorage
//           localStorage.setItem('role', role);

//           alert("Welcome: " + firstName);

//           // ✅ Navigate to a single dashboard page
//           navigate("/dashboard");
//         } else {
//           alert("Login failed. Please try again.");
//         }
//       })
//       .catch((error) => {
//         console.error("Login error:", error);
//         alert("Invalid credentials or server error.");
//       });
//   };

//   return (
//     <div className="homepage">
//       <Navbar />

//       <div className="login-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h1>Login Form</h1>

//           <div className="form-group">
//             <label>Login As:</label>
//             <select
//               name="role"
//               value={login.role}
//               onChange={handleChange}
//               required
//             >
//               <option value="">-- Select Role --</option>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Mobile Number:</label>
//             <input
//               type="tel"
//               name="mobileNumber"
//               pattern="[0-9]{10}"
//               placeholder="Enter 10-digit number"
//               value={login.mobileNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={login.password}
//               onChange={handleChange}
//               required
//             />
//             <div className="forgot-password">
//               <a href="/forgot-password">Forgot Password?</a>
//             </div>
//           </div>

//           <div className="button-group">
//             <button type="submit" className="btn-login">Submit</button>
//             <button type="button" className="btn-cancel">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
