import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';

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
        this.props.history.push(`/view/${uhid}`);
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
                <SideBarComponent />
                <div class="content-wrapper">
                    <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            {/* <h1>Patient List</h1> */}
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* <SideBarComponent /> */}
                    <section class="content">
                        <div class="card">
                            <div class="card-header">
                                <h3>Patient List</h3>
                                {/* <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                    </button>
                                </div> */}
                            </div>

                        <div class="card-body p-0"></div>
                        
                            <div className = "row">
                                <table class="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{width: "1%"}}>
                                        </th>
                                        <th style={{width: "20%"}}>
                                            Name
                                        </th>
                                        <th style={{width: "10%"}}>
                                            Age
                                        </th>
                                        <th  style={{width: "20%"}}>
                                            UHID
                                        </th>
                                        <th  style={{width: "20%"}}>
                                            Address
                                        </th>
                                        <th  style={{width: "10%"}}>
                                            Gender
                                        </th>
                                                        
                                        <th style={{width: "20%"}}>
                                        </th>
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
                                            <td class="project-actions text-right">
                                            <button onClick={ () => this.viewPatient(patient.uhid)} className="btn btn-primary btn-sm">
                                                <FontAwesomeIcon icon={faFolder} /><br></br>
                                                View 
                                            </button>
                                            <br></br>

                                            <button style={{marginTop: "0.5em"}} onClick={ () => this.editPatient(patient.uhid)} className="btn btn-info btn-sm">
                                                <FontAwesomeIcon icon={faPencilAlt} /><br></br>
                                                Update
                                            </button>
                                            <br></br>
                                            {/* <a class="btn btn-danger btn-sm" href="#"> */}
                                            <button style={{marginTop: "0.5em"}} onClick={ () => this.editPatient(patient.uhid)} className="btn btn-danger btn-sm"> 
                                                
                                                <FontAwesomeIcon icon={faTrash} />
                                                Delete 
                                            </button>
                                            {/* </a> */}
                                        </td>
                                            {/* <td>
                                                <button onClick={ () => this.editPatient(patient.uhid)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewPatient(patient.uhid)} className="btn btn-info">View </button>
                                            </td> */}
                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                    {/* <table className = "table table-striped table-bordered">

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
                                                            {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deletePatient (employee.id)} className="btn btn-danger">Delete </button> 
                                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewPatient(patient.uhid)} className="btn btn-info">View </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table> */}

                            </div>

                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default ListPatientComponent
