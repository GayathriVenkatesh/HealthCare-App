import React, { Component } from 'react'
import PatientService from '../services/PatientService'
import { faHome, faPencilAlt, faTrash, faFolder, faPlus, faEye, faUserMd } from "@fortawesome/free-solid-svg-icons";
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
        this.addPatient  = this.addPatient.bind(this);
    }

    deletePatient(id){
        PatientService.deletePatient (id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.samId !== id)});
        });
    }
    viewPatient(samId){
        this.props.history.push(`/view/${samId}`);
    }
    addPatient(){
        console.log("I HERE")
        this.props.history.push(`/add-patient`);
    }
    editPatient(samId){
        console.log("CURRENT UHID", samId);
        this.props.history.push(`/edit-patient/${samId}`);
    }
    followUp(samId){
        this.props.history.push(`/followup-doctor/${samId}`);
    }
    discharge(samId){
        this.props.history.push(`/discharge-history/${samId}`);
    }

    componentDidMount(){
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        var name = urlParams.get('name')
        var address = urlParams.get('address')
        var religion = urlParams.get('religion')
        var uhId = urlParams.get('uhId')
        var rch = urlParams.get('rch')
        var sam = urlParams.get('sam')

        if (!(name || address || religion || uhId || sam || rch)) {
            PatientService.getPatients().then((res) => {
                this.setState({ patients: res.data});
                console.log("NOW IS", res.data)
            });
        }
        else{
            console.log("keyword", window.location.href);
            PatientService.getByKeyword(name, address, religion, uhId, sam).then( res => {
                this.setState({patients: res.data});
            })
        }
    
    }

    addPatient(){
        var n = this.state.patients.length
        console.log("NIBBJHB", n, parseInt(n), parseInt(n) + parseInt(1), "ab"+ (parseInt(n) + 1).toString())
        this.props.history.push('/add-patient/' + (parseInt(n) + 1).toString());
    }

    // getInitialState() {
    //     return {hover: false}
    //   }
    //   toggleHover() {
    //     this.setState({hover: !this.state.hover})
    //   }

    render() {
        // var linkStyle;
        // if (this.state.hover) {
        // linkStyle = {backgroundColor: 'red'}
        // } else {
        // linkStyle = {backgroundColor: 'blue'}
        // }

        return ( 
            <div class="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div class="wrapper">   
                    <SideBarComponent/>

        <section class="content" >
            <div class="card" >
                <div class="card-header">
                  <h3>  Patient List </h3>
                <SearchFilterComponent/>                   
                </div>

            <div class="card-body p-0">
                
                    <table class="table table-striped projects">
                    <thead>
                        <tr>
                            {/* <th style={{width: "1%"}}>
                            </th> */}
                            <th style={{width: "20%"}}>
                                Patient ID
                            </th>
                            <th style={{width: "20%"}}>
                                Name
                            </th>
                            <th  style={{width: "20%"}}>
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
                                <tr key = {patient.samId} >
                                {/* // onClick={ () => this.viewPatient(patient.samId)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkStyle}>  */}
                                <td> {patient.samId}</td>
                                <td> {patient.name} </td>   
                                <td> {patient.contactNumber}</td>
                                <td> {patient.uhId} </td> 
                                <td> {patient.gender}</td>
                                <td>
                                    <button onClick={ () => this.viewPatient(patient.samId)} className="btn btn-success btn-sm" style={{marginRight: "-10px"}}>
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                </td>
                                {/* <td>
                                    <button onClick={ () => this.editPatient(patient.samId)} className="btn btn-info btn-sm" style={{marginRight: "-10px"}}>
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={ () => this.deletePatient(patient.samId)} className="btn btn-danger btn-sm" style={{marginRight: "-10px"}}>  
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td> */}

                                <td>
                                    <button onClick={ () => this.followUp(patient.samId)} className="btn btn-warning btn-sm" style={{marginRight: "-10px"}}>
                                        <FontAwesomeIcon icon={faUserMd} />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={ () => this.discharge(patient.samId)} className="btn btn-danger btn-sm">  
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </td>
                                
                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
                
             </div>
             <button className="btn btn-info btn-sm" onClick={ () => this.addPatient() } >                         
                <FontAwesomeIcon icon={faPlus} />
                    Add 
            </button>
        {/* </div> */}
        </section>
        </div>    
        </div>
        )
    }
}

export default ListPatientComponent
