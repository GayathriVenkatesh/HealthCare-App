import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback";
import "./plugins/fontawesome-free/css/all.min.css";
import "./dist/css/adminlte.min.css"
import "./dist/js/pages/dashboard.js";

class DashboardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            patientCount: 0
        }
    }

    componentDidMount(){
        
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);


        PatientService.getPatients().then((res) => {
            this.setState({ patientCount: res.data.length});
            // console.log("NOW IS", res.data)
        });
    
    }

    render() {
        return ( 
            <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
            <div class="wrapper">   
            {/* <h3></h3>              */}
                <SideBarComponent/>
            <section className="content">
            <div className="container-fluid">
                <div className="row">                
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box mb-3">
                        <span className="info-box-icon bg-danger elevation-1"><i className="fa fa-heartbeat"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Patients</span>
                            <span className="info-box-number">{this.state.patientCount}</span>
                        </div>
                        </div>
                    </div>

                    <div className="clearfix hidden-md-up"></div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box mb-3">
                        <span className="info-box-icon bg-success elevation-1"><i className="fa fa-medkit"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Workers</span>
                            <span className="info-box-number">760</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box mb-3">
                        <span className="info-box-icon bg-warning elevation-1"><i className="fa fa-stethoscope"></i></span>

                        <div className="info-box-content">
                            <span className="info-box-text">Follow Ups</span>
                            <span className="info-box-number">2,000</span>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="info-box">
                            <span className="info-box-icon bg-info elevation-1"><i className="fa fa-user-md"></i></span>

                            <div className="info-box-content">
                                <span className="info-box-text">Avg Increase</span>
                                <span className="info-box-number">
                                25% 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="card col-lg-7">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-chart-pie mr-1"></i>
                                Patients Admitted and Discharged
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="tab-content p-0">
                                <div style={{position: "relative", height: "300px"}}>
                                    <canvas id="revenue-chart-canvas" height="300" style={{height: "300px"}}></canvas>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="card col-lg-5">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-chart-pie mr-1"></i>
                                Follow Ups
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="tab-content p-0">
                                <div style={{position: "relative", height: "300px"}}>
                                    <canvas id="sales-chart-canvas2" height="300" style={{height: "300px"}}></canvas>
                                </div>
                            </div>
                        </div>
                    </div>      
                
                </div>
            </div>
            {/* </div> */}
            </section>
            </div>
            </div>

        )
    }
}

export default DashboardComponent
