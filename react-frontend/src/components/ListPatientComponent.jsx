import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBarComponent from './SideBarComponent';
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback";
import "./plugins/fontawesome-free/css/all.min.css";
import "./dist/css/adminlte.min.css"
import SearchFilterComponent from './SearchFilterComponent';

class ListPatientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                patients: []
        }
        this.addPatient = this.addPatient.bind(this);
        this.editPatient = this.editPatient.bind(this);
        this.viewPatient = this.viewPatient.bind(this);
        this.deletePatient  = this.deletePatient.bind(this);
    }

    deletePatient(id){
        PatientService.deletePatient (id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.samId !== id)});
        });
    }
    viewPatient(samId){
        this.props.history.push(`/view/${samId}`);
    }
    editPatient(samId){
        console.log("CURRENT UHID", samId);
        this.props.history.push(`/edit-patient/${samId}`);
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
            PatientService.getByKeyword(name, address, religion, uhid, sam).then( res => {
                this.setState({patients: res.data});
            })
        }
    
    }

    addPatient(){
        this.props.history.push('/add-patient');
    }

    render() {
        return ( 
            <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>

        <section class="content" >
            <div class="card" >
                <div class="card-header">
                  <h3>  Patient List </h3>
                <SearchFilterComponent/>
                    
                    {/* <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                        </button>
                    </div> */}
                </div>

            <div class="card-body p-0">
                
                    <table class="table table-striped projects">
                    <thead>
                        <tr>
                            {/* <th style={{width: "1%"}}>
                            </th> */}
                            <th style={{width: "15%"}}>
                                Patient ID
                            </th>
                            <th style={{width: "20%"}}>
                                Name
                            </th>
                            <th  style={{width: "15%"}}>
                                Contact No
                            </th>
                            {/* <th  style={{width: "5%"}}>
                                BPL
                            </th> */}
                            <th style={{width: "20%"}}>
                                UHID
                            </th>
                            <th  style={{width: "10%"}}>
                                Gender
                            </th>
                                            
                            {/* <th style={{width: "20%"}}>
                                Caste
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.patients.map(
                                patient => 
                                <tr key = {patient.samId}>
                                <td> {patient.samId}</td>
                                <td> {patient.name} </td>   
                                <td> {patient.contact_no}</td>
                                {/* <td> {patient.bpl}</td> */}

                                <td> {patient.uhid} </td> 
                                <td> {patient.gender}</td>
                                {/* <td> {patient.caste}</td> */}
                                {/* <td class="project-actions text-right">
                                    <button onClick={ () => this.viewPatient(patient.uhid)} className="btn btn-primary btn-sm" >
                                        <FontAwesomeIcon icon={faFolder} /><br></br>
                                        View 
                                    </button>
                                </td> */}

                                <td>
                                    <button style={{marginTop: "0.5em"}} onClick={ () => this.editPatient(patient.samId)} className="btn btn-info btn-sm">
                                        <FontAwesomeIcon icon={faPencilAlt} /><br></br>
                                        Update
                                    </button>
                                </td>
                                    {/* <a class="btn btn-danger btn-sm" href="#"> */}
                                <td>
                                    <button style={{marginTop: "0.5em"}} onClick={ () => this.deletePatient(patient.samId)} className="btn btn-danger btn-sm"> 
                                        
                                        <FontAwesomeIcon icon={faTrash} />
                                        Delete 
                                    </button>
                                {/* </a> */}
                            </td>
                                
                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                       
                </div>
                    </div>
        {/* </div> */}
        </section>
        </div>    
        </div>
        )
    }
}

export default ListPatientComponent
