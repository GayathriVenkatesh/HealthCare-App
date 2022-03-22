import React, { Component } from 'react'
import DischargeSummaryService from '../services/DischargeSummaryService'
import FollowUpDoctor from './FollowUpDoctor'
import SideBarComponent from './SideBarComponent'

class ViewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dischargeId: window.location.pathname.split("/")[2],
            summary: {}
        }
    }

    componentDidMount(){
        DischargeSummaryService.getDischargeSummaryById(this.state.dischargeId).then( res => {
            console.log("dataa", res.data)
            console.log("PATH", window.location.pathname.split("/")[2])
            this.setState({summary: res.data});
        })
    }

    render() {
        return (
          <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>
            <section class="content">
            <div class="card">
              
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    
                    <div class="card-body table-responsive p-0">
                      <table class="table table-head-fixed text-nowrap">
                        <thead>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Discharge ID:</td>
                            <td>{ this.state.summary.dischargeId }</td>
                          </tr>
                          <tr>
                            <td>SAM ID:</td>
                            <td>{ this.state.summary.sam_id }</td>
                          </tr>
                          <tr>
                            <td>Name:</td>
                            <td>{ this.state.summary.name }</td>
                          </tr>
                          <tr>
                            <td>Admission Date:</td>
                            <td>{ this.state.summary.admissionDate }</td>
                          </tr>
                          <tr>
                            <td>Discharge Date:</td>
                            <td>{ this.state.summary.dischargeDate }</td>
                          </tr>
                          <tr>
                            <td>Admission Weight</td>
                            <td>{ this.state.summary.admissionWeight }</td>
                          </tr>
                          <tr>
                            <td>Target Weight</td>
                            <td>{ this.state.summary.targetWeight }</td>
                          </tr>
                          <tr>
                            <td>Discharge Weight</td>
                            <td>{ this.state.summary.dischargeWeight }</td>
                          </tr>
                          <tr>
                            <td>Contact No</td>
                            <td>{ this.state.summary.contactNo }</td>
                          </tr>
                          <tr>
                            <td>Outcome</td>
                            <td class={"badge badge-" + (this.state.summary.outcome == "Improved" ? 'success' : (this.state.summary.outcome == "Poor Prognosis" ? 'warning' : 'danger'))}>{ this.state.summary.outcome }</td>
                          </tr>
                          <tr>
                            <td>Treatment Protocol</td>
                            <td>{ this.state.summary.treatmentProtocol }</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
      
              {/* <div class="col-12 col-md-12 col-lg-12 order-1 order-md-2">
                <div class="row">
                  <a href="/followup-doctor" className="btn btn-sm btn-primary" style={{marginLeft: "0px", marginRight: "20px"}}>View follow up schedule</a>
                  <a href="/discharge-history" class="btn btn-sm btn-warning">View discharge history</a>
                </div>
              </div> */}
              {/* </div> */}
        
              </section>
            </div></div>
            
        )
    }
}

export default ViewComponent
