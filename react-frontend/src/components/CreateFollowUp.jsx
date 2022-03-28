import React, { Component } from 'react'
import AnganwadiWorkerService from '../services/AnganwadiWorkerService'
import FollowupService from '../services/FollowupService'
import PatientService from '../services/PatientService'
// import Patient from '../mode'
import './plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css'
import './plugins/select2/css/select2.min.css'
import SideBarComponent from './SideBarComponent'
import Select from 'react-select';

class CreateFollowUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
          followupId: 0,
          samId: window.location.pathname.split("/")[2],
          workerId: 0,
          deadline: "2021-01-01", 
          completedOn: "2021-01-01",
          completed: false,
          height: 0,
          weight: 0,
          muac: 0,
          growthStatus: "",
          workers: [],
          patients: [],
          location: ""
        }
        this.changeSamIdHandler = this.changeSamIdHandler.bind(this);
        this.changeWorkerIdHandler = this.changeWorkerIdHandler.bind(this);
        this.changeDeadlineHandler = this.changeDeadlineHandler.bind(this);
        this.changeCompletedOnHandler = this.changeCompletedOnHandler.bind(this);
        this.changeCompletedHandler = this.changeCompletedHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
    }

    componentDidMount(){
        AnganwadiWorkerService.getAnganwadiWorkers().then((res) => {
          console.log("DATA", res.data)
          this.setState({ workers: res.data});
        });
        PatientService.getPatientById(this.state.samId).then((res) => {
          console.log("HELLO", res.data)
          this.setState({ patients: [res.data], location: res.data.address});
        });
        return;
    }

    getElement(x) {
      return <option>{x.name}</option>
    }

    createFollowUp = (e) => {
      e.preventDefault();
      let f = {samId: this.state.samId,
        // workerId: this.state.workerId,
        deadline: this.state.deadline, 
        location: this.state.location,
        completedOn: this.state.completedOn,
        completed: this.state.completed
      };
      AnganwadiWorkerService.getByKeyword(f.location, "").then(res => {
        f.workerId = res.data.workerId;
        f.workerName = res.data.name;
        // this.state.workerId = res.data.workerId;
      });
      
      FollowupService.createFollowup(this.state.samId, f).then(res =>{
          this.props.history.push('/followup-receptionist/1');
          console.log("THE FOLLOWUP IS", res.data)
      });
  }

  changeSamIdHandler = (event) => { this.setState({samId: event.target.value}); }
  changeWorkerIdHandler = (event) => { 
    this.setState({workerId: event.target.value}); 
    console.log("WORKER", this.state.workerId)
  }
  changeDeadlineHandler = (event) => { this.setState({deadline: event.target.value}); 
    console.log("WORKER", this.state.deadline)
  }
  changeCompletedOnHandler = (event) => { this.setState({completedOn: event.target.value}); }
  changeCompletedHandler = (event) => { this.setState({completed: event.target.value}); 
    console.log("WORKER", this.state.completed)
  }
  changeLocationHandler = (event) => { this.setState({location: event.target.value}); }

    render() {
      const options = []
      for(var i = 0; i < this.state.workers.length; i++) {
        options.push({ value: this.state.workers[i].name, label: this.state.workers[i].name })
      }
      console.log("HERE", this.state.patients, this.state.location)
        return (
          <div className="hold-transition sidebar-mini" style={{marginLeft: "200px", width: "88%"}}>
                <div className="wrapper">   
                    <SideBarComponent/>
            <section className="content">
                <script src="./plugins/select2/js/select2.full.min.js"></script>
            <div className="container-fluid">
              
      
              <div className="row">
                <div className="col-md-3">     
                 
      
                </div>
                <div className="col-md-6">
                  <div className="card card-info">
                    <div className="card-header">
                      <h3 className="card-title">Create a Follow-Up Schedule</h3>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label>Date:</label>
                          <div className="input-group date" id="reservationdate" data-target-input="nearest">
                              <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate" value={this.state.deadline} onChange={this.changeDeadlineHandler}/>
                              <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                  <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                              </div>
                          </div>
                      </div>
                      {/* <div className="form-group">
                        <label>Date and time:</label>
                          <div className="input-group date" id="reservationdatetime" data-target-input="nearest">
                              <input type="text" className="form-control datetimepicker-input" data-target="#reservationdatetime"/>
                              <div className="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                                  <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                              </div>
                          </div>
                      </div> */}
      
                      <div className="form-group">
                          <label>Location</label>
                          <input name="samId" className="form-control" type="text" value={this.state.location} onChange={this.changeLocationHandler}/>  
                          {/* <Select className="form-control select2" data-placeholder="Choose Area" style={{width: "100%"}}>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </Select> */}
                        </div>
      
                        {/* <div className="form-group">
                          <label>Anganwadi Worker</label>
                            <Select className="form-control select2" style={{width: "100%"}} 
                            value={this.state.workerId} onChange={this.changeWorkerIdHandler} options={options}>
                            {Data.map(this.state.workers)}
                            
                            <option>Washington</option>
                          </Select>
                        </div> */}
                      
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                      <div className="mb-3">
                        <a href="/followup-receptionist/1" className="btn btn-sm btn-success" onClick={this.createFollowUp}>Create</a>
                        
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

export default CreateFollowUp
