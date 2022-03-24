import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';

class DischargeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            samId: window.location.pathname.split("/")[2],
            patients: []
        }
    }
    
    render() {
        return (
            <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>
            <section class="content">
                <div class="card">
                    <div class="card-header">
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body p-0">
                    <table class="table table-striped projects">
                        <thead>
                            <tr>
                                <th style={{width: "1%"}}>
                                    #
                                </th>
                                <th style={{width: "20%"}}>
                                    Admission Date
                                </th>
                                <th style={{width: "30%"}}>
                                    Condition on Admission
                                </th>
                                <th style={{width: "20%"}}>
                                    Discharge Date
                                </th>
                                <th style={{width: "20%"}}>
                                    Discharge Summary
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    #
                                </td>
                                <td>
                                    <a>
                                        20-01-2022
                                    </a>   
                                </td>

                                <td>
                                    <a>
                                        Height: 162cm <br></br>
                                        Weight: 35kg <br></br>
                                        Arm Circumference: 10cm <br></br>
                                    </a>   
                                </td>
                                <td class="project_progress">
                                    20-02-2022
                                    
                                </td>
                                
                                <td class="project-actions text-right">
                                    <a class="btn btn-primary btn-sm" href="/view-discharge-summary/1">
                                        <i class="fas fa-folder">
                                        </i>
                                        View PDF
                                    </a>
                                    
                                </td>
                            </tr>
                            

                            <tr>
                                <td>
                                    #
                                </td>
                                <td>
                                    <a>
                                        20-01-2022
                                    </a>   
                                </td>

                                <td>
                                <a>
                                    Height: 162cm <br></br>
                                    Weight: 35kg <br></br>
                                    Arm Circumference: 10cm <br></br>
                                </a>   
                            </td>
                                
                                <td class="project_progress">
                                -
                                
                                </td>
                                
                                <td class="project-actions text-right">
                                    <a class="btn btn-info btn-sm" href={"/discharge-summary/" + this.state.samId}>
                                        <i class="fas fa-folder">
                                        </i>
                                        Record Summary
                                    </a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    </div>
                </div>

                </section>
            </div></div>
        )
    }
}

export default DischargeDetails
