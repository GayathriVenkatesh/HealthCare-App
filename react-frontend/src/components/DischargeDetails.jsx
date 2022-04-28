import React, { Component } from 'react'
import DischargeSummaryService from '../services/DischargeSummaryService'
import HealthStatusService from '../services/HealthStatusService'
import { faHome, faPencilAlt, faTrash, faFolder, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';

class DischargeDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            samId: window.location.pathname.split("/")[2],
            summaries: [],
            admissions: []
        }
    }
    
    componentDidMount(){
        DischargeSummaryService.getDischargeSummaryBySamId(this.state.samId).then((res) => {
            this.setState({ summaries: res.data});
        });
        // HealthStatusService.getHealthStatusBySamId(this.state.samId).then((res) => {
        //     this.setState({ admissions: res.data })
        //     console.log("HERE ADMISSION", this.state.admissions)
        // })
        this.state.summaries.concat(this.state.admissions)
        // console.log("HERE I AM", this.state.summaries, this.state.samId)
    }

    addSummary(){
        this.props.history.push('/discharge-summary/' + this.state.samId);
      }

    render() {
        return (
            <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>
            <section class="content">
                <div class="card">
                    <div class="card-header">
                        <h4>  Discharge Details </h4>
                        {/* <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i class="fas fa-times"></i>
                            </button>
                        </div> */}
                    </div>
                    <div class="card-body p-0">
                    <table class="table table-striped projects">
                        <thead>
                            <tr>
                                
                                <th style={{width: "20%"}}>
                                    Admission Date
                                </th>
                                <th style={{width: "20%"}}>
                                    Discharge Date
                                </th>
                                <th style={{width: "20%"}}>
                                    Admission Weight
                                </th>
                                <th style={{width: "20%"}}>
                                    Discharge Weight
                                </th>
                                <th style={{width: "20%"}}>
                                    Outcome
                                </th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.summaries.map(
                                f => 
                                <tr key = {f.dischargeId}>
                                {/* <td style={{width: "1%"}}>  </td> */}
                                <td style={{width: "20%"}}> {f.admissionDate} </td>   
                                <td style={{width: "20%"}}> {f.dischargeDate} </td>
                                <td style={{width: "20%"}}> {f.admissionWeight}</td>
                                <td style={{width: "20%"}}> {f.dischargeWeight}</td>
                                <td style={{width: "20%"}}> {f.outcome}</td>
                                </tr>
                                )
                                
                            }
                                  
                        
                    </tbody>

                       
                    </table>
                    </div>
                </div>
                <button className="btn btn-info btn-sm" onClick={ () => this.addSummary() } >                         
                <FontAwesomeIcon icon={faPlus} />
                    Add 
            </button>
                </section>
            </div></div>
        )
    }
}

export default DischargeDetails
