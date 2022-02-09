import React, { Component } from 'react'
import PatientService from '../services/PatientService';

class UpdatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // UHID: this.props.match.params.id,
            UHID: window.location.pathname.split("/")[2],
            name: '',
            SAM_ID: 0, 
            RCH_ID: 0,
            dob: "2021-01-01",          
            age: 0,
            gender: 'M',
            bpl: true,
            address: "", religion: "", caste: "", relationship: "", symptoms: "", referred_by: "",
            contact_no: "",
            health_params: [
                { "height": 0.0 },
                { "weight": 0.0 },
                { "muac": 0.0 },
                { "growth_status": 0.0 }
              ]
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRCHHandler = this.changeRCHHandler.bind(this);
        this.changeSAMHandler = this.changeSAMHandler.bind(this);
        this.changeUHIDHandler = this.changeUHIDHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeBPLHandler = this.changeBPLHandler.bind(this);

        this.changeReligionHandler = this.changeReligionHandler.bind(this);
        this.changeCasteHandler = this.changeCasteHandler.bind(this);
        this.changeReferredByHandler = this.changeReferredByHandler.bind(this);
        this.changeSymptomsHandler = this.changeSymptomsHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);

        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeRelationshipHandler = this.changeRelationshipHandler.bind(this);
        this.changeHealthHandler = this.changeHealthHandler.bind(this);
        this.updatePatient = this.updatePatient.bind(this);
    }

    componentDidMount(){
        PatientService.getPatientById(this.state.UHID).then( (res) => {
            let patient = res.data;
            console.log("I AM HERE", patient);
                this.setState({
                    name: patient.name,
                    UHID: this.state.UHID,  // we are not changing UHID
                    SAM_ID: patient.SAM_ID, 
                    RCH_ID: patient.RCH_ID,
                    dob: patient.dob,          
                    gender: patient.gender,
                    bpl: patient.bpl,
                    address: patient.address, religion: patient.religion, caste: patient.caste, 
                    relationship: patient.relationship, symptoms: patient.symptoms, referred_by: patient.referred_by,
                    contact_no: patient.contact_no,
                    health_params: patient.health_params
                });
            });
    }

    updatePatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name, 
            UHID: this.state.UHID,  // we are not changing UHID
            SAM_ID: this.state.SAM_ID, 
            RCH_ID: this.state.RCH_ID,
            dob: this.state.dob,          
            gender: this.state.gender,
            bpl: this.state.bpl,
            address: this.state.address, religion: this.state.religion, caste: this.state.caste, 
            relationship: this.state.relationship, symptoms: this.state.symptoms, referred_by: this.state.referred_by,
            contact_no: this.state.contact_no,
            health_params: this.state.health_params};
        
        console.log('patient => ' + JSON.stringify(patient));
        console.log('id => ' + JSON.stringify(this.state.UHID));

        PatientService.updatePatient(patient, this.state.UHID).then( res => {
            this.props.history.push('/view-patients');
        });
    }
    
    changeNameHandler= (event) => { this.setState({name: event.target.value}); }
    changeRCHHandler= (event) => { this.setState({RCH_ID: event.target.value}); }
    changeSAMHandler= (event) => { this.setState({SAM_ID: event.target.value}); }
    changeUHIDHandler= (event) => { this.setState({UHID: event.target.value}); }

    changeDOBHandler= (event) => { this.setState({dob: event.target.value}); }
    changeGenderHandler= (event) => { this.setState({gender: event.target.value}); }
    changeReligionHandler= (event) => { this.setState({religion: event.target.value}); }

    changeCasteHandler= (event) => { this.setState({caste: event.target.value}); }
    changeAddressHandler= (event) => { this.setState({address: event.target.value}); }
    changeReferredByHandler= (event) => { this.setState({referred_by: event.target.value}); }

    changeSymptomsHandler= (event) => { this.setState({symptoms: event.target.value}); }
    changeBPLHandler= (event) => { this.setState({bpl: event.target.value}); }
    changeRelationshipHandler= (event) => { this.setState({relationship: event.target.value}); }
    changeHealthHandler= (event) => { this.setState({health_params: event.target.value}); }
    changeContactHandler= (event) => { this.setState({contact_no: event.target.value}); }

    cancel(){
        this.props.history.push('/view-patients');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Patient</h3>
                                <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Full Name: </label>
                                        <input placeholder="Full Name" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> UHID: </label>
                                        <input placeholder="UHID" name="UHID" className="form-control" 
                                            value={this.state.UHID} onChange={this.changeUHIDHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> RCH ID: </label>
                                        <input placeholder="RCH_ID" name="RCH_ID" className="form-control" 
                                            value={this.state.RCH_ID} onChange={this.changeRCHHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> SAM ID: </label>
                                        <input placeholder="SAM_ID" name="SAM_ID" className="form-control" 
                                            value={this.state.SAM_ID} onChange={this.changeSAMHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date of Birth: </label>
                                        <input placeholder="Date of birth" name="dob" className="form-control" 
                                            value={this.state.dob} onChange={this.changeDOBHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Gender: </label>
                                        <input placeholder="Gender" name="gender" className="form-control" 
                                            value={this.state.gender} onChange={this.changeGenderHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> BPL / APL: </label>
                                        <input placeholder="BPL" name="bpl" className="form-control" 
                                            value={this.state.bpl} onChange={this.changeBPLHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Contact Number: </label>
                                        <input placeholder="Contact No" name="contact_no" className="form-control" 
                                            value={this.state.contact_no} onChange={this.changeContactHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control" 
                                            value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Religion: </label>
                                        <input placeholder="Religion" name="religion" className="form-control" 
                                            value={this.state.religion} onChange={this.changeReligionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Caste: </label>
                                        <input placeholder="Caste" name="caste" className="form-control" 
                                            value={this.state.caste} onChange={this.changeCasteHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Relationship: </label>
                                        <input placeholder="Relationship" name="relationship" className="form-control" 
                                            value={this.state.relationship} onChange={this.changeRelationshipHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Symptoms: </label>
                                        <input placeholder="Symptoms" name="symptoms" className="form-control" 
                                            value={this.state.symptoms} onChange={this.changeSymptomsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Referred By: </label>
                                        <input placeholder="Referred By" name="referred by" className="form-control" 
                                            value={this.state.referred_by} onChange={this.changeReferredByHandler}/>
                                    </div>
                                    {/* <div className = "form-group">
                                        <label> Health Parameters: </label>
                                        <input placeholder="Health" name="health" className="form-control" 
                                            value={this.state.health_params} onChange={this.changeHealthHandler}/>
                                    </div> */}


                                    <button className="btn btn-success" onClick={this.updatePatient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdatePatientComponent
