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
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        var name = urlParams.get('name')
        var address = urlParams.get('address')
        var religion = urlParams.get('religion')
        var uhid = urlParams.get('uhid')
        var rch = urlParams.get('rch')
        var sam = urlParams.get('sam')

        if (!(name || address || religion || uhid || sam || rch)) {
            PatientService.getPatients().then((res) => {
                this.setState({ patients: res.data});
                console.log("NOW IS", res.data)
            });
        }
        else{
            console.log("keyword", window.location.href);
            PatientService.getByKeyword(name, address, religion, uhid, rch, sam).then( res => {
                this.setState({patients: res.data});
            })
        }
    
    }

    addPatient(){
        this.props.history.push('/add-patient');
    }

    render() {
        return (
            <div>
                <br></br>
                 <h2 className="text-center">Patients List</h2>
                 <div className = "row">
                    <button className="btn btn-success" onClick={this.addPatient}> Add Patient</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> UHID </th>
                                    <th> Name</th>
                                    <th> Contact </th>
                                    <th> Date of Birth</th>
                                    <th> Religion</th>
                                    <th> SAM ID </th> 
                                    <th> RCH ID </th>   
                                    <th> Gender </th>
                                    <th> BPL </th>
                                    <th> Caste </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.patients.map(
                                        patient => 
                                        <tr key = {patient.uhid}>
                                             <td> {patient.uhid}</td>
                                             <td> {patient.name} </td>   
                                             <td> {patient.contact_no}</td>
                                             <td> {patient.dob}</td>
                                             <td> {patient.religion}</td>

                                             <td> {patient.sam_id} </td> 
                                             <td> {patient.rch_id}</td>  
                                             <td> {patient.gender}</td>
                                             <td> {patient.bpl}</td>
                                             <td> {patient.caste}</td>
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
