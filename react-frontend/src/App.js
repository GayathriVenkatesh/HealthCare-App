import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/view-patients" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-patient" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-patient/:uhid" component = {ViewEmployeeComponent} id="1"></Route>
                          {/* <Route path = "/view-patient/:uhid" element={<ViewEmployeeComponent id={1}/>}></Route> */}
                          <Route path = "/edit-patient/:uhid" component = {UpdateEmployeeComponent}></Route>
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;
