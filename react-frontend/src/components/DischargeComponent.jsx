import React, { Component } from 'react'
import DischargeSummaryService from '../services/DischargeSummaryService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';
import PatientService from '../services/PatientService';

class DischargeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          // dischargeId: 1,
          samId: window.location.pathname.split("/")[2],
          name: '',
          admissionDate: "2021-01-01",  
          dischargeDate: "2021-01-01",  
          admissionWeight: 0.0,
          targetWeight: 0.0,
          dischargeWeight: 0.0,
          contactNo: "",
          outcome: "Improved",
          treatmentProtocol: ""
        }
        this.changeDischargeIdHandler = this.changeDischargeIdHandler.bind(this);
        this.changeAdmissionDateHandler = this.changeAdmissionDateHandler.bind(this);
        this.changeDischargeDateHandler = this.changeDischargeDateHandler.bind(this);
        this.changeDischargeWeightHandler = this.changeDischargeWeightHandler.bind(this);
        this.changeAdmissionWeightHandler = this.changeAdmissionWeightHandler.bind(this);
        this.changeTargetWeightHandler = this.changeTargetWeightHandler.bind(this);
        this.changeOutcomeHandler = this.changeOutcomeHandler.bind(this);
        this.changeTreatmentProtocolHandler = this.changeTreatmentProtocolHandler.bind(this);
    }

    componentDidMount(){ 
      PatientService.getPatientById(this.state.samId).then((res) => {
        this.setState({ name: res.data.name, contactNo: res.data.contactNumber });
        console.log("PATIENT", res.data)
      }); 
      return;
    }

    createDischargeSummary = (e) => {
      e.preventDefault();
      let summary = {
        // dischargeId: this.state.dischargeId,
        samId: this.state.samId,
        admissionDate: this.state.admissionDate,  
        dischargeDate: this.state.dischargeDate,  
        admissionWeight: this.state.admissionWeight,
        targetWeight: this.state.admissionWeight * 1.15,
        dischargeWeight: this.state.dischargeWeight,
        outcome: parseFloat(this.state.dischargeWeight) >= (this.state.admissionWeight * 1.15) ? "Improved" : (parseFloat(this.state.dischargeWeight) == 0 ? "Death" : "Poor prognosis"),
        treatmentProtocol: this.state.treatmentProtocol
      };
      console.log("THE SUMMARY JIS", summary,  parseFloat(this.state.dischargeWeight), parseFloat(this.state.targetWeight))
      DischargeSummaryService.createDischargeSummary(this.state.samId, summary).then(res =>{
          this.props.history.push('/discharge-history/' + this.state.samId);
      });
    }

    changeDischargeIdHandler = (event) => { this.setState({dischargeId: event.target.value}); }
    changeAdmissionDateHandler = (event) => { this.setState({admissionDate: event.target.value}); }
    changeDischargeDateHandler= (event) => { this.setState({dischargeDate: event.target.value}); }
    changeDischargeWeightHandler= (event) => { this.setState({dischargeWeight: event.target.value}); }
    changeAdmissionWeightHandler= (event) => { this.setState({admissionWeight: event.target.value}); }
    changeTargetWeightHandler = (event) => { this.setState({targetWeight: event.target.value}); }
    changeOutcomeHandler= (event) => { this.setState({outcome: event.target.value}); }
    changeTreatmentProtocolHandler= (event) => { this.setState({treatmentProtocol: event.target.value}); }

    render() {
        return (
          <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
            <div class="wrapper">   
            <SideBarComponent />
            <section class="content">
            <div class="container-fluid">
        

        <div class="row">
          <div class="col-md-3">     
           

          </div>
          <div class="col-md-6">
            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">Record Discharge Summary</h3>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label>Enter SAM ID</label>
                  <input name="samId" className="form-control" type="text" value={this.state.samId} />         
                </div>

                <div class="form-group">
                    <label>Patient Name</label>
                    <input name="name" className="form-control" type="text" value={this.state.name} />         
                  </div>

                  {/* <div class="form-group">
                    <label>Patient Contact Number</label>
                    <input name="contactNo" className="form-control" type="text" value={this.state.contactNo} />         
                  </div> */}
                <div class="form-group">
                  <label>Date of Admission:</label>
                    <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate" value={this.state.admissionDate} onChange={this.changeAdmissionDateHandler} />         
                        <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Weight on Date of Admission (in kg)</label>
                    <input name="admissionWeight" className="form-control" type="text" value={this.state.admissionWeight} onChange={this.changeAdmissionWeightHandler} />         
                  </div>

                  <div class="form-group">
                    <label>Date of Discharge:</label>
                      <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate" value={this.state.dischargeDate} onChange={this.changeDischargeDateHandler} /> 
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                          </div>
                      </div>
                  </div>
  
                  <div class="form-group">
                      <label>Weight on Date of Discharge (in kg)</label>
                      <input name="dischargeWeight" className="form-control" type="text" value={this.state.dischargeWeight} onChange={this.changeDischargeWeightHandler} />         
                  </div>

                  {/* <div class="form-group">
                      <label>Target Weight (in kg)</label>
                      <input name="targetWeight" className="form-control" type="text" value={this.state.targetWeight} onChange={this.changeTargetWeightHandler} />         
                    </div> */}

                  {/* <div class="form-group">
                      <label>Outcome</label>                      
                      <select class="form-control select2" style={{width: "100%"}} value={this.state.outcome} onChange={this.changeOutcomeHandler} >
                        <option>Improved</option>
                        <option>Poor Prognosis</option>
                        <option>Death</option>
                        
                      </select>
                  </div> */}

                <div class="form-group">
                    <label>Treatment Protocol</label>
                    <input class="form-control" type="text" value={this.state.treatmentProtocol} onChange={this.changeTreatmentProtocolHandler} />                    
                </div>
  
                {/* <div class="form-group">
                    <label>Follow-Up Date</label>
                      <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate" value={this.state.targetWeight} onChange={this.changeTargetWeightHandler} />         
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                          </div>
                      </div>
                  </div> */}

                
              </div>
              <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                <div class="mb-3">
                <button className="btn btn-success" onClick={this.createDischargeSummary} >Save</button>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        
      </div>
    </section>
    </div>
    </div>
        )
    }
}

export default DischargeComponent
