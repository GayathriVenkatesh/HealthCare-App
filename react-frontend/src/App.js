import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPatientComponent from './components/ListPatientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePatientComponent from './components/CreatePatientComponent';
import AddPatientComponent from './components/AddPatientComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import ViewPatientComponent from './components/ViewPatientComponent';
import ViewComponent from './components/ViewComponent';
import SideBarComponent from './components/SideBarComponent';
import DischargeComponent from './components/DischargeComponent';
import FollowUpDoctor from './components/FollowUpDoctor';
import ViewFollowUpDetails from './components/ViewFollowUpDetails';
import DischargeDetails from './components/DischargeDetails';
import ViewComponentReceptionist from './components/ViewComponentReceptionist';
import FollowUpReceptionist from './components/FollowUpReceptionist';
import CreateFollowUp from './components/CreateFollowUp';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
              {/* <SideBarComponent /> */}
                <div className="container">
                    <Switch> 
                    <Route path = "/" exact component = {ListPatientComponent}></Route>
                          <Route path = "/search" component = {ListPatientComponent}></Route>
                          <Route path = "/view-patients" component = {ListPatientComponent}></Route>
                          <Route path = "/discharge-summary" component = {DischargeComponent}></Route>
                          <Route path = "/add-patient" component = {AddPatientComponent}></Route>
                          <Route path = "/view-patient/:uhid" component = {ViewPatientComponent} id="1"></Route>

                          <Route path = "/view/:uhid" component = {ViewComponent} id="1"></Route>
                          <Route path = "/view-receptionist/:uhid" component = {ViewComponentReceptionist} id="1"></Route>
                          {/* <Route path = "/view-patient/:uhid" element={<ViewPatientComponent id={1}/>}></Route> */}
                          <Route path = "/edit-patient/:uhid" component = {UpdatePatientComponent}></Route>
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
