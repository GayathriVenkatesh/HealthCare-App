import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import SideBarComponent from './SideBarComponent'

class FollowUpDoctor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // uhid: this.props.match.params.id,  // change this to 1, otherwise uhid will be treated as an automatically generated key
            // uhid: this.props.route.id,
            uhid: window.location.pathname.split("/")[2],
            patient: {}
        }
        // this.state.patient.uhid = this.props.match.params.id
    }

    componentDidMount(){
        console.log("UHID NOW", this.state.uhid)
        PatientService.getPatientById(this.state.uhid).then( res => {
            console.log("dataa", res.data)
            console.log("PATH", window.location.pathname.split("/")[2])
            
            this.setState({patient: res.data});
        })
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
                                Date of Follow Up
                            </th>
                            <th style={{width: "20%"}}>
                                Worker Assigned
                            </th>
                            <th style={{width: "20%"}}>
                                Worker Contact Info
                            </th>
                            <th style={{width: "20%"}}>
                              Status
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
                                  Mira Chawla
                              </a>   
                          </td>
                           
                            <td class="project_progress">
                              9893524464
                               
                            </td>
                            <td class="project-state">
                                <span class="badge badge-success">Complete</span>
                            </td>    
      
                            <td class="project-state">
                              <a href="/view-followup" class="btn btn-block btn-outline-primary btn-xs">View</a>
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
                                Areem Bansal
                            </a>   
                        </td>
                          <td class="project_progress">
                            8868599253
                          </td>
                          <td class="project-state">
                              <span class="badge badge-warning">Pending</span>
                          </td>   
                          
                          <td class="project-state">
                            <a href="viewdetails.html" class="btn btn-block btn-outline-primary btn-xs disabled">View</a>
                          </td>
                      </tr>
                      
                      <tr>
                          <td>
                              #
                          </td>
                          <td>
                              <a>
                                  20-02-2022
                              </a>   
                          </td>
      
                          <td>
                            <a>
                                Shruti Banjra
                            </a>   
                        </td>
                          <td class="project_progress">
                            7033554241
                          </td>
                          <td class="project-state">
                              <span class="badge badge-danger">Overdue</span>
                          </td>           
      
                          <td class="project-state">
                            <a href="viewdetails.html" class="btn btn-block btn-outline-primary btn-xs disabled">View</a>
                          </td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
      
          </section>
          </div>
          </div>
            
        )
    }
}

export default FollowUpDoctor
