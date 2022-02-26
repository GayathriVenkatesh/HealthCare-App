import React, { Component } from 'react'
import PatientService from '../services/PatientService'

class FollowUpReceptionist extends Component {
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
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
    
          <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
              <a href="/schedule-followup" class="btn btn-sm btn-primary">Create schedule</a>
          </div>
    
        </section>
            
        )
    }
}

export default FollowUpReceptionist
