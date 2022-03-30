import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import HealthStatusService from '../services/HealthStatusService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';

class AddPatientComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
        // step 2
        uhId: 0,
        name: '',
        samId: window.location.pathname.split("/")[2], 
        rchId: 0,
        dob: "2021-01-01",          
        age: 0,
        gender: 'M',
        BPL: true,
        address: "", religion: "", caste: "", relationshipStatus: "", symptoms: "", referredBy: "",
        contactNumber: "",
        height: 0.0, weight: 0.0, muac: 0.0, growthStatus: "", otherSymptoms: "", date: new Date()
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeRch_idHandler = this.changeRch_idHandler.bind(this);
    this.changeSamIdHandler = this.changeSamIdHandler.bind(this);
    this.changeUhidHandler = this.changeUhidHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.changeBplHandler = this.changeBplHandler.bind(this);

    this.changeHeightHandler = this.changeHeightHandler.bind(this);
    this.changeWeightHandler = this.changeWeightHandler.bind(this);
    this.changeMuacHandler = this.changeMuacHandler.bind(this);
    this.changeGrowthStatusHandler = this.changeGrowthStatusHandler.bind(this);
    this.changeDateHandler = this.changeDateHandler.bind(this);
    this.changeOtherSymptomsHandler = this.changeOtherSymptomsHandler.bind(this);

    this.changeReligionHandler = this.changeReligionHandler.bind(this);
    this.changeCasteHandler = this.changeCasteHandler.bind(this);
    this.changeReferred_byHandler = this.changeReferred_byHandler.bind(this);
    this.changeSymptomsHandler = this.changeSymptomsHandler.bind(this);
    this.changeContactHandler = this.changeContactHandler.bind(this);

    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeRelationshipHandler = this.changeRelationshipHandler.bind(this);
    this.changeHeightHandler = this.changeHeightHandler.bind(this);
    this.createPatient = this.createPatient.bind(this);
}

componentDidMount(){
    console.log(this.state.uhId);
    return;
}
createPatient = (e) => {
    e.preventDefault();
    let patient = {name: this.state.name, 
        uhId: this.state.uhId,  
        samId: this.state.samId, 
        rchId: this.state.rchId,
        dob: this.state.dob,          
        gender: this.state.gender,
        bpl: this.state.BPL,
        address: this.state.address, religion: this.state.religion, caste: this.state.caste, 
        relationshipStatus: this.state.relationshipStatus, symptoms: this.state.symptoms, referredBy: this.state.referredBy,
        contactNumber: this.state.contactNumber,
    };

    let hs = {height: this.state.height, weight: this.state.weight, admission: this.state.date,
      muac: this.state.muac, growthStatus: this.state.growthStatus, otherSymptoms: this.state.otherSymptoms
    };

    console.log(patient, hs);
    PatientService.createPatient(patient).then(res =>{
      HealthStatusService.createHealthStatus(this.state.samId, hs).then(res => {
        this.props.history.push('/view-patients');
      })
    });
    
}

changeNameHandler= (event) => { this.setState({name: event.target.value}); }
changeRch_idHandler= (event) => { this.setState({rchId: event.target.value}); }
changeSamIdHandler= (event) => { this.setState({samId: event.target.value}); }
changeUhidHandler= (event) => { this.setState({uhId: event.target.value}); }

changeDobHandler= (event) => { this.setState({dob: event.target.value}); }
changeGenderHandler= (event) => { this.setState({gender: event.target.value}); }
changeReligionHandler= (event) => { this.setState({religion: event.target.value}); }

changeCasteHandler= (event) => { this.setState({caste: event.target.value}); }
changeAddressHandler= (event) => { this.setState({address: event.target.value}); }
changeReferred_byHandler= (event) => { this.setState({referredBy: event.target.value}); }

changeSymptomsHandler= (event) => { this.setState({symptoms: event.target.value}); }
changeBplHandler= (event) => { this.setState({BPL: event.target.value}); }
changeRelationshipHandler= (event) => { this.setState({relationshipStatus: event.target.value}); }

changeHeightHandler= (event) => { this.setState({height: event.target.value}); }
changeWeightHandler= (event) => { this.setState({weight: event.target.value}); }
changeDateHandler= (event) => { this.setState({date: event.target.value}); }
changeMuacHandler= (event) => { this.setState({muac: event.target.value}); }
changeGrowthStatusHandler= (event) => { this.setState({growthStatus: event.target.value}); }
changeOtherSymptomsHandler= (event) => { this.setState({otherSymptoms: event.target.value}); }

changeContactHandler= (event) => { 
    this.setState({contactNumber: event.target.value}); 
    console.log("CONTACT NUMBER....", this.state.contactNumber);
}

cancel(){
    this.props.history.push('/view-patients');
}


    render() {
        return (
          <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
            <div class="wrapper">  
            <SideBarComponent /> 
          <section class="content">
          <div class="container-fluid">
            
    
            <div class="row">
              <div class="col-md-2">     
               
    
              </div>
              <div class="col-md-8">
                <div class="card card-info">
                  <div class="card-header">
                    <h3 class="card-title">Create New Patient</h3>
                  </div>
                  <div class="card-body">
                    {/* <div class="form-group">
                      <label>Enter SAM ID</label>
                      <input placeholder="SAM ID" name="samId" className="form-control" 
                                                value={this.state.SAM_ID} onChange={this.changeSamIdHandler}/>
                                    
                    </div> */}
    
                    <div class="form-group">
                      <label>Enter UHID ID</label>
                      <input placeholder="UHID" name="UHID" className="form-control" 
                                                value={this.state.uhId} onChange={this.changeUhidHandler}/>            
                    </div>
    
                    <div class="form-group">
                      <label>Enter RCH ID</label>
                      <input placeholder="rchId" name="rchId" className="form-control" 
                                                value={this.state.rchId} onChange={this.changeRch_idHandler}/>                 
                    </div>
    
                    <div class="form-group">
                        <label>Patient Name</label>
                        <input placeholder="Full Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>     
                      </div>
    
                    <div class="form-group">
                      <label>Date of Birth</label>
                        <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input placeholder="Date of birth" name="dob" className="form-control datetimepicker-input" 
                        data-target="#reservationdate" value={this.state.dob} onChange={this.changeDobHandler}/>
                            {/* <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/> */}
                            <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                            </div>
                        </div>
                    </div>
    
                    <div class="form-group">
                      <label>Contact Number</label>
                      <input placeholder="Contact No" name="contactNumber" className="form-control" 
                                                value={this.state.contactNumber} onChange={this.changeContactHandler}/>              
                    </div>
    
                    <div class="form-group">
                        <label>Address</label>
                        <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>             
                      </div>
                    
                      <div class="form-group">
                        <label>Relationship Details</label>
                        <input placeholder="Relationship" name="relationshipStatus" className="form-control" 
                                                value={this.state.relationshipStatus} onChange={this.changeRelationshipHandler}/>           
                      </div>
    
                      <div class="form-group">
                        <label>Referred By</label>
                        <input placeholder="Referred By" name="referred by" className="form-control" 
                                                value={this.state.referredBy} onChange={this.changeReferred_byHandler}/>            
                      </div>
    
                      <div class="form-group">
                        <label>Date of Admission</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                              <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                              <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                  <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                              </div>
                          </div>
                      </div>
      
                      <div class="form-group">
                          <label>Current Height</label>
                          <input class="form-control" type="text" value={this.state.height} onChange={this.changeHeightHandler}/>                  
                        </div>
    
                        <div class="form-group">
                            <label>Current Weight (in kg)</label>
                            <input class="form-control" type="text" value={this.state.weight} onChange={this.changeWeightHandler}/>                  
                          </div>
                        
                          <div class="form-group">
                            <label>Middle Upper Arm Circumference</label>
                            <input class="form-control" type="text" value={this.state.muac} onChange={this.changeMuacHandler}/>                  
                          </div>

                          <div class="form-group">
                            <label>Growth Status</label>
                            <input class="form-control" type="text" value={this.state.growthStatus} onChange={this.changeGrowthStatusHandler}/>                  
                          </div>

                          <div class="form-group">
                            <label>Other Symtoms</label>
                            <input class="form-control" type="text" value={this.state.otherSymptoms} onChange={this.changeOtherSymptomsHandler}/>                  
                          </div>
    
                        <div class="form-group">
                            <label>Gender</label>
                            {/* <input placeholder="Referred By" name="referred by" className="form-control" 
                                               />     */}
                            <select class="form-control select2" style={{width: "100%"}}  value={this.state.gender} onChange={this.changeGenderHandler}>
                              <option>M</option>
                              <option>F</option>
                              <option>Other</option>
                              
                            </select>
                          </div>
    
                          <div class="form-group">
                            <label>Religion</label>
                            <select class="form-control select2" style={{width: "100%"}} value={this.state.religion} onChange={this.changeReligionHandler}>
                              <option selected="selected">Hindu</option>
                              <option>Christian</option>
                              <option>Muslim</option>
                              
                            </select>
                          </div>
    
                          <div class="form-group">
                            <label>Caste</label>
                            <select class="form-control select2" style={{width: "100%"}} value={this.state.caste} onChange={this.changeCasteHandler}>
                              <option>Brahmin</option>
                              <option>Kshatriya</option>
                              <option>Vaishya</option>
                              
                            </select>
                          </div>
                        
                          <div class="form-group">
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" value={this.state.BPL} onChange={this.changeBplHandler}/>
                            <label >BPL</label>
                          </div>
                        </div>
    
                    {/* <div class="form-group">
                        <label>Treatment Protocol</label>
                        <input class="form-control" type="text" />                  
                    </div>
      
                    <div class="form-group">
                        <label>Follow-Up Date</label>
                          <div class="input-group date" id="reservationdate" data-target-input="nearest">
                              <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                              <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                  <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                              </div>
                          </div>
                      </div> */}
   
                      
                  </div>
                  <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                    <div class="mb-3">
                      {/* <a href="project-detail.html" class="btn btn-sm btn-success">Create</a> */}
                      <button className="btn btn-success" onClick={this.createPatient}>Save</button>
                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default AddPatientComponent
