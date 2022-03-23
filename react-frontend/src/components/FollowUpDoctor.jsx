import React, { Component } from 'react'
import FollowupService from '../services/FollowupService'
import SideBarComponent from './SideBarComponent'

class FollowUpDoctor extends Component {
    constructor(props) {
        super(props)
          this.state = {
              followups: []
          }
          // this.state.patient.uhid = this.props.match.params.id
    }

    componentDidMount(){
      FollowupService.getFollowups().then((res) => {
        this.setState({ followups: res.data});
        console.log("NOW IS", this.state.followups[0].completed)
    });
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
                    {
                            this.state.followups.map(
                                f => 
                                <tr key = {f.followupId}>
                                <td style={{width: "1%"}}>  </td>
                                <td style={{width: "20%"}}> {f.deadline} </td>   
                                <td style={{width: "20%"}}> {f.workerId}</td>
                                <td style={{width: "20%"}}> 8676296926 </td>
                                <td className="project-state">
                                  <span style={{width: "35%"}} className={"badge badge-" + (f.completed ? 'success' : 'warning')}> {f.completed ? "Completed" : "Pending"}</span> 
                                </td>
                                <td class="project-state">
                              <a href="/view-followup" class="btn btn-block btn-outline-primary btn-xs">View</a>
                          </td>  
                        </tr>
                                )
                            }
                                  
                        
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
