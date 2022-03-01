import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './dist/css/adminlte.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/daterangepicker/daterangepicker.css'; // Tell webpack that Button.js uses these styles
import "./plugins/fontawesome-free/css/all.min.css";
import './plugins/icheck-bootstrap/icheck-bootstrap.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/jqvmap/jqvmap.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/overlayScrollbars/css/OverlayScrollbars.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/summernote/summernote-bs4.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'; // Tell webpack that Button.js uses these styles
import './SideBar.css';
// import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";

class SideBarComponentReceptionist extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (           
            <div className="hold-transition sidebar-mini" style={{height: "calc(200vh - 200px)", marginLeft: "-280px", marginTop: "-60px", float: "left", display: "block"}}>
                <div className="wrapper">                
                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="/receptionist" className="brand-link">
                        <i className="nav-icon fas fa-hospital" style={{marginRight: "20px", marginLeft: "20px"}}></i>
                        <span className="brand-text font-weight-light">NRC Portal</span>
                        </a>

                        <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            
                            <li className="nav-item">
                            {/* <a href="/" className="nav-link"> */}
                            <NavLink to="/dashboard-receptionist" exact activeClassName="nav-link active" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                Dashboard
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </NavLink>
                            {/* </a> */}
                            </li>
                    
                            <li className="nav-item">
                            {/* <a href="/view-patients" className="nav-link active"> */}
                            <NavLink to="/view-patients-receptionist" exact activeClassName="nav-link active" className="nav-link">
                                <i className="nav-icon fas fa-table"></i>
                                <p>
                                List Patients
                                <i className="fas fa-angle-left right"></i>
                                </p>
                            </NavLink>
                            </li>
                            {/* </a> */}

                            
                            <li className="nav-item">
                            {/* <a href="/add-patient" className="nav-link"> */}
                            <NavLink to="/add-patient-receptionist" exact activeClassName="nav-link active" className="nav-link">
                                <i className="nav-icon fas fa-plus"></i>
                                <p>
                                Add Patient
                                <i className="fas fa-angle-left right"></i>
                                </p>
                            </NavLink>
                            {/* </a> */}
                            </li>
                        </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}

export default SideBarComponentReceptionist;
