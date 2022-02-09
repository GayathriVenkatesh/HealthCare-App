import React, { Component } from 'react'
import PatientService from '../services/PatientService'

class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.viewPatient = this.viewPatient.bind(this);
        // this.deletePatient  = this.deletePatient.bind(this);
    }

    // deletePatient(id){
    //     PatientService.deletePatient (id).then( res => {
    //         this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    //     });
    // }
    viewPatient(uhid){
        this.props.history.push(`/view-patient/${uhid}`);
    }
    editPatient(uhid){
        console.log("CURRENT UHID", uhid);
        this.props.history.push(`/edit-patient/${uhid}`);
    }

    componentDidMount(){
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data});
        });
    }

    addPatient(){
        this.props.history.push('/add-patient');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Patients List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPatient}> Add Patient</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Patient Name</th>
                                    <th> Contact Number</th>
                                    <th> Date of Birth</th>
                                    <th> Religion</th>
                                    <th>UHID</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.uhid}>
                                             <td> {patient.name} </td>   
                                             <td> {patient.contact_no}</td>
                                             <td> {patient.dob}</td>
                                             <td> {patient.religion}</td>
                                             <td> {patient.uhid}</td>
                                             <td>
                                                 <button onClick={ () => this.editPatient(patient.uhid)} className="btn btn-info">Update </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deletePatient (employee.id)} className="btn btn-danger">Delete </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPatient(patient.uhid)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPatientComponent
