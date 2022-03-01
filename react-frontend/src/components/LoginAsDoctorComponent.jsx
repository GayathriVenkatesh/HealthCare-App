import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';

class LoginAsDoctorComponent extends Component {
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
                <p class="login-box-msg">Sign in to start your session</p>

                <form action="/dashboard">
                  {/* ADD method="post" to send those credentials via URL */}
                  <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password" />
                    <div class="input-group-append">
                      <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8">
                      <div class="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label for="remember">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div class="col-4">
                      <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                    </div>
                  </div>
                </form>

                <p class="mb-1">
                  <a href="forgot-password.html">Forgot Password</a>
                </p>
                <p class="mb-0">
                  <a href="/register" class="text-center">Register</a>
                </p>
              </div>
            </div>
          </div>

        </div>
        )
    }
}

export default LoginAsDoctorComponent
