import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPatientComponent from './components/ListPatientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreatePatientComponent from './components/CreatePatientComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import ViewPatientComponent from './components/ViewPatientComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                    <Route path = "/" exact component = {ListPatientComponent}></Route>
                          <Route path = "/search" component = {ListPatientComponent}></Route>
                          <Route path = "/view-patients" component = {ListPatientComponent}></Route>
                          <Route path = "/add-patient" component = {CreatePatientComponent}></Route>
                          <Route path = "/view-patient/:uhid" component = {ViewPatientComponent} id="1"></Route>
                          {/* <Route path = "/view-patient/:uhid" element={<ViewPatientComponent id={1}/>}></Route> */}
                          <Route path = "/edit-patient/:uhid" component = {UpdatePatientComponent}></Route>
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;
