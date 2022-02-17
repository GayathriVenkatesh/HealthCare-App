import React, { Component } from 'react'
import PatientService from '../services/PatientService';

class CreatePatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            UHID: 0,
            name: '',
            SAM_ID: 0, 
            rch_id: 0,
            dob: "2021-01-01",          
            age: 0,
            gender: 'M',
            bpl: true,
            address: "", religion: "", caste: "", relationship: "", symptoms: "", referred_by: "",
            contact_no: ""
            // health_params: [
            //     { "height": 0.0 },
            //     { "weight": 0.0 },
            //     { "muac": 0.0 },
            //     { "growth_status": 0.0 }
            //   ]
            // health_params.put("height", 0.0);
            // health_params.put("weight", 0.0);
            // health_params.put("muac", 0.0);
            // health_params.put("growth_status", 0.0);
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRch_idHandler = this.changeRch_idHandler.bind(this);
        this.changeSam_idHandler = this.changeSam_idHandler.bind(this);
        this.changeUhidHandler = this.changeUhidHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeBplHandler = this.changeBplHandler.bind(this);

        this.changeReligionHandler = this.changeReligionHandler.bind(this);
        this.changeCasteHandler = this.changeCasteHandler.bind(this);
        this.changeReferred_byHandler = this.changeReferred_byHandler.bind(this);
        this.changeSymptomsHandler = this.changeSymptomsHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);

        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeRelationshipHandler = this.changeRelationshipHandler.bind(this);
        this.changeHealthHandler = this.changeHealthHandler.bind(this);
        this.createPatient = this.createPatient.bind(this);
    }

    // step 3
    componentDidMount(){
        console.log(this.state.UHID);
        return;
    }
    createPatient = (e) => {
        e.preventDefault();
        let patient = {name: this.state.name, 
            UHID: this.state.UHID,  // we are not changing UHID
            sam_id: this.state.sam_id, 
            rch_id: this.state.rch_id,
            dob: this.state.dob,          
            gender: this.state.gender,
            bpl: this.state.bpl,
            address: this.state.address, religion: this.state.religion, caste: this.state.caste, 
            relationship: this.state.relationship, symptoms: this.state.symptoms, referred_by: this.state.referred_by,
            contact_no: this.state.contact_no,
            // health_params: this.state.health_params
        };
        console.log('Patient => ' + patient);
        PatientService.createPatient(patient).then(res =>{
            console.log("INSIDE THEN");
            this.props.history.push('/view-patients');
        });
    }
    
    changeNameHandler= (event) => { this.setState({name: event.target.value}); }
    changeRch_idHandler= (event) => { this.setState({rch_id: event.target.value}); }
    changeSam_idHandler= (event) => { this.setState({sam_id: event.target.value}); }
    changeUhidHandler= (event) => { this.setState({UHID: event.target.value}); }

    changeDobHandler= (event) => { this.setState({dob: event.target.value}); }
    changeGenderHandler= (event) => { this.setState({gender: event.target.value}); }
    changeReligionHandler= (event) => { this.setState({religion: event.target.value}); }

    changeCasteHandler= (event) => { this.setState({caste: event.target.value}); }
    changeAddressHandler= (event) => { this.setState({address: event.target.value}); }
    changeReferred_byHandler= (event) => { this.setState({referred_by: event.target.value}); }

    changeSymptomsHandler= (event) => { this.setState({symptoms: event.target.value}); }
    changeBplHandler= (event) => { this.setState({bpl: event.target.value}); }
    changeRelationshipHandler= (event) => { this.setState({relationship: event.target.value}); }
    changeHealthHandler= (event) => { 
        // this.setState({health_params: event.target.value});
    }
    changeContactHandler= (event) => { 
        this.setState({contact_no: event.target.value}); 
        console.log("CONTACT NUMBER....", this.state.contact_no);
    }

    cancel(){
        this.props.history.push('/view-patients');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Patient</h3>
        }else{
            return <h3 className="text-center">Update Patient</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                                value={this.state.UHID} onChange={this.changeUhidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> RCH ID: </label>
                                            <input placeholder="rch_id" name="rch_id" className="form-control" 
                                                value={this.state.rch_id} onChange={this.changeRch_idHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> SAM ID: </label>
                                            <input placeholder="sam_id" name="sam_id" className="form-control" 
                                                value={this.state.sam_id} onChange={this.changeSam_idHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of Birth: </label>
                                            <input placeholder="Date of birth" name="dob" className="form-control" 
                                                value={this.state.dob} onChange={this.changeDobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> BPL / APL: </label>
                                            <input placeholder="bpl" name="bpl" className="form-control" 
                                                value={this.state.bpl} onChange={this.changeBplHandler}/>
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
                                                value={this.state.referred_by} onChange={this.changeReferred_byHandler}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Health Parameters: </label>
                                            <input placeholder="Health" name="health" className="form-control" 
                                                value={this.state.health_params} onChange={this.changeHealthHandler}/>
                                        </div> */}


                                        <button className="btn btn-success" onClick={this.createPatient}>Save</button>
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

export default CreatePatientComponent
