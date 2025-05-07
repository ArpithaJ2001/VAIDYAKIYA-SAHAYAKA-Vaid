import {Routes, Route} from "react-router-dom";
import HomePage from "./homePage";
import AboutUsPage from "./aboutUs";
import VaidRegistrationPage from "./vaidRegistrationPage";
import LoginPage from "./loginPage";
import DashboardP from "./dashboardP"; 
import DashboardA from "./dashboardA";

import HospitalSuggetion from"./hospitalSuggetion";
import SubmitRequest from "./submitRequest";
import UpdateRegistrationDetails from "./updateRegistrationDetails";
import UploadFiles from "./uploadFiles";
import Feedback from "./feedback";
import Emergency from "./emergency";

import ViewRequests from "./viewRequests";
import ManageFeedback from "./manageFeedback";
import ManageHospitalRecords from "./manageHospitalRecords";



export default function App(){
  return (
    <div className="App">
    <Routes>
      <Route path ="/*" element = {<HomePage/>}/>
      
     
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/loginPage" element = {<LoginPage/>}/>
      <Route path="/vaidRegistrationPage" element= {<VaidRegistrationPage/>}></Route>
       <Route path="/dashboardP" element = {<DashboardP/>}></Route>
      <Route path="/dashboardA" element = {<DashboardA/>}></Route> 
    
      <Route path="/submitRequest" element ={<SubmitRequest/>}></Route>
     
      <Route path="/emergency" element ={<Emergency/>}></Route>
      <Route path="/updateRegistrationDetails" element ={<UpdateRegistrationDetails/>}></Route>
      <Route path="/uploadFiles" element ={<UploadFiles/>}></Route>
      <Route path="/feedback" element ={<Feedback/>}></Route>

      <Route path="/managePatients" element = {<ManagePatients/>}></Route>
      <Route path="/viewRequests" element = {<ViewRequests/>}></Route>
      <Route path="/manageFeedback" element = {<ManageFeedback/>}></Route>
      <Route path="/manageHospitalRecords" element = {<ManageHospitalRecords/>}></Route>
      <Route path ="/hospitalSuggetion" element={<HospitalSuggetion/>}></Route>

      </Routes>
    </div>
  )
}

