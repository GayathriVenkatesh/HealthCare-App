import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder, faTachometerAlt, faPlus, faTable, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slide as Menu } from 'react-burger-menu';
import {Helmet} from "react-helmet";
import './SideBar.css';
import './plugins/summernote/summernote-bs4.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/icheck-bootstrap/icheck-bootstrap.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/jqvmap/jqvmap.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/overlayScrollbars/css/OverlayScrollbars.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/daterangepicker/daterangepicker.css'; // Tell webpack that Button.js uses these styles
import './dist/css/adminlte.min.css'; // Tell webpack that Button.js uses these styles
import './plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css'; // Tell webpack that Button.js uses these styles
import "./plugins/fontawesome-free/css/all.min.css";
// import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css";

class SideBarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            
            <div class="hold-transition sidebar-mini">
                
                <div class="wrapper">
                    <aside class="main-sidebar sidebar-dark-primary elevation-4">
                        <a href="../../index3.html" class="brand-link">
                        <span class="brand-text font-weight-light">AdminLTE 3</span>
                        </a>

                        <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            
                            <li class="nav-item">
                            <a href="../../index.html" class="nav-link">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                Dashboard
                                <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            </li>
                    
                            <li class="nav-item">
                            <a href="patientlist.html" class="nav-link active">
                                <i class="nav-icon fas fa-table"></i>
                                <p>
                                List Patients
                                <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>

                            <a href="dischargesummary.html" class="nav-link">
                                <i class="nav-icon fas fa-edit"></i>
                                <p>
                                Record Discharge Summary
                                <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            
                            </li>
                            <li class="nav-item">
                            <a href="simple.html" class="nav-link">
                                <i class="nav-icon fas fa-plus"></i>
                                <p>
                                Add Patient
                                <i class="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}

export default SideBarComponent;
