import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';

class LoginAsComponent extends Component {
  constructor(props) {
    super(props)

}

    render() {
        return (
          <div class="hold-transition login-page">

            <div class="login-box">
              <div class="card card-outline card-primary">
                <div class="card-header text-center">
                  <a href="" class="h1">NRC Portal</a>
                </div>
                <div class="card-body">
                  <h4 class="login-box-msg">Sign In As</h4 >
                             
                  <div class="row">
                    
                    <div class="col-lg-12 col-12">
                      <div class="small-box bg-teal">
                        <div class="inner">
                          <p></p>
                          <p></p>
                          <h4>Receptionist</h4>
                          <br></br>
                        </div>
                        <div class="icon">
                          <i class="fas fa-user-plus"></i>
                        </div>
                        <a href="/login-receptionist" class="small-box-footer">
                          <i class="fas fa-arrow-circle-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-12 col-6">
                      <div class="small-box bg-pink">
                        <div class="inner">
                          <p></p>
                          <p></p>
                          <h4>NRC Doctor</h4>
                          <br></br>
                        </div>
                        <div class="icon">
                          <i class="fas fa-user-md"></i>
                        </div>
                        <a href="/login-doctor" class="small-box-footer">
                          <i class="fas fa-arrow-circle-right"></i>
                        </a>
                      </div>
                      
                    </div>
                    
                  </div>
            
                  
                </div>
              </div>
            </div>
            </div>
        )
    }
}

export default LoginAsComponent
