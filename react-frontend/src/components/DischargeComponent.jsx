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
        this.deletePatient  = this.deletePatient.bind(this);
    }

    deletePatient(id){
        PatientService.deletePatient (id).then( res => {
            this.setState({patients: this.state.patients.filter(patient => patient.uhid !== id)});
        });
    }
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
                  <input class="form-control" type="text"/>                  
                </div>

                <div class="form-group">
                    <label>Patient Name</label>
                    <input class="form-control" type="text"/>                  
                  </div>

                  <div class="form-group">
                    <label>Patient Contact Number</label>
                    <input class="form-control" type="text"/>                  
                  </div>
                <div class="form-group">
                  <label>Date of Admission:</label>
                    <div class="input-group date" id="reservationdate" data-target-input="nearest">
                        <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                        <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                            <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label>Weight on Date of Admission (in kg)</label>
                    <input class="form-control" type="text"/>                  
                  </div>

                  <div class="form-group">
                    <label>Date of Discharge:</label>
                      <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                          </div>
                      </div>
                  </div>
  
                  <div class="form-group">
                      <label>Weight on Date of Discharge (in kg)</label>
                      <input class="form-control" type="text"/>                  
                    </div>

                    <div class="form-group">
                        <label>Target Weight (in kg)</label>
                        <input class="form-control" type="text"/>                  
                      </div>

                    <div class="form-group">
                        <label>Outcome</label>
                        <select class="form-control select2" style={{width: "100%"}}>
                          <option selected="selected">Improved</option>
                          <option>Poor Prognosis</option>
                          <option>Death</option>
                          
                        </select>
                      </div>

                <div class="form-group">
                    <label>Treatment Protocol</label>
                    <input class="form-control" type="text"/>                  
                </div>
  
                <div class="form-group">
                    <label>Follow-Up Date</label>
                      <div class="input-group date" id="reservationdate" data-target-input="nearest">
                          <input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/>
                          <div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                              <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                          </div>
                      </div>
                  </div>

                
              </div>
              <div class="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                <div class="mb-3">
                  <a href="project-detail.html" class="btn btn-sm btn-success">Create</a>
                  
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

export default ListPatientComponent
