import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import FollowUpDoctor from './FollowUpDoctor'
import SideBarComponent from './SideBarComponent'
import SideBarComponentReceptionist from './SideBarComponentReceptionist'

class ViewComponentReceptionist extends Component {
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
                    <SideBarComponentReceptionist />
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
                            <td>Name:</td>
                            <td>{ this.state.patient.name }</td>
                          </tr>
                          <tr>
                            <td>Age:</td>
                            <td>{Math.ceil((Date.now() - new Date(this.state.patient.dob)) / (1000 * 60 * 60 * 24 * 365)) }</td>
                          </tr>
                          <tr>
                            <td>Date of Birth:</td>
                            <td>{ this.state.patient.dob }</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>{ this.state.patient.gender }</td>
                          </tr>
                          <tr>
                            <td>UHID</td>
                            <td>{ this.state.patient.uhid }</td>
                          </tr>
                          <tr>
                            <td>SAM ID</td>
                            <td>{ this.state.patient.sam_id }</td>
                          </tr>
                          <tr>
                            <td>RCH ID</td>
                            <td>{ this.state.patient.rch_id }</td>
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td>{ this.state.patient.address }</td>
                          </tr>
      
                          <tr>
                            <td>Caste</td>
                            <td>{ this.state.patient.caste }</td>
                          </tr>
                          <tr>
                            <td>Religion</td>
                            <td>{ this.state.patient.religion }</td>
                          </tr>
                          <tr>
                            <td>Referred By</td>
                            <td>{ this.state.patient.referred_by }</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
      
              <div class="col-12 col-md-12 col-lg-12 order-1 order-md-2">
                <div class="row">
                  <a href="/followup-receptionist" class="btn btn-sm btn-primary">View follow up schedule</a>
                  {/* <a href="/discharge-history" class="btn btn-sm btn-warning">View discharge history</a> */}
                </div>
              </div>
              {/* </div> */}
        
              </section>
            </div>
            </div>
            
        )
    }
}

export default ViewComponentReceptionist
