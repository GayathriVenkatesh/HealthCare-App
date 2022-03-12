import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddPatientComponent from './components/AddPatientComponent';
import AddPatientComponentReceptionist from './components/AddPatientComponentReceptionist';
import CreateFollowUp from './components/CreateFollowUp';
import DashboardComponent from './components/DashboardComponent';
import DashboardComponentReceptionist from './components/DashboardComponentReceptionist';
import DischargeComponent from './components/DischargeComponent';
import DischargeDetails from './components/DischargeDetails';
import FollowUpDoctor from './components/FollowUpDoctor';
import FollowUpReceptionist from './components/FollowUpReceptionist';
import HeaderComponent from './components/HeaderComponent';
import ListPatientComponent from './components/ListPatientComponent';
import ListPatientComponentReceptionist from './components/ListPatientComponentReceptionist';
import RegisterComponent from './components/RegisterComponent';
import LoginAsComponent from './components/LoginAsComponent';
import LoginAsDoctorComponent from './components/LoginAsDoctorComponent';
import LoginAsReceptionistComponent from './components/LoginAsReceptionistComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import ViewComponent from './components/ViewComponent';
import ViewComponentReceptionist from './components/ViewComponentReceptionist';
import ViewFollowUpDetails from './components/ViewFollowUpDetails';
import ViewPatientComponent from './components/ViewPatientComponent';
import UpdatePatientComponentReceptionist from './components/UpdatePatientComponentReceptionist'

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
              {/* <SideBarComponent /> */}
                <div className="container">
                    <Switch> 
                    <Route path = "/dashboard" exact component = {DashboardComponent}></Route>
                    {/* <Route path = "/dashboard-receptionist" exact component = {DashboardComponentReceptionist}></Route> */}
                    <Route path = "/" exact component = {LoginAsComponent}></Route>
                          <Route path = "/dashboard-receptionist" exact component = {DashboardComponentReceptionist}></Route>
                          <Route path = "/search" component = {ListPatientComponent}></Route>
                          <Route path = "/register" component = {RegisterComponent}></Route>
                          <Route path = "/login-as" component = {LoginAsComponent}></Route>
                          <Route path = "/login-doctor" component = {LoginAsDoctorComponent}></Route>
                          <Route path = "/login-receptionist" component = {LoginAsReceptionistComponent}></Route>
                          <Route path = "/view-patients" component = {ListPatientComponent}></Route>
                          <Route path = "/view-patients-receptionist" component = {ListPatientComponentReceptionist}></Route>
                          <Route path = "/discharge-summary" component = {DischargeComponent}></Route>
                          <Route path = "/add-patient" component = {AddPatientComponent}></Route>
                          <Route path = "/add-patient-receptionist" component = {AddPatientComponentReceptionist}></Route>
                          {/* <Route path = "/view-patient/:uhid" component = {ViewPatientComponent} id="1"></Route> */}
                          <Route path = "/delete-patient/:uhid" component = {ListPatientComponent} id="1"></Route>

                          <Route path = "/view/:uhid" component = {ViewComponent} id="1"></Route>
                          <Route path = "/view-receptionist/:uhid" component = {ViewComponentReceptionist} id="1"></Route>
                          {/* <Route path = "/view-patient/:uhid" element={<ViewPatientComponent id={1}/>}></Route> */}
                          <Route path = "/edit-patient/:uhid" component = {UpdatePatientComponent}></Route>
                          <Route path = "/edit-patient-receptionist/:uhid" component = {UpdatePatientComponentReceptionist}></Route>
                          <Route path = "/followup-doctor" component = {FollowUpDoctor}></Route>
                          <Route path = "/followup-receptionist" component = {FollowUpReceptionist}></Route>
                          <Route path = "/view-followup" component = {ViewFollowUpDetails}></Route>
                          <Route path = "/discharge-history" component = {DischargeDetails}></Route>
                          <Route path = "/schedule-followup" component = {CreateFollowUp}></Route>
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;
