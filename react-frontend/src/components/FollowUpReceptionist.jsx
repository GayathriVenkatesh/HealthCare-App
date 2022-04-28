import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FollowupService from '../services/FollowupService'
import AnganwadiWorkerService from '../services/AnganwadiWorkerService'
import PatientService from '../services/PatientService'
import SideBarComponent from './SideBarComponent'
import SideBarComponentReceptionist from './SideBarComponentReceptionist'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
class FollowUpReceptionist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            followups: [],
            samId: window.location.pathname.split("/")[2]
        }
        // this.state.patient.uhId = this.props.match.params.id
    }

    editFollowup(samId, followupId){
        console.log("CURRENT UHID", samId);
        this.props.history.push(`/edit-followup/${samId}/${followupId}`);
    }

    componentDidMount(){
        FollowupService.getFollowupBySamId(this.state.samId).then((res) => {
            this.setState({ followups: res.data});
            // console.log("NOW IS", res.data.worker, res.data.patient, res.data)
        });
        FollowupService.getFollowupById(1).then((res) => {
            console.log("NOW IS", res.data.worker, res.data.patient, res.data)
        });
    }

    render() {
        return (
            <div className="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div className="wrapper">   
                    <SideBarComponentReceptionist />
          <section className="content">

          <div className="card">
            <div className="card-header">
    
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                  <thead>
                      <tr>
                          {/* <th style={{width: "1%"}}>
                              #
                          </th> */}
                          <th style={{width: "20%"}}>
                              Deadline
                          </th>
                          <th style={{width: "20%"}}>
                              Location
                          </th>
                          <th style={{width: "20%"}}>
                              Worker Name
                          </th>
                          <th style={{width: "20%"}}>
                              Worker Contact
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
                                {/* <td style={{width: "1%"}}>  </td> */}
                                <td > {f.deadlineDate} </td>  
                                <td > {f.location} </td>   
                                <td > {f.worker}</td>
                                <td > 8676296926 </td>
                                <td className="project-state">
                                    <span style={{width: "35%"}} className={"badge badge-" + (f.completed ? 'success' : 'warning')}> {f.completed ? "Completed" : "Pending"} </span>
                                </td>

                                <td>
                                    <button onClick={ () => this.editFollowup(this.state.samId, f.followupId)} className="btn btn-danger btn-sm">  
                                        <FontAwesomeIcon icon={faPenAlt} />
                                    </button>
                                </td>
                        </tr>
                                )
                            }
                  </tbody>
              </table>
            </div>
          </div>
    
          <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
              <a href={"/schedule-followup/" + this.state.samId} className="btn btn-sm btn-primary">Create schedule</a>
          </div>
    
        </section>
        </div> 
        </div>
            
        )
    }
}

export default FollowUpReceptionist
